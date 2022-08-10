import StepOne from "pages/stepOne";
import StepTwo from "pages/stepTwo";
import StepThree from "pages/stepThree";
import StepFour from "pages/stepFour";
import { Route, Routes } from "react-router-dom";
import Header from "components/header";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center font-main">
      <Header />
      <div className="w-4/12">
      <Routes>
        <Route path="/" element={<StepOne />}></Route>
        <Route path="steptwo" element={<StepTwo />}></Route>
        <Route path="/stepthree" element={<StepThree />}></Route>
        <Route path="/stepfour" element={<StepFour />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
