const {Circle, Triangle, Square} = require("./shapes.js")

test("Circle render method renders circle tag", ()=>{
    const color = "blue"
    const expectedShape = `<circle cx="150" cy="100" r="80" fill="${color}" />`
    const shape = new Circle(color).render()

    expect(expectedShape).toBe(shape)
})

test("Triangle render method renders triangle tag", () =>{
    const color = "red"
    const expectedShape = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    const shape = new Triangle(color).render()

    expect(expectedShape).toBe(shape)
})

// Test using hexidecimal for the sake of showing that hex colors work.
test("Square render method renders square tag", () =>{
    const color = "#800080"
    const expectedShape = `<rect x="90" y="40" width="120" height="120" fill="${color}" />`
    const shape = new Square(color).render()
    
    expect(expectedShape).toBe(shape)
})