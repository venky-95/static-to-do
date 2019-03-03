var sub=document.querySelector(".button");
var item=document.querySelector("input");
var ul= document.querySelector("ul");
var list=document.querySelectorAll("li");
sub.addEventListener("click", function(){//when clicked the submit button
 var li= document.createElement("li");// can also place if(item.length>0)
 li.textContent= item.value;
 ul.appendChild(li);
 item.value="";
 li.addEventListener("click",function(){
 	li.classList.toggle("touched");
 });
 var dbtn= document.createElement("button");
 dbtn.appendChild(document.createTextNode("X"));
 li.appendChild(dbtn);
 dbtn.addEventListener("click",function(){
 	li.classList.add("delete");
 });

});
item.addEventListener("keypress",function(e){//this happens when pressed enter if not prefer to click on submit
if(e.which === 13){//can also use input length >0
	var li= document.createElement("li");
 li.textContent= item.value;
 ul.appendChild(li);
 item.value="";
 li.addEventListener("click",function(){
 	li.classList.toggle("touched");
 });
 var dbtn= document.createElement("button");
 dbtn.appendChild(document.createTextNode("X"));
 li.appendChild(dbtn);
 dbtn.addEventListener("click",function(){
 	li.classList.add("delete");
 });
}
});
