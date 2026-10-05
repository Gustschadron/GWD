(function(){var K='gwd-consent',b=document.getElementById('cb');
function set(v){try{localStorage.setItem(K,v)}catch(e){}b.hidden=true}
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
if(!get())b.hidden=false;
document.getElementById('cb-yes').onclick=function(){set('all')};
document.getElementById('cb-no').onclick=function(){set('necessary')};
document.querySelectorAll('.cookie-settings').forEach(function(a){a.onclick=function(e){e.preventDefault();try{localStorage.removeItem(K)}catch(x){}b.hidden=false;document.getElementById('cb-no').focus()}});
var f=document.getElementById('cf');if(f)f.onsubmit=function(e){e.preventDefault();if(f.website.value)return;
location.href='mailto:'+f.dataset.to+'?subject='+encodeURIComponent('Contact via website: '+f.name.value)+'&body='+encodeURIComponent(f.message.value+'\n\n'+f.name.value+' ('+f.email.value+')')}})();
(function(){var els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){els.forEach(function(x){x.classList.add('in')});return}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
els.forEach(function(x){io.observe(x)})})();
