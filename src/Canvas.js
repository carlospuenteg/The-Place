import React from 'react';
import Pixel from './Pixel.js';
import ColorSelector from './ColorSelector.js';
import { MAX_PIXELS } from './Database.js';

class Canvas extends React.Component {
    render() {
        var CANVA_STYLE = {
            display: 'table',
            margin: '0 auto',
            marginBottom: '10vh',
            border: '0.1vw solid white'
        }
        var ROW_STYLE = {
            display: 'flex'
        }

        var canvas = [];
        var row = [];

        for (let i = 0; i < MAX_PIXELS; i++) {
            row = []
            for (let j = 0; j < MAX_PIXELS; j++) {
                row.push(<Pixel key={i*MAX_PIXELS+j} index={i*MAX_PIXELS+j}/>);
            }
            canvas.push(<div key={i} style={ROW_STYLE}>{row}</div>);
        }
        return (
        <>
        <ColorSelector/>
        <div style={CANVA_STYLE}>
            {canvas}
        </div>
        </>
        );
    }
}

export default Canvas;