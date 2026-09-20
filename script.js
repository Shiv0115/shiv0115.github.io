const btn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
btn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const sections=[...document.querySelectorAll("main section[id]")];
window.addEventListener("scroll",()=>{
 let current="home";
 sections.forEach(s=>{if(window.scrollY+120>=s.offsetTop)current=s.id});
 document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
},{passive:true});
document.getElementById("year").textContent=new Date().getFullYear();
