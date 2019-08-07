import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TrafficLight extends React.Component{
  constructor(){
      super();
      this.state = {
        red:false,
        yellow: false,
        green: false,
      }
      
  }
  handleClick(e){
    let element = e.target.id;
    console.log(element);
   if(element === "red"){
    this.setState({
        red: true,
        yellow: false,
        green: false,
    })
   } else if (element === "yellow"){
    this.setState({
        red: false,
        yellow: true,
        green: false,
    })
   } else if(element === "green"){
    this.setState({
        red: false,
        yellow: false,
        green: true,
    })
   }
  }
  
 
   render(){
     return (
         <div className="container text-center">
          <div className={this.state.red ? "shadowes" : " "} id="red" onClick={e => this.handleClick(e)}></div>
          <div className={this.state.yellow ? "shadowes" : " "} id="yellow" onClick={e => this.handleClick(e)}></div>
          <div className={this.state.green ? "shadowes" : " "} id="green" onClick={e => this.handleClick(e)}></div>
         </div> 
     );
 }

}


ReactDOM.render(<TrafficLight />, document.querySelector('#app'));