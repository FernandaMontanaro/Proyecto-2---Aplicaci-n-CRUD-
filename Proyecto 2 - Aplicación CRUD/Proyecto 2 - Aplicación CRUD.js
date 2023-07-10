function validateForm(){
    var name = document.getElementById("name").value;   
    var jobrole = document.getElementById("jobrole").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;

 if(name == ""){
    alert("Por favor agregue su nombre completo para continuar.");
    return false;
 }

 if(jobrole == ""){
    alert("Por favor agregue su puesto de trabajo para continuar.");
    return false;
 }
 if(email == ""){
    alert("Por favor agregue su dirección de correo electrónico para continuar.");
    return false;
 }
 else if(!email.includes("@")) {
    alert("Correo electrónico inválido.");
    return false;
 }
 if(country == ""){
    alert("Por favor agregue el nombre del país en el que labora para continuar.");
    return false;
 }
 return true;
 }

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
}

var html = "";

peopleList.forEach(function (element, index){
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.jobrole + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.country + "</td>";
    html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
    html +="</tr>";
});

document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
  
    if(validateForm() == true){
        var name = document.getElementById("name").value;
        var jobrole = document.getElementById("jobrole").value;
        var email = document.getElementById("email").value;
        var country = document.getElementById("country").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name : name,
            jobrole : jobrole,
            email : email,
            country : country,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("jobrole").value = "";
        document.getElementById("email").value = "";
        document.getElementById("country").value = "";
    }
}

function deleteData(index){
    var peopleList;
if (localStorage.getItem("peopleList") == null) {peopleList = [];
} 
else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
}

peopleList.splice(index, 1);
localStorage.setItem("peopleList", JSON.stringify(peopleList));
showData();
}

function updateData(index){

}

