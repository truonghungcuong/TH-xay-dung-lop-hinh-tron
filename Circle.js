class Circle{
    radius;
    constructor(radius,color) {
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return this.radius*this.radius*Math.PI;
    }
}