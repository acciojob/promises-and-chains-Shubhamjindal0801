//your JS code here. If required.
const age = document.getElementById("age").value;
const name1 = document.getElementById("name").value;
const btn = document.getElementById("btn");

btn.addEventListener("click", solve());
function solve(){
let promise = new Promise((resolve,reject) =>{
	if(age>18){
		resolve = true;
	}
	else{
		reject = true;
	}
})

promise.then((result)=>{
  setTimeout(()=>{
    alert(`Welcome, <${name1}>. You can vote.`)
  },4000)
})

promise.catch((error)=>{
  alert(`Oh sorry, <${name1}>. You aren't old enough.`)
})
}
