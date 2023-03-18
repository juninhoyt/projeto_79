menuListArray = ["Pizza Vegetariana","Pizza de strogonof","pizza de doritos","pizza de carne de panela","pizza de sorvete"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;1<menuListArray.length;i++){
    htmldata-htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddeMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}
