document.querySelector('button').addEventListener('click',function(){
document.querySelector('.popup').style.display='none' ;  
}) 


document.getElementById('arrowScroll').addEventListener('mouseenter', function(e) {
  window.scrollBy({ top: 900, left: 0, behavior: 'smooth' });
});
