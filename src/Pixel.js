import React from 'react';
import { database } from './Database';

class Pixel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: database.pixels[this.props.index].color,
            user: database.pixels[this.props.index].user,
        }
    }

    change = () => {
        this.setState({ 
            color: database.selColor,
            user: database.color,
        })
    }

    render() {
        var STYLE = {
            backgroundColor: this.state.color,
            width: '10px',
            height: '10px',
            display: 'inline-block',
        }
        return (
            <div style={STYLE} onClick={this.change}></div>
        );
    }
}

export default Pixel;

/*
import React from 'react';
import { database } from './Database';

class Pixel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: database.pixels[this.props.key].color,
            user: database.pixels[this.props.key].color,
        }
    }

    change = () => {
        this.setState({ 
            color: database.selColor,
            user: database.color,
        })
    }

    render() {
        var STYLE = {
            backgroundColor: this.state.color,
            width: '10px',
            height: '10px',
            display: 'inline-block',
        }
        return (
            <div style={STYLE} onClick={this.change}></div>
        );
    }
}

export default Pixel;
*/