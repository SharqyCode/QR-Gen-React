import { useState } from "react";
import Submit from "./components/Submit";
import QRcode from "./components/qrcode";

function App() {
  const [URL, setURL] = useState("");
  const getURL = (url) => {
    setURL(url);
  };
  return (
    <>
      <Submit getURL={getURL}></Submit>
      <QRcode url={URL}></QRcode>
    </>
  );
}

export default App;
