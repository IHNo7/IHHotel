(function(){
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.querySelector('.main-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  function setupCompare(id){
    var el = document.getElementById(id);
    if(!el) return;
    var top = el.querySelector('.img-top');
    var slider = el.querySelector('.slider');
    function update(){ top.style.width = slider.value + '%'; }
    slider.addEventListener('input', update);
    update();
  }
  document.addEventListener('DOMContentLoaded', function(){ setupCompare('compare1'); });

  var form = document.querySelector('.booking-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('感謝您的預約申請！我們將盡快聯絡您（示範）。');
      form.reset();
    });
  }
})();
