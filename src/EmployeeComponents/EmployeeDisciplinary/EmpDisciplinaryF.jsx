import React from 'react'

export const EmpDisciplinaryF = () => {
  return (
    <div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Employee Diciplinary Form</h3>
       
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Conplaint Date</label>
          <input type="text" class="form-control form-control-solid" placeholder="Conplained Date" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Conplaint Type</label>
          <input type="text" class="form-control form-control-solid" placeholder="Conplaint Type" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Action Taken</label>
          <input type="text" class="form-control form-control-solid" placeholder="Action Taken" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Warning Letter</label>
          <input type="text" class="form-control form-control-solid" placeholder="Warning Letter" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Remarks</label>
          <input type="text" class="form-control form-control-solid" placeholder="Remarks" />
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

    </div>
  )
}


