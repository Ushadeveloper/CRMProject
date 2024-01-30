import React from 'react'

export const LoginSetting = () => {
  return (
    <div className="card card-custom card-flush ">
      <div className="card-header">
        <h3 className="card-title">Login Setting</h3>
        
      </div>
      <div className="card-body py-5">
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">User Name</label>
          <input type="text" class="form-control form-control-solid" placeholder="username" />
        </div>
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Is Active
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Allow Setup & Application
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Change Password on the First Login
            </label>
          </div>
        </div>


        {/* <span><a href="#" className="btn btn-light-success mr-35">Save</a></span> */}

      </div>

    </div>
  )
}
