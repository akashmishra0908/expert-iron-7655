let alrdy = document.getElementById("already");
// console.log("hoi");
alrdy.addEventListener("click", function () {
  document.getElementById("signIn").style.display = "none";
  document.getElementById("logIn").style.display = "block";
})




let signup = document.getElementById("sign")
signup.addEventListener("click", RegisterUser)
async function RegisterUser(event) {
  event.preventDefault()
  let n = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  let Repassword = document.getElementById("Repassword").value;
  if (password == Repassword) {
    try {
        const obj = {
        Name: n,
        Mail: mail,
        Pass: password,
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

let userObj = JSON.parse(localStorage.getItem("userdata")) || [];
// // console.log
//  // console.log(enteredmail,enteredpassword)
//  let username=userObj.Mail;
let login = document.getElementById("log")
login.addEventListener("click", LoginUser)

async function LoginUser(event) {
  var enteredmail = document.getElementById("enteredmail").value;
  var enteredpassword = document.getElementById("enteredpassword").value;
  event.preventDefault()

  try {
    if (userObj.Mail == enteredmail && userObj.Pass == enteredpassword) {
      let res = await fetch('https://gbp-temp-api.onrender.com/comments');
      let data = await res.json()
      console.log(data);
      alert("login succesfully !!!!");
    }
    else {
      alert("opps");
    }
  } catch (error) {
    console.log(error)
  }
}





