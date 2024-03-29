// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(mailadress) {
    const splitting = mailadress.split('@');
    return splitting[1];
}
const outcomeDomain = getEmailDomain('bammeijer@outlook.com');
console.log(outcomeDomain)

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(mailadress) {
    const domain = mailadress.split('@')
    let result;
    if (domain[1] === 'novi-education.nl') {
        result = 'Student';
    } else if (domain[1] === 'novi.nl') {
        result = 'Medewerker';
    } else {
        result = 'Extern';
    }
    return result;
}
console.log(typeOfEmail('b.meijer@novi-education.nl'))
console.log(typeOfEmail('b.meijer@novi.nl'))
console.log(typeOfEmail('b.meijer@outlook.com'))
console.log(typeOfEmail('novi.nlaapjesk@outlook.com'))


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(mailadres) {
    let foundComma = mailadres.includes(',');
    let foundDot = mailadres.lastIndexOf('.')
    if (foundComma || foundDot) {
        return 'there is a unexpected caracther in the string, therefore it is invalid';
    } else
    return mailadres.includes('@')
}
const output = checkEmailValidity('bammeijer@outlook.com');
console.log(output);

//kon helaas de functie om iets te exluden niet vinden :( -> eerst zoeken naar de karaket, die opslaan in variabele en dan error gevonden wanneer gevonden.