export class Contexto {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public estado:number, public owner:string) {
            
        }
}

export class TypeContext {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public estado:number, public context_id:string){
            
        }
}

export class State {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public estado:number, public color:string,
        public valor:number, public context_id:string){
            
        }
}

export class TypePay {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public typecon_id:string, public estado:number, 
        public details:any, public costo: number=0){
            
        }
}

export class RefundType {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public typecon_id:string, public estado:number, public details:any){
            
        }
}

export class OptionWay {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public typecon_id:string, public estado:number, 
        public details:any){
            
        }
}

export class Family {
    constructor(public _id:string, public fullname:string, public name:string, 
        public level:number, public typecon_id:string, public estado:number, 
        public owner: string, public description:string){

    }
}

export class Location {
    constructor(public _id:string, public acronym:string, public name:string, 
        public level:number, public typecon_id:string, public estado:number, 
        public owner: string, public resources:string, public geoData:any, 
        public childs:Location[]=[], public ischeck:boolean=false){

    }
}

export class FormatSale {
    constructor(public _id:string, public acronym:string, public name:string, 
        public description:string, public typecon_id:string, public estado:number, public details:any){
            
        }
}