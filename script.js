//CONVERSOR MILLAS - KILOMETROS
let mk = 0
let millas = 0
let kilometros = 01
do {
    mk = parseFloat(prompt('Conversor millas - Kilomentros. Presione 1-Millas, 2-Kilometros, 3-Salir'))
    switch (mk) {
        case 1:
            do {
                millas = parseFloat(prompt('iNSERTE UNA CANTIDAD DE MILLAS:'))
                if (millas <= 0 || isNaN(millas)) { alert('millas debe ser un número mayor a cero.') }
            } while (millas < 0 || isNaN(millas))
            kilometros = millas * 1.609
            alert("RESULTADO: " + millas + " MILLAS SON " + kilometros + " KILOMETROS")
            break
        case 2:
            do {
                kilometros = parseFloat(prompt('iNSERTE UNA CANTIDAD DE KILOMETROS:'))
                if (kilometros <= 0 || isNaN(kilometros)) { alert('kilometros debe ser un número mayor a cero.') }
            } while (kilometros < 0 || isNaN(kilometros))
            millas = kilometros / 1.609
            alert("RESULTADO: " + kilometros + " KILOMETROS SON " + millas + " MILLAS")
            break
        case 3:
            alert("ADIOS!")
            break
        default:
            alert("OPCION INCORRECTA")
    }
} while (mk !== 3)
