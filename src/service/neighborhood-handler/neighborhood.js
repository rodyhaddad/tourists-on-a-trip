
function Neighborhood(name) {
	this.name = name;
	this.TTAmount = 0;
}

Neighborhood.prototype.setTTAmount = function(value) {
	if (typeof value !== "undefined") {
		this.TTAmount = parseFloat(value);
	}
	return this;
}