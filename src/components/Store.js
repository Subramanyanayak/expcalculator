import React, { Component } from 'react';

class Store extends Component {
    render(){
  return (
    <form className="container">
        <div className="inter">
            <label id="lbl1"><b></b></label>
        </div>
        <div className="sec">
<           label id="lbl2">+ 3456</label>
        </div>
        <div className="income">
            <div className="left"><b>INCOME</b></div>
            <div className="right"><b>+ 0.00</b></div>
        </div>
        <div class="loss">
            <div className="left"><b>EXPENSES</b></div>
            <div className="right"><b>+ 0.00</b></div>
        </div>
    </form>
  );
}
}

export default Store;
