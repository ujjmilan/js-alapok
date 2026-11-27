"use strict";

// console.log("Sikeres összekötés ✅");

// let kereszt_nev = "Talabér";

// console.log (kereszt_nev);

// kereszt_nev = "Teofil"

// console.log (kereszt_nev);

// let eves3 = "Dávidka";

// console.log(eves3);

// let munka1 = "asztalos";
// let munka2 = "programozó";

// let korabbiMunka= "asztalos";
// let jelenlegiMunka = "programozó";

// console.log(typeof 23);
// console.log(typeof 3.5);
// console.log(typeof "alma");
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof Talaber);

// let keresztNev;
// console.log(keresztNev);

// const gyumolcsok = ["alma", "banan", "citrom"]

// console.log(gyumolcsok[1])

// const egyediNevek = new Set(["Talabér", "Teofil", "Talabér"])
// console.log(egyediNevek);

// Értékadási operátorok //

// const now = 2026;

// const eletkorDavid = now - 2009;
// const eletkorTalaber = now - 2009;

// console.log(eletkorDavid)
// console.log(eletkorTalaber)
// console.log(eletkorDavid * 2, eletkorTalaber / 10, 2 ** 3)

// const vezetekNev = "Bellai";
// const keresztNev = "Talabér";

// console.log (vezetekNev + keresztNev)
// console.log (vezetekNev + " " + keresztNev)

// let x = 10 + 5;
// // x = x + 10;

// x += 10;
// x *= 4;

// x++;
// x--;
// console.log(x)

// Összehasonlító operátorok //

// console.log(eletkorDavid >= eletkorTalaber)


// const keresztNev = "Balázs"
// const foglalkozasSzeretne = "Kezdő programozó"

// const foglalkozasMarad = "Kezdő kábeldugdosó";

// const szuletesiEv = 2009;
// const ev = 2026;

// const balazs = keresztNev + "vagyok, " + (ev - szuletesiEv) + "éves " + foglalkozasSzeretne + "szeretnék lenni!"

// console.log(balazs)

// const balazsUj = `${keresztNev} vagyok, ${ev - szuletesiEv} éves  ${foglalkozasSzeretne} szeretnék lenni! `;
// console.log(balazsUj);

// console.log("Talabér vagyok \n\ haladó programozó");
// console.log(`Talabér vagyok
//     haladó programozó`)

// const kor = 16;
// const elegIdos = kor >= 18;

// if (elegIdos) {
//     console.log(`Teofil ihat bort🍷 `);
// }

// else {
//     const evekHatra = 18 - kor;
//     console.log(`Teofil még nem ihat bort várnia kell még ${evekHatra} évet. ❌`)
// }

// const szuletesiEv = 2002;
// let szazad;

// if (szuletesiEv >= 2000) {
//     szazad = 20.
//     console.log(`${szazad} században születtél. `)
// }

// else {
//     szazad = 21;
//     console.log(`${szazad} században születtél. `)
// }

// console.log(szazad)

// else {
//     szazad = 21;
//     console.log(`${szazad} században születtél. `)
// }

// console.log(szazad)

// const bekertEv = "1991"
// console.log(bekertEv + 18)

// const szuletesiEv = Number(bekertEv);
// console.log(szuletesiEv + 18);

// console.log(Number("Talabér"));
// console.log(typeof szuletesiEv);

// console.log("Én " + 23 + " éves vagyok.");

// console.log("23" - "10" - 3);

// console.log("Talabér" - "Olivér");

// console.log("23" * "2")
// console.log("24" / "2")

// console.log(Boolean(1));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean("{}"));
// console.log(Boolean(""));
// console.log(Boolean(number("Talabér")));

// const kor = 18;

// if(kor === 18) console.log(`Most lettél nagykorú`)

// console.log(18 === 18)
// console.log(18 == 18)
// console.log(18 === "18")
// console.log(18 == "18")

// const kedvenc = Number(prompt("Mi a kedvenc számod?"));

// console.log(kedvenc);
// if (kedvenc === 23) {
//     console.log("A 23 egy nagyszerű szám!");
// }

// else if (kedvenc === 7) {
//     console.log("A 7 is egy jó szám. ");
// }

// else if (kedvenc === 27) {
//     console.log("A 27 a legjobb szám");
// }

// else {
//     console.log("Más számot választottál. ")
// }

// if (kedvenc !== 27) {
//     console.log("Nem értem miért nem 27-et választottál. ")
// }

// const age = 16;

// const a = age >= 20;
// const b = age < 30;

// console.log(a);
// console.log(b);

// Logikai operátorok \\

// console.log(!a);
// console.log(a && b);
// console.log(a || b);
// console.log(!a && b);
// console.log(!a && !b);

// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log("Te vezethetsz. ")
// }

// else {
//     console.log("Nem neked kellene vezetni. ")
// }

// let hasDriverslicense = false;

// const passTest = true;

// if (passTest) {
//     hasDriverslicense = true;
// }

// if (hasDriverslicense) {
//     console.log("Vezethetek");
     
// }

// const interface = "hangkártya";
// const private = 23;

// function logger() {
//     console.log("A nevem Talabér");

// }

// logger();
// logger();
// logger();

// function FruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
//     const juice = `Gyümölcslé ${apples} db almából ${oranges} db narancsból.`;
//     return juice;
// }

// FruitProcessor(5, 0);
// const appleJuice = FruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = FruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// console.log(calcAge3(2009));

// Függvénydekraláció \\

// function calcAge1(birthYear) {
//     const age = 2026 - birthYear;
//     return age
// }

// const age1 = calcAge1(1999);
// console.log(age1);

// Függvénykifejezés \\

// const calcAge2 = function(birthYear) {
//     return 2026 - birthYear;
// }

// const age2 = calcAge2(1999);
// console.log(age2);

// Nyílfüggvények \\

// const calcAge3 = birthYear => 2026 - birthYear;

// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(2009))

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} ${retirement} év múlva mehet nyugdíjba`;
// }

// console.log(yearsUntilRetirement(2009, "balázs"))
// console.log(yearsUntilRetirement(2009, "bálint"))
// console.log(yearsUntilRetirement(1987, "tanár úrl"))


// function multiplyByFour (fruit) {
//     return fruit * 4
// }

// function FruitProcessor(apples, oranges) {
//     const applePieces = multiplyByFour(apples);
//     const orangePieces = multiplyByFour(oranges);
//     console.log(apples, oranges);
//     const juice = `Gyümölcslé ${applePieces} almadarabból ${orangePieces} narancsdarabból áll.`;
//     return juice;
// }


// console.log(FruitProcessor(2, 3));


// const calcAge = function(birthYear) {
//     return 2026 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log( `${firstName} ${retirement} év múlva mehet nyugdíjba.`);
//         return retirement;
//     }

//     else {
//         console.log(`${firstName} már elérte a nyugdíj korhatárt`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2009, "Balázs"));
// console.log(yearsUntilRetirement(2009, "Bálint"));
// console.log(yearsUntilRetirement(1987, "Tanár úr"));
// console.log(yearsUntilRetirement(1953, "talabér"));

// // const friends = ["Talabér", "Tekla", "Tóbiás", "Frédi", "Balázs", "Teofil"]
// // console.log(friends);

// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = "Olivér";
// console.log(friends);

// const firstName = "János";
// const janos = [firstName, "Kovács", 1991, "kábeldugdosó", friends];
// console.log(janos[janos.length-1].length);

// const calcAge = function(birthYear) {
//     return 2026 - birthYear;
// }

// const years = [1987, 1967, 2009, 2020, 2011, 2027]

// console.log(calcAge(years));

// console.log(calcAge(years[years.length - 1]));

const friends = ["Talabér", "Tekla", "Tóbiás"]
console.log(friends);

const newLenght = friends.push("Martin");
console.log(newLenght);

const newLenght2 = friends.unshift("Zsombor");
console.log(newLenght2);