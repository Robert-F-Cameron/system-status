import React from 'react'
import System from './System'


class AssignedSystems extends React.Compoent{
    constructor(props){
        super(props);
        this.state = {
            systems: []
        }
    }
    async querySystems (){
        const response = await fetch(`https://loaclhost:3004/systems`)
        const json = await response.json()
        this.setState({systems: json})
    }
    render(){
        return(
            <System 
                id={this.state.systemId}/>
        );
    }
}

export default AssignedSystems;