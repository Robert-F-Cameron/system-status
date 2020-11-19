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
    aircraftDetails = () =>{
        var systems = this.props.systems;
        return systems.map((system, index) => {
            const { 	Aircraft_ID,
                        Work_Center_ID,
                        Aircraft_Model,
                        Tail_Number,
                        Flight_Hours,
                        Last_Fly_Date,
                        Operational_Status } = system //destructuring
            return (
            <table>
                <tbody>
                        <tr key={Aircraft_ID}>
                            <td>{Aircraft_ID}</td>
                            <td>{Work_Center_ID}</td>
                            <td>{Aircraft_Model}</td>
                            <td>{Tail_Number}</td>
                            <td>{Flight_Hours}</td>
                            <td>{Last_Fly_Date}</td>
                            <td>{Operational_Status}</td>
                        </tr>
                </tbody>
            </table>
            )
         })
    }
    render (){
        let details = this.aircraftDetails()
        return(
            <div>
                <SystemStatus />
                <FlyingSchedule />
                <Maintenance />
                {details}
            </div>
        )
    }
}

export default System;