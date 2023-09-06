class Cilveks {
    constructor(age, name, sex){
        this.vecums = age;
        this.vards = name;
        this.dzimums = sex;
        this.info();
    }
    svinetDzD(){
        this.vecums ++;
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
    }


}

pirmais = new Cilveks(15, "Katrīna", "s")