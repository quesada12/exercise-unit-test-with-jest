// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//EURO TO DOLLARS
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One euro should be 127.9 yens",()=>{
    const {fromDollarToYen} = require("./app.js")
    const yens = fromDollarToYen(12)
    const expected=(12/1.2)*127.9
    expect(expected).toBe(yens)
})

test("One euro should be 0.8 pounds",()=>{
    const {fromYenToPound} = require("./app.js")
    const pounds = fromYenToPound(94)
    const expected=(94/127.9)*0.8
    expect(expected).toBe(pounds)
})