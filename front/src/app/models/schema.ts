export class job {
    ciMain: String;
    companyName: String;
    typeAccount: String;
}

export class address {
    country: string;
    state: field;
    city: field;
    zone: field;
    geoData: string;
    especificLocation: string;

    /*constructor(ctry: string, state: field, cit: field, zone: field, geo: string = '', esploc: string) {
        this.country = ctry;
        this.state = state;
        this.city = cit;
        this.zone = zone;
        this.geoData = geo;
        this.especificLocation = esploc
    }*/
}

export class field {
    id: string;
    valor: string;

    /*constructor(fid: string, va: string) {
        this.id = fid;
        this.valor = va;
    }*/
}

export class contact {
    web: String;
    email: String;
    phone: String;
    codePostal: String;
    address: address;
    socialLinks: [{
        name: String;
        link: String;
    }];
}

export class profile {
    ci: String;
    expedido: String;
    firstName: String;
    lastNameP: String;
    lastNameM: String;
    gender?: Number;
    photo?: String;
    birthDate: Date;
}

export class Contexto {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public estado:number, public owner:string) {
            
        }
}

export class State {
    _id: string;
    acronym: string;
    name: string;
    description: string;
    estado: number;
    valor: number;
    context_id: string;
}

export class Location {
    constructor(public _id:string, public acronym:string, public name:string, 
        public level:number, public typecon_id:string, public estado:number, 
        public owner: string, public resources:string, public geoData:any, 
        public childs:Location[]=[], public ischeck:boolean=false){

    }
}

export class TypeContext {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public estado:number, public context_id:string){
            
        }
}