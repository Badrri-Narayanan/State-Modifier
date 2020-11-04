import React, { Component } from 'react'

export default class ListButton extends Component {

    render(props) {
        return (
            <div>
                <input type={this.props.type} 
                    value={this.props.name} 
                    onChange={this.props.onBoxCheck}
                    id={this.props.name} 
                    className="chkbox"
                />
                <label>{this.props.name}</label> 
            </div>
        )
    }
}
