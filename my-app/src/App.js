import logo from './logo.svg';
import './App.css';
import Mappingcarousel from './Mappingcarousel';
import AfterHours from './landingpage/AfterHours';
import Mappingcard from './Mappingcard';
import Mappingtable from './Mappingtable';
import Secondrow from './Starbucks/Secondrow';
import Starfirstrow from './Starbucks/Starfirstrow';
import Starnav from './Starbucks/Starnav';
import StrbksFooter from './Starbucks/StrbksFooter';
import MainPortion from './SiteUsingMapping/MainPortion';
import Ternary from './Ternary';
import DarkMode from './DarkMode';
import SpreadOp2 from './SpreadOp2';
import SpreadOp3 from './SpreadOp3';
import MicroNav from './MicrosoftAzure/MicroNav';
import MicroFirst from './MicrosoftAzure/MicroFirst';
import SecondNav from './MicrosoftAzure/SecondNav';
import MicroSecond from './MicrosoftAzure/MicroSecond';
import PropsParent from './PropsParent';
import MicroThird from './MicrosoftAzure/MicroThird';
import MicroFour from './MicrosoftAzure/MicroFour';
import PropsCardParent from './PropsCardParent';
import UseEffect from './UseEffect';
import ApiCalling from './ApiCalling';
import ApiCalling2 from './ApiCalling2';
import ApiCalling3 from './ApiCalling3';
import ApiCalling4 from './ApiCalling4';
import ApiAssignment1 from './ApiAssignment1';
import ApiAssignment2 from './ApiAssignment2';
import ApiAssignment3 from './ApiAssignment3';
// import Router1 from './Router/Router1';

import { createContext, useState } from 'react';

import Table from './UseContext/Table';
import WizRoute from './CoffeeWizardz/WizRoute';
import KfcRoute from './KFC/KfcRoute';
import LoginForm from './FormControl/LoginForm';
import CrudTable from './Cred/CrudTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './Cred/Data';
import ViewPage from './Cred/ViewPage';
import Create from './Cred/Create';
import EditUser from './Cred/EditUser';






  // const newContext = createContext();

  const crudContext = createContext();

  function App() {

    // const [data, setData] = useState(Data)

    const [data, setData] = useState(Data)

  return (

    

  

    <div className="App">

      {/* <newContext.Provider value={[data,setData]}>
        <Table/>
      </newContext.Provider> */}
      <crudContext.Provider value={[data,setData]}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><CrudTable/></>}/>
            <Route path='/view/:user' element={<ViewPage/>}/>
            <Route path='/edit/:user' element={<EditUser/>}/>
            <Route path='/create' element={<Create/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </crudContext.Provider>

     {/* <Mappingcarousel/>
      
     <Mappingtable/> */}
     {/* <Starnav/>
     <Starfirstrow/>
     <Secondrow/>
     <StrbksFooter/> */}
     {/* <MainPortion/> */}
     {/* <Ternary/> */}
     {/* <DarkMode/> */}
     {/* <SpreadOp2/> */}
     {/* <SpreadOp3/> */}
     {/* <Mappingcard/> */}
     {/* <MicroNav/>
     <MicroFirst/>
     <SecondNav/>
     <MicroSecond/>
     <MicroThird/>
     <MicroFour/> */}
     {/* <PropsParent/> */}
     {/* <PropsCardParent/> */}
     {/* <UseEffect/> */}
     {/* <ApiCalling/> */}
     {/* <ApiCalling2/> */}
     {/* <ApiCalling3/> */}
     {/* <ApiCalling4/> */}
      {/* <ApiAssignment1/>  */}
      {/* <ApiAssignment2/>     */}
      {/* <ApiAssignment3/> */}
      {/* <Router1/> */}
      {/* <WizRoute/> */}
      {/* <KfcRoute/> */}
      {/* <LoginForm/> */}
   
    </div>
  );
}

export default App;
// export {newContext};

export {crudContext};
