/* ------------------------------
  BusBuddy — script.js
  Mobile-first web app logic
  ------------------------------ */

/* ----------------------
   ROUTE DATA (from your list)
   Each: { number, start, end }
   ---------------------- */
const ROUTES = [
  { number: "13", start: "Shivajinagara Bus Station", end: "Banashankari TTMC" },
  { number: "18", start: "Kempegowda to Station", end: "Marenahalli Bus Station" },
  { number: "25A", start: "Kempegowda Bus Station", end: "BTM Layout" },
  { number: "45D", start: "Kempegowda Bus Station", end: "AGS Layout" },
  { number: "61", start: "Kempegowda Bus Station", end: "Vijayanagara TTMC" },
  { number: "63", start: "Shivajinagara Bus Station", end: "BCC Layout" },
  { number: "75B", start: "Malleshwaram Bus Stand", end: "Hampinagara" },
  { number: "90E", start: "Kempegowda Bus Station", end: "Yeshawanthapura Railway Station" },
  { number: "94", start: "Shivajinagara Bus Station", end: "Yeshawanthapura TTMC" },
  { number: "94E", start: "Shivajinagara Bus Station", end: "Yeshawanthapura Railway Station" },
  { number: "96", start: "Kempegowda Bus Station", end: "Kempegowda Bus Station" },
  { number: "96A", start: "Kempegowda Bus Station", end: "Kempegowda Bus Station" },
  { number: "96G", start: "Kempegowda Bus Station", end: "Shankarnagh Bus Stand" },
  { number: "111", start: "KR Market", end: "Kaval Byrasandra" },
  { number: "111C", start: "Kempegowda Bus Station", end: "Kaval Byrasandra" },
  { number: "114A", start: "Shivajinagara Bus Station", end: "Sultanpalya" },
  { number: "138", start: "Kempegowda Bus Station", end: "Jeevan Bheemanagara" },
  { number: "171", start: "Kempegowda Bus Station", end: "Koramangala 1st Block" },
  { number: "176", start: "Hampinagara", end: "Kaval Byrasandra" },
  { number: "195", start: "Shivajinagara Bus Station", end: "Chandra Layout" },
  { number: "201D", start: "S V Metro Station", end: "Central Silk Board" },
  { number: "201G", start: "Banashankari TTMC", end: "Jeevan Bheemanagara" },
  { number: "210N", start: "Kempegowda Bus Station", end: "Uttarahalli" },
  { number: "215H", start: "Kempegowda Bus Station", end: "Jambu Savari Dinne" },
  { number: "215N", start: "Kempegowda Bus Station", end: "Anjanapura" },
  { number: "225C", start: "Kempegowda Bus Station", end: "BEML Layout 5th Stage" },
  { number: "226M", start: "KR Market", end: "Bidadi" },
  { number: "226N", start: "Kempegowda Bus Station", end: "Bidadi" },
  { number: "234E", start: "Kempegowda Bus Station", end: "Hullala Sattelite Town" },
  { number: "238U", start: "Kempegowda Bus Station", end: "Bengaluru University Administrative Block" },
  { number: "242", start: "KR Market", end: "Tavarakere" },
  { number: "242B", start: "Kempegowda Bus Station", end: "Tavarakere" },
  { number: "248", start: "KR Market", end: "Jalahalli Cross" },
  { number: "250P", start: "Kempegowda Bus Station", end: "Chikkabanavara" },
  { number: "252F", start: "Kempegowda Bus Station", end: "Peenya 2nd Stage" },
  { number: "253", start: "KR Market", end: "Hesaraghatta I D Farm" },
  { number: "253J", start: "Kempegowda Bus Station", end: "Hesarughatta" },
  { number: "258", start: "KR Market", end: "Nelamangala" },
  { number: "258C", start: "Kempegowda Bus Station", end: "Nelamangala" },
  { number: "266", start: "KR Market", end: "Hesaraghatta I D Farm" },
  { number: "273C", start: "Kempegowda Bus Station", end: "Jalahalli Cross" },
  { number: "276", start: "Kempegowda Bus Station", end: "Vidyaranyapura" },
  { number: "276E", start: "Vidyaranyapura", end: "Shanthinagara" },
  { number: "284", start: "Kempegowda Bus Station", end: "Yelahanka" },
  { number: "285MA", start: "Kempegowda Bus Station", end: "Doddaballapura" },
  { number: "285MC", start: "Shanthinagara", end: "Doddaballapura" },
  { number: "291H", start: "Kempegowda Bus Station", end: "Ramakrishna Hegde Nagar" },
  { number: "293", start: "KR Market", end: "Razakpalya" },
  { number: "293S", start: "Kempegowda Bus Station", end: "Bagaluru" },
  { number: "296Q", start: "Shivajinagara Bus Station", end: "Kannuru" },
  { number: "298M", start: "Kempegowda Bus Station", end: "Devanahalli" },
  { number: "298ME", start: "Kempegowda Bus Station", end: "Devanahalli Govt Hospital" },
  { number: "300H", start: "Kempegowda Bus Station", end: "KR Puram" },
  { number: "302B", start: "Kempegowda Bus Station", end: "Kalyananagara" },
  { number: "305D", start: "Kempegowda Bus Station", end: "Channasandra" },
  { number: "314T", start: "Kempegowda Bus Station", end: "Rameshnagara" },
  { number: "316B", start: "Kempegowda Bus Station", end: "Budigere" },
  { number: "317", start: "KR Market", end: "Hosakote" },
  { number: "317G", start: "Shivajinagara Bus Station", end: "Hosakote" },
  { number: "317TA", start: "KR Market", end: "Tharabanahalli" },
  { number: "333E", start: "Kempegowda Bus Station", end: "Kadugodi" },
  { number: "342F", start: "Kempegowda Bus Station", end: "Sarjapura" },
  { number: "356M", start: "Kempegowda Bus Station", end: "Anekal" },
  { number: "360B", start: "Kempegowda Bus Station", end: "Attibele" },
  { number: "365J", start: "Kempegowda Bus Station", end: "Jigani APC Circle" },
  { number: "375D", start: "Kengeri TTMC", end: "Banashankari TTMC" },
  { number: "401A", start: "Yelahanka", end: "Peenya 2nd Stage" },
  { number: "401K", start: "Yelahanka", end: "Kengeri TTMC" },
  { number: "401M", start: "Yeshawanthapura TTMC", end: "Kengeri TTMC" },
  { number: "402D", start: "Kempegowda Bus Station", end: "Yelahanka New Town 5th Phase" },
  { number: "410", start: "Bommanahalli", end: "Jalahalli Cross" },
  { number: "410FA", start: "Banashankari TTMC", end: "Yeshawanthapura TTMC" },
  { number: "500A", start: "Banashankari TTMC", end: "Hebbala" },
  { number: "500D", start: "Hebbala", end: "Central Silk Board" },
  { number: "501A", start: "Hebbala", end: "Banashankari TTMC" },
  { number: "501BH", start: "Banashankari TTMC", end: "Hebbala" },
  { number: "502H", start: "Kengeri TTMC", end: "Dwarakanagara" },
  { number: "600F", start: "Banashankari TTMC", end: "Attibele" },
  { number: "G6", start: "Shanthinagara TTMC", end: "Shirke" },
  { number: "KBS5H", start: "Kempegowda Bus Station", end: "Harohalli" },
  { number: "TR12", start: "Srinagara", end: "Yeshawanthapura Railway Station" },
  { number: "HS1", start: "Kempegowda Bus Station", end: "Apollo Hospital Bannerughatta Road" },
  { number: "HS2", start: "Kempegowda Bus Station", end: "Supra Hospital, RBI LO, J.P Nagar" },
  { number: "HS3", start: "Kempegowda Bus Station", end: "Rajarajeshwari Hospital" },
  { number: "HS4", start: "Kempegowda Bus Station", end: "Devanahalli General Hospital" },
  { number: "HS5", start: "Kempegowda Bus Station", end: "Ambedkar Medical College, K.G.Halli" },
  { number: "HS6", start: "Kempegowda Bus Station", end: "Hosakote General Hospital" },
  { number: "HS6A", start: "ESI Indiranagara Hospital", end: "Hosakote General Hospital" },
  { number: "HS7", start: "Kempegowda Bus Station", end: "Vaidehi Hospital, Whitefield" },
  { number: "HS8", start: "Kempegowda Bus Station", end: "Nelamanagala General Hospital" },
  { number: "HS9", start: "Kempegowda Bus Station", end: "Sapthagiri Medical College, Chikkabanawara" },
  { number: "HS10", start: "Kempegowda Bus Station", end: "Sakra Hospital, Devarabisanahlli" },
  { number: "HS11A", start: "Banashankari", end: "Banashankari" },
  { number: "HS12", start: "Shanthinagara TTMC", end: "Shanthinagara TTMC" },
  { number: "HS12A", start: "Shanthinagara TTMC", end: "Shanthinagara TTMC" },
  { number: "KIA9", start: "Kempegowda Bus Station", end: "Kempegowda International Airport" }
];

/* ----------------------
   App state & helpers
   ---------------------- */
let simulatedBuses = []; // will hold live-like bus positions
const busMarkers = {};
const mapRouteFilter = document.getElementById('mapRouteFilter');

/* ---------- UI refs ---------- */
const routeListEl = document.getElementById('routeList');
const routeSearch = document.getElementById('routeSearch');
const clearSearchBtn = document.getElementById('clearSearch');
const mapEl = document.getElementById('map');
const ticketQR = document.getElementById('ticketQR');
const ticketInfo = document.getElementById('ticketInfo');
const passInfo = document.getElementById('passInfo');
const savedList = document.getElementById('savedList');
const statRides = document.getElementById('statRides');
const statMoney = document.getElementById('statMoney');
const statCO2 = document.getElementById('statCO2');
const nearbyEl = document.getElementById('nearby');

/* ---------- Build initial UI ---------- */
function initRouteList(routes){
  routeListEl.innerHTML = '';
  routes.forEach(r=>{
    const item = document.createElement('div'); item.className = 'route-item';
    const left = document.createElement('div'); left.className='route-left';
    const num = document.createElement('div'); num.className='route-num'; num.innerText = r.number;
    const stops = document.createElement('div'); stops.className='route-stops'; stops.innerText = `${r.start} → ${r.end}`;
    left.appendChild(num); left.appendChild(stops);

    const right = document.createElement('div');
    // initial simulated crowd % (random for list; map shows bus-level)
    const occ = Math.floor((Math.random()*70)+10); // 10% - 80%
    const badge = document.createElement('div');
    badge.className = 'badge ' + (occ < 33 ? 'low' : occ < 66 ? 'medium' : 'high');
    badge.innerText = `${occ}%`;
    right.appendChild(badge);

    item.appendChild(left); item.appendChild(right);

    // click opens map and filters the route
    item.addEventListener('click', ()=>{
      showPage('map-page');
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      document.querySelector('.nav-btn[data-target="map-page"]').classList.add('active');
      mapRouteFilter.value = r.number;
      filterMapByRoute(r.number);
      // center to first bus of that route if any
      const b = simulatedBuses.find(x=>x.route === r.number);
      if(b && map) map.setView([b.lat,b.lon], 14);
    });

    routeListEl.appendChild(item);
  });
}

/* ---------- Search ---------- */
function doSearch(q){
  q = q.trim().toLowerCase();
  const filtered = ROUTES.filter(r => {
    return r.number.toLowerCase().includes(q) ||
           r.start.toLowerCase().includes(q) ||
           r.end.toLowerCase().includes(q);
  });
  initRouteList(filtered);
}

/* ---------- Map (Leaflet) ---------- */
const map = L.map('map', { zoomControl: true }).setView([12.9716,77.5946], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution:'© OpenStreetMap' }).addTo(map);

/* center-button */
document.getElementById('centerMyLocation')?.addEventListener('click', ()=>{
  if(!navigator.geolocation) return alert('Location not supported');
  navigator.geolocation.getCurrentPosition(pos=>{
    map.setView([pos.coords.latitude, pos.coords.longitude], 14);
  }, ()=>alert('Permission denied'));
});

/* populate map route filter */
function populateMapFilter(){
  ROUTES.forEach(r=>{
    const opt = document.createElement('option'); opt.value = r.number; opt.innerText = r.number + ' • ' + r.start;
    mapRouteFilter.appendChild(opt);
  });
}
populateMapFilter();

/* filter map markers */
function filterMapByRoute(routeNum){
  Object.values(busMarkers).forEach(m => map.removeLayer(m));
  Object.keys(busMarkers).forEach(k => delete busMarkers[k]);
  simulatedBuses.forEach(b => {
    if(routeNum === 'all' || b.route === routeNum) addOrUpdateBusMarker(b);
  });
}

/* ---------- Simulated "live" bus feed ---------- */
function seedSimulatedBuses(){
  simulatedBuses = [];
  // create 20 simulated buses across different routes
  for(let i=0;i<20;i++){
    const r = ROUTES[i % ROUTES.length].number;
    simulatedBuses.push({
      id: 'BUS' + (1000 + i),
      route: r,
      lat: 12.95 + Math.random()*0.14,
      lon: 77.54 + Math.random()*0.16,
      occ: Math.random() // 0..1
    });
  }
}
seedSimulatedBuses();

/* move buses randomly */
function stepSimulatedBuses(){
  simulatedBuses.forEach(b => {
    b.lat += (Math.random()-0.5)*0.0025;
    b.lon += (Math.random()-0.5)*0.0025;
    b.occ = Math.min(1, Math.max(0, b.occ + (Math.random()-0.5)*0.08));
  });
}

/* add or update marker */
function addOrUpdateBusMarker(b){
  const popup = `<b>${b.id}</b><br>Route: ${b.route}<br>Occupancy: ${Math.round(b.occ*100)}%`;
  if(busMarkers[b.id]){
    busMarkers[b.id].setLatLng([b.lat,b.lon]).setPopupContent(popup);
    const el = busMarkers[b.id].getElement();
    if(el) el.querySelector('.bus-pin').style.background = occupancyColor(b.occ);
  } else {
    // create custom div icon
    const div = L.divIcon({
      className: 'bus-divicon',
      html: `<div class="bus-pin" style="background:${occupancyColor(b.occ)};padding:6px 10px;border-radius:8px;color:#fff;font-weight:700;font-size:12px">${b.route}</div>`
    });
    const m = L.marker([b.lat,b.lon], { icon: div }).addTo(map).bindPopup(popup);
    busMarkers[b.id] = m;
  }
}

function occupancyColor(o){
  if(o < 0.33) return '#28a745';
  if(o < 0.66) return '#ffb020';
  return '#dc3545';
}

/* main poll loop (simulated) */
function pollLoop(){
  stepSimulatedBuses();
  // refresh marker set (honors current filter)
  const currentFilter = mapRouteFilter.value || 'all';
  filterMapByRoute(currentFilter);
  // update route list crowd badges to reflect more realistic occupancy (small smoothing)
  updateRouteBadges();
}
setInterval(pollLoop, 3500);
pollLoop();

/* update list badges using simulatedBuses */
function updateRouteBadges(){
  // compute avg occupancy per route
  const byRoute = {};
  simulatedBuses.forEach(b => {
    if(!byRoute[b.route]) byRoute[b.route] = { sum:0, count:0 };
    byRoute[b.route].sum += b.occ;
    byRoute[b.route].count++;
  });
  // update DOM badges in routeList (rebuild quickly)
  const children = Array.from(routeListEl.children);
  children.forEach(child => {
    const num = child.querySelector('.route-num')?.innerText;
    if(num && byRoute[num]){
      const avg = byRoute[num].sum / byRoute[num].count;
      const badge = child.querySelector('.badge');
      if(badge){
        const p = Math.round(avg*100);
        badge.innerText = p + '%';
        badge.className = 'badge ' + (avg < 0.33 ? 'low' : avg < 0.66 ? 'medium' : 'high');
      }
    }
  });
}

/* ---------- Route UI init ---------- */
initRouteList(ROUTES);

/* ---------- Search handlers ---------- */
routeSearch.addEventListener('input', e => {
  doSearch(e.target.value);
});
clearSearchBtn.addEventListener('click', ()=>{ routeSearch.value=''; initRouteList(ROUTES); });

/* open search button */
document.getElementById('open-search').addEventListener('click', ()=>{
  showPage('routes-page');
  document.querySelector('.nav-btn[data-target="routes-page"]').click();
  routeSearch.focus();
});

/* ---------- Bottom nav behavior ---------- */
document.querySelectorAll('.nav-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('.nav-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    showPage(b.dataset.target);
  });
});
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>{ p.classList.add('hidden'); });
  document.getElementById(id).classList.remove('hidden');
  // if map page, ensure map invalidation
  if(id === 'map-page') setTimeout(()=>map.invalidateSize(),300);
}

/* ---------- Tickets & Passes ---------- */
function saveTicketObject(obj){
  const arr = JSON.parse(localStorage.getItem('bb_tickets') || '[]');
  arr.unshift(obj);
  localStorage.setItem('bb_tickets', JSON.stringify(arr));
  renderSaved();
}

function renderSaved(){
  const arr = JSON.parse(localStorage.getItem('bb_tickets') || '[]');
  savedList.innerHTML = '';
  arr.forEach(it => {
    const div = document.createElement('div'); div.className = 'route-item';
    div.innerHTML = `<div>${it.type || 'Ticket'} • ${it.id}</div><div class="muted small">${it.meta}</div>`;
    savedList.appendChild(div);
  });
  // stats update
  const rides = parseInt(localStorage.getItem('bb_rides') || '0', 10);
  statRides.innerText = rides;
  statMoney.innerText = '₹' + (rides * 18).toFixed(0);
  statCO2.innerText = (rides * 0.75).toFixed(1) + ' kg';
}

/* ticket generation with QR */
document.getElementById('genTicketBtn').addEventListener('click', ()=>{
  const name = document.getElementById('ticket_name').value || 'Passenger';
  const route = document.getElementById('ticket_route').value || 'N/A';
  const id = 'TKT-' + Date.now().toString(36).slice(-6).toUpperCase();
  const payload = { id, type: 'Single', name, route, created: new Date().toISOString() };
  // render QR
  ticketQR.innerHTML = '';
  new QRCode(ticketQR, { text: JSON.stringify(payload), width: 140, height: 140 });
  ticketInfo.innerText = `${payload.id} • ${payload.route} • ${payload.name}`;
  saveTicketObject({ id: payload.id, type: 'Single Ticket', meta: `${payload.route} • ${payload.name}`});
  incrementRideCount();
});

/* passes */
function generatePass(kind){
  const id = 'PASS-' + kind.toUpperCase() + '-' + Math.floor(Math.random()*900000 + 100000);
  const now = new Date();
  const days = kind === 'day' ? 1 : kind === 'week' ? 7 : 30;
  const expiry = new Date(now.getTime() + days*24*60*60*1000);
  passInfo.innerText = `${id} • Valid until ${expiry.toDateString()}`;
  saveTicketObject({ id, type: `${kind} pass`, meta: `Valid until ${expiry.toDateString()}` });
  // optionally generate QR for pass
  const payload = { id, type: kind + ' pass', validTill: expiry.toISOString() };
  ticketQR.innerHTML = '';
  new QRCode(ticketQR, { text: JSON.stringify(payload), width: 140, height: 140 });
  incrementRideCount();
}

/* ---------- Stats & rides ---------- */
function incrementRideCount(){
  const prev = parseInt(localStorage.getItem('bb_rides') || '0', 10);
  localStorage.setItem('bb_rides', prev+1);
  renderSaved();
}

/* init saved */
renderSaved();

/* ---------- Nearby stops (Google Maps search) ---------- */
function findNearByStops(){
  if(!navigator.geolocation) return alert('Geolocation not supported by your browser.');
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat = pos.coords.latitude, lon = pos.coords.longitude;
    window.open(`https://www.google.com/maps/search/bus+stop/@${lat},${lon},15z`, '_blank');
  }, ()=>alert('Location permission denied.'));
}

/* ---------- small utility: show initial map markers ---------- */
function loadInitialMapMarkers(){
  simulatedBuses.forEach(b => addOrUpdateBusMarker(b));
}
loadInitialMapMarkers();

/* allow filtering by mapRouteFilter select */
mapRouteFilter.addEventListener('change', (e)=>{
  filterMapByRoute(e.target.value);
});

/* ensure route list shows initial set (ROUTES) */
initRouteList(ROUTES);

/* ensure search placeholder hint */
routeSearch.placeholder = "Search route number or stop name (e.g., 500D or Kempegowda)";

/* Accessibility small improvements */
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState === 'visible') map.invalidateSize(); });

/* End of script */
