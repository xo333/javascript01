// alert("Hello World")

let nachricht = "Das wird spannend"
// alert (nachricht);
nachricht = "neuer Text";
// alert (nachricht);
console.log (nachricht);
const linkColor ="#ff0000"
let eine_variable = "x"
console.log("Variable: eine_variable", eine_variable)
let highScore = 58621;
console.log("Highscore ist: ", highScore / 20);
let meineNachricht = "test1";
console.log (meineNachricht);
meineNachricht = 'test2';
console.log (meineNachricht);
meineNachricht = `Hiermit 
koennen aufwendige 
mehrzeilige Sachen 
verkettet werden
Nur damit`;
console.log (meineNachricht);

let fullName = 'jeffrey "The Dude" Lebowsky';
console.log(fullName)

let isOver18 = true;
console.log ("Über18?", isOver18)
let age = 19;
console.log("age über 18", age>18);

// Mehrere Variablen in einer Zusammenfassen = Liste 

let zahlenListe =[2, 11, 24, 33];
console.log (zahlenListe);

// auf einzelne Elemente zugreifen, indem man in eckige Klammern setzt, auf was zugegriffen werden soll
// Jane hat 0, John 1 

let namensListe = ["Jane", "John"];
console.log(namensListe[0]);

//Zeigt länge der Liste an
console.log("Anzahl der Namen:", namensListe.length);

//Objekt: 

let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};

console.log ("Benutzer Alter:", benutzer.alter); //Mit . verbinden - zeigt nur das Alter


//Benutzer um Bestzeit als Variable erweitert worden 
benutzer.bestzeit = 200;
console.log(benutzer); 

//Eckige Klammer ermöglicht Zugriff auf Daten
benutzer ["bestzeit ever"] = 100;
console.log(benutzer);





