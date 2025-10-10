
(function(){
  const navToggle=document.querySelector('.nav-toggle');const nav=document.getElementById('nav');
  if(navToggle&&nav){navToggle.addEventListener('click',()=>{const exp=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!exp));nav.classList.toggle('open');});}
  const y=document.getElementById('year');if(y){y.textContent=new Date().getFullYear();}
  const amt=document.getElementById('amount');const pfAmt=document.getElementById('pf_amount');const ppBtn=document.getElementById('paypalBtn');
  function sync(){if(!amt)return;const value=Math.max(10,parseFloat(amt.value||0)||0).toFixed(2);if(pfAmt)pfAmt.value=value;if(ppBtn){const url=new URL(ppBtn.href);url.searchParams.set('amount',value);ppBtn.href=url.toString();}}
  if(amt){amt.addEventListener('input',sync);sync();}
})();
// --- Auto-load footer across all pages ---
document.addEventListener("DOMContentLoaded", () => {
  fetch("/partials/footer.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(err => console.error("Footer load error:", err));
});
