let Cart =JSON.parse(localStorage.getItem("cart"))||[]
let buy=document.querySelector(".buy")
let sup=document.getElementById("super")
sup.innerText=Cart.length
let emptyCart=document.querySelector("h3")
let Container=document.getElementById("cart-container")
let flex_container=document.getElementById("flex_container")
let total =document.getElementById("cart-total")
function displaydata(){
  Container.innerHTML=""
// flex_container.innerHTML=""
  Cart.forEach((product) => {
    let card = document.createElement("div");
    card.setAttribute("id","card")
    let image = document.createElement("img");
    let category = document.createElement("p");
    let title = document.createElement("p");
    let quantity = document.createElement("span");
    let price = document.createElement("h4");
    let Remove = document.createElement("button");
    Remove.setAttribute("id","remove")
    let Increment = document.createElement("button");
    let Decrement = document.createElement("button");
   
    quantity.textContent=product.quantity
    Remove.textContent = "Remove";
    Decrement.textContent="-"
    Increment.textContent="+"
    image.src = product.image;
    category.textContent = product.category;
    price.textContent = "RS."+product.price;
    title.textContent = product.title;
    console.log(price.textContent)
    Remove.addEventListener("click",()=>{
     Cart=Cart.filter((ele)=>{
      return ele.id!==product.id
     })
     localStorage.setItem("cart",JSON.stringify(Cart))
     displaydata()
    });
    Increment.addEventListener("click", () => {
      product=product.quantity++
      localStorage.setItem("cart",JSON.stringify(Cart))
      displaydata()
    });
    Decrement.addEventListener("click", () => {
      if(product.quantity>1){
        product=product.quantity--
      localStorage.setItem("cart",JSON.stringify(Cart))
      displaydata()
      }
    });
    card.append(image,price, title, category,Decrement,quantity,Increment,Remove);
    Container.append(card);
    // flex_container.append(card)
  })
  let sum=0
  for(let i=0;i<Cart.length;i++){
    sum+=Cart[i].price*Cart[i].quantity
  }
total.textContent=sum
localStorage.setItem("price",sum)
localStorage.setItem("cart-length",Cart.length)

}
if(Cart.length>0){
  displaydata()
}
else{
  emptyCart.innerText=`Cart is empty SHOP NOW!` 
 buy.innerText=""
 buy.style.backgroundColor="white"
 buy.style
}

let check=localStorage.getItem("userLoggedIn")
// console.log(check)
buy.addEventListener("click",()=>{
  if(check=="true"){
    window.location.assign("./address.html");

}
else{
  alert("Login to continue..")
  window.location.assign("./signup.html");
}
})
let span=document.getElementById("span");
let res=localStorage.getItem("user");
span.innerText=res;
span.addEventListener("click",function(){
    localStorage.removeItem("user");
    localStorage.removeItem("userLoggedIn");
    window.location.reload();
    alert("Logout succesfully!!!!");
})


