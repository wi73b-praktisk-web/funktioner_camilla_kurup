var profil = function (p) {
    return p[0] + " " + p[1] + ": Født " + p[2]; 
}

var data = ["Camilla", "Kurup", 1988];

console.log(profil(data));
var fodt = data[2]; // vi kalder på den 3. data i varen "data" som er nr. 2 i rækken fordi vi altid starter med 0
console.log (fodt);

var now= new Date ();
var yearhNow= now.getFullYear();
console.log (yearhNow);

var alder= yearhNow - fodt;
console.log (alder);
