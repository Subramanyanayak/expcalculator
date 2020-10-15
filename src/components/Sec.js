import React, { Component } from 'react';
import Store from './Store';
import Second from './Second';

class Sec extends Component {
  state = {
    des: [
      {
        id: '',
        op: '',
        desc: '',
        value: '',
        
      }

    ],
    des2: [
      {
        id: '',
        op2: '',
        desc2: '',
        value2: ''

      }

    ]
  }

  delDesc = (id, e) => {
    this.setState({ des: [...this.state.des.filter(des => des.id !== id)] });
    console.log(id);
    e.preventDefault();
  }

  addTrans = (des, val, o) =>{
    console.log(des, val, o);
    const newDes = {
      id: 4,
      op: o,
      desc: des,
      value: val
    }
    this.setState({ des: [...this.state.des, newDes]});
  }

  addTrans2 = (des2, val2, o2) =>{
    console.log(des2, val2, o2);
    const newDes2 = {
      id: 5,
      op2: o2,
      desc2: des2,
      value2: val2
    }
    this.setState({ des2: [...this.state.des2, newDes2]});
  }
  
  render() {
  return (
    <div>
      <Store />
      <Second delDesc={this.delDesc} calc={this.state.des} calc2={this.state.des2} addTrans={this.addTrans} addTrans2={this.addTrans2} />
    </div>
  );
  }
}

export default Sec;
