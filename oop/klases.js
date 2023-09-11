class Cilveks {
    constructor(age, name, sex){
        this.vecums = age;
        this.vards = name;
        this.dzimums = sex;

        let rezultataVieta = document.getElementById("rezultats")

        let cilvekaDiv = document.createElement("div")
        this.infoVieta = document.createElement("p")
        cilvekaDiv.appendChild(this.infoVieta)

        let dzimsanasdienasPoga = document.createElement("button")
        dzimsanasdienasPoga.innerHTML = "Dzimšanas Diena!"
        dzimsanasdienasPoga.onclick = () => this.svinetDzD();

        cilvekaDiv.appendChild(dzimsanasdienasPoga)
        rezultataVieta.appendChild(cilvekaDiv)




        this.info();
    }
    svinetDzD(){
        this.vecums ++;
        this.info();
    }
    mainitVardu(jaunaisVards){
        this.vards = jaunaisVards;
    }
    mainitDzimumu(jaunaisDzimums=""){
        if(jaunaisDzimums == ""){
            if( this.dzimums == "s" ){
                this.dzimums = "v";
            } else {
                this.dzimums = "s";
            }
        } else {
            this.dzimums =  jaunaisDzimums;
        }

    }
    
    info(){
        let teksts = "Sveiki! Mani sauc " + this.vards + ". Man ir " + this.vecums + " gadu. ";
        teksts += "Es esmu ";
        if(this.dzimums == "s") {
            teksts += "sieviete."
        } else if (this.dzimums == "v") {
            teksts += "vīrietis."
        } else {
            teksts += this.dzimums;
        }
        console.log(teksts)
        this.infoVieta.innerHTML = teksts
    }


}

// pirmais = new Cilveks(15, "Katrīna", "s")

let visiCilveki = [];


function izveidotCilveku(){
    let vards = document.getElementById("vards").value
    let dzimums = document.getElementById("dzimums").value
    let vecums = document.getElementById("vecums").value
    visiCilveki.push( new Cilveks(vecums, vards, dzimums))
 }