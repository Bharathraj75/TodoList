
function double(){
    console.log("Double clicked");
}


const todolist =document.getElementById('todotext');
const todoUl=document.getElementById('todoul');
function addtask(){
    if(todolist.value.trim() === "")

    {
        alert("Enter Something in list");
    }
    else
    {
        console.log(todolist.value);
        const liTag =document.createElement('li');
        const spanText=document.createElement('span');
        const textNode=document.createTextNode(todolist.value.trim());
        spanText.appendChild(textNode);
        const spanClose=document.createElement("button");
        spanClose.classList.add('close');
        spanClose.innerHTML='&times;';
        liTag.appendChild(spanText);    
        liTag.appendChild(spanClose);  
        todoUl.appendChild(liTag);
        todolist.value=' ';
        spanClose.addEventListener('click',(a)=>
        {
            const li = a.target.parentElement;
            li.parentElement.removeChild(li);
        });
    }
    
   
}
