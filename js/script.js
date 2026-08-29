const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

  // Buka / tutup sidebar saat tombol hamburger diklik
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Otomatis tutup sidebar saat salah satu link navigasi diklik
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });