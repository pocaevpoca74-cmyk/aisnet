/* AISNET enhance.js — galeri, yorumlar, harita ve animasyonlar ekler.
   GALLERY: [{src:"img/foto1.jpg", alt:"Açıklama"}]
   REVIEWS: [{name:"Aizada", stars:5, ky:"Тез жана сапаттуу!", ru:"Быстро и качественно!"}]
   Boş listeler = bölüm görünmez (sahte içerik yok). */
(function(){
var GALLERY=[],REVIEWS=[];
var q=document.querySelector.bind(document),contact=q("#contact");
if(!contact)return;
function sec(id,ky,ru,body){
 var s=document.createElement("section");s.id=id;
 s.innerHTML='<h2 class="ky">'+ky+'</h2><h2 class="ru">'+ru+'</h2>'+body;
 contact.parentNode.insertBefore(s,contact);return s;
}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
if(GALLERY.length)sec("gallery","Биздин иш","Наши работы",'<div class="gal">'+GALLERY.map(function(g){return'<img loading="lazy" decoding="async" src="'+esc(g.src)+'" alt="'+esc(g.alt||"")+'">'}).join("")+'</div>');
if(REVIEWS.length)sec("reviews","Кардарлардын пикири","Отзывы клиентов",'<div class="revs">'+REVIEWS.map(function(r){var n=Math.max(1,Math.min(5,r.stars|0||5));return'<div class="rev"><div class="st" aria-label="'+n+'/5">'+"★".repeat(n)+"☆".repeat(5-n)+'</div><p class="ky">'+esc(r.ky||r.ru||"")+'</p><p class="ru">'+esc(r.ru||r.ky||"")+'</p><b>'+esc(r.name||"")+'</b></div>'}).join("")+'</div>');
var m=sec("map","Биз кайдабыз","Как нас найти",'<div class="mapbox"><iframe loading="lazy" title="AISNET map" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Jalal-Abad+Tumonbay+Baizakov+34&amp;output=embed"></iframe></div>');
var nav=q(".links"),lang=q(".lang");
function link(h,ky,ru){var a=document.createElement("a");a.href=h;a.innerHTML='<span class="ky">'+ky+'</span><span class="ru">'+ru+'</span>';nav.insertBefore(a,q("#theme"))}
if(GALLERY.length)link("#gallery","Галерея","Галерея");
if(REVIEWS.length)link("#reviews","Пикирлер","Отзывы");
link("#map","Карта","Карта");
if("IntersectionObserver" in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
 document.querySelectorAll(".grid .svc,.steps li").forEach(function(el,i){el.style.setProperty("--d",(i%6)*.07+"s");io.observe(el)});
}else document.querySelectorAll(".grid .svc,.steps li").forEach(function(el){el.classList.add("in")});
})();
