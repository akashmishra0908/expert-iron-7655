const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

const productCount = 0;






allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

window.addEventListener("load", () => {
  
	//inside put a function name
	 Deletecart()
	  
	});

let arr = JSON.parse(localStorage.getItem("register-Data")) || [];


let container = document.getElementById("userinput");
// let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];
// let totalprice =document.getElementById("total-price");
function display(data){
    userinput.innerHTML = null;
    // let total = 0;
    data.forEach(function (ele,index){
        // total += Number(ele.price)
        let product = document.createElement("tr");
        // let  img = document.createElement("img");
        //  img.src = ;

        let email = document.createElement("td");
        email.textContent = ele.email

        let number = document.createElement("td");
        number.textContent = ele.mobile
		

		let password = document.createElement("td");
        password.textContent = ele.password

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
		deleteBtn.style='font-size: 10px;padding: 6px 16px;color: var(--light);border-radius: 20px;font-weight: 700;background: var(--blue);'
        deleteBtn.addEventListener("click",function(){
         Deletecart(index);
        })
        product.append( email,number,password,deleteBtn);
        container.append(product);
    })
    //  totalprice.textContent=total
}

// display(arr)



function Deletecart(index){
    let Deletedcart = arr.filter(function(el,i){
        return i != index;
    })
    display(Deletedcart);
     localStorage.setItem("register-Data",JSON.stringify(Deletedcart))
}
// emd


const store = document.getElementById("mystore")
const main = document.getElementById("mainsection")

store.addEventListener("click", ()=>{
	fetchAndRenderData()

	
})
 

async function fetchAndRenderData(){
	const res =await  fetch("https://gbp-temp-api.onrender.com/product")
	const data = await res.json()
	renderCardList(data)
  }






  async function user(){

	const res = await fetch("https://gbp-temp-api.onrender.com/comments")
	const data = await res.json()
	displayUser(data)
  }
  user()

function displayUser(data){
	userinput.innerHTML = null;
	data.forEach(function(element,index){
		console.log(element)
		let product = document.createElement("tr");

		let name = document.createElement("td");
        name.textContent = element.Name
		let email = document.createElement("td");
        email.textContent = element.Mail

		let password = document.createElement("td");
        password.textContent = element.Pass

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
		deleteBtn.style='font-size: 10px;padding: 6px 16px;color: var(--light);border-radius: 20px;font-weight: 700;background: var(--blue);'
		deleteBtn.addEventListener("click",function(){
			 DeleteUser(element.id);
			
		   })
		product.append(name, email,password,deleteBtn);
        container.append(product);
	})
}

async function DeleteUser(index){
	await fetch(`https://gbp-temp-api.onrender.com/comments/${index}`,{
		method: 'DELETE',
		headers:{"Content-Type":"application/json"},
	   })

	   user()
}





{/* <input type="submit" id="submit" value="Submit"></input> */}
  function renderCardList(cardData) {
	let cardList = `

	  <h1 class="product_list_heading">Product List</h1>
	  <div class="card-list">
		${cardData
		  .map((item) =>
			getCard(
			  item.id,
			  item.title,
			  item.image,
			  item.price,
			  item.catogory
			)
		  )
		  .join("")}
	  </div>
	`;
//    main.innerHTML = null;
      main.innerHTML = cardList;
    // let deleteCard = document.querySelectorAll(".card_dtl") 


  }

  function getCard(id, name, image, price, catogory) {
	let card = `
		<div class="card" data-id=${id} >
		  <div class="card__img">
		  <img class="card__img" src=${image} alt="#" />
		  </div>
		  <div class="card__body">
			<h3 id="h3" class="card__item card__title">${name}</h3>
			<div>${catogory}</div>
			<div class="card__item card__description">Rs. 
			  ${price}
			</div>
			
			<div>
			<button onClick="deleteobj(${id})" data-id=${id} class="card_dtl">delete</button>
			</div>
			
		  </div>
		</div>
	`;
	return card;
  }
  
 
 async function deleteobj(id){

	await fetch(`https://gbp-temp-api.onrender.com/product/${id}`,{
		method: 'DELETE',
		headers:{"Content-Type":"application/json"},
	   })
	
	   fetchAndRenderData()

  }
    



  