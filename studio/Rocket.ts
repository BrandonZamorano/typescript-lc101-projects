import { Payload } from './Payload'
import { Cargo } from './Cargo'
import { Astronaut } from './Astronaut'
export class Rocket {
	name: string;
	totalCapacityKg: number
	cargoItems: Cargo[] = [];
	astronauts: Astronaut[] = [];

	constructor(name: string, totalCapacityKg: number) {
		this.name = name;
		this.totalCapacityKg = totalCapacityKg;
	}

	sumMass(items: Payload[]): number {
		//Returns the sum of all items using each item's massKg property
		return items.reduce((acc, currItem) => acc + currItem.massKg, 0);
	}

	currentMassKg(): number {
		// Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
		return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
	}

	canAdd(item: Payload): boolean {
		// Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
		return this.currentMassKg() + item.massKg <= this.totalCapacityKg
	}

	addCargo(cargo: Cargo): boolean {
		if (this.canAdd(cargo)) {
			this.cargoItems.push(cargo);
			return true;
		}

		return false;
	}

	addAstronaut(astronaut: Astronaut): boolean {
		if (this.canAdd(astronaut)) {
			this.astronauts.push(astronaut);
			return true;
		}

		return false;
	}


}

