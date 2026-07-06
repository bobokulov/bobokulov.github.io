const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light') document.body.classList.add('light');
if(toggle){
  toggle.textContent = document.body.classList.contains('light') ? '☾' : '☼';
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☾' : '☼';
  });
}
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
