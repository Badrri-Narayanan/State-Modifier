import React, { Component } from 'react'

export default class RadioButton extends Component {
    render(props) {
        return (
            <div>
                <input type="radio" 
                    id="A" className="rad" 
                    value="A" 
                    onClick={this.props.changeStatus} 
                />
                <label >A</label>
                <br/>
                <input type="radio" 
                    id="B" className="rad" 
                    value="B" 
                    onClick={this.props.changeStatus} 
                />
                <label >B</label>
                <br/>
                <input type="radio" 
                    id="C" className="rad" 
                    value="C" 
                    onClick={this.props.changeStatus} 
                />
                <label >C</label>
            </div>
        )
    }
}
