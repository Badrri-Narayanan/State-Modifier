import React, { Component } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import CheckBoxButton from '../CheckBoxButton/CheckBoxButton';

export default class ListOfComponent extends Component {
    constructor(props) {
        super();
    }

    onChangeRadioStatus = (event) => {
        this.props.radioStatus(event.target.value);
    }

    onChangeCheckBoxStatus = (event) => {
        this.props.checkboxStatus(event.target.value, event.target.checked)
    }

    render(props) {
        return (
            <div>
                <RadioButton changeStatus={this.onChangeRadioStatus} />
                <CheckBoxButton type="checkbox" onBoxCheck={this.onChangeCheckBoxStatus} name="AA"/>
                <CheckBoxButton type="checkbox" onBoxCheck={this.onChangeCheckBoxStatus} name="BB"/>
                <CheckBoxButton type="checkbox" onBoxCheck={this.onChangeCheckBoxStatus} name="CC"/>
            </div>
        )
    }
}
