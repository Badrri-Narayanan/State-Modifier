import React, { Component } from 'react';
import './StateSetterGetter.css';

export default class StateSetterGetter extends Component {

    render(props) {
        return (
            <div className="component">
                <input type="text" onChange={this.props.inputText}/>
                <button type="button" onClick={this.props.apply} >Apply State</button>
                <button type="button" onClick={this.props.copy} >Copy State</button>
            </div>
        )

    }
}
