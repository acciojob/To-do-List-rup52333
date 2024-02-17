//your code here
const button=document.querySelector(".buton")
const  input=document.querySelector(".input")
let value=""
input.addEventListener("input", 
(e)=>{
 value=e.target.value;
}
)
button.addEventListener("click",  
	()=>{
     const item=document.createElement("li")
      item.textContent=value
     document.getElementById("list").appendChild(item)
		
	}
	
	)

