import './App.css';
import React from 'react';
import System from './System'
import Form from './Form'
import RenderSystems from './AllSystems'
require('bootstrap')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      systemDetails : [],
      currentSystem: [],
      showDetails : false,
      loading: true,
      //All the Form Components
      work_center_id: null,
      aircraft_model: null,
      tail_number: null,
      flight_hours: null,
      last_fly_date: null,
      operational_status: null,
      workcenters: []
    }
  }
  async componentDidMount(){
    //Loading all the Aircraft
    const systems = await fetch(`http://localhost:3004/systems`)
    const systemsJson = await systems.json()
    this.setState({
      systemDetails: systemsJson,
      loading: false
    })
    //Loading all the workcenters
    const workcenters = await fetch(`http://localhost:3004/workcenters`)
    const workcentersJson = await workcenters.json()
    this.setState({
      workcenters: workcentersJson
    })
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
 
  renderWorkcenters=()=>{
    return this.state.workcenters.map(workcenter => {
        return (
              <option class="btn btn-light" type="button" value={workcenter.work_center_id}>
                  {workcenter.unit}
              </option>
  
        )
      })
    }
  handleSubmit=async()=>{
    let obj =             {
        work_center_id: this.state.work_center_id,
        aircraft_model: this.state.aircraft_model,
        tail_number: this.state.tail_number,
        flight_hours: this.state.flight_hours,
        last_fly_date: this.state.last_fly_date,
        operational_status: this.state.operational_status, 
    }
    await fetch('http://localhost:3004/system',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }
    )
    //Get updated systems
    .then (this.updateSystems)
  }
  updateSystems = async() =>{
    const systems = await fetch(`http://localhost:3004/systems`)
    const systemsJson = await systems.json()      
    this.setState({
    systemDetails: systemsJson,
    loading: false
  })
  }
  //Event Handlers 
  handleAircraftInput=(event)=>{
    event.preventDefault()
    this.setState({aircraft_model: event.target.value})
  }
  handleFlightHoursInput=(event)=>{
      event.preventDefault()
      this.setState({flight_hours: event.target.value})
  }
  handleLastFlyDateInput=(event)=>{
      event.preventDefault()
      this.setState({last_fly_date: event.target.value})
  }
  handleOperationalStatusInput=(event)=>{
      event.preventDefault()
      this.setState({operational_status: event.target.value})
  }
  handleTailNumberInput=(event)=>{
      event.preventDefault()
      this.setState({tail_number: event.target.value})
  }
  handleWCIDInput=(event)=>{
      event.preventDefault()
      this.setState({work_center_id: event.target.value})
  }
  handleDetails=(event)=>{
    event.preventDefault()
    let systems = this.state.systemDetails
    console.log(systems)
    console.log(event.target.value)
    let system = this.state.systemDetails.find(system => system.aircraft_id === parseInt(event.target.value))
    console.log(system)
    this.setState({currentSystem: system})
  }
  //App Render
    render() {

      if (this.state.loading) {
          return <div>Loading...</div>
      }
      return (
          <div class="container">
            <br/>
            <div class="row">
              <div class="col">
              <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#addsys">Add System</button>
              <div id="addsys" class="collapse">
                <p/>
                <Form
                  handleSubmit = {this.handleSubmit}
                  handleAircraftInput = {this.handleAircraftInput}
                  handleFlightHoursInput = {this.handleFlightHoursInput}
                  handleLastFlyDateInput = {this.handleLastFlyDateInput}
                  handleOperationalStatusInput = {this.handleOperationalStatusInput}
                  handleTailNumberInput = {this.handleTailNumberInput}
                  handleWCIDInput = {this.handleWCIDInput}
                  renderWorkcenters = {this.renderWorkcenters}
                  />
              </div>
            </div>
          </div>
          <br />
            <div class="row">
            <RenderSystems
                systemDetails = {this.state.systemDetails}
                handleDetails = {this.handleDetails}
                currentSystem = {this.state.currentSystem}  />             
            </div>
          </div>
      );
  }
}

export default App;
