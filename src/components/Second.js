import React, { Component } from 'react';

class Second extends Component {

  state = {
    description: '',
    value: '',
    op: 'inc',
    description2: '',
    value2: '',
    op2: ''
  }


   
onChange2 = (e) => {
  this.setState({
   
  });
}

      onChange = (e) =>{
        this.state.op2 !== 'exp2'?
        this.setState({ [e.target.name]: e.target.value }):this.setState({ [e.target.name + 2]
          : e.target.value });
          console.log(this.state.description2);
          console.log(this.state.value2);
          console.log(this.state.op2);
          console.log(this.state.op);

          console.log(this.state.description);
          console.log(this.state.value);
          

          console.log(e.target.value);
          console.log(e.target.name + 2 + '=' + e.target.value);
          console.log(e.target.name + '=' + e.target.value);
      }
     

      onClick = (e) =>{
        this.state.op2 !== 'exp2'?
        this.props.addTrans(this.state.description, this.state.value, this.state.op): this.props.addTrans2(this.state.description2, this.state.value2, this.state.op2)
        console.log(this.state.description);
        console.log(this.state.value);
        console.log(this.state.op);
        console.log(this.state.description2);
        console.log(this.state.value2);
        console.log(this.state.op2);
        this.setState({
          description: '',
          value: '',
          description2: '',
          value2: ''
        });
      }

    render(){
  
    
  return (
    <form className="container2">
       <div className="second">
            <select className="sele" name="op" onChange={this.onChange} >
            <option className="one" value='inc'>+</option>
            <option className="two" value='exp2'>-</option>
            </select>
        </div>
        <div className="tird">
            <input type="text" name="description" id="inpu" placeholder="Add description" onChange={this.onChange} />
        </div>
        <div className="fort">
        <input type="number" name="value" class="selee" placeholder="Value" onChange={this.onChange} />
        </div>
        <div className="five">
        <input type="button" value="Submit" onClick={this.onClick}/>
        </div>
        <div className="incomess">
            <h3 style={{float: 'left'}}>INCOME</h3>
  
        <div className="income__list">
   
        {this.props.calc.map((arr) => (
            <div style={instyle} className="profit">
      
            <h4 style={{float:'left', padding: '10px'}}> {arr.desc} </h4>
             <h4 style={{ padding: '10px', paddingLeft: '330px'}}>{arr.value}</h4>
            
             {arr.desc !== ''?
            <button onClick={this.props.delDesc.bind(this, arr.id)} style={btnStyle} className="btn">x</button>: console.log('')  }
           

            </div>

        ))}

        </div>
    
        </div>
        <div className="expensess">
            <h3>EXPENSES</h3>

        <div className="expenses__list">

        {this.props.calc2.map((arr) => (
            <div style={instyle} className="profit">
          
      
            <h4 style={{float:'left', padding: '10px'}}> {arr.desc2} </h4>
             <h4 style={{ padding: '10px', paddingLeft: '400px'}}>{arr.value2}</h4>
            
             {arr.desc2 !== ''?
            <button onClick={this.props.delDesc.bind(this, arr.id)} style={btnStyle} className="btn">x</button>: console.log('')  }
           

            </div>

        ))}


        </div>
        </div>


    </form>
  );
}
}
const instyle = {
    borderBottom:'1px  #ccc dotted',
    backgroundColor: '#f4f4f4',
    overflow: 'hidden'
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    marginTop: '-32px',
}

export default Second;
