import React from 'react';
import { database } from './Database';

const colorList = {
    "#BE0039": "dark red",
    "#FF4500": "red",
    "#FFA800": "orange",
    "#FFD635": "yellow",
    "#FFF8B8": "pale yellow",
    "#00A368": "dark green",
    "#00CC78": "green",
    "#7EED56": "light green",
    "#00756F": "dark teal",
    "#009EAA": "teal",
    "#00CCC0": "light teal",
    "#2450A4": "dark blue",
    "#3690EA": "blue",
    "#51E9F4": "light blue",
    "#493AC1": "indigo",
    "#6A5CFF": "periwinkle",
    "#94B3FF": "lavender",
    "#811E9F": "dark purple",
    "#B44AC0": "purple",
    "#E4ABFF": "pale purple",
    "#DE107F": "magenta",
    "#FF3881": "pink",
    "#FF99AA": "light pink",
    "#6D482F": "dark brown",
    "#9C6926": "brown",
    "#FFB470": "beige",
    "#000000": "black",
    "#515252": "dark gray",
    "#898D90": "gray",
    "#D4D7D9": "light gray",
    "#FFFFFF": "white",
};


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
    const colorWidth = 90/Object.keys(colorList).length + "vw";
    let index = 0;

    for (let [color, name] of Object.entries(colorList)) {
        const ID = name.split(" ").join("_");
        colors.push(<div 
            className='colorInSelector' 
            style={{backgroundColor:color, width:colorWidth}} 
            id={ID}
            onClick={() => selectColor(color, ID)}
            key={index}>
        </div>);
        index++;
    }
    return colors;
}

function selectColor(color, id) {
    document.getElementById(colorList[database.selColor].split(" ").join("_")).style.border = "0.15vw solid black";
    document.getElementById(id).style.border = "0.4vw solid black";
    database.selColor = color;
}

/*
const colorList = {
    "darkest red":  "#6D001A",
    "red":          "#FF4500",
    "orange":       "#FFA800",
    "yellow":       "#FFD635",
    "pale yellow":  "#FFF8B8",
    "dark green":   "#00A368",
    "green":        "#00CC78",
    "light green":  "#7EED56",
    "dark teal":    "#00756F",
    "teal":         "#009EAA",
    "light teal":   "#00CCC0",
    "dark blue":    "#2450A4",
    "blue":         "#3690EA",
    "light blue":   "#51E9F4",
    "indigo":       "#493AC1",
    "periwinkle":   "#6A5CFF",
    "lavender":     "#94B3FF",
    "dark purple":  "#811E9F",
    "purple":       "#B44AC0",
    "pale purple":  "#E4ABFF",
    "magenta":      "#DE107F",
    "pink":         "#FF3881",
    "light pink":   "#FF99AA",
    "dark brown":   "#6D482F",
    "brown":        "#9C6926",
    "beige":        "#FFB470",
    "black":        "#000000",
    "dark gray":    "#515252",
    "gray":         "#898D90",
    "light gray":   "#D4D7D9",
    "white":        "#FFFFFF",
}
*/
