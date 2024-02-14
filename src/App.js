import './App.css';
// import { BrowserRouter, Route, Routes ,Router} from 'react-router-dom';

// import { EmployeeInformationn } from './EmployeeComponents/EmployeeInfo/EmployeeInformation';
// import { EmployeeD } from './EmployeeComponents/EmployeeDetails/EmployeeD';
// import { EmpExperienceTable } from './EmployeeComponents/EmployeeExperience/EmpExperienceTable';
// import { EmpQualificationTable } from './EmployeeComponents/EmployeeQualification/EmpQualificationTable';
// import { EmpCRuleT } from './EmployeeComponents/EmployeeContactRule/EmpCRuleT';
// import { EmpQualificationForm } from './EmployeeComponents/EmployeeQualification/EmpQualificationForm';


import { FormTicketD } from "./Mautamer/TicketDetail/Form";
import { FormHR } from './Setting/HR Rooms/Form';
import { FormH } from './Setting/Hotel/Form';

function App() {
  return (
    <>
    <FormH/>
    <FormHR/>
      <FormTicketD />

      {/* <BrowserRouter>
      <EmpNavbar />
        <Routes>
          <Route path='/' element={<EmployeeInformationn />} />
          <Route path='/Detail' element={<EmployeeD />} />
          <Route path='/Rule' element={<EmpCRuleT />} />
          <Route path='/Qualification' element={<EmpQualificationTable />} />
          <Route path='/QualificationForm' element={<EmpQualificationForm />} />
        </Routes>
      </BrowserRouter> */}

    </>
  );
}

export default App;
