import React from 'react'
// import '../TableList/emplyeeTable.css';

export const EmployeeTable = () => {
    return (
        <>
            <>
                {/* begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/*begin::Content wrapper*/}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/*begin::Toolbar*/}
                        <div id="kt_app_toolbar" className="app-toolbar pt-2 pt-lg-10">
                            {/*begin::Toolbar container*/}
                            <div
                                id="kt_app_toolbar_container"
                                className="app-container container-fluid d-flex align-items-stretch"
                            >
                                {/*begin::Toolbar wrapper*/}
                                <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                                    {/*begin::Page title*/}
                                    <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                                        {/*begin::Title*/}
                                        <h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">
                                            Employee
                                        </h1>
                                        {/*end::Title*/}
                                        {/*begin::Breadcrumb*/}
                                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-muted">
                                                <a
                                                    href="../../demo55/dist/index.html"
                                                    className="text-muted text-hover-primary"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item">
                                                <span className="bullet bg-gray-400 w-5px h-2px" />
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-muted">Apps</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item">
                                                <span className="bullet bg-gray-400 w-5px h-2px" />
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-muted">eCommerce</li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item">
                                                <span className="bullet bg-gray-400 w-5px h-2px" />
                                            </li>
                                            {/*end::Item*/}
                                            {/*begin::Item*/}
                                            <li className="breadcrumb-item text-muted">Customers</li>
                                            {/*end::Item*/}
                                        </ul>
                                        {/*end::Breadcrumb*/}
                                    </div>
                                    {/*end::Page title*/}
                                    {/*begin::Actions*/}
                                    {/* <div className="d-flex align-items-center gap-2 gap-lg-3">
                                        <a
                                            href="#"
                                            className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_view_users"
                                        >
                                            Add Member
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-flex btn-primary h-40px fs-7 fw-bold"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_create_campaign"
                                        >
                                            New Campaign
                                        </a>
                                    </div> */}
                                    {/*end::Actions*/}
                                </div>
                                {/*end::Toolbar wrapper*/}
                            </div>
                            {/*end::Toolbar container*/}
                        </div>
                        {/*end::Toolbar*/}
                        {/*begin::Content*/}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/*begin::Content container*/}
                            <div
                                id="kt_app_content_container"
                                className="app-container container-fluid"
                            >
                                {/*begin::Card*/}
                                <div className="card">
                                    {/*begin::Card header*/}
                                    <div className="card-header border-0 pt-6">
                                        {/*begin::Card title*/}
                                        <div className="card-title">
                                            {/*begin::Search*/}
                                            <div className="d-flex align-items-center position-relative my-1">
                                                <i className="ki-outline ki-magnifier fs-3 position-absolute ms-5" />
                                                <input
                                                    type="text"
                                                    data-kt-customer-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-13"
                                                    placeholder="Search Customers"
                                                />
                                            </div>
                                            {/*end::Search*/}
                                        </div>
                                        {/*begin::Card title*/}
                                        {/*begin::Card toolbar*/}
                                        <div className="card-toolbar">
                                            {/*begin::Toolbar*/}
                                            <div
                                                className="d-flex justify-content-end"
                                                data-kt-customer-table-toolbar="base"
                                            >
                                                {/*begin::Filter*/}
                                                <div className="w-150px me-3">
                                                    {/*begin::Select2*/}
                                                    <select
                                                        className="form-select form-select-solid"
                                                        data-control="select2"
                                                        data-hide-search="true"
                                                        data-placeholder="Status"
                                                        data-kt-ecommerce-order-filter="status"
                                                    >
                                                        <option />
                                                        <option value="all">All</option>
                                                        <option value="active">Active</option>
                                                        <option value="locked">Locked</option>
                                                    </select>
                                                    {/*end::Select2*/}
                                                </div>
                                                {/*end::Filter*/}
                                                {/*begin::Export*/}
                                                <button
                                                    type="button"
                                                    className="btn btn-light-primary me-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_customers_export_modal"
                                                >
                                                    <i className="ki-outline ki-exit-up fs-2" />
                                                    Export
                                                </button>
                                                {/*end::Export*/}
                                                {/*begin::Add customer*/}
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_add_customer"
                                                >
                                                    Add Employee
                                                </button>
                                                {/*end::Add customer*/}
                                            </div>
                                            {/*end::Toolbar*/}
                                            {/*begin::Group actions*/}
                                            <div
                                                className="d-flex justify-content-end align-items-center d-none"
                                                data-kt-customer-table-toolbar="selected"
                                            >
                                                <div className="fw-bold me-5">
                                                    <span
                                                        className="me-2"
                                                        data-kt-customer-table-select="selected_count"
                                                    />
                                                    Selected
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-kt-customer-table-select="delete_selected"
                                                >
                                                    Delete Selected
                                                </button>
                                            </div>
                                            {/*end::Group actions*/}
                                        </div>
                                        {/*end::Card toolbar*/}
                                    </div>
                                    {/*end::Card header*/}
                                    {/*begin::Card body*/}
                                    <div className="card-body pt-0">
                                        {/*begin::Table*/}
                                        <table
                                            className="table align-middle table-row-dashed fs-6 gy-5"
                                            id="kt_customers_table"
                                        >
                                            <thead>
                                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                                    <th className="w-10px pe-2">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                data-kt-check="true"
                                                                data-kt-check-target="#kt_customers_table .form-check-input"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </th>
                                                    <th className="min-w-125px">Employee ID</th>

                                                    <th className="min-w-125px">Full Name</th>
                                                    <th className="min-w-125px">User Name</th>
                                                    <th className="min-w-125px">Branch</th>

                                                    <th className="min-w-125px">Salary expense Enable</th>
                                                    {/* <th className="w-10px pe-2">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                data-kt-check="true"
                                                                data-kt-check-target="#kt_customers_table .form-check-input"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </th> */}
                                                    <th className="min-w-125px">Salary Expense</th>
                                                    <th className="min-w-125px">Allow Final Hotel Voucher Modification</th>
                                                    <th className="min-w-125px">Allow Branch Change </th>
                                                    <th className="min-w-125px">Hide Customer Name </th>
                                                    <th className="min-w-125px">Show Cost</th>
                                                    <th className="min-w-125px">Allow Cost Change</th>


                                                </tr>
                                            </thead>
                                            <tbody className="fw-semibold text-gray-600">
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>1001</td>
                                                    <td>
                                                        <a
                                                            href="../../demo55/dist/apps/ecommerce/customers/details.html"
                                                            className="text-gray-800 text-hover-primary mb-1"
                                                        >
                                                            Emma Smith
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#"
                                                            className="text-gray-600 text-hover-primary mb-1"
                                                        >
                                                            Account
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#"
                                                            className="text-gray-600 text-hover-primary mb-1"
                                                        >
                                                            Manshera
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {/*begin::Badges*/}
                                                        <div className="badge badge-light-danger">Disable</div>
                                                        {/*end::Badges*/}
                                                    </td>
                                                    <td>109</td>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue={1}
                                                            />
                                                        </div>
                                                    </td>

                                                </tr>


                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Card body*/}
                                </div>
                                {/*end::Card*/}
                                {/*begin::Modals*/}
                                {/*begin::Modal - Customers - Add*/}
                                <div
                                    className="modal fade"
                                    id="kt_modal_add_customer"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    {/*begin::Modal dialog*/}
                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                        {/*begin::Modal content*/}
                                        <div className="modal-content">
                                            {/*begin::Form*/}
                                            <form
                                                className="form"
                                                action="#"
                                                id="kt_modal_add_customer_form"
                                                data-kt-redirect="../../demo55/dist/apps/customers/list.html"
                                            >
                                                {/*begin::Modal header*/}
                                                <div
                                                    className="modal-header"
                                                    id="kt_modal_add_customer_header"
                                                >
                                                    {/*begin::Modal title*/}
                                                    <h2 className="fw-bold">Add a Customer</h2>
                                                    {/*end::Modal title*/}
                                                    {/*begin::Close*/}
                                                    <div
                                                        id="kt_modal_add_customer_close"
                                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                                    >
                                                        <i className="ki-outline ki-cross fs-1" />
                                                    </div>
                                                    {/*end::Close*/}
                                                </div>
                                                {/*end::Modal header*/}
                                                {/*begin::Modal body*/}
                                                <div className="modal-body py-10 px-lg-17">
                                                    {/*begin::Scroll*/}
                                                    <div
                                                        className="scroll-y me-n7 pe-7"
                                                        id="kt_modal_add_customer_scroll"
                                                        data-kt-scroll="true"
                                                        data-kt-scroll-activate="{default: false, lg: true}"
                                                        data-kt-scroll-max-height="auto"
                                                        data-kt-scroll-dependencies="#kt_modal_add_customer_header"
                                                        data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
                                                        data-kt-scroll-offset="300px"
                                                    >
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="required fs-6 fw-semibold mb-2">
                                                                Name
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                placeholder=""
                                                                name="name"
                                                                defaultValue="Sean Bean"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-7">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold mb-2">
                                                                <span className="required">Email</span>
                                                                <span
                                                                    className="ms-1"
                                                                    data-bs-toggle="tooltip"
                                                                    title="Email address must be active"
                                                                >
                                                                    <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                                                                </span>
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-solid"
                                                                placeholder=""
                                                                name="email"
                                                                defaultValue="sean@dellito.com"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="fv-row mb-15">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold mb-2">
                                                                Description
                                                            </label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-solid"
                                                                placeholder=""
                                                                name="description"
                                                            />
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Billing toggle*/}
                                                        <div
                                                            className="fw-bold fs-3 rotate collapsible mb-7"
                                                            data-bs-toggle="collapse"
                                                            href="#kt_modal_add_customer_billing_info"
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls="kt_customer_view_details"
                                                        >
                                                            Shipping Information
                                                            <span className="ms-2 rotate-180">
                                                                <i className="ki-outline ki-down fs-3" />
                                                            </span>
                                                        </div>
                                                        {/*end::Billing toggle*/}
                                                        {/*begin::Billing form*/}
                                                        <div
                                                            id="kt_modal_add_customer_billing_info"
                                                            className="collapse show"
                                                        >
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-7 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="required fs-6 fw-semibold mb-2">
                                                                    Address Line 1
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder=""
                                                                    name="address1"
                                                                    defaultValue="101, Collins Street"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-7 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="fs-6 fw-semibold mb-2">
                                                                    Address Line 2
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder=""
                                                                    name="address2"
                                                                    defaultValue=""
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-7 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="required fs-6 fw-semibold mb-2">
                                                                    Town
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <input
                                                                    className="form-control form-control-solid"
                                                                    placeholder=""
                                                                    name="city"
                                                                    defaultValue="Melbourne"
                                                                />
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="row g-9 mb-7">
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required fs-6 fw-semibold mb-2">
                                                                        State / Province
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder=""
                                                                        name="state"
                                                                        defaultValue="Victoria"
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                                {/*begin::Col*/}
                                                                <div className="col-md-6 fv-row">
                                                                    {/*begin::Label*/}
                                                                    <label className="required fs-6 fw-semibold mb-2">
                                                                        Post Code
                                                                    </label>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        className="form-control form-control-solid"
                                                                        placeholder=""
                                                                        name="postcode"
                                                                        defaultValue={3000}
                                                                    />
                                                                    {/*end::Input*/}
                                                                </div>
                                                                {/*end::Col*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="d-flex flex-column mb-7 fv-row">
                                                                {/*begin::Label*/}
                                                                <label className="fs-6 fw-semibold mb-2">
                                                                    <span className="required">Country</span>
                                                                    <span
                                                                        className="ms-1"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Country of origination"
                                                                    >
                                                                        <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                                                                    </span>
                                                                </label>
                                                                {/*end::Label*/}
                                                                {/*begin::Input*/}
                                                                <select
                                                                    name="country"
                                                                    aria-label="Select a Country"
                                                                    data-control="select2"
                                                                    data-placeholder="Select a Country..."
                                                                    data-dropdown-parent="#kt_modal_add_customer"
                                                                    className="form-select form-select-solid fw-bold"
                                                                >
                                                                    <option value="">Select a Country...</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AX">Aland Islands</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AS">American Samoa</option>
                                                                    <option value="AD">Andorra</option>
                                                                    <option value="AO">Angola</option>
                                                                    <option value="AI">Anguilla</option>
                                                                    <option value="AG">Antigua and Barbuda</option>
                                                                    <option value="AR">Argentina</option>
                                                                    <option value="AM">Armenia</option>
                                                                    <option value="AW">Aruba</option>
                                                                    <option value="AU">Australia</option>
                                                                    <option value="AT">Austria</option>
                                                                    <option value="AZ">Azerbaijan</option>
                                                                    <option value="BS">Bahamas</option>
                                                                    <option value="BH">Bahrain</option>
                                                                    <option value="BD">Bangladesh</option>
                                                                    <option value="BB">Barbados</option>
                                                                    <option value="BY">Belarus</option>
                                                                    <option value="BE">Belgium</option>
                                                                    <option value="BZ">Belize</option>
                                                                    <option value="BJ">Benin</option>
                                                                    <option value="BM">Bermuda</option>
                                                                    <option value="BT">Bhutan</option>
                                                                    <option value="BO">
                                                                        Bolivia, Plurinational State of
                                                                    </option>
                                                                    <option value="BQ">
                                                                        Bonaire, Sint Eustatius and Saba
                                                                    </option>
                                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                                    <option value="BW">Botswana</option>
                                                                    <option value="BR">Brazil</option>
                                                                    <option value="IO">
                                                                        British Indian Ocean Territory
                                                                    </option>
                                                                    <option value="BN">Brunei Darussalam</option>
                                                                    <option value="BG">Bulgaria</option>
                                                                    <option value="BF">Burkina Faso</option>
                                                                    <option value="BI">Burundi</option>
                                                                    <option value="KH">Cambodia</option>
                                                                    <option value="CM">Cameroon</option>
                                                                    <option value="CA">Canada</option>
                                                                    <option value="CV">Cape Verde</option>
                                                                    <option value="KY">Cayman Islands</option>
                                                                    <option value="CF">Central African Republic</option>
                                                                    <option value="TD">Chad</option>
                                                                    <option value="CL">Chile</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="CX">Christmas Island</option>
                                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                                    <option value="CO">Colombia</option>
                                                                    <option value="KM">Comoros</option>
                                                                    <option value="CK">Cook Islands</option>
                                                                    <option value="CR">Costa Rica</option>
                                                                    <option value="CI">Côte d'Ivoire</option>
                                                                    <option value="HR">Croatia</option>
                                                                    <option value="CU">Cuba</option>
                                                                    <option value="CW">Curaçao</option>
                                                                    <option value="CZ">Czech Republic</option>
                                                                    <option value="DK">Denmark</option>
                                                                    <option value="DJ">Djibouti</option>
                                                                    <option value="DM">Dominica</option>
                                                                    <option value="DO">Dominican Republic</option>
                                                                    <option value="EC">Ecuador</option>
                                                                    <option value="EG">Egypt</option>
                                                                    <option value="SV">El Salvador</option>
                                                                    <option value="GQ">Equatorial Guinea</option>
                                                                    <option value="ER">Eritrea</option>
                                                                    <option value="EE">Estonia</option>
                                                                    <option value="ET">Ethiopia</option>
                                                                    <option value="FK">
                                                                        Falkland Islands (Malvinas)
                                                                    </option>
                                                                    <option value="FJ">Fiji</option>
                                                                    <option value="FI">Finland</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="PF">French Polynesia</option>
                                                                    <option value="GA">Gabon</option>
                                                                    <option value="GM">Gambia</option>
                                                                    <option value="GE">Georgia</option>
                                                                    <option value="DE">Germany</option>
                                                                    <option value="GH">Ghana</option>
                                                                    <option value="GI">Gibraltar</option>
                                                                    <option value="GR">Greece</option>
                                                                    <option value="GL">Greenland</option>
                                                                    <option value="GD">Grenada</option>
                                                                    <option value="GU">Guam</option>
                                                                    <option value="GT">Guatemala</option>
                                                                    <option value="GG">Guernsey</option>
                                                                    <option value="GN">Guinea</option>
                                                                    <option value="GW">Guinea-Bissau</option>
                                                                    <option value="HT">Haiti</option>
                                                                    <option value="VA">
                                                                        Holy See (Vatican City State)
                                                                    </option>
                                                                    <option value="HN">Honduras</option>
                                                                    <option value="HK">Hong Kong</option>
                                                                    <option value="HU">Hungary</option>
                                                                    <option value="IS">Iceland</option>
                                                                    <option value="IN">India</option>
                                                                    <option value="ID">Indonesia</option>
                                                                    <option value="IR">
                                                                        Iran, Islamic Republic of
                                                                    </option>
                                                                    <option value="IQ">Iraq</option>
                                                                    <option value="IE">Ireland</option>
                                                                    <option value="IM">Isle of Man</option>
                                                                    <option value="IL">Israel</option>
                                                                    <option value="IT">Italy</option>
                                                                    <option value="JM">Jamaica</option>
                                                                    <option value="JP">Japan</option>
                                                                    <option value="JE">Jersey</option>
                                                                    <option value="JO">Jordan</option>
                                                                    <option value="KZ">Kazakhstan</option>
                                                                    <option value="KE">Kenya</option>
                                                                    <option value="KI">Kiribati</option>
                                                                    <option value="KP">
                                                                        Korea, Democratic People's Republic of
                                                                    </option>
                                                                    <option value="KW">Kuwait</option>
                                                                    <option value="KG">Kyrgyzstan</option>
                                                                    <option value="LA">
                                                                        Lao People's Democratic Republic
                                                                    </option>
                                                                    <option value="LV">Latvia</option>
                                                                    <option value="LB">Lebanon</option>
                                                                    <option value="LS">Lesotho</option>
                                                                    <option value="LR">Liberia</option>
                                                                    <option value="LY">Libya</option>
                                                                    <option value="LI">Liechtenstein</option>
                                                                    <option value="LT">Lithuania</option>
                                                                    <option value="LU">Luxembourg</option>
                                                                    <option value="MO">Macao</option>
                                                                    <option value="MG">Madagascar</option>
                                                                    <option value="MW">Malawi</option>
                                                                    <option value="MY">Malaysia</option>
                                                                    <option value="MV">Maldives</option>
                                                                    <option value="ML">Mali</option>
                                                                    <option value="MT">Malta</option>
                                                                    <option value="MH">Marshall Islands</option>
                                                                    <option value="MQ">Martinique</option>
                                                                    <option value="MR">Mauritania</option>
                                                                    <option value="MU">Mauritius</option>
                                                                    <option value="MX">Mexico</option>
                                                                    <option value="FM">
                                                                        Micronesia, Federated States of
                                                                    </option>
                                                                    <option value="MD">Moldova, Republic of</option>
                                                                    <option value="MC">Monaco</option>
                                                                    <option value="MN">Mongolia</option>
                                                                    <option value="ME">Montenegro</option>
                                                                    <option value="MS">Montserrat</option>
                                                                    <option value="MA">Morocco</option>
                                                                    <option value="MZ">Mozambique</option>
                                                                    <option value="MM">Myanmar</option>
                                                                    <option value="NA">Namibia</option>
                                                                    <option value="NR">Nauru</option>
                                                                    <option value="NP">Nepal</option>
                                                                    <option value="NL">Netherlands</option>
                                                                    <option value="NZ">New Zealand</option>
                                                                    <option value="NI">Nicaragua</option>
                                                                    <option value="NE">Niger</option>
                                                                    <option value="NG">Nigeria</option>
                                                                    <option value="NU">Niue</option>
                                                                    <option value="NF">Norfolk Island</option>
                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                    <option value="NO">Norway</option>
                                                                    <option value="OM">Oman</option>
                                                                    <option value="PK">Pakistan</option>
                                                                    <option value="PW">Palau</option>
                                                                    <option value="PS">
                                                                        Palestinian Territory, Occupied
                                                                    </option>
                                                                    <option value="PA">Panama</option>
                                                                    <option value="PG">Papua New Guinea</option>
                                                                    <option value="PY">Paraguay</option>
                                                                    <option value="PE">Peru</option>
                                                                    <option value="PH">Philippines</option>
                                                                    <option value="PL">Poland</option>
                                                                    <option value="PT">Portugal</option>
                                                                    <option value="PR">Puerto Rico</option>
                                                                    <option value="QA">Qatar</option>
                                                                    <option value="RO">Romania</option>
                                                                    <option value="RU">Russian Federation</option>
                                                                    <option value="RW">Rwanda</option>
                                                                    <option value="BL">Saint Barthélemy</option>
                                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                                    <option value="LC">Saint Lucia</option>
                                                                    <option value="MF">
                                                                        Saint Martin (French part)
                                                                    </option>
                                                                    <option value="VC">
                                                                        Saint Vincent and the Grenadines
                                                                    </option>
                                                                    <option value="WS">Samoa</option>
                                                                    <option value="SM">San Marino</option>
                                                                    <option value="ST">Sao Tome and Principe</option>
                                                                    <option value="SA">Saudi Arabia</option>
                                                                    <option value="SN">Senegal</option>
                                                                    <option value="RS">Serbia</option>
                                                                    <option value="SC">Seychelles</option>
                                                                    <option value="SL">Sierra Leone</option>
                                                                    <option value="SG">Singapore</option>
                                                                    <option value="SX">
                                                                        Sint Maarten (Dutch part)
                                                                    </option>
                                                                    <option value="SK">Slovakia</option>
                                                                    <option value="SI">Slovenia</option>
                                                                    <option value="SB">Solomon Islands</option>
                                                                    <option value="SO">Somalia</option>
                                                                    <option value="ZA">South Africa</option>
                                                                    <option value="KR">South Korea</option>
                                                                    <option value="SS">South Sudan</option>
                                                                    <option value="ES">Spain</option>
                                                                    <option value="LK">Sri Lanka</option>
                                                                    <option value="SD">Sudan</option>
                                                                    <option value="SR">Suriname</option>
                                                                    <option value="SZ">Swaziland</option>
                                                                    <option value="SE">Sweden</option>
                                                                    <option value="CH">Switzerland</option>
                                                                    <option value="SY">Syrian Arab Republic</option>
                                                                    <option value="TW">
                                                                        Taiwan, Province of China
                                                                    </option>
                                                                    <option value="TJ">Tajikistan</option>
                                                                    <option value="TZ">
                                                                        Tanzania, United Republic of
                                                                    </option>
                                                                    <option value="TH">Thailand</option>
                                                                    <option value="TG">Togo</option>
                                                                    <option value="TK">Tokelau</option>
                                                                    <option value="TO">Tonga</option>
                                                                    <option value="TT">Trinidad and Tobago</option>
                                                                    <option value="TN">Tunisia</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="TM">Turkmenistan</option>
                                                                    <option value="TC">Turks and Caicos Islands</option>
                                                                    <option value="TV">Tuvalu</option>
                                                                    <option value="UG">Uganda</option>
                                                                    <option value="UA">Ukraine</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom</option>
                                                                    <option value="US" selected="selected">
                                                                        United States
                                                                    </option>
                                                                    <option value="UY">Uruguay</option>
                                                                    <option value="UZ">Uzbekistan</option>
                                                                    <option value="VU">Vanuatu</option>
                                                                    <option value="VE">
                                                                        Venezuela, Bolivarian Republic of
                                                                    </option>
                                                                    <option value="VN">Vietnam</option>
                                                                    <option value="VI">Virgin Islands</option>
                                                                    <option value="YE">Yemen</option>
                                                                    <option value="ZM">Zambia</option>
                                                                    <option value="ZW">Zimbabwe</option>
                                                                </select>
                                                                {/*end::Input*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                            {/*begin::Input group*/}
                                                            <div className="fv-row mb-7">
                                                                {/*begin::Wrapper*/}
                                                                <div className="d-flex flex-stack">
                                                                    {/*begin::Label*/}
                                                                    <div className="me-5">
                                                                        {/*begin::Label*/}
                                                                        <label className="fs-6 fw-semibold">
                                                                            Use as a billing adderess?
                                                                        </label>
                                                                        {/*end::Label*/}
                                                                        {/*begin::Input*/}
                                                                        <div className="fs-7 fw-semibold text-muted">
                                                                            If you need more info, please check budget
                                                                            planning
                                                                        </div>
                                                                        {/*end::Input*/}
                                                                    </div>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Switch*/}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input
                                                                            className="form-check-input"
                                                                            name="billing"
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                            id="kt_modal_add_customer_billing"
                                                                            defaultChecked="checked"
                                                                        />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Label*/}
                                                                        <span
                                                                            className="form-check-label fw-semibold text-muted"
                                                                            htmlFor="kt_modal_add_customer_billing"
                                                                        >
                                                                            Yes
                                                                        </span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Switch*/}
                                                                </div>
                                                                {/*begin::Wrapper*/}
                                                            </div>
                                                            {/*end::Input group*/}
                                                        </div>
                                                        {/*end::Billing form*/}
                                                    </div>
                                                    {/*end::Scroll*/}
                                                </div>
                                                {/*end::Modal body*/}
                                                {/*begin::Modal footer*/}
                                                <div className="modal-footer flex-center">
                                                    {/*begin::Button*/}
                                                    <button
                                                        type="reset"
                                                        id="kt_modal_add_customer_cancel"
                                                        className="btn btn-light me-3"
                                                    >
                                                        Discard
                                                    </button>
                                                    {/*end::Button*/}
                                                    {/*begin::Button*/}
                                                    <button
                                                        type="submit"
                                                        id="kt_modal_add_customer_submit"
                                                        className="btn btn-primary"
                                                    >
                                                        <span className="indicator-label">Submit</span>
                                                        <span className="indicator-progress">
                                                            Please wait...
                                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                        </span>
                                                    </button>
                                                    {/*end::Button*/}
                                                </div>
                                                {/*end::Modal footer*/}
                                            </form>
                                            {/*end::Form*/}
                                        </div>
                                    </div>
                                </div>
                                {/*end::Modal - Customers - Add*/}
                                {/*begin::Modal - Adjust Balance*/}
                                <div
                                    className="modal fade"
                                    id="kt_customers_export_modal"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    {/*begin::Modal dialog*/}
                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                        {/*begin::Modal content*/}
                                        <div className="modal-content">
                                            {/*begin::Modal header*/}
                                            <div className="modal-header">
                                                {/*begin::Modal title*/}
                                                <h2 className="fw-bold">Export Customers</h2>
                                                {/*end::Modal title*/}
                                                {/*begin::Close*/}
                                                <div
                                                    id="kt_customers_export_close"
                                                    className="btn btn-icon btn-sm btn-active-icon-primary"
                                                >
                                                    <i className="ki-outline ki-cross fs-1" />
                                                </div>
                                                {/*end::Close*/}
                                            </div>
                                            {/*end::Modal header*/}
                                            {/*begin::Modal body*/}
                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                {/*begin::Form*/}
                                                <form
                                                    id="kt_customers_export_form"
                                                    className="form"
                                                    action="#"
                                                >
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="fs-5 fw-semibold form-label mb-5">
                                                            Select Export Format:
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <select
                                                            data-control="select2"
                                                            data-placeholder="Select a format"
                                                            data-hide-search="true"
                                                            name="format"
                                                            className="form-select form-select-solid"
                                                        >
                                                            <option value="excell">Excel</option>
                                                            <option value="pdf">PDF</option>
                                                            <option value="cvs">CVS</option>
                                                            <option value="zip">ZIP</option>
                                                        </select>
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row mb-10">
                                                        {/*begin::Label*/}
                                                        <label className="fs-5 fw-semibold form-label mb-5">
                                                            Select Date Range:
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <input
                                                            className="form-control form-control-solid"
                                                            placeholder="Pick a date"
                                                            name="date"
                                                        />
                                                        {/*end::Input*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Row*/}
                                                    <div className="row fv-row mb-15">
                                                        {/*begin::Label*/}
                                                        <label className="fs-5 fw-semibold form-label mb-5">
                                                            Payment Type:
                                                        </label>
                                                        {/*end::Label*/}
                                                        {/*begin::Radio group*/}
                                                        <div className="d-flex flex-column">
                                                            {/*begin::Radio button*/}
                                                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={1}
                                                                    defaultChecked="checked"
                                                                    name="payment_type"
                                                                />
                                                                <span className="form-check-label text-gray-600 fw-semibold">
                                                                    All
                                                                </span>
                                                            </label>
                                                            {/*end::Radio button*/}
                                                            {/*begin::Radio button*/}
                                                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={2}
                                                                    defaultChecked="checked"
                                                                    name="payment_type"
                                                                />
                                                                <span className="form-check-label text-gray-600 fw-semibold">
                                                                    Visa
                                                                </span>
                                                            </label>
                                                            {/*end::Radio button*/}
                                                            {/*begin::Radio button*/}
                                                            <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={3}
                                                                    name="payment_type"
                                                                />
                                                                <span className="form-check-label text-gray-600 fw-semibold">
                                                                    Mastercard
                                                                </span>
                                                            </label>
                                                            {/*end::Radio button*/}
                                                            {/*begin::Radio button*/}
                                                            <label className="form-check form-check-custom form-check-sm form-check-solid">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue={4}
                                                                    name="payment_type"
                                                                />
                                                                <span className="form-check-label text-gray-600 fw-semibold">
                                                                    American Express
                                                                </span>
                                                            </label>
                                                            {/*end::Radio button*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                    </div>
                                                    {/*end::Row*/}
                                                    {/*begin::Actions*/}
                                                    <div className="text-center">
                                                        <button
                                                            type="reset"
                                                            id="kt_customers_export_cancel"
                                                            className="btn btn-light me-3"
                                                        >
                                                            Discard
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            id="kt_customers_export_submit"
                                                            className="btn btn-primary"
                                                        >
                                                            <span className="indicator-label">Submit</span>
                                                            <span className="indicator-progress">
                                                                Please wait...
                                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </form>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end::Modal body*/}
                                        </div>
                                        {/*end::Modal content*/}
                                    </div>
                                    {/*end::Modal dialog*/}
                                </div>
                                {/*end::Modal - New Card*/}
                                {/*end::Modals*/}
                            </div>
                            {/*end::Content container*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Content wrapper*/}
                    {/*begin::Footer*/}
                    <div id="kt_app_footer" className="app-footer">
                        {/*begin::Footer container*/}
                        <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                            {/*begin::Copyright*/}
                            <div className="text-dark order-2 order-md-1">
                                <span className="text-muted fw-semibold me-1">2023©</span>
                                <a
                                    href="https://keenthemes.com"
                                    target="_blank"
                                    className="text-gray-800 text-hover-primary"
                                >
                                    Keenthemes
                                </a>
                            </div>
                            {/*end::Copyright*/}
                            {/*begin::Menu*/}
                            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                <li className="menu-item">
                                    <a
                                        href="https://keenthemes.com"
                                        target="_blank"
                                        className="menu-link px-2"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="https://devs.keenthemes.com"
                                        target="_blank"
                                        className="menu-link px-2"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="https://1.envato.market/EA4JP"
                                        target="_blank"
                                        className="menu-link px-2"
                                    >
                                        Purchase
                                    </a>
                                </li>
                            </ul>
                            {/*end::Menu*/}
                        </div>
                        {/*end::Footer container*/}
                    </div>
                    {/*end::Footer*/}
                </div>
                {/*end:::Main */}
            </>

        </>
    )
}
