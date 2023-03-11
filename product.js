let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

let Container=document.getElementById("product-container")

let sup=document.getElementById("super")


// catching page buton 
let first=document.getElementById("first")
let second=document.getElementById("second")
let third=document.getElementById("third")
let fourth=document.getElementById("fourth")
let next=document.getElementById("next")
// let prev=document.getElementById("prev")

// fetching data starts
async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product?_limit=16&_page=1")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}

// fetching data ends


// sorting started here

let sortBtn=document.getElementById("filter")







sortBtn.addEventListener("change",async()=>{


    try{
      if(sortBtn.value=="High TO LOW"){ 
          let res=await fetch("https://gbp-temp-api.onrender.com/product?_sort=price&_order=desc")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
        }
   else{     let res=await fetch("https://gbp-temp-api.onrender.com/product?_sort=price&_order=asc")
   res=await res.json()
  console.log(res)
  DisplayProduct(res)}
          // FetchData(res)
    }
    catch(err){
      console.log(err)
    }

console.log(sortedData)
  DisplayProduct(sortedData)
  

})

// sorting ended


// function to display products
function DisplayProduct(data){
 
  Container.innerHTML=""
    data.forEach((product)=>{
        let card=document.createElement("div")
        card.setAttribute("class","cards")
        let image=document.createElement("img")
        let category=document.createElement("p")
        let title=document.createElement("p")
        let price=document.createElement("h4")
        let add_to_cart=document.createElement("button")
          add_to_cart.textContent="Add to Cart"
          image.src=product.image;
          category.textContent=product.catogory;
          price.textContent=`₹${product.price}`;
          title.textContent=product.title
          sup.innerText=CartArr.length
        add_to_cart.addEventListener("click",()=>{
            if(checkDuplicate(product)){
              alert("Product Already in Cart")
              // add_to_cart.innerText="Added!"
            }
            else{
              CartArr.push({...product,quantity:1})
              localStorage.setItem("cart",JSON.stringify(CartArr))
              alert("Product Added To Cart")
            
              console.log(CartArr)
              sup.innerText=CartArr.length
    
             add_to_cart.innerText="Added!"
            }
        })
          card.append(image,price,title,category,add_to_cart)
          Container.append(card)
    })
}




//    function to check duplicates
function  checkDuplicate(product){
    for(let i=0;i<CartArr.length;i++){
      if(CartArr[i].id===product.id){
        return true
      }
    }
    return false
}


// adding event listner in buttons  for pagination
first.addEventListener("click",()=>{
  async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product?_limit=16&_page=1")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()
})
second.addEventListener("click",()=>{
  async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product?_limit=16&_page=2")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()
})
third.addEventListener("click",()=>{
  async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product?_limit=16&_page=3")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()
})
fourth.addEventListener("click",()=>{
  async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product?_limit=16&_page=4")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()
// fourth.style.backgroundColor="teal"
})
let i=1
next.addEventListener("click",()=>{
//  for(let i=0;i<5;i++){
  i++
    async function FetchData(){
    try{
      let res=await fetch(`https://gbp-temp-api.onrender.com/product?_limit=16&_page=${i}`)
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()

//  }
    i<5
    if(i>=4){
             i=1
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
// pagenation ending here






FetchData()