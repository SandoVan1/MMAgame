const {fighter,editedJSONfileSave,createFAfighters,createFighters4League,save} = require('./fighter.js');

class newleague {
    constructor(type,name,promoter,country,divisions,fighters,popularity,netWorth){
        this.type=type;
        if (this.type==1){this.name=this.nameP();this.country=this.countryP();this.promoter=this.promoterP();this.popularity=this.popularityP();this.netWorth=this.netWorthP(this.popularity);} 
        else {this.name=name;this.country=country;this.promoter=promoter;this.popularity=popularity;this.netWorth=netWorth;};
        this.divisions=this.divisionsP(this.type);
        this.fighters=this.fightersP(this.type,this.divisions);
    }
    nameP(){
        let first_segment = [
            "Ultimate", "Supreme", "Elite", "Glorious", "Prime", "Pinnacle", "Legendary", "Dominant", "Majestic", "Noble",
            "Paramount", "Eternal", "Grand", "Royal", "Immortal", "Titan", "Victory", "Prestige", "Apex", "Sovereign",
            "Maximum", "Renowned", "Heroic", "Ascended", "Premier", "Illustrious", "Power", "Exalted", "Crowned", "True",
            "Invincible", "Celestial", "Master", "Imperial", "Hallmark", "Unmatched", "Respected", "Epic", "Valor", "Revered",
            "Renegade", "Top", "Virtuous", "Clutch", "Unrivaled", "Reign", "Throne", "Elitecore", "Champion’s", "Immense"];
        let second_segment = [
            "Fighting", "Combat", "Brawling", "Clash", "Battling", "Strike", "Warriors", "Conflict", "Takedown", "Groundwork",
            "Grappling", "Boxing", "Slugfest", "Throwdown", "Duel", "Aggression", "Melee", "Battle", "Skirmish", "Warfare",
            "Scrap", "Fray", "Hitforce", "Smash", "Pummeling", "Shootout", "Wrestling", "Gladiators", "Contest", "Rumble",
            "Sparring", "Submission", "Showdown", "Blast", "Cagefight", "Impact", "Collision", "Pressure", "Lockdown", "Blitz",
            "Blastzone", "Knockout", "Rage", "Power", "Intensity", "Strikeforce", "Violence", "Shockwave", "Heat", "Bloodline"];
        let third_segment = [
            "Championship", "League", "Association", "Federation", "Alliance", "Union", "Council", "Confederation", "Syndicate", "Division",
            "Circuit", "Network", "Order", "Dome", "Consortium", "Collective", "Platform", "Ring", "Commission", "Arena",
            "Society", "Summit", "Core", "Nexus", "Zone", "Sphere", "Authority", "Series", "Forum", "Coliseum",
            "Assembly", "Guild", "Nation", "Territory", "Sanctum", "Battleground", "Matrix", "Dominion", "Conclave", "Empire",
            "Structure", "Brotherhood", "Council", "Stage", "Board", "Field", "Venue", "Hall", "Unionforce", "Dominance"];
        let name = [first_segment[Math.floor(Math.random() * first_segment.length)], second_segment[Math.floor(Math.random() * second_segment.length)],third_segment[Math.floor(Math.random() * third_segment.length)]];
        return {FULLname:(name[0] + " " + name[1] + " " + name[2]),ABREVIATEDname:(name[0][0]+name[1][0]+name[2][0])}
    }
    promoterP(){
        let firstNames= ["Brent", "Zachary", "Miles", "Damian", "Kurt", "Jared", "Dominic", "Victor", "Derek", "Colton", "Lukas", "Ronald", "Jude", "Clayton", "Harvey", "Hector", "Dallas", 
                "Raul", "Frederick", "Travis", "Marco", "Gregory", "Quinton", "Tyson", "Alberto", "Drake", "Brady", "Felix", "Randy", "Troy", "Desmond", "Jaiden", "Sergio", "Julio", "Alvin", 
                "Kaden", "Marshall", "Andres", "Kason", "Reed", "Wade", "Skyler", "Lionel", "Otis", "Gideon", "Roy", "Emilio", "Finley", "Cory", "Emanuel", "Reece", "Kellen", "Trenton", "Franklin", 
                "Erik", "Lawrence", "Emerson", "Mohamed", "Brock", "Terrance", "Cesar", "Nash", "Neil", "Jonas", "Saul", "Tatum", "Jamari", "Matteo", "Warren", "Tobias", "Sterling", "Orlando", 
                "Damon", "Moises", "Kameron", "Armani", "Jax", "Ronan", "Ismael", "Gianni", "Leonel", "Kamari", "Ty", "Alec", "Jeffery", "Kelvin", "Joaquin", "Nikolas", "Jalen", "Rocco", "Cason", 
                "Ezequiel", "Phillip", "Braylen", "Kamden", "Boston", "Tate", "Malik", "Casey", "Samir", "Kian", "Luciano", "Cristian", "Jase", "Maximus", "Albert", "Cassius", "Jaziel", "Quincy", 
                "Edison", "Ahmad", "Roland", "Rodney", "Davion", "Trey", "Javon", "Bruno", "Kobe", "Mekhi", "Hugh", "Johan", "Ronin", "Nikola", "Bryant", "Jericho", "Dwayne", "Kellan", "Antoine", 
                "Jagger", "Kairo", "Nico", "Trent", "Kayson", "Zyon", "Jensen", "Aarav", "Kyler", "Alonzo", "Judah", "Eden", "Reese", "Maximilian", "Finnley", "Armando", "Davian", "Blaine", "Elian",
                "Cyrus", "Harley", "Dominik", "Brayan", "Zaid", "Keenan", "Malakai", "Jayson", "Noel", "Marvin", "Gunnar", "Landry", "Wayne", "Forrest", "Deacon", "Derrick", "Magnus", "Henrik", 
                "Julius", "Ryland", "Kendrick", "Jett", "Leandro", "Yahir", "Augustus", "Enrique", "Alden", "Conrad", "Ares", "Korbin", "Maurice", "Shane", "Otto", "Wallace", "Benson", "Valentino", 
                "Kalel", "Denver", "Riggs", "Raylan", "Kolton", "Javion", "Ernesto", "Westin", "Kyson", "Zechariah", "Mitchell", "Finnian", "Leonard", "Cullen", "Eliseo", "Hamza", "Arian", 
                "Alfredo", "Sonny", "Layton", "Khalid", "Rayan", "Colt", "Lucian", "Bobby", "Kaiser", "Lachlan", "Emmitt", "Bo", "Justice", "Jermaine", "Camilo", "Chris", "Banks", "Alden", "Noe", 
                "Vicente", "Harold", "Carmelo", "Arlo", "Boston", "Zeke", "Hezekiah", "Jadon", "Anderson", "Santino", "Leif", "Ridge", "Nikolai", "Kye", "Branson", "Callen", "Alijah", "Jairo", 
            "Ahmir", "Junior", "Terrence", "Jedidiah", "Omari", "Axton", "Zaire", "Mauricio", "Yosef", "Boden", "Jamir", "Anakin", "Jeremias", "Case", "Amos"];
        let lastnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", 
                "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", 
                "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", 
                "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", 
                "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", 
                "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", 
                "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds", "Griffin", 
                "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens", 
                "Harrison", "Fernandez", "Mcdonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", 
                "Simpson", "Porter", "Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", 
                "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", 
                "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", "Elliott", "Cunningham", 
                "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray", "Delgado", "Berry", "Perkins", "Hoffman", "Johnston", "Matthews", "Pena", "Richards", 
                "Contreras", "Willis", "Carpenter", "Lawrence", "Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", 
            "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "Obrien"];
        return {Fname: firstNames[Math.floor(Math.random() * firstNames.length)],Lname:lastnames[Math.floor(Math.random() * lastnames.length)]};
    }
    countryP(){
        const countryList = ["American","Brazilian","Russian","Australian",
        "Mexican","English","Georgian","Nigerian","Chinese","French", "Spanish", "Thai"];
        return countryList[Math.floor(Math.random() * 10)];
    }
    divisionsP(Ltype){
        if(Ltype==1){
            return {
                    fly: Boolean(Math.floor(Math.random() * 2)),
                    bantam: Boolean(Math.floor(Math.random() * 2)),
                    feather: Boolean(Math.floor(Math.random() * 2)),
                    light: Boolean(Math.floor(Math.random() * 2)),
                    welter: Boolean(Math.floor(Math.random() * 2)),
                    middle: Boolean(Math.floor(Math.random() * 2)),
                    lightheavy: Boolean(Math.floor(Math.random() * 2)),
                    heavy: Boolean(Math.floor(Math.random() * 2))};
        } else {
            return {divisions: {fly: false,bantam: false,feather: false,light: false,welter: false,middle: false,lightheavy: false,heavy: false}}
        };
    }
    popularityP(){
        return Math.floor(Math.random() * 11)
    }
    netWorthP(pop){
        if (pop==0){return 0;};
        if(pop>0 && pop<4){return Math.floor(Math.random()*100000);};
        if(pop>=4 && pop<8){return Math.floor(Math.random()*(1000000-100000+1))+100000;};
        if(pop>=8 && pop<11){return Math.floor(Math.random()*(10000000-1000000+1))+1000000;};
    }
    fightersP(Ltype,divisions){
        if (Ltype==0){return []}
        else {
            return createFighters4League(divisions);
        }
    }
}
function leagueStart(){
    for(let i=0;i<5;i++){
        let league = new newleague(1);
        delete league.type;
        editedJSONfileSave[league.name.FULLname] = league;
    }
    createFAfighters();
    save();
}
function leagueDivisions(league){
    const obj = editedJSONfileSave[league].fighters;
    let divisions = {fly:[],bantam:[],feather:[],light:[],welter:[],middle:[],lightheavy:[],heavy:[]}
    for (let i=0;i<editedJSONfileSave[league].fighters.length;i++){
        let weight = editedJSONfileSave[league].fighters[i].Weight;
        if (weight<=125){
            divisions.fly.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>125 && weight<=135){
            divisions.bantam.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>135 && weight<=145){
            divisions.feather.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>145 && weight<=155){
            divisions.light.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>155 && weight<=170){
            divisions.welter.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>170 && weight<=185){
            divisions.middle.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>185 && weight<=205){
            divisions.lightheavy.push(editedJSONfileSave[league].fighters[i])
        }
        if (weight>205){
            divisions.heavy.push(editedJSONfileSave[league].fighters[i])
        }
    }

    Object.keys(divisions).forEach(key=>{
        console.log(`\n${key}weight:`)
        for (let i=0;i<divisions[key].length;i++){
            console.log(divisions[key][i].Fname, divisions[key][i].Lname);
        }
    })
}


module.exports =
{
    leagueStart,
    save,
    leagueDivisions,
}
