let alrdy=document.getElementById("already");
// console.log("hoi");
alrdy.addEventListener("click",function(){
    document.getElementById("signIn").style.display="none";
    document.getElementById("logIn").style.display="block";
})




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
            
        } catch (error) {
          console.log(error);
        }
       }
       else{
        alert("Password is not same")
       }
      }

////login user
     
      
          
      
document.getElementById('logIn').addEventListener('click',(e)=>{
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
    
    }else{
      alert('wrong cred!................')
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

      

