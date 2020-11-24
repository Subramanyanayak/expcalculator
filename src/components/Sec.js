import React, { Component } from 'react';
import Second from './Second';
import {v4 as uuid} from 'uuid';

class Sec extends Component {
  
  state = {
    des: [
      {
        id: '',
        op: '',
        desc: '',
        value: ''
      }

    ],
    des2: [
      {
        id: '',
        op2: '',
        desc2: '',
        value2: ''

      }

    ],

    income: 0,
    expense: 0,
    total: 0
  }

  addTotal = (t) =>{
    this.setState({
      total: t
    });
  }

  addFinal = (i) =>{
    this.setState({
      income: i
    });
  }
  addFinal2 = (j) =>{
    this.setState({
      expense: j
    });
  }

  delDesc = (id, e) => {
    this.setState({ des: [...this.state.des.filter(des => des.id !== id)] });
    e.preventDefault();
   var sk = this.state.des.filter(des => des.id === id);
   this.setState( { income: this.state.income - parseInt(sk[0].value)});
   let t2 = this.state.expense > this.state.income ?
   parseInt(this.state.total) - parseInt(sk[0].value): parseInt(this.state.total) - parseInt(sk[0].value);
  this.setState({
   total: t2}, () => {return this.state.total}
  );
  
  console.log(this.state.total);
  console.log(this.state.income);
  }
  delDesc2 = (id, e) => {
    this.setState({ des2: [...this.state.des2.filter(des2 => des2.id !== id)] });
    e.preventDefault();

    var sk2 = this.state.des2.filter(des2 => des2.id === id);
   this.setState( { expense: this.state.expense - parseInt(sk2[0].value2)});

   let t2 = this.state.expense > this.state.income ?
   parseInt(this.state.total) + parseInt(sk2[0].value2): parseInt(this.state.total) + parseInt(sk2[0].value2);
   this.setState({
    total: t2
  });
  }

  addTrans = (des, val, o, i) =>{
    const newDes = {
      id: uuid(),
      op: o,
      desc: des,
      value: val,
      income: i



    }
    this.setState({ des: [...this.state.des, newDes]});
  }

  addTrans2 = (des2, val2, o2) =>{
    var newDes2 = {
      id: uuid(),
      op2: o2,
      desc2: des2,
      value2: val2
    }
    this.setState({ des2: [...this.state.des2, newDes2]});
  }
  

  
  render() {
  return (
    <div>
      <form className="container">
        <div className="inter">
        <p id="yek">Available Budget in {month} {date}: </p>
        </div>
        <div className="sec">
  <label id="lbl2">{this.state.total}.00</label>
        </div>
        <div className="income">
            <div className="left">income</div>
  <div className="right"><b> + {this.state.income}.00</b></div>
        </div>
        <div class="loss">
            <div className="left">EXPENSES</div>
            <div className="right"><b>+ {this.state.expense}.00</b></div>
        </div>

    </form>
      <Second income={this.state.income} expense={this.state.expense} delDesc={this.delDesc} delDesc2={this.delDesc2} calc={this.state.des} calc2={this.state.des2} addTrans={this.addTrans} addTrans2={this.addTrans2} addFinal={this.addFinal} addFinal2={this.addFinal2} addTotal={this.addTotal}    />
    </div>
  );
  }
}
var date = new Date().getFullYear();
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d =new Date();
var month = monthNames[d.getMonth()];

export default Sec;
