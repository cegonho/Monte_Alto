// JS simples para formulários (exemplo)
(function(){
  const fc = document.getElementById('formContacto');
  if(fc){
    fc.addEventListener('submit', function(e){
      e.preventDefault();
      const ok = document.getElementById('ok-contacto');
      if(ok){ ok.style.display = 'block'; }
      fc.reset();
    });
  }
})();