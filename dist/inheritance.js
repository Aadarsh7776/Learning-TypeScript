class Car {
    constructor(color) {
        this.Color = color;
    }
}
class Audi extends Car {
    constructor(color, price) {
        super(color);
        this.Price = price;
    }
    display() {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    }
}
let obj = new Audi(" Black", 8500000);
obj.display();
let OperatingSystem = (type) => {
    console.log('Android ' + type.name + ' has ' + type.language + " language");
};
let a5 = { name: 'O', language: 'Java' };
OperatingSystem(a5);
