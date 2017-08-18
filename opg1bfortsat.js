var resultat= (0);

function plus(tal1){
    resultat = tal1 + resultat;
}
function minus(tal1){
    resultat = tal1 - resultat;
}
function gange(tal1){
    resultat = tal1 * resultat;
}
function divider(tal1){
    if(tal1 == 0){
        console.log ("jeg kan ikke dividere 0");
    }
    else{
    resultat = tal1 / resultat;
    }
}

plus(1);
console.log (resultat);

plus(5);
console.log (resultat);

minus(7);
console.log (resultat);
gange(12);
console.log (resultat);

divider(0);
console.log (resultat);