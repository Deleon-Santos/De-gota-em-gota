


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

  document.addEventListener('DOMContentLoaded', function() {
    const botaoTopo = document.getElementById('button-topo');
  
    if (botaoTopo) {
      // Função para verificar a posição da rolagem e atualizar a visibilidade do botão
      function verificarPosicaoScroll() {
        if (window.scrollY === 0) {
          botaoTopo.style.display = 'none';
        } else {
          botaoTopo.style.display = 'block'; // Ou 'flex' ou o display que você estiver usando
        }
      }
  
      // Chama a função inicialmente para verificar se já estamos no topo
      verificarPosicaoScroll();
  
      // Adiciona um listener para o evento de scroll da janela
      window.addEventListener('scroll', verificarPosicaoScroll);
  
      // Adiciona o listener para o clique no botão para voltar ao topo
      botaoTopo.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });


  