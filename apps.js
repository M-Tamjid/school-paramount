let menu = document.querySelector('#menu');
let nav = document.querySelector('ul');

menu.onclick=()=>{
  menu.classList.toggle('fa-xmark');
  nav.classList.toggle('active');
}
onscroll=()=>{
  menu.classList.remove('fa-xmark');
  nav.classList.remove('active');
}