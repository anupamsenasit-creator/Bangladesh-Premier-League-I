document.addEventListener('DOMContentLoaded', () => {
  renderFixtures();
  renderPointsTable();
  renderStats();
});

// Mock Data
const teams = {
  rangpur: {
    name: 'Rangpur Riders',
    logo: 'assets/logo_rangpur_riders.png',
    short: 'RR',
    squad: [
      { name: 'Nurul Hasan Sohan', role: 'Wicketkeeper', overseas: false }, { name: 'Mustafizur Rahman', role: 'Bowler', overseas: false }, { name: 'Litton Das', role: 'Wicketkeeper', overseas: false },
      { name: 'Towhid Hridoy', role: 'Batter', overseas: false }, { name: 'Nahid Rana', role: 'Bowler', overseas: false }, { name: 'Rakibul Hasan', role: 'Bowler', overseas: false },
      { name: 'Aliss Al Islam', role: 'Bowler', overseas: false }, { name: 'Mrittunjoy Chowdhury', role: 'Bowler', overseas: false }, { name: 'Nayeem Hasan', role: 'Bowler', overseas: false },
      { name: 'Kamrul Islam Rabbi', role: 'Bowler', overseas: false }, { name: 'Mahmudullah Riyad', role: 'All-rounder', overseas: false }, { name: 'Abdul Halim', role: 'Bowler', overseas: false },
      { name: 'Iftakhar Hossain Ifti', role: 'Batter', overseas: false }, { name: 'Mehedi Hasan Sohag', role: 'All-rounder', overseas: false }, { name: 'Mohammad Akhlaq', role: 'Wicketkeeper', overseas: true },
      { name: 'Kyle Mayers', role: 'All-rounder', overseas: true }, { name: 'Dawid Malan', role: 'Batter', overseas: true }, { name: 'Khushdil Shah', role: 'All-rounder', overseas: true },
      { name: 'Iftikhar Ahmed', role: 'All-rounder', overseas: true }, { name: 'Faheem Ashraf', role: 'All-rounder', overseas: true }, { name: 'Khawaja Nafay', role: 'Batter', overseas: true },
      { name: 'Sufiyan Muqeem', role: 'Bowler', overseas: true }, { name: 'Emilio Gay', role: 'Batter', overseas: true }
    ]
  },
  dhaka: {
    name: 'Dhaka Capitals',
    logo: 'assets/logo_dhaka_capitals.png',
    short: 'DC',
    squad: [
      { name: 'Mohammad Naim', role: 'Batter', overseas: false }, { name: 'Shamim Hossain', role: 'Batter', overseas: false }, { name: 'Shahadat Hossain', role: 'Batter', overseas: false },
      { name: 'Alex Hales', role: 'Batter', overseas: true }, { name: 'Usman Khan', role: 'Wicketkeeper', overseas: true }, { name: 'Mohammad Mithun', role: 'Wicketkeeper', overseas: false },
      { name: 'Irfan Sukkur', role: 'Wicketkeeper', overseas: false }, { name: 'Saif Hassan', role: 'All-rounder', overseas: false }, { name: 'Mohammad Saifuddin', role: 'All-rounder', overseas: false },
      { name: 'Nasir Hossain', role: 'All-rounder', overseas: false }, { name: 'Sabbir Rahman', role: 'All-rounder', overseas: false }, { name: 'Mosaddek Hossain', role: 'All-rounder', overseas: false },
      { name: 'Dasun Shanaka', role: 'All-rounder', overseas: true }, { name: 'Taskin Ahmed', role: 'Bowler', overseas: false }, { name: 'Taijul Islam', role: 'Bowler', overseas: false },
      { name: 'Maruf Mridha', role: 'Bowler', overseas: false }, { name: 'Jayed Ullah', role: 'Bowler', overseas: false }, { name: 'Abdullah Al Mamun', role: 'Bowler', overseas: false },
      { name: 'Shahnawaz Dahani', role: 'Bowler', overseas: true }, { name: 'Zahoor Khan', role: 'Bowler', overseas: true }
    ]
  },
  rajshahi: {
    name: 'Rajshahi Warriors',
    logo: 'assets/logo_rajshahi_warriors.png',
    short: 'RW',
    squad: [
      { name: 'Najmul Hossain Shanto', role: 'Batter', overseas: false }, { name: 'Tanzid Hasan Tamim', role: 'Batter', overseas: false }, { name: 'Tanzim Hasan Sakib', role: 'Bowler', overseas: false },
      { name: 'Yasir Ali Rabbi', role: 'Batter', overseas: false }, { name: 'Akbar Ali', role: 'Wicketkeeper', overseas: false }, { name: 'Ripon Mondol', role: 'Bowler', overseas: false },
      { name: 'Hasan Murad', role: 'Bowler', overseas: false }, { name: 'Abdul Gaffar Sakline', role: 'Bowler', overseas: false }, { name: 'SM Meherob Hasan', role: 'All-rounder', overseas: false },
      { name: 'Robiul Haque', role: 'Bowler', overseas: false }, { name: 'Mushfiqur Rahim', role: 'Wicketkeeper', overseas: false }, { name: 'Shakheer H Shubhra', role: 'Batter', overseas: false },
      { name: 'Wasi Siddique', role: 'Bowler', overseas: false }, { name: 'Mohammad Rubel', role: 'Bowler', overseas: false }, { name: 'Jisan Alam', role: 'Batter', overseas: false },
      { name: 'Mohammad Nawaz', role: 'All-rounder', overseas: true }, { name: 'Sahibzada Farhan', role: 'Wicketkeeper', overseas: true }, { name: 'Dushan Ishara Hemantha', role: 'All-rounder', overseas: true },
      { name: 'Jahandad Khan', role: 'Bowler', overseas: true }, { name: 'Hussain Talat', role: 'All-rounder', overseas: true }
    ]
  },
  sylhet: {
    name: 'Sylhet Titans',
    logo: 'assets/logo_sylhet_titans.png',
    short: 'ST',
    squad: [
      { name: 'Mehidy Hasan Miraz', role: 'All-rounder', overseas: false }, { name: 'Nasum Ahmed', role: 'Bowler', overseas: false }, { name: 'Parvez Hossain Emon', role: 'Batter', overseas: false },
      { name: 'Syed Khaled Ahmed', role: 'Bowler', overseas: false }, { name: 'Afif Hossain Dhrubo', role: 'All-rounder', overseas: false }, { name: 'Rony Talukdar', role: 'Batter', overseas: false },
      { name: 'Zakir Hasan', role: 'Wicketkeeper', overseas: false }, { name: 'Ruyel Miah', role: 'Bowler', overseas: false }, { name: 'Ariful Islam', role: 'Bowler', overseas: false },
      { name: 'Ebadot Hossain', role: 'Bowler', overseas: false }, { name: 'Mominul Haque', role: 'Batter', overseas: false }, { name: 'Shohidul Islam', role: 'Bowler', overseas: false },
      { name: 'Rahatul Ferdous Javed', role: 'Bowler', overseas: false }, { name: 'Toufiq Khan Tushar', role: 'Batter', overseas: false },
      { name: 'Saim Ayub', role: 'Batter', overseas: true }, { name: 'Mohammad Amir', role: 'Bowler', overseas: true }, { name: 'Angelo Mathews', role: 'All-rounder', overseas: true },
      { name: 'Aaron Jones', role: 'Batter', overseas: true }, { name: 'Salman Irshad', role: 'Bowler', overseas: true }, { name: 'Azmatullah Omarzai', role: 'All-rounder', overseas: true },
      { name: 'Ethan Brookes', role: 'All-rounder', overseas: true }, { name: 'Moeen Ali', role: 'All-rounder', overseas: true }
    ]
  },
  noakhali: {
    name: 'Noakhali Express',
    logo: 'assets/logo_noakhali_express.png',
    short: 'NE',
    squad: [
      { name: 'Soumya Sarkar', role: 'All-rounder', overseas: false }, { name: 'Hasan Mahmud', role: 'Bowler', overseas: false }, { name: 'Mahidul Islam Ankon', role: 'Wicketkeeper', overseas: false },
      { name: 'Jaker Ali Anik', role: 'Wicketkeeper', overseas: false }, { name: 'Habibur Rahman Sohan', role: 'Batter', overseas: false }, { name: 'Mushfiq Hasan', role: 'Bowler', overseas: false },
      { name: 'Shahadat Hossain Dipu', role: 'Batter', overseas: false }, { name: 'Rejaur Rahman Raja', role: 'Bowler', overseas: false }, { name: 'Nazmul Islam Apu', role: 'Bowler', overseas: false },
      { name: 'Abu Hashim', role: 'Bowler', overseas: false }, { name: 'Mehedi Hasan Rana', role: 'Bowler', overseas: false }, { name: 'Sykat Ali', role: 'All-rounder', overseas: false },
      { name: 'Sabbir Hossain', role: 'All-rounder', overseas: false }, { name: 'Rahmatullah Ali', role: 'All-rounder', overseas: false },
      { name: 'Kusal Mendis', role: 'Wicketkeeper', overseas: true }, { name: 'Johnson Charles', role: 'Wicketkeeper', overseas: true }, { name: 'Ihsanullah Khan', role: 'Bowler', overseas: true },
      { name: 'Haider Ali', role: 'Batter', overseas: true }, { name: 'Mohammad Nabi', role: 'All-rounder', overseas: true }
    ]
  },
  chattogram: {
    name: 'Chattogram Royals',
    logo: 'assets/logo_chattogram_royals.png',
    short: 'CR',
    squad: [
      { name: 'Mahedi Hasan', role: 'All-rounder', overseas: false }, { name: 'Tanvir Islam', role: 'Bowler', overseas: false }, { name: 'Abrar Ahmed', role: 'Bowler', overseas: false },
      { name: 'Mohammad Naim', role: 'Batter', overseas: false }, { name: 'Shoriful Islam', role: 'Bowler', overseas: false }, { name: 'Abu Hider Rony', role: 'Bowler', overseas: false },
      { name: 'Mahmudul Hasan Joy', role: 'Batter', overseas: false }, { name: 'Mahfijul Islam Robin', role: 'Batter', overseas: false }, { name: 'Sumon Khan', role: 'Bowler', overseas: false },
      { name: 'Ziaur Rahman', role: 'All-rounder', overseas: false }, { name: 'Arafat Sunny', role: 'Bowler', overseas: false }, { name: 'Mukidul Islam', role: 'Bowler', overseas: false },
      { name: 'Shuvagata Hom', role: 'All-rounder', overseas: false }, { name: 'Salman Hossain', role: 'Batter', overseas: false }, { name: 'Zahiduzzaman Khan', role: 'Wicketkeeper', overseas: false },
      { name: 'Niroshan Dickwella', role: 'Wicketkeeper', overseas: true }, { name: 'Angelo Perera', role: 'All-rounder', overseas: true }, { name: 'Paul Stirling', role: 'All-rounder', overseas: true },
      { name: 'Charith Asalanka', role: 'Batter', overseas: true }
    ]
  }
};

/* ... fixtures, points, stats ... */

// ... (fixtures, points, stats, statsDetails arrays remain unchanged - implied context)

/* ... RENDER FUNCTIONS ... */

function renderTeamDetail() {
  const title = document.getElementById('team-name-title');
  const container = document.getElementById('team-detail-container');
  const squadBody = document.getElementById('squad-list-body');

  if (!title || !container || !squadBody) return;

  // Get team key from filename (e.g., 'team-rangpur.html' -> 'rangpur')
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const teamKey = filename.replace('team-', '').replace('.html', '');

  const team = teams[teamKey];
  if (!team) return;

  title.textContent = team.name;

  // Render Header Info
  container.innerHTML = `
    <img src="${team.logo}" alt="${team.name}" style="width: 150px; height: 150px; object-fit: contain; margin-bottom: 1rem; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
    <h1>${team.name}</h1>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <span class="match-tag" style="font-size: 1.2rem;">${team.short}</span>
      <span class="match-tag" style="background: var(--color-secondary); font-size: 1.2rem;">Squad Size: ${team.squad.length}</span>
    </div>
  `;

  // Render Squad Table
  squadBody.innerHTML = team.squad.map((player, index) => {
    const typeBadge = player.overseas
      ? '<span class="match-tag" style="background: var(--color-secondary); font-size: 0.8rem;">Overseas</span>'
      : '<span class="match-tag" style="background: rgba(255,255,255,0.1); font-size: 0.8rem;">Local</span>';

    // Default to 'Player' if role is missing (safety check)
    const role = player.role || 'Player';

    return `
      <tr>
        <td>${index + 1}</td>
        <td style="text-align: left; font-weight: 600;">${player.name}</td>
        <td>${role}</td>
        <td>${typeBadge}</td>
      </tr>
    `;
  }).join('');
}

/* ... fixtures ... */

// ... (fixtures, points, stats, statsDetails arrays remain unchanged - implied context)
// Assume I am replacing the `teams` const and then jump to renderTeamDetail

/* ... FIXTURES, POINTS, STATS, RENDER FUNCTIONS ... */

function renderTeamDetail() {
  const title = document.getElementById('team-name-title');
  const container = document.getElementById('team-detail-container');
  const squadBody = document.getElementById('squad-list-body');

  if (!title || !container || !squadBody) return;

  // Get team key from filename (e.g., 'team-rangpur.html' -> 'rangpur')
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const teamKey = filename.replace('team-', '').replace('.html', '');

  const team = teams[teamKey];
  if (!team) return;

  title.textContent = team.name;

  // Render Header Info
  container.innerHTML = `
    <img src="${team.logo}" alt="${team.name}" style="width: 150px; height: 150px; object-fit: contain; margin-bottom: 1rem; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
    <h1>${team.name}</h1>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <span class="match-tag" style="font-size: 1.2rem;">${team.short}</span>
      <span class="match-tag" style="background: var(--color-secondary); font-size: 1.2rem;">Squad Size: ${team.squad.length}</span>
    </div>
  `;

  // Render Squad Table
  squadBody.innerHTML = team.squad.map((player, index) => {
    const roleBadge = player.overseas
      ? '<span class="match-tag" style="background: var(--color-secondary); font-size: 0.8rem;">Overseas</span>'
      : '<span class="match-tag" style="background: rgba(255,255,255,0.1); font-size: 0.8rem;">Local</span>';

    return `
      <tr>
        <td>${index + 1}</td>
        <td style="text-align: left; font-weight: 600;">${player.name}</td>
        <td>${roleBadge}</td>
      </tr>
    `;
  }).join('');
}

// --- Real-Time Status Logic ---

// Determine current year based on month (Dec = 2025, Jan = 2026)
function getMatchDate(dateStr) {
  const currentYear = new Date().getFullYear();
  const month = dateStr.split(' ')[0];
  const year = month === 'Dec' ? 2025 : 2026;
  return new Date(`${dateStr}, ${year}`);
}

function updateRealTimeStatus() {
  const now = new Date();

  fixtures.forEach(match => {
    const matchTime = getMatchDate(match.date);
    const endTime = new Date(matchTime.getTime() + (4 * 60 * 60 * 1000)); // Approx 4 hours

    if (now >= matchTime && now <= endTime) {
      match.status = 'LIVE';
      match.date = 'LIVE NOW 🔴';
    } else if (now > endTime) {
      match.status = 'FINISHED';
      if (!match.result) match.result = 'Result Pending';
    } else {
      match.status = 'UPCOMING';
    }
  });
}

// Initial Data (Source of Truth)
const initialFixtures = [
  // --- SYLHET PHASE ---
  { team1: teams.sylhet, team2: teams.rajshahi, date: 'Dec 26, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.noakhali, team2: teams.chattogram, date: 'Dec 26, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.dhaka, team2: teams.rajshahi, date: 'Dec 27, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.sylhet, team2: teams.noakhali, date: 'Dec 27, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  // Dec 28 Rest
  { team1: teams.rangpur, team2: teams.chattogram, date: 'Dec 29, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.rajshahi, team2: teams.noakhali, date: 'Dec 29, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.sylhet, team2: teams.chattogram, date: 'Dec 30, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.dhaka, team2: teams.rangpur, date: 'Dec 30, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  // Dec 31 Rest
  { team1: teams.sylhet, team2: teams.dhaka, date: 'Jan 1, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.rangpur, team2: teams.rajshahi, date: 'Jan 1, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.dhaka, team2: teams.chattogram, date: 'Jan 2, 1:30 PM', venue: 'Sylhet', status: 'UPCOMING' },
  { team1: teams.sylhet, team2: teams.rangpur, date: 'Jan 2, 6:30 PM', venue: 'Sylhet', status: 'UPCOMING' },

  // --- CHATTOGRAM PHASE ---
  { team1: teams.rangpur, team2: teams.dhaka, date: 'Jan 5, 1:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.chattogram, team2: teams.rajshahi, date: 'Jan 5, 6:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.noakhali, team2: teams.sylhet, date: 'Jan 6, 1:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.chattogram, team2: teams.rangpur, date: 'Jan 6, 6:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  // Jan 7 Rest
  { team1: teams.sylhet, team2: teams.rangpur, date: 'Jan 8, 1:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.dhaka, team2: teams.noakhali, date: 'Jan 8, 6:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.chattogram, team2: teams.noakhali, date: 'Jan 9, 2:00 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.rajshahi, team2: teams.dhaka, date: 'Jan 9, 7:00 PM', venue: 'Chattogram', status: 'UPCOMING' },
  // Jan 10 Rest
  { team1: teams.rangpur, team2: teams.noakhali, date: 'Jan 11, 1:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.rajshahi, team2: teams.sylhet, date: 'Jan 11, 6:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.noakhali, team2: teams.dhaka, date: 'Jan 12, 1:30 PM', venue: 'Chattogram', status: 'UPCOMING' },
  { team1: teams.rajshahi, team2: teams.chattogram, date: 'Jan 12, 6:30 PM', venue: 'Chattogram', status: 'UPCOMING' },

  // --- DHAKA PHASE ---
  { team1: teams.chattogram, team2: teams.sylhet, date: 'Jan 15, 1:30 PM', venue: 'Dhaka', status: 'UPCOMING' },
  { team1: teams.rangpur, team2: teams.rajshahi, date: 'Jan 15, 6:30 PM', venue: 'Dhaka', status: 'UPCOMING' },
  { team1: teams.noakhali, team2: teams.rajshahi, date: 'Jan 16, 2:00 PM', venue: 'Dhaka', status: 'UPCOMING' },
  { team1: teams.dhaka, team2: teams.sylhet, date: 'Jan 16, 7:00 PM', venue: 'Dhaka', status: 'UPCOMING' },
  { team1: teams.rajshahi, team2: teams.chattogram, date: 'Jan 17, 1:30 PM', venue: 'Dhaka', status: 'UPCOMING' },
  { team1: teams.noakhali, team2: teams.rangpur, date: 'Jan 17, 6:30 PM', venue: 'Dhaka', status: 'UPCOMING' },

  // --- PLAYOFFS ---
  { team1: { name: 'Eliminator', logo: 'assets/logo_bpl.png', short: 'ELIM' }, team2: { name: 'TBD', logo: 'assets/logo_bpl.png', short: 'TBD' }, date: 'Jan 19, 1:30 PM', venue: 'Dhaka', status: 'PLAYOFF' },
  { team1: { name: 'Qualifier 1', logo: 'assets/logo_bpl.png', short: 'Q1' }, team2: { name: 'TBD', logo: 'assets/logo_bpl.png', short: 'TBD' }, date: 'Jan 19, 6:30 PM', venue: 'Dhaka', status: 'PLAYOFF' },
  { team1: { name: 'Qualifier 2', logo: 'assets/logo_bpl.png', short: 'Q2' }, team2: { name: 'TBD', logo: 'assets/logo_bpl.png', short: 'TBD' }, date: 'Jan 21, 6:30 PM', venue: 'Dhaka', status: 'PLAYOFF' },
  { team1: { name: 'FINAL', logo: 'assets/logo_bpl.png', short: 'FINAL' }, team2: { name: 'TBD', logo: 'assets/logo_bpl.png', short: 'TBD' }, date: 'Jan 23, 6:00 PM', venue: 'Dhaka', status: 'FINAL' },
];

const initialPoints = [
  { team: teams.sylhet, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
  { team: teams.chattogram, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
  { team: teams.rangpur, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
  { team: teams.dhaka, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
  { team: teams.rajshahi, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
  { team: teams.noakhali, p: 0, w: 0, l: 0, nrr: '0.000', pts: 0 },
];

const fixtures = initialFixtures;
const points = initialPoints;

const stats = [
  { player: 'View List', team: '-', type: 'Most Runs', value: '->', link: 'stats-runs.html' },
  { player: 'View List', team: '-', type: 'Most Wickets', value: '->', link: 'stats-wickets.html' },
  { player: 'View List', team: '-', type: 'Highest Score', value: '->', link: 'stats-score.html' },
  { player: 'View List', team: '-', type: 'Most Sixes', value: '->', link: 'stats-sixes.html' },
  { player: 'View List', team: '-', type: 'Best Figures', value: '->', link: 'stats-figures.html' }
];

const statsDetails = {
  'stats-runs-table': Array(10).fill({ rank: '-', player: 'TBA', team: '-', value: '-' }),
  'stats-wickets-table': Array(10).fill({ rank: '-', player: 'TBA', team: '-', value: '-' }),
  'stats-score-table': Array(10).fill({ rank: '-', player: 'TBA', team: '-', value: '-' }),
  'stats-sixes-table': Array(10).fill({ rank: '-', player: 'TBA', team: '-', value: '-' }),
  'stats-figures-table': Array(10).fill({ rank: '-', player: 'TBA', team: '-', value: '-' }),
};

// Render Functions
function renderFixtures() {
  const container = document.getElementById('fixtures-container');
  if (!container) return;

  // Show only 4 on home info, all on fixtures page
  const homePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
  const matchesToShow = homePage ? fixtures.slice(0, 4) : fixtures;

  container.innerHTML = matchesToShow.map(match => `
    <div class="fixture-card">
      <span class="fixture-status">${match.date}</span>
      <div class="fixture-teams">
        <div class="f-team">
          <img src="${match.team1.logo}" alt="${match.team1.name}">
          <span>${match.team1.short}</span>
        </div>
        <div class="f-score">VS</div>
        <div class="f-team">
          <img src="${match.team2.logo}" alt="${match.team2.name}">
          <span>${match.team2.short}</span>
        </div>
      </div>
      <div class="fixture-details">
        <span>${match.venue}</span>
        <button class="btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.7rem;">Tickets</button>
      </div>
    </div>
  `).join('');
}

function renderPointsTable() {
  const tbody = document.getElementById('points-table-body');
  if (!tbody) return;
  tbody.innerHTML = points.map((row, index) => `
    <tr>
      <td>
        <div class="team-cell">
          <span>${index + 1}</span>
          <img src="${row.team.logo}" alt="${row.team.name}">
          <span>${row.team.name}</span>
        </div>
      </td>
      <td>${row.p}</td>
      <td>${row.w}</td>
      <td>${row.l}</td>
      <td>${row.nrr}</td>
      <td>${row.pts}</td>
    </tr>
  `).join('');
}

function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;
  container.innerHTML = stats.map(stat => `
    <a href="${stat.link}" class="stat-card" style="text-decoration: none; color: inherit; cursor: pointer;">
      <div class="player-avatar">
        ${stat.player.charAt(0)}
      </div>
      <div class="stat-info">
        <h4>${stat.type}</h4>
        <p>${stat.team}</p>
      </div>
      <div class="stat-value">${stat.value}</div>
    </a>
  `).join('');
}

function renderStatsDetailTable() {
  for (const [tableId, data] of Object.entries(statsDetails)) {
    const tbody = document.getElementById(tableId);
    if (tbody) {
      tbody.innerHTML = data.map((row, index) => `
        <tr>
          <td>${index + 1}</td>
          <td style="font-weight: 600;">${row.player}</td>
          <td>${row.team}</td>
          <td style="font-weight: 800; color: var(--color-secondary);">${row.value}</td>
        </tr>
      `).join('');
    }
  }
}

function renderTeams() {
  const container = document.getElementById('teams-container');
  if (!container) return;

  const allTeams = Object.entries(teams);
  container.innerHTML = allTeams.map(([key, team]) => `
    <a href="team-${key}.html" class="team-card" style="text-decoration: none; color: inherit; cursor: pointer;">
      <img src="${team.logo}" alt="${team.name}">
      <h3>${team.name}</h3>
      <button class="btn-secondary">View Squad</button>
    </a>
  `).join('');
}

function renderTeamDetail() {
  const title = document.getElementById('team-name-title');
  const container = document.getElementById('team-detail-container');
  const squadBody = document.getElementById('squad-list-body');

  if (!title || !container || !squadBody) return;

  // Get team key from filename (e.g., 'team-rangpur.html' -> 'rangpur')
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const teamKey = filename.replace('team-', '').replace('.html', '');

  const team = teams[teamKey];
  if (!team) return;

  title.textContent = team.name;

  // Render Header Info
  container.innerHTML = `
    <img src="${team.logo}" alt="${team.name}" style="width: 150px; height: 150px; object-fit: contain; margin-bottom: 1rem; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));">
    <h1>${team.name}</h1>
    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
      <span class="match-tag" style="font-size: 1.2rem;">${team.short}</span>
      <span class="match-tag" style="background: var(--color-secondary); font-size: 1.2rem;">Squad Size: ${team.squad.length}</span>
    </div>
  `;

  // Render Squad Table
  squadBody.innerHTML = team.squad.map((player, index) => {
    const typeBadge = player.overseas
      ? '<span class="match-tag" style="background: var(--color-secondary); font-size: 0.8rem;">Overseas</span>'
      : '<span class="match-tag" style="background: rgba(255,255,255,0.1); font-size: 0.8rem;">Local</span>';

    const role = player.role || 'Player';

    return `
      <tr>
        <td>${index + 1}</td>
        <td style="text-align: left; font-weight: 600;">${player.name}</td>
        <td>${role}</td>
        <td>${typeBadge}</td>
      </tr>
    `;
  }).join('');
}

// --- Simulation UI ---


document.addEventListener('DOMContentLoaded', () => {
  updateRealTimeStatus();
  renderFixtures();
  renderPointsTable();
  renderStats();
  renderTeams();
  renderStatsDetailTable();
  renderTeamDetail();



  // Home Page Countdown
  function updateHomeCountdown() {
    const countdownContainer = document.getElementById('home-countdown');
    if (!countdownContainer) return;
    // ... rest of countdown code


    const targetDate = new Date('December 26, 2025 13:30:00').getTime();

    function update() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        countdownContainer.innerHTML = '<div class="match-tag" style="font-size: 1.5rem;">MATCH LIVE NOW</div>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('c-days').innerText = days < 10 ? '0' + days : days;
      document.getElementById('c-hours').innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById('c-minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('c-seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    update();
    setInterval(update, 1000);
  }
  updateHomeCountdown();
});
