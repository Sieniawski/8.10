var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass);

console.log(withButtonClass.length);

for (i = 0; i < withButtonClass.length; i++) {
	var buttonText = withButtonClass[i].innerText;
	alert(buttonText);
	}
