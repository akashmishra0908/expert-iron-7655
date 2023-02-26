let CartArr=JSON.parse(localStorage.getItem("cart"))||[]

let Container=document.getElementById("product-container")

let sup=document.getElementById("super")

console.log(CartArr)

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




// sorting started here

let sortBtn=document.getElementById("filter")
// let sort_high=document.getElementById("high_to_low")
// let sort_low=document.getElementById("low_to_high")







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
            }else{
        
              
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

FetchData()