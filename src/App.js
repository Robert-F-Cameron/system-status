import './App.css';
import React from 'react';
import AssignedSystems from './AssignedSystems'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      systemDetails : [
        {'Aircraft_ID': 1, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5120, "Flight_Hours": 12000, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 2, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5121, "Flight_Hours": 12080, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 3, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5122, "Flight_Hours": 12800, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 4, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5123, "Flight_Hours": 12400, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 5, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5124, "Flight_Hours": 12020, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 6, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5125, "Flight_Hours": 12070, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 7, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5126, "Flight_Hours": 12340, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 8, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5127, "Flight_Hours": 12290, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},
        {'Aircraft_ID': 9, 'Work_Center_ID': 100, 'Aircraft_Model': 'F15', 'Tail_Number': 5128, "Flight_Hours": 12190, 'Last_Fly_Date': "11/19/2020", "Operational_Status": 'FMC'},

      ],
      showDetails : false,
      systemId: 1,
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://loaclhost:3004/systems`)
    const json = await response.json()
    this.setState({systemDetails: json})
  }
  ToggleDetailsView=(e)=>{
    //console.log("Toggled")
    this.setState({systemId: e.target.value})
    this.setState({showDetails:true});
  }
  render() {
    return (
      <AssignedSystems 
        systems = {this.state.systemDetails}
        toggleView = {this.ToggleDetailsView}
        systemId = {this.state.systemId} />
    );
  }
}

export default App;
