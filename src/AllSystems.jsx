import React from 'react'
import System from './System'


function  RenderSystems(props) {
    return props.systemDetails.map(system => {
      let bg;
      if (system.operational_status === 'FMC'){
        bg = 'bg-success'
      } else if (system.operational_status === 'PMC'){
        bg = 'bg-warning'
      } else if (system.operational_status === 'NMC'){
        bg = 'bg-danger'
      }
        return (
          <div class="col-sm-3">
          <div class={`card text-white ${bg}`} >
            <div class="card-body">
              <h5 class="card-header">{system.tail_number}</h5>
              <div class="card-text">
                    <div>
                  Aircraft Type {system.aircraft_model}<br/>
                  Operational Status {system.operational_status}<br/>
                  Tail Number {system.tail_number}<br/>
                  Assigned To {system.work_center_id}<br/>
                  </div>
              </div>   
              <br/>
              <button type="button" class="btn btn-light" data-toggle="modal" data-target={`#${system.aircraft_model}`}>
                Show Details
            </button>
            </div>
          </div>
          <div class="modal fade" id={system.aircraft_model} tabindex="-1" aria-labelledby={`label-${system.aircraft_model}`} aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={`label-${system.aircraft_model}`}>{system.tail_number} System Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-dark">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Aircraft ID:</td>
                          <td>{system.aircraft_id}</td>
                          <td>Aircraft Model:</td>
                          <td>{system.aircraft_model}</td>
                        </tr>
                        <tr>
                          <td>Last Flown On:</td>
                          <td>{system.last_fly_date}</td>
                        </tr>
                        <tr>
                          <td>Flight Hours:</td>
                          <td >{system.flight_hours}</td>
                        </tr>
                        <tr>
                          <td>Assigned to:</td>
                          <td>{system.work_center_id}</td>
                          <td/>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
          <br />
          </div>
                  
        )
      })
    }

export default RenderSystems;