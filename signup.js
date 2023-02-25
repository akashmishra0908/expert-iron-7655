let alrdy = document.getElementById("already");
// console.log("hoi");
alrdy.addEventListener("click", function () {
  document.getElementById("signIn").style.display = "none";
  document.getElementById("logIn").style.display = "block";
})




let form1=document.getElementById("signIn")
let signup=document.getElementById("sign")
signup.addEventListener("click",RegisterUser)
    async function RegisterUser(event){
        event.preventDefault()
 let n=document.getElementById("name").value;
let mail=document.getElementById("mail").value;
let password=document.getElementById("password").value;
let Repassword=document.getElementById("Repassword").value;
       if(password==Repassword){
        try {
          
            const obj = { 
                Name:n,
                Mail:mail,
                Pass:password,
               
         
                 }

          
     //  console.log(obj)
            let register_request = await fetch(`https://gbp-temp-api.onrender.com/comments`,{
              method : 'POST',
              headers : {
                "Content-Type" : 'application/json'
              },
              body : JSON.stringify(obj)
            }) 
            
            console.log(register_request);
                  form1.reset()
            
        } catch (error) {
          console.log(error);
        }
       }
       else{
        alert("Password is not same")
       }

      }
      //  console.log(obj)
      let register_request = await fetch(`https://gbp-temp-api.onrender.com/comments`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(obj)
      })
      userObj.push(obj);
      localStorage.setItem("userdata", JSON.stringify(userObj));
      console.log(obj);
      alert("Signup Succesfull !!");


    } catch (error) {
      console.log(error);
    }
  }
  else {
    alert("Password is not same")
  }
}

////login user

     
      
       let form=document.getElementById("logIn")   
      
document.getElementById('log').addEventListener('click',(e)=>{
  e.preventDefault()
  //console.log("sign in");
  fetch('https://gbp-temp-api.onrender.com/comments')
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data);
    let verify= verifyUser(data);
    if(verify){
      alert("ok done")
      form.reset()
      localStorage.setItem('userLoggedIn', true);
      window.location.assign("home.html")
    
    }else{
      alert('wrong cred!................')
      form.reset()
    }
  })
})

    
function verifyUser(data){
  let enteredmail=document.getElementById("enteredmail").value;
    let enteredpassword=document.getElementById("enteredpassword").value;

  let flag= false
  data.forEach((element) => {
    if(element.Mail == enteredmail){
      if(element.Pass == enteredpassword){
        flag=true;
      }
    }
  })

  return flag
}
     // console.log(enteredmail.value)

      









