import React from 'react'
import { EmployeeInformationn } from './EmployeeInfo/EmployeeInformation'
import { EmployeeD } from './EmployeeDetails/EmployeeD'
import { Link } from 'react-router-dom';
export const EmpNavbar = () => {
  return (
    <>
      <div className="card card-custom card-flush">
        {/* <div className="card-header">
          <h3 className="card-title">Title</h3>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-light">
              Action
            </button>
          </div>
        </div> */}
        <div className="card-body py-5">
          <div className="mb-5 hover-scroll-x">
            <div className="d-grid">
              <ul className="nav nav-tabs flex-nowrap text-nowrap">
                <li className="nav-item">
                  <Link to="/" className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-primary rounded-bottom-0" data-bs-toggle="tab">
                    Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Detail" className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-primary rounded-bottom-0" data-bs-toggle="tab">
                  Detail
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Rule" className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-primary rounded-bottom-0" data-bs-toggle="tab">
                  Rule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Qualification" className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-primary rounded-bottom-0" data-bs-toggle="tab">
                  Qualification
                  </Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          </div>
        </div>
        
      </div>




    </>
  )

}
