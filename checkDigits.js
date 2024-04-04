const checkDigits =(upc12digit) =>{//siempre pasar un string ojo

    if( upc12digit.length !== 12){
        return `${upc12digit} no tiene 12 digitos`
    }

    const quitarUltimoDigit = (upc12digit).slice(0,-1)

    let sumaImpares = 0;
    let sumaPares = 0;

    for (let i = 0; i < quitarUltimoDigit.length; i++) {
        if (i % 2 === 0) {
            sumaPares += (parseInt(quitarUltimoDigit[i]))*3;
        } else {
            sumaImpares += parseInt(quitarUltimoDigit[i]);
        }
    }

    const sumaTotal = sumaImpares+sumaPares

    const checkDigit = (sumaTotal) % 10 == 0 ? 0 : (10 - (sumaTotal % 10))

    const chequeoUpcParametro = `${quitarUltimoDigit}${checkDigit}` == upc12digit

    return chequeoUpcParametro
}
// console.log(checkDigit('302340096584'))

export default checkDigits