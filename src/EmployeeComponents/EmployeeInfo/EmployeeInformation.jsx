import React from 'react'
import { MainInformationEmp } from './mainInformationEmp'
import { Picture_Employee } from './pictureEmployee'
import { ContactInfo } from './contactInfo'
import { LoginSetting } from './loginSetting'
import { SettingSecurity } from './settingSecurity'
import { FinancialSetting } from './FinancialSetting'
import { EmpFooter } from '../Footer/EmpFooter'

export const EmployeeInformationn = () => {
    return (<>


        <div className="card card-custom card-flush py-5">
            <div className="card-header">
                <h3 className="card-title">Employee Information</h3>
                <div className="card-toolbar">
                    <button type="button" className="btn btn-sm btn-light">
                    </button>
                </div>
                <Picture_Employee />
            </div>
            <div className="card-body py-5 ">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">

                        <MainInformationEmp />

                    </div>
                    <div class="col">
                    <SettingSecurity />




                    </div>
                    <div class="col">

                    <FinancialSetting />

                    </div>
                    <div class="col">
                        <div class="card">
                        <ContactInfo />
                           
                        <LoginSetting/>
                        </div>
                    </div>
                   
                </div>
                
                
            </div>
            <div className="card-footer">
              <EmpFooter/>
            </div>
        </div>

    </>
    )
}
