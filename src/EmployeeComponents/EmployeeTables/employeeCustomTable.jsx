import React from 'react'

export const EmployeeCustomTable = () => {
  return (
    <div className="card card-flush shadow-sm">
      <div className="card-header">
        <h3 className="card-title"> <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'><b>Employee</b></span>
          <span className='text-muted mt-1 fw-semibold fs-7'><ol className="breadcrumb breadcrumb-dot text-muted fs-6 fw-semibold">
            <li className="breadcrumb-item"><a href="#" className="">Home</a></li>
            <li className="breadcrumb-item"><a href="#" className="">Contact</a></li>
            <li className="breadcrumb-item text-muted">Active</li>
          </ol></span>
        </h3></h3>

        <div className="card-toolbar">
        <a href="#" class="btn btn-primary">Add Employee</a>
        </div>
      </div>
      <div className="card-body py-5">
        <div className="table-responsive">
          <table className="table table-hover table-rounded table-striped border gy-7 gs-7">
            <thead>
              <tr className="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                <th>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </th>
                <th >Employee ID</th>
                <th >Full Name</th>
                <th >User Name</th>
                <th >Branch</th>
                <th >Salary expense Enable</th>
                <th >Salary Expense</th>
                <th >Allow Final Hotel Voucher Modification</th>
                <th >Allow Branch Change</th>
                <th >Hide Customer Name</th>
                <th >Show Cost</th>
                <th >Allow Cost Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>1003</td>
                <td>Usama Shabir</td>
                <td>System Architect</td>
                <td>Abbottabad</td>
                <td><span className="badge badge-success">Enable</span></td>
                <td>61$</td>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
