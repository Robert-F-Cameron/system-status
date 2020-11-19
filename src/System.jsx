import React from 'react'
import SystemStatus from './SystemStatus'
import FlyingSchedule from './FlyingSchedule'
import Maintenance from './Maintenance'

class System extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maintenanceActions: [],
            flyingSchedule: []
        }
    }
    async queryMaintenance (){
        const response = await fetch(`https://loaclhost:3004/system/${this.props.id}/tickets`)
        const json = await response.json()
        this.setState({maintenanceActions: json})
    }
    async queryFlyingSchedule (){
        const response = await fetch(`https://loaclhost:3004/system/${this.props.id}/schedule`)
        const json = await response.json()
        this.setState({maintenanceActions: json})
    }
    render (){
        return(
            <div>
                <SystemStatus 
                    id ={this.props.id}/>
                <FlyingSchedule 
                    id ={this.props.id}/>
                <Maintenance 
                    id ={this.props.id}/>
            </div>
        )
    }
}

export default System;