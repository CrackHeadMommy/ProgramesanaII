class Cilveks:
    def __init__(self, name, age, sex):
        self.vecums = age
        self.vards = name
        self.dzimums = sex
        self.info()
    
    def svinet_dz_d(self):
        self.vecums += 1
        self.info()

    def mainit_vardu(self, jaunais_vards):
        self.vards = jaunais_vards
        self.info()
    
    def mainit_dzimumu(self, jaunais_dzimums = ""):
        if jaunais_dzimums == "":
            if self.dzimums == "s":
                self.dzimums = "v"
            else:
                self.dzimums = "s"
        else:
            self.dzimums = jaunais_dzimums
            self.info()

    def info(self):
        print("Sveiki! Mani sauc ", self.vards, ".", sep = "")
        print("Man ir", self.vecums, "gadu.")
        if self.dzimums == "s":
            print("Es esmu sieviete")
        elif self.dzimums == "v":
            print("Es esmu vīrietis")
        else:
            print("Es esmu ", self.dzimums, ".", sep = "")

    def __del__(self):
        print("Visu labu! *nomirst*")


#pirmais = Cilveks("Anna", 12, "v")

#pirmais.mainit_dzimumu("nekatrs")
#pirmais.mainit_vardu("Joe")
#pirmais.svinet_dz_d()
#del pirmais