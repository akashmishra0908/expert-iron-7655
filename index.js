
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
let span=document.getElementById("span");
let res=localStorage.getItem("user");
span.innerText=res;
span.addEventListener("click",function(){
    localStorage.removeItem("user");
    localStorage.removeItem("userLoggedIn")
    window.location.reload();
    alert("Logout succesfully!!!!")
    localStorage.removeItem("cart")
})
// window.addEventListener("click",()=>{
//     alert("Plaese login first!")
//     window.location.assign("signUp.html")
// })
