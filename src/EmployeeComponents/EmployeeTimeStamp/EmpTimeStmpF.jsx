import React from 'react'

export const EmpTimeStmpF = () => {
    return (
        <div className="card card-custom card-flush ">
            <div className="card-header">
                <h3 className="card-title">Employee TimeStamp</h3>

            </div>
            <div className="card-body py-5">
                <div class="mb-10">
                    <label for="exampleFormControlInput1" class="required form-label">Created By</label>
                    <input type="text" class="form-control form-control-solid" placeholder="Created By" />
                </div>
                <div class="mb-10">
                    <label for="exampleFormControlInput1" class="required form-label">CReated On</label>
                    <input type="text" class="form-control form-control-solid" placeholder="CReated On" />
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
