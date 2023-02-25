let sub = document.getElementById("sub_btn")

sub.addEventListener("click", async (e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let img = document.getElementById("imgurl").value
    let cat = document.getElementById("gender").value
    let price = document.getElementById("price").value

    
    let emObj = {
        	title,
        	img,cat,price
           }
           
        	 await fetch(`https://gbp-temp-api.onrender.com/product`,{
        	  method: 'POST',
        	  headers:{"Content-Type":"application/json"},
        	  body: JSON.stringify(emObj)
        	 })
          
        	 alert("New Product Added successfully")
})

