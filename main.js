const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const nav = document.querySelector('.navbar');
const slide=document.querySelectorAll('.cover');
let index=0;
let cupList=[ `<iframe class="d-cupcake" src='https://my.spline.design/untitledcopy-9fed98a111675808c081397bcf2e95c1/' frameborder='0' width='100%' height='100%'></iframe>`, `<iframe class="d-cupcake" src='https://my.spline.design/untitled-cbd6be1503802087ade556a7a245b934/' frameborder='0' width='100%' height='100%'></iframe>`,`<iframe  class="d-cupcake" src='https://my.spline.design/untitledcopycopycopy-729b008ab26d51c4cb9dccce2b29c66d/' frameborder='0' width='100%' height='100%'></iframe>`,`<iframe class="d-cupcake"  src='https://my.spline.design/spicedcinammon-ebcb8ce8b601a0b1bc6d990596506f4d/' frameborder='0' width='100%' height='100%'></iframe>`,`<iframe class="d-cupcake" src='https://my.spline.design/untitledcopycopycopycopy-2ef30cacaaae1d7c3ecf6acd93a6f68f/' frameborder='0' width='100%' height='100%'></iframe>`]
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  nav.classList.toggle('is-active');
});
slide.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    slide.innerHTML = "Show More";
  });

  slide.addEventListener('mouseout', () => {
    slide.innerHTML = ""; 
  });
});
function change(direction){
  element=document.querySelector(".cupcakes");
  if(direction){
    index++;
    if(index==cupList.length)index=0;
  } 
  else {
    index--;
    if(index==-1)index=cupList.length-1;
  }
  element.innerHTML=cupList[index];
}




  



