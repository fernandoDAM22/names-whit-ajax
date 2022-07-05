//This is the container where people are displayed
const container = document.querySelector("#container");
let request; //this is the request
//we create the request based on the browser that is being used
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");

request.addEventListener("load",getData); //add the event load to the request
request.open("GET","data.txt"); // we open the request
request.send(); //we sent the request

function getData(){
    let response; //here we are going to save the response of request
    if(request.status == 200){ //if the status of the request is 200 it has gone well
        response = request.response;
        //now the variable contains an array of JSON, we need deserialize the array
        response = JSON.parse(response);
        //for each element of array we add it to the container
        response.forEach(element => {
            container.innerHTML += `<div class='element'><p>${element.name}</p><h1>${element.age}</h1></div>`
        });
    } //otherwise, the request has not been sucessfull
    else {
        response = "Error";
    }
}