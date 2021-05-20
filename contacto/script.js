function addContacto(){
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    data = `${fName},${lName},${phone},${email}\n`;
    localStorage.setItem(email,data);
    document.getElementById("fName").innerHTML = "";
    document.getElementById("lName").innerHTML = "";
    document.getElementById("phone").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}

function showData(){
  for (i = 0; i < localStorage.length; i++) {
    x = localStorage.getItem(localStorage.key(i));
    console.log(x);
  }
}
