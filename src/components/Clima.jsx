import React from 'react';

const Clima = ({resultado}) => {
    
    // extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    // Grados Kelvin (convertir)
    const kelvin = 273.15;

    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p>Temperatura maxima: 
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p>Temperatura minima: 
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}

export default Clima;