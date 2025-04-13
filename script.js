
//   const toggle = document.getElementById('menuToggle');
//   const menu = document.getElementById('menuNavegacao');

//   toggle.addEventListener('click', () => {
//     menu.classList.toggle('show');
//   });
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menuNavegacao');

  // Alternar visibilidade ao clicar no botão
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique no botão feche o menu imediatamente
    menu.classList.toggle('show');
  });

  // Fechar menu se clicar fora dele
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove('show');
    }
  });



  