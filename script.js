


let darkmode=document.querySelector('#darkmode');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('bxs-moon'))
    {
    darkmode.classList.replace('bxs-moon','bxs-sun');
    document.body.classList.add('active');
   }
   else
   {
    darkmode.classList.replace('bxs-sun','bxs-moon') ;
    document.body.classList.remove('active');
   }
}




