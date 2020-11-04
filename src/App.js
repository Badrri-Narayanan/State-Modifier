import React from 'react';
import './App.css';
import './Components/StateSetterGetter/StateSetterGetter'
import StateSetterGetter from './Components/StateSetterGetter/StateSetterGetter';
import ListOfComponents from './Components/ListOfComponents/ListOfComponents';

let inputText = '';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      radio: '',
      checkbox: [],
    };
  }
  applyState = () => {
      if(inputText !== '') {
        let array = JSON.parse(inputText);
        if(array.radio !== '') {
          let radio = document.getElementById(array.radio);
          radio.checked = true;
        } else {
          let radios = document.getElementsByClassName("rad")
          for(let i=0; i<radios.length; i++) {
            radios[i].checked = false;
          }
        }
        if(array.checkbox !== []) {
          let checkboxes = document.getElementsByClassName("chkbox")
          for(let i=0; i<checkboxes.length; i++) {
            if( array.checkbox.includes(checkboxes[i].value) ) {
              checkboxes[i].checked = true;
            }
          }
        } else {
          let checkboxes = document.getElementsByClassName("chkbox")
          for(let i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = false;
          }
        }
      }
  }

  copyState = () => {
    let input = document.querySelector("input.copyfrom");
    input.value = input.defaultValue;
    input.select(); 
    document.execCommand("copy");
  }

  clickedRadioButton = (value) => {
    this.setState({radio: value});
  }

  clickedCheckBoxButton = (value, checked) => {
    let array = this.state.checkbox;
    if(checked) {
      array.push(value);
    } else {
      const index = array.indexOf(value);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    this.setState({checkbox: array});
  }

  onChangeInputText = (event) => {
    inputText = event.target.value;
  }

  render() {
    return (
      <div className="App">
        <StateSetterGetter 
          apply={this.applyState} 
          copy={this.copyState} 
          inputText={this.onChangeInputText}
        />
        <ListOfComponents 
          radioStatus={this.clickedRadioButton} 
          checkboxStatus={this.clickedCheckBoxButton} 
        />
        <input className='copyfrom' tabIndex='-1' aria-hidden='true' defaultValue={ JSON.stringify(this.state) } />
      </div>
    );
  }

};
