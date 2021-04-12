import { Payload } from './Payload'
import { Cargo } from './cargo'
import { Astronaut } from './astronaut'
export class Rocket{
        name: string;
        totalCapacityKg:number;
        cargoItems :[];
        astronauts :[];
    constructor(name:string,totalCapacityKg :number) {
        this.totalCapacityKg  = totalCapacityKg ;
        this.name = name;
             }
     


sumMass( items: Payload[] ): number{
    let sum: number = 0;
   
    for ( let i=0 ;i<items.length;i++){
           sum = sum + items[i].massKg;
        };
        return sum; 
}
currentMassKg(): number{
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);

}
canAdd(item: Payload): boolean{
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true
    }else{
    return false}
}
addCargo(cargo: Cargo): boolean{
    if (this.canAdd(cargo) === true){
        this.cargoItems.push(cargo);
        return true;
     }else{
         return false}

}
addAstronaut(astronaut: Astronaut): boolean{
    if (this.canAdd(astronaut) === true){
        this.cargoItems.push(astronaut);
        return true;
     }else{
         return false}
}
}