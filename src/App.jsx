import { useState } from "react";
import Submit from "./components/Submit";
import QRcode from "./components/qrcode";
import Navbar from "./components/navbar";

function App() {
  const [options, setOptions] = useState({});
  const getOptions = (options) => {
    setOptions(options);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mx-auto mt-10">
        <Submit getOptions={getOptions}></Submit>
        <QRcode options={options}></QRcode>
      </div>
    </>
  );
}

export default App;
