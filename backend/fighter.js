const fs = require('fs');
const jsonBACKEND = require('./backend.json');
const rawData = fs.readFileSync('backend.json');
const editedJSONfileSave = JSON.parse(rawData);

function objectSum(object){
    let keyA = Object.keys(object);
    let sum =0;
    for (let i=0;i<keyA.length;i++){
        sum+=object[keyA[i]];
    }
    return sum;
}

class fighter {
    constructor(type,country,Fname,Lname,Style,Stats,Weight,Height,Age,fightHistory,Bscore,popularity,contract,score){
        this.type=type;
        this.country = this.coutnryP();
        this.Fname = this.FnameP(this.country);
        this.Lname = this.LnameP(this.country);
        this.Style = this.StyleP();
        this.Stats = this.StatsP(this.Style);
        this.Weight = this.WeightP(this.type);
        this.Height = this.HeightP();
        this.Age = this.AgeP();
        this.fightHistory = this.fightHistoryP();
        this.Bscore = this.BscoreP();
        this.popularity = this.popularityP(this.Age,this.fightHistory);
        this.contract = this.contractP(this.type,this.popularity);
        this.score = 1500;

    }
    coutnryP(){
        const countryList = ["USA","Brazil","Russia","Australia",
            "Mexico","England","Georgia","Nigeria","China","France"];
        return countryList[Math.floor(Math.random() * 10)];
    }
    FnameP(country){
        const names = { 
        "Russia": ["Pavel", "Leonid", "Yuri", "Artem", 
        "Ivan", "Vladimir", "Alexei", "Maxim", "Mikhail", "Sergey", 
        "Grigory", "Vyacheslav", "Nikolai", "Andrei", "Oleg", "Dmitry", 
        "Igor", "Aleksandr", "Evgeny", "Boris", "Khabib", "Islam", "Umar",
        "Khamzat"],
        "USA": ["James", "Sean", "John", "Robert", "Michael", 
        "William", "David", "Richard", "Joseph", "Thomas", "Charles", 
        "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", 
        "Steven", "Paul", "Andrew", "Joshua", "Jon"], 
        "Brazil": ["João",
        "Gabriel", "Lucas", "Mateus", "Pedro", "Rafael", "Gustavo", 
        "Bruno", "Felipe", "André", "Caio", "Diego", "Fernando", "Tiago", 
        "Leandro", "Rodrigo", "Eduardo", "Henrique", "Marcelo", "Vitor",
        "Jean", "Charles", "Mericio", "Carlos"],
        "Australia": ["Jack", 
        "Liam", "Noah", "William", "James", "Oliver", "Thomas", "Lucas", 
        "Ethan", "Alexander", "Charlie", "Henry", "Mason", "Leo", 
        "Harrison", "Isaac", "Cooper", "Samuel", "Benjamin", "Archie"],
        "Mexico": ["José", "Juan", "Luis", "Carlos", "Jorge", "Miguel", 
        "Francisco", "Jesús", "Fernando", "Eduardo", "Ricardo", "Antonio",
        "Manuel", "Alejandro", "Rafael", "Santiago", "Andrés", "Roberto", 
        "Arturo", "Ramón", "Yair"],
        "England": ["Oliver", "George", 
        "Harry", "Jack", "Charlie", "Henry", "Thomas", "William", 
        "James", "Alfie", "Leo", "Jacob", "Freddie", "Oscar", "Archie", 
        "Theo", "Arthur", "Edward", "Sebastian", "Samuel", "Conor, Tom", 
        "Patty"], 
        "Georgia": ["Giorgi", "Nikoloz", "Irakli", "Levan", 
        "Tornike", "Luka", "Davit", "Vakhtang", "Zurab", "Aleksandre", 
        "Revaz", "Shota", "Archil", "Besik", "Otar", "Temur", "Avtandil", 
        "Mirian", "Guram", "Elguja", "Ilia", "Merab"],
        "Nigeria": ["Chinedu", "Emeka", 
        "Ngozi", "Ifeanyi", "Chijioke", "Uche", "Obinna", "Kelechi", "Ibrahim", 
        "Adekunle", "Ayodele", "Oluwaseun", "Tunde", "Adebayo", "Olumide", "Olufemi", 
        "Ifeoluwa", "Tajudeen", "Chima", "Samuel","Kamaru","Israel","Francis"],
        "China": 
        ["Wei", "Jian", "Jun", "Peng", "Li", "Ming", "Hao", "Yuan", "Tao", "Xiao", "Feng", 
        "Chao", "Lei", "Sheng", "Zhi", "Yong", "Bo", "Gang", "Kai", "Hui"],
        "France": 
        ["Pierre", "Jean", "Louis", "Michel", "Henri", "Paul", "Jacques", "Bernard", 
        "Robert", "Georges", "Alain", "Thierry", "Claude", "Luc", "André", "Philippe", 
        "François", "Christian", "Nicolas", "Gérard"]};
        return names[country][Math.floor(Math.random() * 20)];
    }
    LnameP(country) {
        const names = {
          "Russia": ["Ivanov", "Petrov", "Sidorov", "Kuznetsov", "Popov", "Semenov", 
            "Mikhailov", "Vasiliev", "Nikiforov", "Orlov", "Borisov", "Romanov", "Fedorov", 
            "Gusev", "Yakovlev", "Kozlov", "Markov", "Chernyshev", "Karpov", "Kravtsov"],
          "USA": ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", 
            "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", 
            "Martin", "Thompson", "Garcia", "Martinez", "Roberts"],
          "Brazil": ["Silva", "Santos", "Oliveira", "Costa", "Pereira", "Rodrigues", 
            "Almeida", "Souza", "Carvalho", "Fernandes", "Gomes", "Martins", "Lima", 
            "Ribeiro", "Nascimento", "Barbosa", "Dias", "Mendes", "Araujo", "Cunha"],
          "Australia": ["Smith", "Jones", "Williams", "Taylor", "Brown", "Wilson", "Miller", 
            "Davis", "Moore", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", 
            "Thompson", "Roberts", "Walker", "Young", "King"],
          "Mexico": ["Hernández", "González", "López", "Martínez", "Pérez", "García", 
            "Rodríguez", "Sánchez", "Ramírez", "Cruz", "Flores", "Torres", "Vázquez", 
            "Morales", "Jiménez", "Gutiérrez", "Ruiz", "Álvarez", "Mendoza", "Romero"],
          "England": ["Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Evans", 
            "Thomas", "Roberts", "Johnson", "Lewis", "Walker", "Harris", "White", "Jackson", 
            "Green", "Clarke", "Adams", "Baker", "Scott"],
          "Georgia": ["Giorgadze", "Mgeladze", "Tkemaladze", "Shubladze", "Davitashvili", 
            "Chikvaidze", "Javakhishvili", "Gvinianidze", "Bagrationi", "Maisuradze", 
            "Kiknadze", "Iashvili", "Gurgenidze", "Zedginidze", "Khorava", "Nadareishvili", 
            "Zaridze", "Samushia", "Tkeshelashvili", "Lomidze"],
          "Nigeria": ["Adebayo", "Ogunleye", "Olawale", "Adeyemi", "Akintoye", "Akinlolu", 
            "Ibrahim", "Akinbiyi", "Okafor", "Eze", "Chukwu", "Nwankwo", "Oduro", "Nwosu",
             "Obasi", "Sani", "Adekunle", "Onyekachi", "Umar", "Ogunbiyi"],
          "China": ["Li", "Wang", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", 
            "Xu", "Sun", "Ma", "Zhou", "Hu", "Guo", "He", "Lin", "Luo", "Tang", "Jiang"],
          "France": ["Dupont", "Lemoine", "Lefevre", "Lemoine", "Durand", "Lemoine", 
            "Martin", "Bernard", "Robert", "Thomas", "Petit", "Lemoine", "Gauthier", 
            "Blanchard", "Rousseau", "Sanchez", "Dufresne", "Lemoine", "Boucher", "Dumas"]};
        return names[country][Math.floor(Math.random() * 20)];
    }
    StyleP(){
        const styles = ["Boxer", "Wrestler","Mixed-Martial-Artist", "Grappler", "Kick-Boxer",
            "Nak Muay", "Mixed-Martial-Artist","Mixed-Martial-Artist","Mixed-Martial-Artist",
            "Mixed-Martial-Artist"]
        return styles[Math.floor(Math.random() * 10)];
    }
    StatsP(fstyle){
        if (fstyle=="Boxer"){
            let Boxer = {
                Boxing:6 + Math.floor(Math.random() * 5),
                KickBoxing:3 + Math.floor(Math.random() * 8),
                MuayThai:3 + Math.floor(Math.random() * 8),
                Wrestling:0 + Math.floor(Math.random() * 8),
                JiuJitsu:0 + Math.floor(Math.random() * 8),
                Blocking:6 + Math.floor(Math.random() * 5),
                Chin:5 + Math.floor(Math.random() * 6),
                recovery:5 + Math.floor(Math.random() * 6),
                Stamina:6 + Math.floor(Math.random() * 5),
                IQ: 6 + Math.floor(Math.random() * 5),
                Heart:0 + Math.floor(Math.random() * 11),
                WearAndTear: 0
            }
            Boxer.Overall=objectSum(Boxer);
            return Boxer;
        }
        if (fstyle=="Wrestler"){
            let Wrestler = {
                Boxing:3 + Math.floor(Math.random() * 8),
                KickBoxing:3 + Math.floor(Math.random() * 8),
                MuayThai:0 + Math.floor(Math.random() * 8),
                Wrestling:6 + Math.floor(Math.random() * 5),
                JiuJitsu:0 + Math.floor(Math.random() * 8),
                Blocking:6 + Math.floor(Math.random() * 5),
                Chin:5 + Math.floor(Math.random() * 6),
                recovery:5 + Math.floor(Math.random() * 6),
                Stamina:6 + Math.floor(Math.random() * 5),
                IQ: 6 + Math.floor(Math.random() * 5),
                Heart:0 + Math.floor(Math.random() * 11),
                WearAndTear: 0
            }
            Wrestler.Overall=objectSum(Wrestler);
            return Wrestler;
        }
        if (fstyle=="Mixed-Martial-Artist"){
            let MMA = {
                Boxing:4 + Math.floor(Math.random() * 7),
                KickBoxing:4 + Math.floor(Math.random() * 7),
                MuayThai:4 + Math.floor(Math.random() * 7),
                Wrestling:4 + Math.floor(Math.random() * 7),
                JiuJitsu:4 + Math.floor(Math.random() * 7),
                Blocking:4 + Math.floor(Math.random() * 7),
                Chin:4 + Math.floor(Math.random() * 7),
                recovery:4 + Math.floor(Math.random() * 7),
                Stamina:4 + Math.floor(Math.random() * 7),
                IQ: 4 + Math.floor(Math.random() * 7),
                Heart:0 + Math.floor(Math.random() * 11),
                WearAndTear: 0
            }
            MMA.Overall=objectSum(MMA);
            return MMA;
        }
        if (fstyle=="Grappler"){
            let BJJ = {
                Boxing:3 + Math.floor(Math.random() * 8),
                KickBoxing:3 + Math.floor(Math.random() * 8),
                MuayThai:0 + Math.floor(Math.random() * 8),
                Wrestling:0 + Math.floor(Math.random() * 8),
                JiuJitsu:6 + Math.floor(Math.random() * 5),
                Blocking:6 + Math.floor(Math.random() * 5),
                Chin:5 + Math.floor(Math.random() * 6),
                recovery:5 + Math.floor(Math.random() * 6),
                Stamina:6 + Math.floor(Math.random() * 5),
                IQ: 6 + Math.floor(Math.random() * 5),
                Heart:0 + Math.floor(Math.random() * 11),
                WearAndTear: 0
            }
            BJJ.Overall=objectSum(BJJ);
            return BJJ;
        }
        if (fstyle=="Kick-Boxer"){
            let KBer = {
                Boxing:3 + Math.floor(Math.random() * 8),
                KickBoxing:6 + Math.floor(Math.random() * 5),
                MuayThai:3 + Math.floor(Math.random() * 8),
                Wrestling:0 + Math.floor(Math.random() * 8),
                JiuJitsu:0 + Math.floor(Math.random() * 8),
                Blocking:6 + Math.floor(Math.random() * 5),
                Chin:5 + Math.floor(Math.random() * 6),
                recovery:5 + Math.floor(Math.random() * 6),
                Stamina:6 + Math.floor(Math.random() * 5),
                IQ: 6 + Math.floor(Math.random() * 5),
                Heart:0 + Math.floor(Math.random() * 11),
                WearAndTear: 0
            }
            KBer.Overall=objectSum(KBer);
            return KBer;
        }
        if (fstyle=="Nak Muay"){
            let Nak = {
            Boxing:3 + Math.floor(Math.random() * 8),
            KickBoxing:5 + Math.floor(Math.random() * 6),
            MuayThai:7 + Math.floor(Math.random() * 4),
            Wrestling:0 + Math.floor(Math.random() * 8),
            JiuJitsu:0 + Math.floor(Math.random() * 8),
            Blocking:6 + Math.floor(Math.random() * 5),
            Chin:5 + Math.floor(Math.random() * 6),
            recovery:5 + Math.floor(Math.random() * 6),
            Stamina:6 + Math.floor(Math.random() * 5),
            IQ: 3 + Math.floor(Math.random() * 8),
            Heart:0 + Math.floor(Math.random() * 11),
            WearAndTear: 0
            }
            Nak.Overall=objectSum(Nak);
            return Nak;
        }
    }
    WeightP(Ltype){

        if (Ltype=="fly"){
            delete this.type;
            return Math.floor(Math.random() * (125-118+1)) + 118;
        }
        if (Ltype=="bantam"){
            delete this.type;
            return Math.floor(Math.random() * (135-126+1)) + 126;
        }
        if (Ltype=="feather"){
            delete this.type;
            return Math.floor(Math.random() * (145-136+1)) + 136;
        }
        if (Ltype=="light"){
            delete this.type;
            return Math.floor(Math.random() * (155-146+1)) + 146;
        }
        if (Ltype=="welter"){
            delete this.type;
            return Math.floor(Math.random() * (170-156+1)) + 156;
        }
        if (Ltype=="middle"){
            delete this.type;
            return Math.floor(Math.random() * (185-171+1)) + 171;
        }
        if (Ltype=="lightheavy"){
            delete this.type;
            return Math.floor(Math.random() * (205-186+1)) + 186;
        }
        if (Ltype=="heavy"){
            delete this.type;
            return Math.floor(Math.random() * (265-206+1)) + 206;
        } else {
            return Math.floor(Math.random() * (225-118+1)) + 118;
        }
        
    }
    HeightP(){
        let feet = Math.floor(Math.random() * (6-5+1)) + 5;
        if (feet==5){return `5'${Math.floor(Math.random() * (11-4+1)) + 4}\"`};
        if (feet==6){return `6'${Math.floor(Math.random() * 6)}\"`};
    }
    AgeP(){
        return Math.floor(Math.random() * (45-18+1))+18;
    }
    fightHistoryP(){
        if (this.Age > 30){return {Wins:Math.floor(Math.random() * (28-15+1))+15,Loses:Math.floor(Math.random() * 20),currentStreak:0}}
        if (this.Age <= 30){return {Wins:Math.floor(Math.random() * 21),Loses:Math.floor(Math.random() * 11),currentStreak:0}}
    }
    BscoreP(){
        return Math.floor(Math.random() * 11)
    }
    popularityP(){
        return Math.floor(Math.random() * 11)
    }
    contractP(Ltype,pop){
        if(typeof(Ltype)=="string"){
            if (pop>=0 && pop<5){return {Duration:Math.floor(Math.random() * 15),Compensation:Math.floor(Math.random() * (5500-150+1))+150,WinBonus:Math.floor(Math.random() * (6000-150+1))+150}}
            if (pop>=5 && pop<8){return {Duration:Math.floor(Math.random() * 15),Compensation:Math.floor(Math.random() * (7500-1500+1))+1500,WinBonus:Math.floor(Math.random() * (8000-1500+1))+1500}}
            if (pop>=8 && pop<10){return {Duration:Math.floor(Math.random() * 15),Compensation:Math.floor(Math.random() * (11000-4000+1))+4000,WinBonus:Math.floor(Math.random() * (15000-4000+1))+4000}}
            if (pop==10){return {Duration:Math.floor(Math.random() * 15),Compensation:Math.floor(Math.random() * (35000-11000+1))+11000,WinBonus:Math.floor(Math.random() * (50000-11000+1))+11000}}
            if (pop <= 30){return [Math.floor(Math.random() * 21),Math.floor(Math.random() * 11),0]}
        }
        else{return {Duration:0,Compensation:0,WinBonus:0}}
    }
}
function createFAfighters(){
    let flist = []
    for (let i=0;i<250;i++){let myFighter = new fighter();flist.push(myFighter)}
    editedJSONfileSave.FreeAgents=flist; 
}
function createFighters4League(divisions){
    let flist = []
    const keys = Object.keys(divisions);
    for (let i=0;i<keys.length;i++){
        if (divisions[keys[i]]==true){
            for (let j=0;j<40;j++){
                let myFighter = new fighter(keys[i]);
                flist.push(myFighter);
            };
        }
    }
    return flist;
}
function fillFAfighters(){
    let flist = editedJSONfileSave.FreeAgents
    let myFighter = new fighter();
    flist.push(myFighter)
    editedJSONfileSave.FreeAgents=flist; 
}
function save(){
    fs.writeFileSync('save.json', JSON.stringify(editedJSONfileSave,null,4));
}
function overallAverage(){
    let grandnum = 0;
    for (let i=0;i<1000;i++){
        const arrayC = editedJSONfileSave.NONE.fighters[i].Stats
        Object.keys(arrayC).forEach(key=>{grandnum = grandnum + arrayC[key];})
    }
    console.log(grandnum/1000)
}
function printSINGLEfighter(number){
    console.log(editedJSONfileSave.NONE.fighters[number].Weight)
}
function printFreeAgencyDIVISIONS(){
    let divisions = 
    {fly:[],bantam:[],feather:[],light:[],welter:[],middle:[],lightheavy:[],heavy:[]}
    for (let i=0;i<100;i++){
        let weight = editedJSONfileSave.NONE.fighters[i].Weight
        if (weight<=125){
            divisions.fly.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>125 && weight<=135){
            divisions.bantam.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>135 && weight<=145){
            divisions.feather.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>145 && weight<=155){
            divisions.light.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>155 && weight<=170){
            divisions.welter.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>170 && weight<=185){
            divisions.middle.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>185 && weight<=205){
            divisions.lightheavy.push(editedJSONfileSave.NONE.fighters[i])
        }
        if (weight>205){
            divisions.heavy.push(editedJSONfileSave.NONE.fighters[i])
        }
    }
    Object.keys(divisions).forEach(key=>{
        console.log(`\n${key}weight:`)
        for (let i=0;i<divisions[key].length;i++){
            console.log(divisions[key][i].Fname, divisions[key][i].Fname);
        }
    })
}

//create100fighters();
//save();
module.exports = 
    {
        fighter,
        editedJSONfileSave,
        createFAfighters,
        createFighters4League,
        save,
        fillFAfighters
    };
