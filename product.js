async function FetchData(){
    try{
      let res=await fetch("https://gbp-temp-api.onrender.com/product")
           res=await res.json()
          console.log(res)
          DisplayProduct(res)
    }catch(err){
      console.log(err)
    }
}
FetchData()

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