import React from 'react'
import { Picture_Employee } from './pictureEmployee'
export const MainInformationEmp = () => {
  return (
    <div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Main Information Form</h3>
        
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Employee ID</label>
          <input type="text" class="form-control form-control-solid" placeholder="ID" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Employee Name</label>
          <input type="text" class="form-control form-control-solid" placeholder="Full Name" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Department</label>
          <input type="text" class="form-control form-control-solid" placeholder="Department" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Branch</label>
          <input type="text" class="form-control form-control-solid" placeholder="Branch" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Position</label>
          <input type="text" class="form-control form-control-solid" placeholder="Position" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Currency</label>
          <input type="text" class="form-control form-control-solid" placeholder="Currency" />
        </div>
        {/* <span><a href="#" className="btn btn-light-success mr-35">Save</a></span> */}
      
      </div>

    </div>

  )
}
