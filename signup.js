let alrdy=document.getElementById("already");
// console.log("hoi");
alrdy.addEventListener("click",function(){
    document.getElementById("signIn").style.display="none";
    document.getElementById("logIn").style.display="block";
})

let n=document.getElementById("name").value;
let mail=document.getElementById("mail").value;
let password=document.getElementById("password").value;
let Repassword=document.getElementById("Repassword").value;
console.log(n)
console.log(mail)
console.log(password)
console.log(Repassword)

let signup=document.getElementById("sign")
signup.addEventListener("click",RegisterUser)
    async function RegisterUser(event){
        event.preventDefault()
       if(password==Repassword){
        try {
          
            const obj = { 
                Name:n,
                Mail:mail,
                Pass:password,
               
         
                 }

          
       console.log(obj)
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
      let userAuthToken=localStorage.getItem("localAccessToken")||null
      let userId=localStorage.getItem("userId")||null
      let enteredmail=document.getElementById("enteredmail").value;
      let enteredpassword=document.getElementById("enteredpassword").value;
      console.log(enteredmail,enteredpassword)
      let login=document.getElementById("logIn")
   //   login.addEventListener("click",LoginUser)
    //   function LoginUser(){
    //     const login_details = {
    //       username : enteredmail.value,
    //       password : enteredpassword.value
    //     }
      
    //     const login_request = fetch(`https://gbp-temp-api.onrender.com/comments`,{
    //       method : 'POST',
    //       headers : {
    //         "Content-Type" : 'application/json'
    //       },
    //       body : JSON.stringify(login_details)
    //     }).then((response)=>{
    //       return response.json();
      
    //     }).then((token)=>{console.log(token)
          
    //       localStorage.setItem("localAccessToken",token.accessToken)
    //       localStorage.setItem("userId",token.user.id)
        
    //     }).catch((error)=>{
    //       console.log(error);
    //     });
      
    //   }
      

