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
     
      
     // console.log(enteredmail,enteredpassword)
      let login=document.getElementById("logIn")
     login.addEventListener("click",LoginUser)
    
      async function LoginUser(event){
        let enteredmail=document.getElementById("enteredmail").value;
      let enteredpassword=document.getElementById("enteredpassword").value;
        event.preventDefault()

        try {
          let res=await fetch('https://gbp-temp-api.onrender.com/comments');
          let data=await res.json()
          console.log(data)
          logindata(data)
        } catch (error) {
          console.log(error)
        }
      }
    //  LoginUser()

    function logindata(data){
      for(let el of data){
        if(el.Mail==enteredmail&&el.pass==enteredpassword){
          alert("successefull login")
        }
        else{
          alert("something went wrong")
        }
      }
    }
      

