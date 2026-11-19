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

const kedvenc = Number(prompt("Mi a kedvenc számod?"));

console.log(kedvenc);
if (kedvenc === 23) {
    console.log("A 23 egy nagyszerű szám!");
}

else if (kedvenc === 7) {
    console.log("A 7 is egy jó szám. ");
}

else if (kedvenc === 27) {
    console.log("A 27 a legjobb szám");
}

else {
    console.log("Más számot választottál. ")
}

if (kedvenc !== 27) {
    console.log("Nem értem miért nem 27-et választottál. ")
}