import React from 'react';
import { database } from './Database';

const colorList = [
    '#6d001a','#c80a31','#ff4500', // red
    "#ffa800",'#ffd635','#fbf2b2', // orange/yellow
    '#00a468','#00cd79','#7fee55','#007670','#009fac','#00cdc1', // green
    '#1f4fa5','#3391eb','#50eaf4', // blue
    '#4737c2','#6a5cff','#95b5ff', // purple
    '#861ca3','#b649c1','#dcaeff', // violet
    '#df0880','#ff3582','#ff9aac', // pink
    '#6d462b','#9d6921','#ffb671', // brown
    '#000000','#505151','#8a8e91','#ffffff', // black to white
];

class ColorSelector extends React.Component {
    render() {
        return (
        <div className='colorSelector'>
            <div className='colorsPaletteDiv'>{getColors()}</div>
        </div>
        );
    }
}

export default ColorSelector;

function getColors() {
    var colors = [];
    const colorWidth = 90/colorList.length + "vw";
    for (let i = 0; i < colorList.length; i++) {
        colors.push(<div 
            className='colorInSelector' 
            style={{backgroundColor:colorList[i], width:colorWidth}} 
            id={"color"+i}
            onClick={() => selectColor(colorList[i],i)}
            key={i}>
        </div>);
    }
    return colors;
}

function selectColor(color,index) {
    var prevID = "color" + colorList.indexOf(database.selColor);
    document.getElementById("color"+index).style.border = "0.4vw solid black";
    document.getElementById(prevID).style.border = "0.15vw solid black";
    database.selColor = color;
}

// Write .colorInSelector:not(:last-child) with React


