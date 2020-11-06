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
    console.log(id);
    e.preventDefault();//delete id value from income
   // var ind = this.state.des.findIndex(des => des.id === id);
   // this.state.des[0].id
   // this.setState({ income: this.state.income - this.state.des.findIndex(des => des.id === id)});
   var sk = this.state.des.filter(des => des.id === id);
   console.log(parseInt(sk.value));
   console.log(sk);
   console.log(parseInt(sk[0].value));
   var vik = this.state.income - sk[0].value;
   console.log(vik);
   console.log(this.state.income);
   this.setState( { income: this.state.income - parseInt(sk[0].value)});
   let t2 = this.state.expense > this.state.income ?
   parseInt(this.state.total) - parseInt(sk[0].value): parseInt(this.state.total) - parseInt(sk[0].value);
   this.setState({
    total: t2
  });
  }
  delDesc2 = (id, e) => {
    this.setState({ des2: [...this.state.des2.filter(des2 => des2.id !== id)] });
    console.log(id);
    e.preventDefault();

    var sk2 = this.state.des2.filter(des2 => des2.id === id);
   console.log(parseInt(sk2.value));
   console.log(sk2);
   console.log(parseInt(sk2[0].value));
   var vik2 = this.state.expense - sk2[0].value2;
   console.log(vik2);
   console.log(this.state.expense);
   this.setState( { expense: this.state.expense - parseInt(sk2[0].value2)});

   let t2 = this.state.expense > this.state.income ?
   parseInt(this.state.total) + parseInt(sk2[0].value2): parseInt(this.state.total) + parseInt(sk2[0].value2);
   this.setState({
    total: t2
  });
  }

  addTrans = (des, val, o, i) =>{
    console.log(des, val, o, i);
    const newDes = {
      id: uuid(),
      op: o,
      desc: des,
      value: val,
      income: i



    }
    this.setState({ des: [...this.state.des, newDes]});
    console.log(i);
  }

  addTrans2 = (des2, val2, o2) =>{
    console.log(des2, val2, o2);
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
        </div>
        <div className="inter">
        <p id="yek">Available Budget in {month} {date}: </p>
        </div>
        <div className="sec">
  <           label id="lbl2">{this.state.total}.00</label>
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
      <Second delDesc={this.delDesc} delDesc2={this.delDesc2} calc={this.state.des} calc2={this.state.des2} addTrans={this.addTrans} addTrans2={this.addTrans2} addFinal={this.addFinal} addFinal2={this.addFinal2} addTotal={this.addTotal}    />
    </div>
  );
  }
}
var date = new Date().getFullYear();
console.log(date);
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d =new Date();
var month = monthNames[d.getMonth()];
console.log(month);

export default Sec;