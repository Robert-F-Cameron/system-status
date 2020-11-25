import React from 'react'

function Form(props) {
        return (
            <div class="row">
                <div class="col-lg">
                <label for="system-details">Enter System Details</label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Aircraft Model</span>
                    </div>
                    <input type="text" class="form-control" id="aircraft" aria-describedby="basic-addon3" onChange={props.handleAircraftInput} />
                    </div>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Tail Number</span>
                    </div>
                    <input type="text" class="form-control" id="tail-number" aria-describedby="basic-addon3" onChange={props.handleTailNumberInput} placeholder='Example F35-102'/>
                    </div>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Last Fly Date</span>
                    </div>
                    <input type="date" class="form-control" id="last-fly-date" aria-describedby="basic-addon3" onChange={props.handleLastFlyDateInput} />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Flight Hours</span>
                    </div>
                    <input type="text" class="form-control" id="flight-hours" aria-describedby="basic-addon3" onChange={props.handleFlightHoursInput}/>
                    </div>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Operational Status</span>
                    </div>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={props.handleOperationalStatusInput}>
                        <option/>
                        <option value ="FMC">Fully Mission Capable</option>
                        <option value ="PMC">Partially Mission Capable</option>
                        <option value ="NMC">Not Mission Capable</option>
                    </select>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Assigned Workcenter</span>
                    </div>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={props.handleWCIDInput}>
                        <option/>
                        {props.renderWorkcenters()}
                    </select>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
            </div>
        );
    }
export default Form;