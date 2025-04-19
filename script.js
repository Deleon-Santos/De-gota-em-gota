
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menuNavegacao');

  
  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); 
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
      function verificarPosicaoScroll() {
        if (window.scrollY === 0) {
          botaoTopo.style.display = 'none';
        } else {
          botaoTopo.style.display = 'block'; 
        }
      }
  
      verificarPosicaoScroll();
  
      window.addEventListener('scroll', verificarPosicaoScroll);
  
      botaoTopo.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
          top: 0,         
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
  
    function mostrarSlide(index) {
      slides.forEach(slide => slide.classList.remove('ativo'));
      slides[index].classList.add('ativo');
    }
  
    function proximoSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Volta para o primeiro slide
      }
      mostrarSlide(currentIndex);
    }
  
    // Mostra o primeiro slide inicialmente
    mostrarSlide(currentIndex);
  
    // Define o intervalo para trocar os slides automaticamente (a cada 3 segundos, por exemplo)
    setInterval(proximoSlide, 3000); // 3000 milissegundos = 3 segundos
  });
  