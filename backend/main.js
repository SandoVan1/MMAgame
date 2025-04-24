const fs = require('fs');
const jsonBACKEND = require('./backend.json')

class fighter {
    constructor(country,Fname,Lname,Style,Stats,Weight,Height,Age,fightHistory,Bscore,popularity){
        this.country = this.coutnryP();
        this.Fname = this.FnameP(this.country);
        this.Lname = this.LnameP(this.country);
        this.Style = this.StyleP();
        this.Stats = this.StatsP(this.Style);
        this.Weight = this.WeightP();
        this.Height = this.HeightP();
        this.Age = this.AgeP();
        this.fightHistory = this.fightHistoryP();
        this.Bscore = this.BscoreP();
        this.popularity = this.popularityP();

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
            return {
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
        }
        if (fstyle=="Wrestler"){
            return {
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
        }
        if (fstyle=="Mixed-Martial-Artist"){
            return {
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
        }
        if (fstyle=="Grappler"){
            return {
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
        }
        if (fstyle=="Kick-Boxer"){
            return {
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
        }
        if (fstyle=="Nak Muay"){
            return {
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
        }
    }
    WeightP(){
        return Math.floor(Math.random() * (235-125+1)) + 125;
    }
    HeightP(){
        let feet = Math.floor(Math.random() * (6-5+1)) + 5;
        if (feet==5){return `5'${Math.floor(Math.random() * (11-4+1)) + 4}"`};
        if (feet==6){return `6'${Math.floor(Math.random() * 6)}"`};
    }
    AgeP(){
        return Math.floor(Math.random() * (45-18+1))+18;
    }
    fightHistoryP(){
        if (this.Age > 30){return [Math.floor(Math.random() * (28-15+1))+15,Math.floor(Math.random() * 20),0]}
        if (this.Age <= 30){return [Math.floor(Math.random() * 21),Math.floor(Math.random() * 11),0]}
    }
    BscoreP(){
        return Math.floor(Math.random() * 11)
    }
    popularityP(){
        return Math.floor(Math.random() * 11)
    }
}

let flist = []

for (let i=0;i<100;i++){
    let myFighter = new fighter();
    flist.push(myFighter)
}

jsonBACKEND[0]["NONE"].fighters = flist;
//fs.writeFileSync('backend.json',JSON.stringify(jsonBACKEND,null,2))



let grandnum = 0;

for (let i=0;i<100;i++){
    const arrayC = jsonBACKEND[0]["NONE"].fighters[i].Stats
    Object.keys(arrayC).forEach(key=>{
        grandnum = grandnum + arrayC[key];
    })
}

console.log(grandnum/100)