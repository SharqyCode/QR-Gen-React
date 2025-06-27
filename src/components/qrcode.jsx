import QrCodeWithLogo from "qrcode-with-logos";
import { useRef } from "react";
import alienSVG from "../assets/alien-svgrepo-com.svg";

const QRcode = ({ url }) => {
  const canvasRef = useRef(null);

  let qrcode = new QrCodeWithLogo({
    canvas: canvasRef.current,
    content: url,
    width: 320,
    //   download: true,
    logo: {
      src: alienSVG,
      logoRadius: 50,
    },
    nodeQrCodeOptions: {
      errorCorrectionLevel: "H",
    },
  });

  const handleClick = () => {
    qrcode.downloadImage("qrcode.png");
  };

  return (
    <>
      <canvas ref={canvasRef} />
      <button onClick={handleClick}>Download</button>
    </>
  );
};

export default QRcode;
