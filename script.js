/// main.js - small, clear interactions (nav toggle, quick view modal, year)
document.addEventListener('DOMContentLoaded', function(){
  // set year
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // nav toggle for mobile
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('active')
    });
  }

  // Quick view modal (shop)
  var quickButtons = document.querySelectorAll('.quick-view');
  var modal = document.getElementById('quick-modal');
  var modalClose = document.getElementById('modal-close');
  if(quickButtons && modal){
    quickButtons.forEach(function(btn){
      btn.addEventListener('click', function(e){
        var card = e.target.closest('.product-card');
        if(!card) return;
        var name = card.dataset.name || card.querySelector('h3')?.innerText || '';
        var price = card.dataset.price || card.querySelector('.price')?.innerText || '';
        var img = card.dataset.img || card.querySelector('img')?.src || '';
        var desc = card.dataset.desc || card.querySelector('desc')?.innerText ||'';
        document.getElementById('modal-name').innerText = name;
        document.getElementById('modal-price').innerText = price;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.setAttribute('aria-hidden','false');
      });
    });

    if(modalClose){
      modalClose.addEventListener('click', function(){
        modal.setAttribute('aria-hidden','true');
      });
    }

    // close on overlay click
    modal.addEventListener('click', function(e){
      if(e.target === modal) modal.setAttribute('aria-hidden','true');
    });
  }

  // CTA "View Catalogue" button (scroll or navigate)
  var viewCatalogue = document.getElementById('view-catalogue');
  if(viewCatalogue){
    viewCatalogue.addEventListener('click', function(){
      window.location.href = 'shop.html';
    });
  }
});
//current year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}