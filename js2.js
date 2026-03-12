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
        this.age = Math.floor(Math.random() * 17) + 18;
        this.Goldmedals = 0;
        this.Silvermedals = 0;
        this.Bronzemedals = 0;
        this.addMedal(20);
    }

addMedal(son) {
        for (let i = 0; i < son; i++) {
            let medalIndex = Math.floor(Math.random() * 3);
            switch (medalIndex) {
                case 0:
                    this.Goldmedals += 1;
                    break;
                case 1:
                    this.Silvermedals += 1  ;
                    break;
                case 2:
                    this.Bronzemedals += 1;
                    break;
            }
        }
    }

    medalCount() {
        return this.Goldmedals + this.Silvermedals + this.Bronzemedals;
    }

    
}

//3 TA METHOD

cloneObject = (arg) => structuredClone(arg);
compareSporsmens = (man1, man2) => {
    // man1Result = "";
    // man2Result = "";
    // for (let i = 0; i < man1.medals.length; i++) {
    //     man1Result += (` ${i}. ` + man1.medals[i]);
    // }
    // for (let i = 0; i < man2.medals.length; i++) {
    //     man2Result += (` ${i}. ` + man2.medals[i]);
    // }
        man1Result = (`${man1.name} ${man1.region}:\n gold medals = ${man1.Goldmedals} | silver medals = ${man1.Silvermedals} | bronza medals = ${man1.Bronzemedals}`);
        man2Result = (`${man2.name} ${man2.region}:\n gold medals = ${man2.Goldmedals} | silver medals = ${man2.Silvermedals} | bronza medals = ${man2.Bronzemedals}`);

    return (man1Result + "\n" + man2Result);

}

function sortMass() {
    return mass20.toSorted((a, b) => b.medalCount() - a.medalCount());
}


let random = (mass) => mass[Math.floor(Math.random() * mass.length)];

function MedalKopaytirish(mas, son) {
    mas.addMedal(son);
    return mas;
}

function piramida(mas_medal, son) {
if(mas_medal > 0){
            if(mas_medal >= son){
                mas_medal -= son;
                son = 0;
            }else{
                son -= mas_medal;
                mas_medal = 0;
    
            }

        }return {mas_medal, son};
}

function MedalKamaytirish(mas, son) {
    if(mas.medalCount() > son){
        let oltinTemp  = piramida(mas.Goldmedals, son);
        mas.Goldmedals = oltinTemp.mas_medal;
        if(oltinTemp.son > 0){
            let kumuwTemp = piramida(mas.Silvermedals, oltinTemp.son);
            mas.Silvermedals = kumuwTemp.mas_medal;
            if(kumuwTemp.son > 0){
                let bronzaTemp = piramida(mas.Bronzemedals, kumuwTemp.son);
                mas.Bronzemedals = bronzaTemp.mas_medal;}}
        
        // mas.Goldmedals = 0;
        // mas.Silvermedals = 0;
        // mas.Bronzemedals = 0;
        // mas.addMedal(totalMedals - son);
        return mas;
    }else{
        mas.Goldmedals = 0;
        mas.Silvermedals = 0;
        mas.Bronzemedals = 0;
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
// console.log(sortMass());
console.log("************************************************************");
// console.log(mass20[0]);
// console.log(MedalKopaytirish(mass20[0], 5));
// console.log(mass20[1]);
// console.log(MedalKamaytirish(mass20[1], 5));