selected = false;
function Male(){
  document.getElementById("gender").innerHTML = "Male";
  selected = true;
}
function Nottosay(){
document.getElementById("gender").innerHTML = "Not to say";  
   selected = true;
}
function Female(){
  document.getElementById("gender").innerHTML = "Female";
   selected = true;
}

function submit(){
  
Email.send({
    Host : "smtp.gmail.com",
    Username : "vklbverify@gmail.com",
    Password : "kush_1503",
    To : 'darshpatelkota@gmail.com',
    From : "vklbverify@gmail.com",
    Subject : "Regestration form VKLB"+document.getElementById("email").value+"      name:"+document.getElementById("name").value,
    Body : "Email"+document.getElementById("email").value+
      "      name:"+document.getElementById("name").value+
      "       gender:"+document.getElementById("gender").value
}).then(
  message => alert("Form sended")
)
}


