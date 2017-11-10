function task(){
	var item = document.getElementById('Input').value

	var text = document.createTextNode(item)

	var newObject = document.createElement('li')

	newObject.appendChild(text)
	document.getElementById('books').appendChild(newObject)
}