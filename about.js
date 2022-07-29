console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted and someone will get back to you shortly!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", () => alert("Mr. Cat says hi!"))

