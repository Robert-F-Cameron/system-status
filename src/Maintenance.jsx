import React from 'react'

class Maintenance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maintenance:[],
            system: props.system
        }
    }
    componentDidMount=async()=>{
        let system = this.state.system
        console.log(system.aircraft_id)
        const mx = await fetch(`http://localhost:8082/system/${parseInt(system.aircraft_id)}/tickets`)
        const mxJson = await mx.json()
        this.setState({
        maintenance: mxJson
        })
    }
    RenderMaintenance() {
        let mx = this.state.maintenance
        return mx.map(mx => {
            return (
                <tr>
                <th scope="row">{mx.ticket_id}</th>
                <td>{mx.component_name}</td>
                <td>{mx.start_timestamp}</td>
                <td>{mx.close_timestamp}</td>
                <td>{mx.narrative}</td>
              </tr>            
            )
          })
        }
    render (){
        return (
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Component</th>
                <th scope="col">Date Opened</th>
                <th scope="col">Date Closed</th>
                <th scope="col">Narrative</th>
              </tr>
            </thead>
            {this.RenderMaintenance()}
            <tbody>
            </tbody>
          </table>
        )
    }
}

export default Maintenance;