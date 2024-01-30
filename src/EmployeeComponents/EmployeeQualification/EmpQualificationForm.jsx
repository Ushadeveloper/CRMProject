import React from 'react'

export const EmpQualificationForm = () => {
  return (
    <div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Employee Qualification Form</h3>
       
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Institution Name</label>
          <input type="text" class="form-control form-control-solid" placeholder="Institution Name" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Degree</label>
          <input type="text" class="form-control form-control-solid" placeholder="degree" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Completed On</label>
          <input type="text" class="form-control form-control-solid" placeholder="Completed On" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Grade Division</label>
          <input type="text" class="form-control form-control-solid" placeholder="Grade Division" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Remarks</label>
          <input type="text" class="form-control form-control-solid" placeholder="Remarks" />
        </div>
        
       
       

      </div>

    </div>
  )
}
