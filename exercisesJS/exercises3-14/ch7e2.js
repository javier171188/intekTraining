let e = document.getElementsByClassName('exercise')[0];

let france = { 
    "1/01": "Premier de l'an",
    "01/01": "Premier de l'an",
    "1/5":	"Fête du Travail",
    "01/5":	"Fête du Travail",
    "8/5":	"Fête de la Victoire",
    "08/5":	"Fête de la Victoire",
    "14/7":	"Fête Nationale",
    "15/8":	"Assomption",
    "1/11":	"Toussaint",
    "01/11":	"Toussaint",
    "11/11":"Armistice de 1918",
    "25/12":"Noël",
    "26/12":"Deuxième jour de Noël"
};

function toFrance(date){
    let expMD = /\d{1,2}/g;
    let expYear = /\d{4}/;
    let monthDay = date.match(expMD).slice(0,2);
    let year = date.match(expYear);
    let fdate = monthDay[1]+'/'+monthDay[0] 
    let fullDate = fdate + '/'+year[0];
    if (Boolean(france[fdate])){
        fullDate += ' ('+ france[fdate]+')';
    }
    return fullDate;
}



e.innerHTML += 'The date in US is 7/14/2014,';
e.innerHTML += `whereas in France is${toFrance("7/14/2014")} <br/>`;
e.innerHTML += 'And the date 12/22/2014 in US, in France is ';
e.innerHTML += `${toFrance("12/22/2014")}`;

console.log(toFrance("7/14/2014"));
console.log(toFrance("12/22/2014"));