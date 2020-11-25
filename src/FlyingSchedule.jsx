import React from 'react'

class FlyingSchedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flights:[],
            system: props.system
        }
    }
     componentDidMount=async()=>{
        let system = this.state.system
        console.log(system.aircraft_id)
        const flights = await fetch(`http://localhost:8082/system/${parseInt(system.aircraft_id)}/schedule`)
        const flightsJson = await flights.json()
        this.setState({
        flights: flightsJson
        })
    }
    Renderflights() {
        let flights = this.state.flights
        return flights.map(flight => {
            return (
                <tr>
                <th scope="row">{flight.flight_id}</th>
                <td>{flight.first_name} {flight.last_name}</td>
                <td>{flight.scheduled_takeoff_timestamp}</td>
                <td>{flight.scheduled_landing_timestamp}</td>
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
                <th scope="col">Pilot</th>
                <th scope="col">Scheduled Takeoff</th>
                <th scope="col">Scheduled Landing</th>
              </tr>
            </thead>
            {this.Renderflights()}
            <tbody>
            </tbody>
          </table>
        )
    }
}

export default FlyingSchedule;