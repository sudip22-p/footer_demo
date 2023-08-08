const btn = document.getElementsByClassName("btn")[0];
const body=document.body;
const footer=document.getElementsByTagName("footer")[0];
const as=document.getElementsByTagName("a");
btn.addEventListener("click",()=>{
    btn.classList.toggle("dark_mode");
    body.classList.toggle("dark_body");
    footer.classList.toggle("dark_footer");
    for(i=0;i<as.length;i++){
        as[i].classList.toggle("white");
    }
    const btnMode = btn.textContent;
    if(btnMode=="Dark"){
        btn.textContent="Light";
    }else{
        btn.textContent="Dark";
    }
});