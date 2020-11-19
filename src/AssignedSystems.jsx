import React from 'react'
import System from './System'


class AssignedSystems extends React.Component {
    constructor(props){
        super(props);
    }
    getKeys = () => {
        return Object.keys(this.props.systems[0])
    }
    getHeader = () => {
        var keys =  this.getKeys();
        return keys.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })
    }
    getRowData = () =>{
        var systems = this.props.systems;
        return systems.map((system, index) => {
            const { Aircraft_ID } = system //destructuring
            return (
               <tr key={Aircraft_ID}>
                  <td><button onClick={this.props.toggleView} value ={Aircraft_ID}>{Aircraft_ID}</button></td>
               </tr>
            )
         })
    }
    render (){
        return (
            <div>
            <table>
            <thead>
            <tr><td>Current Aircraft</td></tr>
            </thead>
            <tbody>
            {this.getRowData()}
            </tbody>
            </table>
            <System 
                systems={this.props.systems}
                systemId = {this.props.systemId}/>
            </div>
            );
    }
}

export default AssignedSystems;