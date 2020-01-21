// there are many events on the web like click mouseenter etc.
// these can be played with
// there are two most used events that are mouse and keyboard events
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var del=document.getElementsByClassName("delete");
var list=document.querySelectorAll("li");

function inputLength(){
	return input.value.length;
}
// this function gives a strikethrough to all the items clicked
function cancelElement(event){
	event.target.className="done";
}

// in dom we have a family tree type notation. I mean it has tree of objects.
// here ul is the parent of li who is the parent of text node
// therefore friest we will createTextNode then we appendchild text node to the parent
// li and the appendChild li to parent ul so that everything is attatched in order

function createListElement(){
	// we create a new element in the list
	var li=document.createElement("li");
	// we append the element as a text createTextNode
	li.appendChild(document.createTextNode(input.value));
	// but right now our element is somewhere in the program and we need to attach it to ul
	// we attach the li element to the ul
	ul.appendChild(li);
	// after i have entered a value the input box needs to clear up
	input.value="";
	// we will create delete button for every item
	var but=document.createElement("button");
	but.appendChild(document.createTextNode("delete"));
	li.appendChild(but);
	// to delete the new items formed when button is clicked
	but.addEventListener("click",deleteListElement);
	// to give strikethrough to items clicked
	li.addEventListener("click",cancelElement);
}

function addListAfterClick(){
	if(inputLength()>0){
		//not to add in the list if nothing is typed
		createListElement();
	}
}

function addListAfterKeypress(event){
	if(inputLength()>0 && event.keyCode===13){
		// if statement helps not to add in the list if nothing is typed
		// we have kepad codes for all keys in the keyboard.for enter keyCode=13
	createListElement();
}
}

function deleteListElement(event){
	event.target.parentNode.remove();

}

// as del is an array of all the delete buttons we have to apply addEventListener to all those buttons
for(var i=0;i<del.length;i++){
	del[i].addEventListener("click",deleteListElement);
}

button.addEventListener("click",addListAfterClick);

	// now we will add in the lis on pressing enter from the keyboard instead of clicking on enter
input.addEventListener("keypress",addListAfterKeypress);
for(var i=0;i<list.length;i++){
	list[i].addEventListener("click",cancelElement);
}
