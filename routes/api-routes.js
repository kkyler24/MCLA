var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});
// below you can add your params after the question query = mark on line 12
xhr.open("GET", "https://similarwords.p.rapidapi.com/moar?query=cat");
xhr.setRequestHeader("x-rapidapi-host", "similarwords.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "aaea0493d3msh31fddf1759e8b84p100a64jsnf53a382e57c0");

xhr.send(data);