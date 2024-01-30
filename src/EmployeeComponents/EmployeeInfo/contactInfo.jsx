import React from 'react'

export const ContactInfo = () => {
  return (
    <div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Contact Information</h3>
       
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Person Name ID</label>
          <input type="text" class="form-control form-control-solid" placeholder="person name" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Address No 1</label>
          <input type="text" class="form-control form-control-solid" placeholder="address 1" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Address No 2</label>
          <input type="text" class="form-control form-control-solid" placeholder="address 2" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">City</label>
          <select className="form-select form-select-solid" aria-label="Select example">
          
            <option value="2">Mns</option>
            <option value="3">Hrp</option>
          </select>
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Country</label>
          <select className="form-select form-select-solid" aria-label="Select example">
            
            <option value="1">Pak</option>
            <option value="2">Ind</option>
          </select>
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Mobile</label>
          <input type="number" class="form-control form-control-solid" placeholder="mobile" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">telephone</label>
          <input type="text" class="form-control form-control-solid" placeholder="Tel phone" />
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Email</label>
          <input type="email" class="form-control form-control-solid" placeholder="email" />
        </div>
       

      </div>

    </div>)
}
