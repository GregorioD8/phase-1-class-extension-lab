class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides() {
        return this.sidesArray.length
    }
    get perimeter() {
        return this.sidesArray.reduce((a, b) => a + b, 0)
    }

}


class Triangle extends Polygon {
    constructor(sidesArray) {
        super(sidesArray)

    }

    get isValid() {
       
        let a = this.sidesArray[0]
        let b = this.sidesArray[1]
        let c = this.sidesArray[2]

        if (a + b <= c || a + c <= b || c + b <= a) {
            return false
        } else {
            return true
        }
    }
}


class Square extends Polygon {
    constructor(sidesArray) {
        super(sidesArray)

    }

    get isValid() {
        let perimeter = this.perimeter
        let target = perimeter / 4
        for (let el of this.sidesArray) {
            if (el != target) {
                return false
            }
        }
        return true
    }

    get area() {

        return this.sidesArray[0] * this.sidesArray[0]

    }

}