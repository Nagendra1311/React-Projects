import React, { useEffect, useState } from 'react'

export const RamdomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    function randomUtilityColor(length) {
        return Math.floor(Math.random() * length)
    }

    const handleRandomHexColor = () => {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomUtilityColor(hex.length)]
        }
        setColor(hexColor)
    }

    const handleRandomRGBColor = () => {
        let r = randomUtilityColor(256);
        let g = randomUtilityColor(256);
        let b = randomUtilityColor(256);
        setColor(`rgb(${r},${g},${b})`);

    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleRandomRGBColor()
        else handleRandomHexColor();
    }, [typeOfColor])
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            textAlign: "center",
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRGBColor}>Generate Random Color</button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                marginTop: "200px"


            }}>
                <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
