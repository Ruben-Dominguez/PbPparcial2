const fs = require('fs');

const addContacto = () => {
    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    data = `${fName},${lName},${phone},${email}\n`;
    
    fs.appendFile('contact.txt', data.toString());
    fName.innerHTML = "";
    lName.innerHTML = "";
    phone.innerHTML = "";
    email.innerHTML = "";
}

