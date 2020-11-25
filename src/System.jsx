import React from 'react'
import FlyingSchedule from './FlyingSchedule'
import Maintenance from './Maintenance'


function System (props) {
    let system = props.currentSystem
    console.log(system)
    return (
            <div>
            {system.aircraft_id}<br/>
            {system.aircraft_model}<br/>
            {system.flight_hours}<br/>
            {system.last_fly_date}<br/>
            {system.operational_status}<br/>
            {system.tail_number}<br/>
            {system.work_center_id}<br/>
            </div>

      );
    }


export default System;