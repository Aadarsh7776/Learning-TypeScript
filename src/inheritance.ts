class Car {
    Color: string
    constructor(color: string) {
        this.Color = color
    }
}
class Audi extends Car {
    Price: number
    constructor(color: string, price: number) {
        super(color);
        this.Price = price;
    }
    display(): void {
        console.log("Color of Audi car: " + this.Color);
        console.log("Price of Audi car: " + this.Price);
    }
}
let obj = new Audi(" Black", 8500000);
obj.display();

interface OS {
    name: String,
    language: String
}
let OperatingSystem = (type: OS): void => {
    console.log('Android ' + type.name + ' has ' + type.language + " language");
};
let a5 = { name: 'O', language: 'Java' }
OperatingSystem(a5);