
export class Neighborhood {
	name:String;
	TTAmount: Number;
	
	constructor(name:String) {
		this.name = name;
		this.TTAmount = 0;
	}
	
	setTTAmount(value:any = this.TTAmount) {
		this.TTAmount = parseFloat(value);
		return this;
	}
}