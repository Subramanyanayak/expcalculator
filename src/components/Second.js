import React, { Component } from 'react';


class Second extends Component {

  state = {
    description: '',
    value: '',
    op: 'inc',
    description2: '',
    value2: '',
    op2: '',
    income: 0,
    expense: 0
  }

  opOnchange = (e) =>{
    //have to toggle 
//if inc then exp if exp then inc
if (this.state.op2 === '') {
  this.setState({ [e.target.name + 2]: e.currentTarget.value });
  console.log('second');
}
else{
  this.setState({ [e.target.name + 2]: e.currentTarget.value });
  console.log('first');
}

    
  }


      onChange = (e) =>{
if (this.state.op2 === 'exp2') {
  this.setState({ [e.target.name + 2]: e.currentTarget.value });
  console.log('working');
}
else
{
  this.setState({ [e.target.name]: e.currentTarget.value });
  console.log('not working');
  console.log(this.state.value);


  
}


        //this.state.op2 !== 'exp2'?//tell me exactly what should be the condition here , i have tried many:|
        //this.setState({ [e.target.name]: e.target.value }):this.setState({ [e.target.name + 2]
         // : e.target.value });
        
      }

      onClick = (e) =>{

        if (this.state.op2 !== 'exp2' && this.state.description !== '') {
          let i = parseInt(this.state.income) + parseInt(this.state.value);
          console.log(i);
                    this.setState({ income: i }, () => {
                      this.props.addTrans(this.state.description, this.state.value, this.state.op, this.state.income);
                      this.props.addFinal(this.state.income);
                      let t = parseInt(this.state.income) - parseInt(this.state.expense);
                      this.props.addTotal(t);
                      console.log(this.state.description);
                      console.log(this.state.value);
                      console.log(this.state.op);
                      console.log(this.state.income);//function
                      this.setState({
                        description: '',
                        value: '',
                        description2: '',
                        value2: '',
                      });
                    });
                  }
                  else if(this.state.op2 === 'exp2' && this.state.description2 !== ''){
                    let j = parseInt(this.state.expense) + parseInt(this.state.value2);
                    this.setState({ expense: j }, () => {
                      this.props.addTrans2(this.state.description2, this.state.value2, this.state.op2);
                      this.props.addFinal2(this.state.expense);
                      let t = parseInt(this.state.income) - parseInt(this.state.expense);
                      this.props.addTotal(t);
                    });
                    console.log(this.state.expense);
                    console.log(this.state.value2 + 'two');
                  }
       // this.state.op2 !== 'exp2'? //here also
       // this.props.addTrans(this.state.description, this.state.value, this.state.op, this.state.income):this .props.addTrans2(this.state.description2, this.state.value2, this.state.op2)
        console.log(this.state.description);
        console.log(this.state.value);
        console.log(this.state.op);
        console.log(this.state.description2);
        console.log(this.state.value2);
        console.log(this.state.op2);
        console.log(this.state.income);
       
       
      }

    render(){
  
    
  return (

    <form className="container2" onSubmit={this.neFun}>
       <div className="second">
            <select className="sele" name="op" onChange={this.opOnchange}>
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
        <input type="button" value="" onClick={this.onClick} id="btn"/>
        </div>
        <div className="incomess">
            <h3 style={{float: 'left', fontSize: '18px', fontWeight: '400', fontFamily: 'Open Sans'}}>INCOME</h3>
           
            
        <div className="income__list">
   
        {this.props.calc.map((arr) => (

            <div style={this.state.income !== 0? instyle : console.log('nul')} className="profit">
      
            <p style={{float:'left', padding: '10px', fontSize: '16px', color: '#555'}}> {arr.desc} </p>
             <p style={{ padding: '10px', paddingLeft: '330px', fontSize: '16px'}}>{arr.value}</p>
            
             {arr.desc !== ''?
            <button onClick={this.props.delDesc.bind(this, arr.id)} style={btnStyle} className="btn">x</button>: console.log('')  }
           

            </div>

        ))}

        </div>
    
        </div>
        <div className="expensess">
            <h3 id="ex1">EXPENSES</h3>

        
        <div className="expenses__list">

        {this.props.calc2.map((arr) => (
            <div style={this.state.expense !== 0? instyle : console.log('null')} className="profit">
          
      
            <p style={{float:'left', padding: '10px', fontSize: '16px', color: '#555'}}> {arr.desc2} </p>
             <p style={{ padding: '10px', paddingLeft: '400px', fontSize: '16px'}}>{arr.value2}</p>
            
             {arr.desc2 !== ''?
            <button onClick={this.props.delDesc2.bind(this, arr.id)} style={btnStyle} className="btn">x</button>: console.log('')  }
           

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
