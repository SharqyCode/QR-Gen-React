import { useState } from "react";
import Submit from "./components/Submit";
import QRcode from "./components/qrcode";
import Navbar from "./components/navbar";

function App() {
  const [URL, setURL] = useState("");
  const getURL = (url) => {
    setURL(url);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mx-auto mt-10">
        <Submit getURL={getURL}></Submit>
        <QRcode url={URL}></QRcode>
      </div>
    </>
  );
}

export default App;
