async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product")
           res=await res.json()
        //  console.log(res)
         displaydata(res)
    }catch(err){
      console.log(err)
    }
}

FetchData()

let sortdata=[]
function displaydata(data){
let Women=data.filter((ele,ind)=>{
    if(ele.catogory=="women"){
      return ele
    }
  })
  //console.log(Women)
  sortdata=[...Women]
 // console.log(sort)
  DisplayProduct(Women)
}


let CartArr=JSON.parse(localStorage.getItem("cart"))||[]
let Container=document.getElementById("product-container")


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
        add_to_cart.addEventListener("click",()=>{
            if(checkDuplicate(product)){
              alert("Product Already in Cart")
            }else{
              CartArr.push({...product,quantity:1})
              localStorage.setItem("cart",JSON.stringify(CartArr))
              alert("Product Added To Cart")

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

let sortBtn=document.getElementById("filter")
sortBtn.addEventListener("click",()=>{
    let selected=document.querySelector("select").value;
     console.log(selected)
    if(selected=="HTL"){
        sortdata.sort((a,b)=>b.price-a.price)
    }
   if(selected=="LTH"){
     
    sortdata.sort((a,b)=>a.price-b.price)

   }
   console.log(sortdata)
   DisplayProduct(sortdata)
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