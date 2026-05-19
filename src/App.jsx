import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth, db, firebaseReady } from './firebase';
import { demoCoaches } from './data/demoCoaches';

const blankCoach = {
  line: 'LINE-1',
  coachNo: '',
  coachType: 'LHB',
  progress: 0,
  status: 'Work In Progress',
  pdc: '',
  supervisor: '',
  remarks: ''
};

const statusOptions = [
  'Work In Progress',
  'Nearly Complete',
  'Ready For Inspection',
  'Complete',
  'On Hold'
];

const statusTone = {
  'Work In Progress': 'border-orange-400/70 bg-orange-500/15 text-orange-200',
  'Nearly Complete': 'border-cyan-300/70 bg-cyan-400/15 text-cyan-100',
  'Ready For Inspection': 'border-emerald-300/80 bg-emerald-400/15 text-emerald-100',
  Complete: 'border-lime-300/80 bg-lime-400/15 text-lime-100',
  'On Hold': 'border-slate-300/60 bg-slate-400/15 text-slate-100'
};

const coachTypes = ['LHB', 'LWS', 'LWFAC', 'LVPH', 'ECONOMY', 'AC 3T', 'POWER CAR'];

function safeDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function daysUntil(value) {
  const date = safeDate(value);
  if (!date) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return Math.ceil((date - today) / 86400000);
}

function getComputedStatus(coach) {
  const pdcDelta = daysUntil(coach.pdc);
  if (coach.progress >= 100 || coach.status === 'Complete') return 'Complete';
  if (pdcDelta !== null && pdcDelta < 0) return 'Delayed';
  if (coach.progress >= 95 || coach.status === 'Ready For Inspection') return 'Ready';
  if (coach.progress >= 80 || coach.status === 'Nearly Complete') return 'Near';
  return 'Active';
}

function formatClock(date) {
  return date.toLocaleTimeString('en-IN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function formatDate(date) {
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function useCoaches() {
  const [coaches, setCoaches] = useState(demoCoaches);
  const [loading, setLoading] = useState(firebaseReady);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!firebaseReady) {
      setLoading(false);
      return undefined;
    }

    const coachesQuery = query(collection(db, 'coaches'), orderBy('line', 'asc'));
    return onSnapshot(
      coachesQuery,
      (snapshot) => {
        const rows = snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
        setCoaches(rows.length ? rows : demoCoaches);
        setLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError.message);
        setLoading(false);
      }
    );
  }, []);

  return { coaches, loading, error };
}

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(firebaseReady);

  useEffect(() => {
    if (!firebaseReady) {
      setAuthLoading(false);
      return undefined;
    }
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthLoading(false);
    });
  }, []);

  return { user, authLoading };
}

async function seedDemoData(userEmail) {
  if (!firebaseReady) return;
  await Promise.all(
    demoCoaches.map((coach) =>
      setDoc(doc(db, 'coaches', coach.id), {
        ...coach,
        updatedBy: userEmail,
        updatedAt: serverTimestamp()
      })
    )
  );
}

function RailLogo() {
  return (
    <div className="rail-logo" aria-label="Indian Railways">
      <span>IR</span>
    </div>
  );
}

function LoginPanel({ authLoading }) {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('admin@railway.local');
  const [password, setPassword] = useState('railway123');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setError('');
    if (!firebaseReady) {
      setError('Add Firebase environment variables to enable cloud login.');
      return;
    }

    try {
      if (mode === 'register') {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (loginError) {
      setError(loginError.message);
    }
  }

  return (
    <section className="login-grid">
      <div className="login-hero">
        <RailLogo />
        <p className="eyebrow">Indian Railways Industrial Monitoring</p>
        <h1>Railway Furnishing Shop Monitoring System</h1>
        <p>
          Cloud dashboard for line-wise coach furnishing progress, PDC tracking,
          real-time alerts, and fullscreen TV operations.
        </p>
      </div>

      <form className="login-card" onSubmit={submit}>
        <div>
          <p className="eyebrow">Secure Access</p>
          <h2>{mode === 'login' ? 'Supervisor Login' : 'Create Admin User'}</h2>
        </div>
        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required minLength={6} />
        </label>
        {error && <div className="alert danger">{error}</div>}
        {!firebaseReady && (
          <div className="alert warn">Demo mode is active. Configure Firebase to enable multi-user cloud login.</div>
        )}
        <button className="primary-btn" type="submit" disabled={authLoading}>
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <button className="ghost-btn" type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Create first admin user' : 'Back to login'}
        </button>
      </form>
    </section>
  );
}

function CoachVisual({ progress, status }) {
  return (
    <div className="coach-shell" title={`${progress}% ${status}`}>
      <div className="coach-fill" style={{ width: `${progress}%` }} />
      <div className="coach-windows">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="coach-name">INDIAN RAILWAYS</div>
      <div className="wheel-set">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function StatCard({ label, value, tone }) {
  return (
    <article className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function StatusBadge({ status, computed }) {
  const delayed = computed === 'Delayed';
  const ready = computed === 'Ready';
  return (
    <span className={`status-badge ${delayed ? 'delayed' : statusTone[status] || statusTone['Work In Progress']}`}>
      {delayed ? 'Delayed' : ready ? 'Ready For Inspection' : status}
    </span>
  );
}

function Dashboard({ coaches, filters, setFilters, tvMode }) {
  const filtered = useMemo(() => {
    const queryText = filters.search.trim().toLowerCase();
    return coaches.filter((coach) => {
      const matchesText = [coach.line, coach.coachNo, coach.coachType, coach.status, coach.supervisor]
        .join(' ')
        .toLowerCase()
        .includes(queryText);
      const matchesLine = filters.line === 'All Lines' || coach.line === filters.line;
      const matchesStatus = filters.status === 'All Status' || coach.status === filters.status;
      return matchesText && matchesLine && matchesStatus;
    });
  }, [coaches, filters]);

  const stats = useMemo(() => {
    const total = coaches.length || 1;
    const average = Math.round(coaches.reduce((sum, coach) => sum + Number(coach.progress || 0), 0) / total);
    return {
      total: coaches.length,
      average,
      ready: coaches.filter((coach) => getComputedStatus(coach) === 'Ready' || getComputedStatus(coach) === 'Complete').length,
      delayed: coaches.filter((coach) => getComputedStatus(coach) === 'Delayed').length
    };
  }, [coaches]);

  const lines = ['All Lines', ...Array.from(new Set(coaches.map((coach) => coach.line))).sort()];

  return (
    <section className="dashboard">
      {!tvMode && (
        <div className="toolbar">
          <input
            placeholder="Search coach, line, type, supervisor"
            value={filters.search}
            onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
          />
          <select value={filters.line} onChange={(event) => setFilters((current) => ({ ...current, line: event.target.value }))}>
            {lines.map((line) => (
              <option key={line}>{line}</option>
            ))}
          </select>
          <select value={filters.status} onChange={(event) => setFilters((current) => ({ ...current, status: event.target.value }))}>
            {['All Status', ...statusOptions].map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>
      )}

      <div className="stats-grid">
        <StatCard label="Total Coaches" value={stats.total} tone="cyan" />
        <StatCard label="Avg Progress" value={`${stats.average}%`} tone="yellow" />
        <StatCard label="Ready Alerts" value={stats.ready} tone="green" />
        <StatCard label="Delayed" value={stats.delayed} tone="red" />
      </div>

      <div className="coach-table">
        <div className="table-head">
          <span>Line</span>
          <span>Coach</span>
          <span>Progress Visualization</span>
          <span>PDC</span>
          <span>Status</span>
        </div>
        {filtered.map((coach) => {
          const computed = getComputedStatus(coach);
          const pdcDelta = daysUntil(coach.pdc);
          return (
            <article className={`coach-row ${computed.toLowerCase()}`} key={coach.id}>
              <div>
                <strong>{coach.line}</strong>
                <small>{coach.supervisor || 'Supervisor pending'}</small>
              </div>
              <div>
                <strong>{coach.coachNo}</strong>
                <small>{coach.coachType}</small>
              </div>
              <div className="progress-cell">
                <CoachVisual progress={Number(coach.progress || 0)} status={coach.status} />
                <b>{coach.progress}%</b>
              </div>
              <div>
                <strong>{coach.pdc || 'Not set'}</strong>
                <small>{pdcDelta === null ? 'PDC pending' : pdcDelta < 0 ? `${Math.abs(pdcDelta)} days late` : `${pdcDelta} days left`}</small>
              </div>
              <div>
                <StatusBadge status={coach.status} computed={computed} />
                {coach.remarks && <small>{coach.remarks}</small>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AdminPanel({ coaches, user }) {
  const [form, setForm] = useState(blankCoach);
  const [editingId, setEditingId] = useState('');
  const [notice, setNotice] = useState('');

  function editCoach(coach) {
    setEditingId(coach.id);
    setForm({
      line: coach.line || '',
      coachNo: coach.coachNo || '',
      coachType: coach.coachType || 'LHB',
      progress: coach.progress || 0,
      status: coach.status || 'Work In Progress',
      pdc: coach.pdc || '',
      supervisor: coach.supervisor || '',
      remarks: coach.remarks || ''
    });
  }

  async function submit(event) {
    event.preventDefault();
    setNotice('');
    const payload = {
      ...form,
      progress: Math.min(100, Math.max(0, Number(form.progress))),
      updatedBy: user?.email || 'demo-user',
      updatedAt: firebaseReady ? serverTimestamp() : new Date().toISOString()
    };

    if (!firebaseReady) {
      setNotice('Demo mode: add Firebase config to save changes to Firestore.');
      return;
    }

    if (editingId) {
      await updateDoc(doc(db, 'coaches', editingId), payload);
    } else {
      await addDoc(collection(db, 'coaches'), {
        ...payload,
        createdAt: serverTimestamp()
      });
    }
    setForm(blankCoach);
    setEditingId('');
  }

  async function removeCoach(id) {
    if (!firebaseReady) {
      setNotice('Demo mode: delete is available after Firebase config is added.');
      return;
    }
    await deleteDoc(doc(db, 'coaches', id));
  }

  return (
    <section className="admin-grid">
      <form className="admin-form" onSubmit={submit}>
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h2>{editingId ? 'Edit Coach' : 'Add Coach'}</h2>
        </div>
        <div className="form-grid">
          <label>
            Line
            <input value={form.line} onChange={(event) => setForm({ ...form, line: event.target.value })} required />
          </label>
          <label>
            Coach No.
            <input value={form.coachNo} onChange={(event) => setForm({ ...form, coachNo: event.target.value })} required />
          </label>
          <label>
            Coach Type
            <select value={form.coachType} onChange={(event) => setForm({ ...form, coachType: event.target.value })}>
              {coachTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            PDC
            <input type="date" value={form.pdc} onChange={(event) => setForm({ ...form, pdc: event.target.value })} />
          </label>
          <label>
            Progress %
            <input type="number" min="0" max="100" value={form.progress} onChange={(event) => setForm({ ...form, progress: event.target.value })} />
          </label>
          <label>
            Status
            <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>
              {statusOptions.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </label>
          <label>
            Supervisor
            <input value={form.supervisor} onChange={(event) => setForm({ ...form, supervisor: event.target.value })} />
          </label>
          <label>
            Remarks
            <input value={form.remarks} onChange={(event) => setForm({ ...form, remarks: event.target.value })} />
          </label>
        </div>
        {notice && <div className="alert warn">{notice}</div>}
        <div className="button-row">
          <button className="primary-btn" type="submit">{editingId ? 'Update Coach' : 'Add Coach'}</button>
          <button className="ghost-btn" type="button" onClick={() => seedDemoData(user?.email)}>Seed Demo Data</button>
          {editingId && <button className="ghost-btn" type="button" onClick={() => { setEditingId(''); setForm(blankCoach); }}>Cancel</button>}
        </div>
      </form>

      <div className="admin-list">
        {coaches.map((coach) => (
          <article key={coach.id}>
            <div>
              <strong>{coach.line} | {coach.coachNo}</strong>
              <small>{coach.coachType} | {coach.progress}% | {coach.pdc || 'PDC pending'}</small>
            </div>
            <div className="button-row compact">
              <button className="ghost-btn" type="button" onClick={() => editCoach(coach)}>Edit</button>
              <button className="danger-btn" type="button" onClick={() => removeCoach(coach.id)}>Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const { user, authLoading } = useFirebaseAuth();
  const { coaches, loading, error } = useCoaches();
  const [now, setNow] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tvMode, setTvMode] = useState(false);
  const [filters, setFilters] = useState({ search: '', line: 'All Lines', status: 'All Status' });

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('tv-mode', tvMode);
    return () => document.body.classList.remove('tv-mode');
  }, [tvMode]);

  if (!user && firebaseReady) {
    return <LoginPanel authLoading={authLoading} />;
  }

  return (
    <main className={`app-shell ${tvMode ? 'is-tv' : ''}`}>
      <header className="topbar">
        <div className="brand-block">
          <RailLogo />
          <div>
            <p className="eyebrow">Indian Railways | Furnishing Shop</p>
            <h1>Coach Progress Monitoring System</h1>
            <span>Line-wise real-time dashboard for PDC, readiness, and production status</span>
          </div>
        </div>
        <div className="clock-panel">
          <strong>{formatClock(now)}</strong>
          <span>{formatDate(now)}</span>
        </div>
      </header>

      {!tvMode && (
        <nav className="nav-strip">
          <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
          <button className={activeTab === 'admin' ? 'active' : ''} onClick={() => setActiveTab('admin')}>Admin Panel</button>
          <button onClick={() => setTvMode(true)}>TV Fullscreen</button>
          {firebaseReady && user ? <button onClick={() => signOut(auth)}>Logout</button> : <button onClick={() => setActiveTab('admin')}>Demo Admin</button>}
        </nav>
      )}

      {tvMode && (
        <button className="exit-tv" onClick={() => setTvMode(false)}>
          Exit TV Mode
        </button>
      )}

      {error && <div className="alert danger">Firestore: {error}</div>}
      {loading && <div className="alert warn">Loading real-time coach data...</div>}
      {!firebaseReady && <div className="alert warn">Running local demo mode. Firebase setup is ready in the project files.</div>}

      {activeTab === 'dashboard' || tvMode ? (
        <Dashboard coaches={coaches} filters={filters} setFilters={setFilters} tvMode={tvMode} />
      ) : (
        <AdminPanel coaches={coaches} user={user} />
      )}

      <footer className="ticker">
        <div>
          <span>Safety first | Quality always | Ready coach alerts active | Delayed PDC warnings active | Multi-user cloud dashboard</span>
          <span>Safety first | Quality always | Ready coach alerts active | Delayed PDC warnings active | Multi-user cloud dashboard</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
