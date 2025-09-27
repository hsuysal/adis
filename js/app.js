const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const backdrop = document.getElementById('sidebarBackdrop');

const DESKTOP_COLLAPSED_KEY = 'akis_sidebar_collapsed';

/* Başlangıçta masaüstü tercihlerini uygula */
function applyDesktopPreference(){
  if (window.innerWidth >= 992){
    const collapsed = localStorage.getItem(DESKTOP_COLLAPSED_KEY) === '1';
    document.body.classList.toggle('sidebar-collapsed', collapsed);
  }else{
    document.body.classList.remove('sidebar-collapsed');
  }
}
applyDesktopPreference();

/* Ekran boyutu değişince davranışı güncelle */
window.addEventListener('resize', applyDesktopPreference);

/* Toggle tıklaması */
toggleBtn?.addEventListener('click', ()=>{
  if (window.innerWidth < 992){
    // Mobil: sidebar .open
    sidebar.classList.toggle('open');
  }else{
    // Masaüstü: body.sidebar-collapsed
    const willCollapse = !document.body.classList.contains('sidebar-collapsed');
    document.body.classList.toggle('sidebar-collapsed', willCollapse);
    localStorage.setItem(DESKTOP_COLLAPSED_KEY, willCollapse ? '1' : '0');
  }
});

/* Backdrop tıklaması: kapat */
backdrop?.addEventListener('click', ()=>{
  if (window.innerWidth < 992){
    sidebar.classList.remove('open');
  }else{
    document.body.classList.remove('sidebar-collapsed');
    localStorage.setItem(DESKTOP_COLLAPSED_KEY, '0');
  }
});

/* Mobilde bir linke tıklayınca kapat */
document.querySelectorAll('#sidebar a').forEach(a=>{
  a.addEventListener('click', ()=>{
    if (window.innerWidth < 992){
      sidebar.classList.remove('open');
    }
  });
});

/* Footer yılı */
const yilSpan = document.getElementById('yil');
if (yilSpan){
  yilSpan.textContent = new Date().getFullYear();
}
