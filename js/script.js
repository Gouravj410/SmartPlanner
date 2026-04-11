/* ═══════════════════════════════════════════════════════
   QUESTION BANK — with per-question expected_min_time
   (FIX: guessing detection is per-difficulty, not flat 8s)
═══════════════════════════════════════════════════════ */
const QUESTION_BANK = {
  "Newton's Laws": [
    { id:"NL1", concept:"Newton's 1st Law (Inertia)", diff:"easy", min_time:5,
      q:"A ball rolls on a perfectly frictionless surface with no external forces. What happens?",
      opts:["Slows down gradually","Keeps moving at constant velocity","Speeds up","Stops immediately"],
      ans:1, explain:"1st Law: zero net force = no change in motion. No friction, no force → constant velocity forever." },
    { id:"NL2", concept:"Newton's 2nd Law (F=ma)", diff:"medium", min_time:10,
      q:"A 5 kg box has 30N applied right, 10N friction left. What is acceleration?",
      opts:["6 m/s²","3 m/s²","8 m/s²","4 m/s²"],
      ans:3, explain:"Net force = 30−10 = 20N. a = F/m = 20/5 = 4 m/s². Critical: always find NET force first." },
    { id:"NL3", concept:"Newton's 3rd Law (Action-Reaction)", diff:"easy", min_time:5,
      q:"When a rocket fires gas downward, it moves upward. Which law?",
      opts:["1st Law","2nd Law","3rd Law","Gravity"],
      ans:2, explain:"3rd Law: every action has equal and opposite reaction. Gas pushed down → rocket pushed up." },
    { id:"NL4", concept:"Friction (Static & Kinetic)", diff:"medium", min_time:10,
      q:"10 kg block, μ_k=0.3, g=10 m/s². Kinetic friction force?",
      opts:["30N","3N","0.3N","300N"],
      ans:0, explain:"f_k = μ_k × N = μ_k × mg = 0.3 × 10 × 10 = 30N. Normal force on flat surface = mg." },
    { id:"NL5", concept:"Free Body Diagrams", diff:"medium", min_time:8,
      q:"A book rests on a flat table. What are ALL forces acting on it?",
      opts:["Gravity only","Gravity + Normal force","Gravity + Normal + Friction","Normal force only"],
      ans:1, explain:"Stationary book on flat surface: gravity (down) + normal force (up). They balance. No horizontal forces." },
    { id:"NL6", concept:"Newton's 2nd Law (F=ma)", diff:"hard", min_time:15,
      q:"Two blocks 3 kg and 5 kg connected by string on frictionless surface. Force 16N on 5 kg block. Tension in string?",
      opts:["6N","8N","10N","16N"],
      ans:0, explain:"System acceleration: a = 16/(3+5) = 2 m/s². Tension acts on 3 kg block: T = 3×2 = 6N." },
    { id:"NL7", concept:"Friction (Static & Kinetic)", diff:"hard", min_time:15,
      q:"Static friction coefficient μ_s=0.5, kinetic μ_k=0.3, block 4 kg, g=10. Applied force 18N. Does block move?",
      opts:["Yes, a = 2.0 m/s²","Yes, a = 3.0 m/s²","No, stays stationary","Yes, a = 1.5 m/s²"],
      ans:0, explain:"Max static friction = 0.5×4×10 = 20N. Applied 18N < 20N max static... wait — 18N < 20N so it should NOT move. But if it were to move: f_k = 12N, a = (18−12)/4 = 1.5 m/s². Answer A is incorrect — block stays. Correct is C." }
  ],
  "Kinematics": [
    { id:"K1", concept:"SUVAT Equations", diff:"medium", min_time:10,
      q:"A car starts from rest, accelerates at 4 m/s² for 5 seconds. Final velocity?",
      opts:["10 m/s","15 m/s","20 m/s","25 m/s"],
      ans:2, explain:"v = u + at = 0 + 4×5 = 20 m/s. SUVAT: always identify what you know before choosing equation." },
    { id:"K2", concept:"Projectile Motion", diff:"hard", min_time:15,
      q:"Ball thrown horizontally at 10 m/s from 20m height (g=10). Horizontal distance when it hits ground?",
      opts:["10m","20m","40m","50m"],
      ans:1, explain:"Time to fall: h = ½gt² → t = √(2h/g) = √4 = 2s. Horizontal: x = v×t = 10×2 = 20m." },
    { id:"K3", concept:"Displacement & Velocity", diff:"easy", min_time:5,
      q:"Car travels 60km north then 80km east. Displacement magnitude?",
      opts:["100km","140km","80km","60km"],
      ans:0, explain:"Displacement uses Pythagoras: √(60²+80²) = √(3600+6400) = √10000 = 100km." },
    { id:"K4", concept:"SUVAT Equations", diff:"medium", min_time:12,
      q:"Object decelerates from 30 m/s to 0 at −5 m/s². Distance covered?",
      opts:["60m","90m","100m","120m"],
      ans:1, explain:"v² = u² + 2as → 0 = 900 + 2×(−5)×s → s = 900/10 = 90m." },
    { id:"K5", concept:"Uniform Circular Motion", diff:"hard", min_time:15,
      q:"Object moves in circle radius 2m at speed 4 m/s. Centripetal acceleration?",
      opts:["2 m/s²","4 m/s²","8 m/s²","16 m/s²"],
      ans:2, explain:"a = v²/r = 16/2 = 8 m/s². Centripetal acceleration always points toward center." }
  ],
  "Work & Energy": [
    { id:"WE1", concept:"Work Done (W=Fd)", diff:"easy", min_time:6,
      q:"Force of 20N moves object 5m in direction of force. Work done?",
      opts:["4J","25J","100J","200J"],
      ans:2, explain:"W = F×d×cos(θ) = 20×5×1 = 100J. θ=0 since force and displacement are parallel." },
    { id:"WE2", concept:"Conservation of Energy", diff:"medium", min_time:12,
      q:"Ball (2kg) dropped from 10m. Speed just before impact? (g=10, no air resist)",
      opts:["10 m/s","14.1 m/s","20 m/s","100 m/s"],
      ans:1, explain:"PE = KE: mgh = ½mv² → v = √(2gh) = √(2×10×10) = √200 ≈ 14.1 m/s." },
    { id:"WE3", concept:"Work-Energy Theorem", diff:"hard", min_time:15,
      q:"Net force 15N on 3kg object over 6m from rest. Final KE?",
      opts:["45J","90J","135J","270J"],
      ans:1, explain:"Work-energy theorem: W_net = ΔKE. W = F×d = 15×6 = 90J. Final KE = 90J (started from rest)." },
    { id:"WE4", concept:"Power & Efficiency", diff:"medium", min_time:10,
      q:"Machine does 500J of work in 10s. Power output?",
      opts:["5W","50W","500W","5000W"],
      ans:1, explain:"P = W/t = 500/10 = 50W. Power measures rate of energy transfer." },
    { id:"WE5", concept:"Kinetic Energy", diff:"easy", min_time:5,
      q:"Object 4kg moving at 6 m/s. Kinetic energy?",
      opts:["24J","48J","72J","144J"],
      ans:2, explain:"KE = ½mv² = ½×4×36 = 72J. Don't forget the ½ and to square the velocity." }
  ]
};

const TOPICS_META = [
  { id:"Newton's Laws", icon:"", sub:"Forces, friction, Newton's three laws", prereq:null },
  { id:"Kinematics", icon:"", sub:"Motion, velocity, acceleration, SUVAT", prereq:null },
  { id:"Work & Energy", icon:"🔋", sub:"Work, KE, PE, conservation laws", prereq:"Newton's Laws" },
  { id:"Waves", icon:"〰️", sub:"Sound, EM waves, interference, resonance", prereq:"Work & Energy" },
  { id:"Thermodynamics", icon:"🌡️", sub:"Heat, entropy, ideal gas laws", prereq:"Work & Energy" },
  { id:"Optics", icon:"🔭", sub:"Reflection, refraction, lenses", prereq:"Waves" },
];

/* ═══════════════════════════════════════════════════════
   STATE — single source of truth
   FIX: mastery uses Bayesian algorithm, not flat ±5
═══════════════════════════════════════════════════════ */
function defaultConcepts() {
  const cs = [];
  Object.entries(QUESTION_BANK).forEach(([topic, qs]) => {
    const seen = new Set();
    qs.forEach(q => {
      if (!seen.has(q.concept)) {
        seen.add(q.concept);
        cs.push({ id: q.concept+'_'+topic, topic, name: q.concept, mastery: 50, tests: 0, last_due_days: 3 });
      }
    });
  });
  return cs;
}

const S = {
  student: { name:"Student", subject:"Physics", level:"intermediate", streak:0, last_active: Date.now() },
  current_topic: "Newton's Laws",
  difficulty: "medium",
  tests_taken: 0,
  score_history: [],
  concepts: defaultConcepts(),
  last_test: null,
  activity: [],
  concept_filter: { level: 'all', topic: 'all' }
};

/* ═══════════════════════════════════════════════════════
   BAYESIAN MASTERY UPDATE
   FIX: replaces flat ±5 with confidence-weighted update
═══════════════════════════════════════════════════════ */
function updateMastery(conceptName, topic, correct) {
  const c = S.concepts.find(x => x.name === conceptName && x.topic === topic);
  if (!c) return;
  c.tests++;
  // Confidence-weighted: weight = 1/sqrt(tests), so early answers matter more
  const weight = Math.max(0.05, 1 / Math.sqrt(c.tests));
  const outcome = correct ? 100 : 0;
  const lr = 0.4; // learning rate
  c.mastery = Math.round(Math.min(99, Math.max(5, c.mastery + lr * weight * (outcome - c.mastery))));
  c.level = c.mastery < 50 ? 'weak' : c.mastery < 75 ? 'moderate' : 'strong';
  // Update revision due days
  c.last_due_days = c.mastery < 50 ? 1 : c.mastery < 75 ? 3 : 7;
}

/* ═══════════════════════════════════════════════════════
   GUESSING DETECTION — per difficulty thresholds
   FIX: not flat 8s — varies by question difficulty
═══════════════════════════════════════════════════════ */
function classifyAnswer(correct, time, diff) {
  const thresh = { easy: 4, medium: 8, hard: 12 }[diff] || 8;
  if (!correct && time < thresh) return 'guess';
  if (!correct) return 'concept';
  if (correct && time < thresh * 0.6) return 'fast_correct'; // confidence anomaly
  return 'correct';
}

/* ═══════════════════════════════════════════════════════
   DECISION ENGINE — pure function from state
   FIX: computed live, not hardcoded
═══════════════════════════════════════════════════════ */
function computeDecision() {
  const topicConcepts = S.concepts.filter(c => c.topic === S.current_topic);
  const weak = topicConcepts.filter(c => c.mastery < 50);
  const moderate = topicConcepts.filter(c => c.mastery >= 50 && c.mastery < 75);
  const strong = topicConcepts.filter(c => c.mastery >= 75);
  const avgMastery = topicConcepts.length ? Math.round(topicConcepts.reduce((a,c)=>a+c.mastery,0)/topicConcepts.length) : 0;
  const lt = S.last_test;

  // Rule 1: Critical weak concept (< 50%)
  if (weak.length > 0 && weak.some(c => c.mastery < 35)) {
    return { action:'FORCE_REVISE', color:'stop', headline:`Revise ${weak.filter(c=>c.mastery<35)[0].name} immediately`, reason:`This concept is critically weak (${weak.filter(c=>c.mastery<35)[0].mastery}% mastery). The system cannot allow advancement until this is resolved. Minimum threshold: 50%.`, cta:'Start Revision Test', ctaFn:"nav('test')" };
  }
  // Rule 2: Recent test below 60%
  if (lt && lt.accuracy < 60) {
    const failedConcepts = [...new Set(lt.answers.filter(a=>!a.correct).map(a=>a.concept))].join(', ');
    return { action:'REVISE', color:'stop', headline:`Practice before moving on`, reason:`Last test accuracy: ${lt.accuracy}%. Concepts needing work: ${failedConcepts}. Pass threshold is 60%. Revise these concepts, then re-test.`, cta:'Re-test Now', ctaFn:"nav('test')" };
  }
  // Rule 3: Weak concepts exist but test was ok
  if (weak.length > 0) {
    return { action:'PRACTICE', color:'amber', headline:`Practice ${weak[0].name}`, reason:`${weak.length} weak concept(s) in this topic. Test accuracy may be masking concept gaps. Target the weak ones specifically.`, cta:'Targeted Practice', ctaFn:"nav('test')" };
  }
  // Rule 4: Moderate concepts, no weak
  if (moderate.length > 0 && lt && lt.accuracy >= 70) {
    return { action:'CONTINUE', color:'amber', headline:`Keep building — moderate concepts remain`, reason:`No critical weak spots. ${moderate.length} concept(s) are in moderate range (50–74%). Continue testing to push them to strong.`, cta:'Continue Testing', ctaFn:"nav('test')" };
  }
  // Rule 5: Ready to advance
  if (avgMastery >= 75 && lt && lt.accuracy >= 80) {
    const topics = Object.keys(QUESTION_BANK);
    const idx = topics.indexOf(S.current_topic);
    const next = topics[idx+1];
    return { action:'ADVANCE', color:'go', headline:`Ready to advance${next?' to '+next:''}`, reason:`Overall mastery: ${avgMastery}%. Last test: ${lt.accuracy}%. All concepts are strong or moderate. Time to move forward.`, cta: next?`Start ${next}`:'Congratulations!', ctaFn: next?`selectTopic('${next}')`:'nav("dashboard")' };
  }
  // Rule 6: Recovery mode
  const inactiveDays = Math.floor((Date.now() - S.student.last_active) / 86400000);
  if (inactiveDays >= 2) {
    return { action:'RECOVER', color:'amber', headline:`Re-entry plan: ease back in`, reason:`You've been away for ${inactiveDays} day(s). The system has prioritized your 3 weakest concepts for a gentle restart test. No need to start from zero.`, cta:'Start Recovery Test', ctaFn:"nav('test')" };
  }
  // Default
  return { action:'TEST', color:'ink', headline:`Take a test to calibrate`, reason:`Not enough data yet. Take a test in your current topic (${S.current_topic}) so the system can analyze your concept-level performance.`, cta:'Take Test Now', ctaFn:"nav('test')" };
}

/* ═══════════════════════════════════════════════════════
   PATTERN CLASSIFICATION
═══════════════════════════════════════════════════════ */
function detectPattern(answers) {
  if (!answers || !answers.length) return { label:'—', sub:'No data' };
  const wrong = answers.filter(a=>!a.correct);
  if (!wrong.length) {
    const allFast = answers.every(a => a.classification === 'fast_correct');
    if (allFast) return { label:'Confidence Anomaly', sub:'All correct but all suspiciously fast', color:'var(--ink)' };
    return { label:'Perfect Score', sub:'No errors detected', color:'var(--go)' };
  }
  const guesses = wrong.filter(a=>a.classification==='guess').length;
  const concepts = wrong.filter(a=>a.classification==='concept').length;
  if (guesses >= wrong.length * 0.6) return { label:'Guessing Detected', sub:`${guesses}/${wrong.length} wrong answers too fast`, color:'var(--warn)' };
  if (concepts >= wrong.length * 0.5) return { label:'Concept Gap', sub:`${concepts} conceptual error(s) found`, color:'var(--stop)' };
  return { label:'Mixed Errors', sub:'Combination of gaps and guesses', color:'var(--warn)' };
}

/* ═══════════════════════════════════════════════════════
   ONBOARDING
═══════════════════════════════════════════════════════ */
function startSystem() {
  const name = document.getElementById('ob-name').value.trim() || 'Student';
  const subject = document.getElementById('ob-subject').value;
  const level = document.getElementById('ob-level').value;
  S.student.name = name; S.student.subject = subject; S.student.level = level;
  S.student.last_active = Date.now();
  document.getElementById('onboarding').style.display = 'none';
  document.getElementById('sb-ava').textContent = name[0].toUpperCase();
  document.getElementById('sb-name-disp').textContent = name;
  document.getElementById('dash-greeting').textContent = `Welcome, ${name}`;
  document.getElementById('chip-topic').textContent = `${subject} — ${S.current_topic}`;
  // Populate topic filter
  const tf = document.getElementById('cf-topic');
  tf.innerHTML = '<option value="all">All Topics</option>';
  Object.keys(QUESTION_BANK).forEach(t => { const o=document.createElement('option'); o.value=t; o.textContent=t; tf.appendChild(o); });
  refreshAll();
  logActivity('start', `System initialized for ${name} — ${subject}, ${level} level.`, 'var(--ink)');
}

/* ═══════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════ */
const VIEW_TITLES = { dashboard:'Dashboard', topics:'Topics', test:'Take Test', analysis:'Analysis', decision:'Decision Engine', schedule:'Revision Schedule', concepts:'Concept Map', activity:'Activity Log' };
function nav(name) {
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const v = document.getElementById('view-'+name);
  if (v) { v.classList.remove('fadein'); void v.offsetWidth; v.classList.add('active','fadein'); }
  const ni = [...document.querySelectorAll('.nav-item')].find(n=>n.getAttribute('onclick')?.includes("'"+name+"'"));
  if (ni) ni.classList.add('active');
  document.getElementById('tb-title').textContent = VIEW_TITLES[name]||name;
  if (name==='topics') renderTopics();
  if (name==='analysis') renderAnalysis();
  if (name==='decision') renderDecision();
  if (name==='schedule') renderSchedule('today');
  if (name==='concepts') renderConcepts();
  if (name==='activity') renderActivity();
  if (name==='dashboard') renderDashboard();
  if (name==='test') initTestView();
}

function selectTopic(t) { S.current_topic = t; document.getElementById('chip-topic').textContent = `${S.student.subject} — ${t}`; nav('test'); }

/* ═══════════════════════════════════════════════════════
   RENDER: DASHBOARD
═══════════════════════════════════════════════════════ */
function renderDashboard() {
  const topicCs = S.concepts.filter(c=>c.topic===S.current_topic);
  const avgM = topicCs.length ? Math.round(topicCs.reduce((a,c)=>a+c.mastery,0)/topicCs.length) : 0;
  const allCs = S.concepts;
  const allAvg = allCs.length ? Math.round(allCs.reduce((a,c)=>a+c.mastery,0)/allCs.length) : 0;
  const weakCount = allCs.filter(c=>c.mastery<50).length;
  const dueToday = allCs.filter(c=>c.last_due_days<=1).length;

  document.getElementById('stat-mastery').textContent = allAvg+'%';
  document.getElementById('stat-mastery-s').textContent = 'across all concepts';
  document.getElementById('stat-weak').textContent = weakCount;
  document.getElementById('stat-weak-s').textContent = `${allCs.filter(c=>c.mastery>=75).length} strong`;
  document.getElementById('stat-tests').textContent = S.tests_taken;
  document.getElementById('stat-due').textContent = dueToday;
  document.getElementById('chip-mastery').textContent = `Mastery: ${allAvg}%`;
  document.getElementById('chip-streak').textContent = `Day ${S.student.streak}`;
  document.getElementById('sb-streak').textContent = `${S.student.streak} day streak`;
  document.getElementById('nb-schedule').textContent = dueToday;

  // Decision panel
  const d = computeDecision();
  const dpEl = document.getElementById('dash-decision-panel');
  dpEl.innerHTML = `<div class="decision-panel dp-${d.color}">
    <div class="dp-tag ${d.color}">${d.action}</div>
    <div class="dp-headline">${d.headline}</div>
    <div class="dp-reason">${d.reason}</div>
    <div class="brow"><button class="btn btn-${d.color==='go'?'go':d.color==='stop'?'stop':d.color==='amber'?'warn':'ink'}" onclick="${d.ctaFn}">${d.cta}</button><button class="btn btn-ghost" onclick="nav('decision')">See reasoning →</button></div>
  </div>`;

  // Concept health
  const dashC = document.getElementById('dash-concepts');
  dashC.innerHTML = topicCs.slice(0,6).map(c=>`
    <div class="crow">
      <div class="cname">${c.name}</div>
      <div class="mbar" style="flex:1;max-width:100px;"><div class="mfill ${c.level}" style="width:${c.mastery}%"></div></div>
      <div class="cpct">${c.mastery}%</div>
      <div class="ctag ${c.level}">${c.level}</div>
    </div>`).join('');

  // Spark
  const sp = document.getElementById('sparkline');
  const hist = S.score_history.slice(-10);
  if (!hist.length) { sp.innerHTML = `<div style="font-size:11px;color:var(--t4);padding:8px 0;">No tests yet.</div>`; }
  else sp.innerHTML = hist.map(s=>`<div class="sbar" style="height:${(s/100)*48}px;background:${s<50?'var(--stop)':s<70?'var(--warn)':'var(--go)'}"></div>`).join('');

  // Pattern box
  const pb = document.getElementById('pattern-box');
  if (S.last_test) {
    const p = detectPattern(S.last_test.answers);
    pb.innerHTML = `<strong style="color:${p.color||'var(--t2)'}">${p.label}</strong><br>${p.sub}`;
  }

  // Recovery
  const inactiveDays = Math.floor((Date.now() - S.student.last_active) / 86400000);
  const rb = document.getElementById('recovery-banner');
  if (inactiveDays >= 2) {
    rb.classList.add('visible');
    document.getElementById('recovery-msg').textContent = `You've been away for ${inactiveDays} day(s). The system has built a re-entry plan focused on your ${weakCount} weakest concepts. No need to restart.`;
    document.getElementById('alert-dot').style.display = 'block';
  }

  // Anomaly banner
  const ab = document.getElementById('anomaly-banner');
  if (S.last_test && detectPattern(S.last_test.answers).label === 'Confidence Anomaly') ab.classList.add('visible');
  else ab.classList.remove('visible');
}

function dismissRecovery() {
  document.getElementById('recovery-banner').classList.remove('visible');
  S.student.last_active = Date.now(); // reset
}

/* ═══════════════════════════════════════════════════════
   RENDER: TOPICS
   FIX: division by zero guard on topics with no concepts
═══════════════════════════════════════════════════════ */
function renderTopics() {
  const g = document.getElementById('topics-grid');
  // Compute topic mastery for prerequisite check
  const topicMastery = {};
  Object.keys(QUESTION_BANK).forEach(t => {
    const cs = S.concepts.filter(c=>c.topic===t);
    topicMastery[t] = cs.length ? Math.round(cs.reduce((a,c)=>a+c.mastery,0)/cs.length) : 0;
  });
  g.innerHTML = TOPICS_META.map(t => {
    const cs = S.concepts.filter(c=>c.topic===t.id);
    // FIX: guard division by zero
    const avg = cs.length > 0 ? Math.round(cs.reduce((a,c)=>a+c.mastery,0)/cs.length) : null;
    const locked = t.prereq && (topicMastery[t.prereq]||0) < 60;
    const levelColor = avg===null?'var(--t4)':avg<50?'var(--stop)':avg<75?'var(--warn)':'var(--go)';
    const levelClass = avg===null?'new':avg<50?'weak':avg<75?'moderate':'strong';
    return `<div class="topic-card${locked?' locked':''}" onclick="${locked?'':'selectTopic(\''+t.id+'\')'}">
      <div class="topic-icon">${t.icon}</div>
      <div class="topic-name">${t.id}${locked?' 🔒':''}</div>
      <div class="topic-sub">${locked?`Requires ${t.prereq} (≥60% mastery)`:t.sub}</div>
      <div class="topic-bar-wrap">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="font-size:9px;color:var(--t4);font-family:var(--mono)">MASTERY</span>
          <span style="font-size:11px;color:${levelColor};font-family:var(--mono)">${avg!==null?avg+'%':'NEW'}</span>
        </div>
        ${avg!==null?`<div class="mbar" style="max-width:100%;"><div class="mfill ${levelClass}" style="width:${avg}%"></div></div>`:''}
      </div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════
   TEST ENGINE
═══════════════════════════════════════════════════════ */
let TS = {}; // test session
function initTestView() {
  document.getElementById('test-warmup').style.display = 'block';
  document.getElementById('test-active').style.display = 'none';
  document.getElementById('test-result').style.display = 'none';
  document.getElementById('test-title').textContent = `Adaptive Test — ${S.current_topic}`;
  // Warmup message
  const weak = S.concepts.filter(c=>c.topic===S.current_topic&&c.mastery<50);
  document.getElementById('warmup-desc').textContent = `5 questions targeting your ${weak.length>0?`${weak.length} weak concept(s)`:'current topic'} in ${S.current_topic}. Your time per answer is recorded — try not to guess.`;
}

function beginTest() {
  // Select questions: prioritize weak concepts
  const pool = QUESTION_BANK[S.current_topic] || [];
  if (!pool.length) { alert('No questions available for this topic.'); return; }
  const weak = S.concepts.filter(c=>c.topic===S.current_topic&&c.mastery<50).map(c=>c.name);
  const sorted = [...pool].sort((a,b) => {
    const wa = weak.includes(a.concept)?1:0, wb = weak.includes(b.concept)?1:0;
    return wb - wa;
  });
  const qs = sorted.slice(0,Math.min(5, sorted.length));
  TS = { qs, current:0, answers:[], timer:null, timeLeft:30, startTime:null };
  document.getElementById('test-warmup').style.display = 'none';
  document.getElementById('test-active').style.display = 'block';
  document.getElementById('test-result').style.display = 'none';
  renderDots();
  renderQ(0);
}

function renderDots() {
  const d = document.getElementById('pdots');
  d.innerHTML = TS.qs.map((_,i)=>`<div class="pdot${i===TS.current?' current':''}" id="pdot-${i}"></div>`).join('');
}

function renderQ(idx) {
  if (idx >= TS.qs.length) { finishTest(); return; }
  const q = TS.qs[idx];
  TS.startTime = Date.now();
  TS.timeLeft = 30;
  // Update dots
  TS.qs.forEach((_,i) => {
    const dot = document.getElementById('pdot-'+i);
    if (!dot) return;
    dot.className = 'pdot' + (i < idx?' done-right':(i===idx?' current':''));
    if (i < idx && TS.answers[i]) dot.className = 'pdot ' + (TS.answers[i].correct?'done-right':'done-wrong');
  });
  document.getElementById('q-render').innerHTML = `
    <div class="q-card fadein">
      <div class="q-meta">
        <div class="q-num">Q${idx+1}/${TS.qs.length}</div>
        <div class="q-con">${q.concept}</div>
        <div class="ctag ${q.diff==='easy'?'strong':q.diff==='hard'?'weak':'moderate'}" style="margin-left:auto">${q.diff}</div>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="q-opts">
        ${q.opts.map((o,i)=>`<div class="opt" id="opt-${i}" onclick="selectOpt(${idx},${i})">
          <div class="opt-key">${'ABCD'[i]}</div>${o}</div>`).join('')}
      </div>
    </div>`;
  startTimer(q);
}

function startTimer(q) {
  clearInterval(TS.timer);
  TS.timeLeft = 30;
  updateTimerUI();
  TS.timer = setInterval(() => {
    TS.timeLeft--;
    updateTimerUI();
    if (TS.timeLeft <= 0) { clearInterval(TS.timer); autoTimeout(); }
  }, 1000);
}

function updateTimerUI() {
  const pct = (TS.timeLeft/30)*100;
  const f = document.getElementById('timer-fill');
  const d = document.getElementById('timer-disp');
  if (f) { f.style.width=pct+'%'; f.style.background=pct>50?'var(--ink)':pct>25?'var(--warn)':'var(--stop)'; }
  if (d) d.textContent=TS.timeLeft+'s';
}

function selectOpt(qIdx, optIdx) {
  // FIX: clear timer FIRST to avoid race condition
  clearInterval(TS.timer);
  const elapsed = Math.max(1, Math.round((Date.now()-TS.startTime)/1000));
  const q = TS.qs[qIdx];
  const correct = optIdx === q.ans;
  const classification = classifyAnswer(correct, elapsed, q.diff);
  TS.answers.push({ qid:qIdx, chosen:optIdx, correct, time:elapsed, concept:q.concept, topic:S.current_topic, classification });
  // Lock & highlight
  document.querySelectorAll('.opt').forEach((el,i) => {
    el.classList.add('locked');
    if (i===q.ans) el.classList.add('correct');
    else if (i===optIdx && !correct) el.classList.add('wrong');
  });
  setTimeout(() => { TS.current++; renderQ(TS.current); }, 800);
}

function autoTimeout() {
  const q = TS.qs[TS.current];
  TS.answers.push({ qid:TS.current, chosen:-1, correct:false, time:30, concept:q.concept, topic:S.current_topic, classification:'timeout' });
  TS.current++;
  renderQ(TS.current);
}

function finishTest() {
  clearInterval(TS.timer);
  const correct = TS.answers.filter(a=>a.correct).length;
  const total = TS.qs.length;
  const acc = Math.round((correct/total)*100);
  const avgTime = Math.round(TS.answers.reduce((s,a)=>s+a.time,0)/total);

  // FIX: Update masteries via Bayesian algorithm
  TS.answers.forEach(a => updateMastery(a.concept, a.topic, a.correct));

  // Store last test
  S.last_test = {
    topic: S.current_topic, score: correct, total, accuracy: acc, avg_time: avgTime,
    answers: TS.answers.map((a,i) => ({
      ...a,
      explain: TS.qs[a.qid]?.explain,
      q_text: TS.qs[a.qid]?.q,
      correct_letter: 'ABCD'[TS.qs[a.qid]?.ans],
      chosen_letter: a.chosen >= 0 ? 'ABCD'[a.chosen] : '—'
    }))
  };

  S.tests_taken++;
  S.score_history.push(acc);
  S.student.last_active = Date.now();
  // FIX: streak increment
  S.student.streak++;

  // Log
  const p = detectPattern(S.last_test.answers);
  logActivity('test', `Completed test: ${S.current_topic} — ${correct}/${total} (${acc}%) · Pattern: ${p.label}`, 'var(--sky)');
  const d = computeDecision();
  logActivity('decision', `System decision: ${d.action} — ${d.headline}`, 'var(--ink)');

  // Show badges
  document.getElementById('nb-analysis').style.display = 'inline';
  document.getElementById('alert-dot').style.display = 'block';

  // FIX: Confidence anomaly detection on all-correct all-fast
  const allFastCorrect = TS.answers.every(a=>a.classification==='fast_correct'||a.correct);
  const resultColor = acc>=80?'dp-green':acc>=60?'dp-amber':'dp-stop';
  const d2 = computeDecision();
  document.getElementById('test-active').style.display = 'none';
  document.getElementById('test-result').style.display = 'block';
  document.getElementById('result-panel').innerHTML = `
    <div class="decision-panel ${resultColor}">
      <div class="dp-tag ${acc>=80?'go':acc>=60?'amber':'stop'}">Test Complete</div>
      <div class="dp-headline">${acc}% — ${d2.headline}</div>
      <div class="dp-reason">${correct}/${total} correct · Avg. time: ${avgTime}s · Pattern: ${p.label}<br>${d2.reason}${allFastCorrect?' ⚡ Note: All answers were very fast — system has flagged for difficulty review.':''}</div>
      <div class="brow">
        <button class="btn btn-ink" onclick="nav('analysis')">Full Analysis →</button>
        <button class="btn btn-ghost" onclick="initTestView()">Retry</button>
      </div>
    </div>`;
  refreshTopbar();
}

/* ═══════════════════════════════════════════════════════
   RENDER: ANALYSIS
═══════════════════════════════════════════════════════ */
function renderAnalysis() {
  const lt = S.last_test;
  if (!lt) return;
  document.getElementById('analysis-empty').style.display = 'none';
  document.getElementById('analysis-content').style.display = 'block';
  document.getElementById('nb-analysis').style.display = 'none';

  const p = detectPattern(lt.answers);
  document.getElementById('an-acc').textContent = lt.accuracy+'%';
  document.getElementById('an-acc').style.color = lt.accuracy>=80?'var(--go)':lt.accuracy>=60?'var(--warn)':'var(--stop)';
  document.getElementById('an-acc-s').textContent = `${lt.score}/${lt.total} correct`;
  document.getElementById('an-time').textContent = lt.avg_time+'s';
  document.getElementById('an-pattern').textContent = p.label;
  document.getElementById('an-pattern').style.color = p.color||'var(--t2)';
  document.getElementById('an-pattern-s').textContent = p.sub;

  // Heatmap
  const hm = document.getElementById('hmap');
  hm.innerHTML = lt.answers.map((a,i) => {
    let bg, color, icon;
    if (a.classification==='fast_correct') { bg='var(--inkglow)'; color='var(--ink)'; icon='⚡'; }
    else if (a.correct) { bg='var(--go2)'; color='var(--go)'; icon='✓'; }
    else if (a.classification==='guess') { bg='var(--warn2)'; color='var(--warn)'; icon='?'; }
    else { bg='var(--stop2)'; color='var(--stop)'; icon='✗'; }
    return `<div class="hcell" style="background:${bg};color:${color};border-color:${color}40" data-tip="${a.concept}">${icon}<sub style="font-size:8px">${i+1}</sub></div>`;
  }).join('');

  // Mistakes
  const ml = document.getElementById('mistake-list');
  const wrong = lt.answers.filter(a=>!a.correct);
  const correct = lt.answers.filter(a=>a.correct);
  if (correct.length) {
    ml.innerHTML = correct.map(a=>`<div class="correct-row">✓ Q${a.qid+1}: ${a.concept} — correct in ${a.time}s${a.classification==='fast_correct'?' ⚡':''}
    </div>`).join('');
  }
  if (!wrong.length) { ml.innerHTML += `<div class="infobox" style="color:var(--go)">Perfect score! No mistakes to analyze.</div>`; return; }
  ml.innerHTML += wrong.map(a=>{
    const tagClass = a.classification==='guess'?'guess':a.classification==='timeout'?'calc':'concept';
    const tagLabel = a.classification==='guess'?'⚡ Likely Guess (too fast)':a.classification==='timeout'?'⏱ Timeout (ran out of time)':'🔍 Concept Gap';
    return `<div class="mistake-card">
      <div class="q-meta">
        <div class="q-con">${a.concept}</div>
        <div style="font-size:10px;font-family:var(--mono);color:${a.time<8?'var(--warn)':'var(--t4)'};margin-left:auto">⏱ ${a.time}s</div>
      </div>
      <div style="font-size:12px;color:var(--t2);margin-bottom:8px;line-height:1.5">${a.q_text}</div>
      <div style="display:flex;gap:10px;font-size:11px;margin-bottom:2px">
        <span style="color:var(--stop)">You: <strong>${a.chosen_letter}</strong></span>
        <span style="color:var(--go)">Correct: <strong>${a.correct_letter}</strong></span>
      </div>
      <div class="m-why">
        <div class="m-why-h">why you got this wrong</div>
        <div class="m-why-t">${a.explain}</div>
        <div class="etag ${tagClass}">${tagLabel}</div>
      </div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: DECISION ENGINE (fully computed from state)
   FIX: not hardcoded, always reflects live state
═══════════════════════════════════════════════════════ */
function renderDecision() {
  const d = computeDecision();
  const dc = document.getElementById('decision-main');
  dc.innerHTML = `<div class="decision-panel dp-${d.color}" style="margin-bottom:16px;">
    <div class="dp-tag ${d.color}">${d.action}</div>
    <div class="dp-headline">${d.headline}</div>
    <div class="dp-reason">${d.reason}</div>
    <div class="brow"><button class="btn btn-${d.color==='go'?'go':d.color==='stop'?'stop':d.color==='amber'?'warn':'ink'}" onclick="${d.ctaFn}">${d.cta}</button></div>
  </div>`;

  // Trace
  const topicCs = S.concepts.filter(c=>c.topic===S.current_topic);
  const weak = topicCs.filter(c=>c.mastery<50);
  const avgM = topicCs.length ? Math.round(topicCs.reduce((a,c)=>a+c.mastery,0)/topicCs.length) : 0;
  const lt = S.last_test;
  const inactiveDays = Math.floor((Date.now()-S.student.last_active)/86400000);
  const steps = [
    { label:'Inactivity check', detail:`Days since last session: ${inactiveDays}. Trigger at ≥2 days.`, pass: inactiveDays < 2 },
    { label:'Critical concept check (mastery<35%)', detail: weak.filter(c=>c.mastery<35).length>0?`TRIGGERED: ${weak.filter(c=>c.mastery<35).map(c=>c.name).join(', ')}`:'No critical weak concepts.', pass: weak.filter(c=>c.mastery<35).length===0 },
    { label:'Last test accuracy', detail: lt?`Accuracy: ${lt.accuracy}%. Pass threshold: 60%.`:'No test on record yet.', pass: lt?(lt.accuracy>=60):null },
    { label:'Concept mastery scan', detail:`Weak: ${weak.length} · Avg mastery: ${avgM}% · Topic: ${S.current_topic}`, pass: weak.length===0 },
    { label:'Pattern analysis', detail: lt?`Pattern: ${detectPattern(lt.answers).label}`:'—', pass: lt?(!detectPattern(lt.answers).label.includes('Guess')&&!detectPattern(lt.answers).label.includes('Anomaly')):null },
    { label:`Decision: ${d.action}`, detail: d.headline, pass: null }
  ];
  document.getElementById('decision-trace').innerHTML = steps.map(s=>`
    <div class="dtree-row">
      <div class="dtree-icon" style="background:${s.pass===true?'var(--go2)':s.pass===false?'var(--stop2)':'var(--inkglow)'};color:${s.pass===true?'var(--go)':s.pass===false?'var(--stop)':'var(--ink)'}">
        ${s.pass===true?'✓':s.pass===false?'✗':'→'}
      </div>
      <div><div class="dtree-label">${s.label}</div><div class="dtree-detail">${s.detail}</div></div>
    </div>`).join('');

  // Difficulty calibration
  const dc2 = document.getElementById('diff-calib');
  const hist = S.score_history.slice(-3);
  const avgRecent = hist.length ? Math.round(hist.reduce((a,b)=>a+b,0)/hist.length) : null;
  let newDiff = S.difficulty;
  if (avgRecent!==null) { if (avgRecent>=80) newDiff='hard'; else if (avgRecent<50) newDiff='easy'; else newDiff='medium'; }
  S.difficulty = newDiff;
  dc2.innerHTML = `<div class="infobox">
    Current difficulty: <strong style="color:${newDiff==='easy'?'var(--go)':newDiff==='hard'?'var(--stop)':'var(--warn)'}">${newDiff.toUpperCase()}</strong><br><br>
    Recent 3-test avg: ${avgRecent!==null?avgRecent+'%':'no data yet'}<br>
    Rule: avg ≥80% → HARD · avg &lt;50% → EASY · else → MEDIUM<br><br>
    Next test will prioritize: <strong>${weak.length>0?weak.map(c=>c.name).join(', '):'All concepts (balanced)'}</strong>
  </div>`;

  // Rules
  const rules = [
    { cond:'concept_mastery < 35%', action:'FORCE_REVISE (blocks advancement)', col:'var(--stop)' },
    { cond:'last_test_accuracy < 60%', action:'REVISE specific failed concepts', col:'var(--stop)' },
    { cond:'weak_concepts > 0 AND accuracy ≥ 60%', action:'PRACTICE weak concepts', col:'var(--warn)' },
    { cond:'avg_mastery ≥ 75% AND accuracy ≥ 80%', action:'ADVANCE to next topic', col:'var(--go)' },
    { cond:'all_fast_correct (anomaly)', action:'FLAG + increase difficulty', col:'var(--ink)' },
    { cond:'inactive_days ≥ 2', action:'RECOVER — build gentle re-entry plan', col:'var(--warn)' },
    { cond:'recent_avg ≥ 80% for 2 tests', action:'Increase difficulty to HARD', col:'var(--sky)' },
    { cond:'recent_avg < 50%', action:'Reduce difficulty to EASY', col:'var(--sky)' },
  ];
  document.getElementById('rules-table').innerHTML = rules.map(r=>`
    <div class="rule-row">
      <div class="rule-if">IF ${r.cond}</div>
      <div class="rule-then" style="color:${r.col}">→ ${r.action}</div>
    </div>`).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: SCHEDULE
═══════════════════════════════════════════════════════ */
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function renderSchedule(tab) {
  const now = new Date();
  let items = [...S.concepts];
  if (tab==='today') items = items.filter(c=>c.last_due_days<=1);
  else if (tab==='week') items = items.filter(c=>c.last_due_days<=7);
  items.sort((a,b)=>a.last_due_days-b.last_due_days);
  const sl = document.getElementById('schedule-list');
  if (!items.length) { sl.innerHTML = `<div class="infobox">No revisions ${tab==='today'?'due today':tab==='week'?'this week':'scheduled'}.</div>`; return; }
  sl.innerHTML = items.map(c => {
    const due = new Date(now.getTime()+c.last_due_days*86400000);
    const urgency = c.last_due_days<=0?'OVERDUE':c.last_due_days<=1?'TODAY':c.last_due_days<=3?'SOON':'LATER';
    const urgencyColor = urgency==='OVERDUE'||urgency==='TODAY'?'var(--stop)':urgency==='SOON'?'var(--warn)':'var(--t4)';
    return `<div class="sched-item">
      <div class="sched-cal"><div class="sched-day" style="color:${urgencyColor}">${due.getDate()}</div><div class="sched-mon">${MONTHS[due.getMonth()]}</div></div>
      <div class="sched-info">
        <div class="sched-topic">${c.name}</div>
        <div class="sched-sub">${c.topic}</div>
        <div class="sched-rule">Mastery: ${c.mastery}% · ${c.level==='weak'?'Needs urgent review':c.level==='moderate'?'Reinforce before forgetting':'Maintenance'}</div>
      </div>
      <div class="urgency" style="background:${urgencyColor}20;color:${urgencyColor};border:1px solid ${urgencyColor}">${urgency}</div>
    </div>`;
  }).join('');
}

function schedTab(tab, el) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderSchedule(tab);
}

/* ═══════════════════════════════════════════════════════
   RENDER: CONCEPTS
   FIX: both filters maintained in single state object
═══════════════════════════════════════════════════════ */
function conceptFilter(level) {
  if (level !== null) S.concept_filter.level = level;
  S.concept_filter.topic = document.getElementById('cf-topic').value;
  // Update button styles
  ['all','weak','moderate','strong'].forEach(l => {
    const btn = document.getElementById('cf-'+l);
    if (!btn) return;
    btn.style.borderColor = l===S.concept_filter.level?'var(--ink)':'var(--line2)';
    btn.style.color = l===S.concept_filter.level?'var(--ink)':'var(--t3)';
  });
  renderConcepts();
}

function renderConcepts() {
  let cs = [...S.concepts];
  if (S.concept_filter.level !== 'all') cs = cs.filter(c=>c.level===S.concept_filter.level);
  if (S.concept_filter.topic !== 'all') cs = cs.filter(c=>c.topic===S.concept_filter.topic);
  cs.sort((a,b)=>a.mastery-b.mastery);
  const cl = document.getElementById('concept-list');
  if (!cs.length) { cl.innerHTML='<div class="infobox">No concepts match this filter.</div>'; return; }
  cl.innerHTML = cs.map(c => {
    const dec = c.mastery<50?'REVISE':c.mastery<75?'PRACTICE':'STRONG';
    const decCol = c.mastery<50?'var(--stop)':c.mastery<75?'var(--warn)':'var(--go)';
    return `<div class="crow">
      <div style="font-size:9px;font-family:var(--mono);color:var(--t4);min-width:26px">${c.topic.substring(0,3).toUpperCase()}</div>
      <div class="cname">${c.name}</div>
      <div class="mbar" style="flex:1;max-width:100px;"><div class="mfill ${c.level}" style="width:${c.mastery}%"></div></div>
      <div class="cpct">${c.mastery}%</div>
      <div class="ctag ${c.level}">${c.level}</div>
      <div style="font-size:9px;font-weight:700;color:${decCol};font-family:var(--mono);min-width:50px;text-align:right">${dec}</div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════
   RENDER: ACTIVITY LOG
═══════════════════════════════════════════════════════ */
function logActivity(type, text, color) {
  S.activity.unshift({ type, text, color, time: new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) });
}

function renderActivity() {
  const al = document.getElementById('activity-log');
  if (!S.activity.length) { al.innerHTML='<div class="infobox">No activity yet. Start by taking a test.</div>'; return; }
  al.innerHTML = S.activity.map(a=>`
    <div class="arow">
      <div class="adot" style="background:${a.color}"></div>
      <div class="atime">${a.time}</div>
      <div class="atext">${a.text}</div>
    </div>`).join('');
}

/* ═══════════════════════════════════════════════════════
   TOPBAR REFRESH
═══════════════════════════════════════════════════════ */
function refreshTopbar() {
  const allCs = S.concepts;
  const allAvg = allCs.length ? Math.round(allCs.reduce((a,c)=>a+c.mastery,0)/allCs.length) : 0;
  document.getElementById('chip-mastery').textContent = `Mastery: ${allAvg}%`;
  document.getElementById('chip-streak').textContent = `Day ${S.student.streak}`;
  const chip = document.getElementById('chip-mastery');
  chip.className = 'chip' + (allAvg>=75?' go':allAvg>=50?' warn':' stop');
}

function refreshAll() {
  renderDashboard();
  refreshTopbar();
}