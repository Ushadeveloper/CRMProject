import React from 'react'

export const EmpExperienceForm = () => {
  return (
<div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Employee Qualification Form</h3>
       
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Company Name</label>
          <input type="text" class="form-control form-control-solid" placeholder="Company Name" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Designation</label>
          <input type="text" class="form-control form-control-solid" placeholder="Designation" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Start Date</label>
          <input type="text" class="form-control form-control-solid" placeholder=" Date" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">End Date</label>
          <input type="text" class="form-control form-control-solid" placeholder=" Date" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Contact Details</label>
          <input type="text" class="form-control form-control-solid" placeholder="Contact Details" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Reason For Leaving</label>
          <input type="text" class="form-control form-control-solid" placeholder="Reason For Leaving" />
        </div>
        
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Created By</label>
          <input type="text" class="form-control form-control-solid" placeholder="Created By" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Created On</label>
          <input type="text" class="form-control form-control-solid" placeholder="Created On" />
        </div>
       
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Modified By</label>
          <input type="text" class="form-control form-control-solid" placeholder="Modified By" />
        </div>
        
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Modified On</label>
          <input type="text" class="form-control form-control-solid" placeholder="Modified On" />
        </div>
       

      </div>

    </div>  )
}
