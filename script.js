


  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menuNavegacao');

  
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique no botão feche o menu imediatamente
    menu.classList.toggle('show');
  });

  
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove('show');
    }
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const menuToggle = document.getElementById('menuToggle');
  //   const menuNavegacao = document.getElementById('menuNavegacao');
  
  //   menuToggle.addEventListener('click', function() {
  //     menuNavegacao.classList.toggle('show');
  //     if (menuNavegacao.classList.contains('show')) {
  //       menuNavegacao.style.maxHeight = menuNavegacao.scrollHeight + 'px';
  //     } else {
  //       menuNavegacao.style.maxHeight = '0';
  //     }
  //   });
  // });


  