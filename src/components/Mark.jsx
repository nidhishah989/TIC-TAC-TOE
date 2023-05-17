import React, { Component } from "react";
import './Mark.css'

class Mark extends Component {
  constructor() {
    super();
    // this.state = {
    //   name: "React"
    // };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    // console.log(event.target.value);
    // console.log(this.props.Player);
    this.props.setPlayers({...this.props.Players,
        player1mark:event.target.value,
        player2mark : event.target.value === 'X'? 'O':'X'
    })
    // this.props.setPlayer(event.target.value);
    // console.log(this.props.Player);
  }

  render() {
    return (
      <div className='mark-options d-flex flex-row' onChange={this.onChangeValue}>
        <div className='col'>
            <input type="radio" class="btn-check" value="X" id="mark-x" name="marks" defaultChecked/>
            <label class="btn btn-outline-success" for='mark-x'>X</label>
        </div>
        <div className="col">
        <input type="radio" class="btn-check" value="O" id="mark-o" name="marks" /> 
        <label class="btn btn-outline-danger" for="mark-o" >O
        
        </label>
        </div>
      </div>
    );
  }
}

export default Mark;