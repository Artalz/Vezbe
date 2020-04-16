const knjige = require("../");

function sveKnjige() {
	console.log("Sve knjige");
	console.log(knjige);
}

function addKnjiga(id,naziv,autor) {
    knjige.knjige.push({id,naziv,autor});
    console.log(knjige);
}


function getKnjiga(id){
knjige.Knjige.forEach(element => {
	if(element.id == id)
		console.log(element);
	}
}


function setAutor(naziv, autor){
knjige.Knjige.forEach(element => {
	if(element.naziv == naziv)
		element.autor = autor
	}
	console.log(knjige);
}



function obrisi(id){
console.log("Obrisano:");
knjige.Knjige.forEach(element => {
	if(element.id == id)
		knjige.knjige.splice(id,1);
	}
	console.log(knjige);
}




function getKnjigaByAuthor(autor){
console.log("Sve knjige tog autora");
knjige.Knjige.forEach(element => {
	if(element.autor == autor)
		console.log(element);
	}
	
}


module.exports.sveKnjige = sveKnjige;
module.exports.addKnjiga = addKnjiga;
module.exports.getKnjiga = getKnjiga;
module.exports.setAutor = setAutor;
module.exports.obrisi = obrisi;
module.exports.getKnjigaByAuthor = getKnjigaByAuthor;