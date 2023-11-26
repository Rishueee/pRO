import React from 'react'
import './notes.css'

class Notes extends React.Component{
    constructor(props) {
        super(props);

        
        this.state = { 
        
            value: ''
        
        };

   
        
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange(e){

        
        
        this.setState({value: e.target.value});
    }

    render(){
        return(
            <>
                <div className="box">
                
                    <div className="input">
                  <textarea className="inputext" onChange={this.handleChange} defaultValue={this.state.value}/>
                        <h3>INPUT</h3>
                        
                    </div>
                    <div className="pronote">
                        <h4>PRO NOTE</h4>
                        <div className="pronotext">{this.state.value}</div>
                    </div>                
                </div>
            </>
        )
    }
}

export default Notes