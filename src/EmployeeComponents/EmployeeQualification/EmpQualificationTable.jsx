import React from 'react'
import { Link } from 'react-router-dom'
export const EmpQualificationTable = () => {
  return (
    <div className="card card-flush shadow-sm">
    <div className="card-header">
      <h3 className="card-title"> <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-3 mb-1'><b>Employee Qualification</b></span>
        <span className='text-muted mt-1 fw-semibold fs-7'><ol className="breadcrumb breadcrumb-dot text-muted fs-6 fw-semibold">
          <li className="breadcrumb-item"><a href="#" className="">Home</a></li>
          <li className="breadcrumb-item"><a href="#" className="">Contact</a></li>
          <li className="breadcrumb-item text-muted">Employee</li>
        </ol></span>
      </h3></h3>

      <div className="card-toolbar">
      
<Link to="/QualificationForm"><button  class="btn btn-primary">Add Qualification</button></Link>
      </div>
    </div>
    <div className="card-body py-5">
      <div className="table-responsive">
        <table className="table table-hover table-rounded table-striped border gy-7 gs-7">
          <thead>
            <tr className="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
             
              <th >Degree</th>
              <th >Istitute Name</th>
              <th >Complete on</th>
              <th >Grade Division</th>
              <th >Remarks</th>
              
            </tr>
          </thead>
          <tbody>
           <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
           </tr>

          </tbody>
        </table>
      </div>
    </div>

  </div>
  )
}
