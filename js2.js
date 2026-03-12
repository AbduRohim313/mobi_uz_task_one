// DATABASE

ismlar = ["Ali", "Bekzod", "Bobur", "Omon", "Jovohir"];
familiyalar = ["Baxtiyorov", "Bekzododv", "Nishonov", "Buxoriy", "Berdiyev"];
sharif = ["Rovshan", "Dilmurod", "Nomon", "Sherzod", "Elmurod"];
zamin = ["Uz", "RU", "ARAB", "TOJ", "EN", "KZ"]
medal = ["Oltin", "Kumush", "Bronza"];


let mass20 = [];

class Sportsmen {

    constructor(name, lastName, oldName, region) {
        this.name = name;
        this.lastName = lastName;
        this.oldName = oldName;
        this.region = region;
        this.age = Math.floor(Math.random() * 35) + 18;
        this.medals = [];
        this.AddMedal();
    }

    medalCount() {
        return this.medals.length;
    }

    AddMedal() {
        for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
            this.medals.push(medal[Math.floor(Math.random() * 3)]);
        }
    }
}

//3 TA METHOD

cloneObject = (arg) => structuredClone(arg);
compareSporsmens = (man1, man2) => {
    man1Result = "";
    man2Result = "";
    for (let i = 0; i < man1.medals.length; i++) {
        man1Result += (` ${i}. ` + man1.medals[i]);
    }
    for (let i = 0; i < man2.medals.length; i++) {
        man2Result += (` ${i}. ` + man2.medals[i]);
    }
    return (man1Result + "\n" + man2Result);
}

function sortMass() {
    return mass20.toSorted((a, b) => b.medalCount() - a.medalCount());
}


let random = (mass) => mass[Math.floor(Math.random() * mass.length)];

function MedalKopaytirish(mas, son) {
    for (let i = 0; i < son; i++) {
        mas.push(medal[Math.floor(Math.random() * medal.length)]);
    }
    return mas;
}

function MedalKamaytirish(mas, son) {
    for (let i = 0; i < son; i++) {
        if (mas.length !== 0)
            delete mas[i]
        else break;
    }
    return mas;
}

// 20 TA SPORTSMEN TOLIWI

for (let i = 0; i < 20; i++) {
    mass20.push(new Sportsmen(random(ismlar), random(familiyalar), random(sharif), random(zamin)));
}

//UI GA CHIQARIW

// console.log(cloneObject(mass20[1]));
// console.log(compareSporsmens(mass20[1], mass20[0]));
console.log(sortMass());
// console.log(mass20[0].medals);
// console.log(MedalKopaytirish(mass20[0].medals, 2));
// console.log(mass20[1].medals);
// console.log(MedalKamaytirish(mass20[1].medals, 2));