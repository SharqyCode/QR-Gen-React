import QrCodeWithLogo from "qrcode-with-logos";
import { useRef } from "react";
import alienSVG from "../assets/alien-svgrepo-com.svg";

const QRcode = ({ options }) => {
  const canvasRef = useRef(null);

  let qrcode = new QrCodeWithLogo({
    canvas: canvasRef.current,
    content: options.URL,
    width: 180,
    //   download: true,
    logo: {
      src: alienSVG,
      logoRadius: 50,
    },
    nodeQrCodeOptions: {
      errorCorrectionLevel: "H",
      color: {
        dark: options.fgColor,
        light: options.bgColor,
      },
    },
    dotsOptions: {
      type: options.pattern,
    },
  });

  const handleClick = () => {
    qrcode.downloadImage("qrcode.png");
  };

  return (
    <div className="flex flex-col items-center ml-2 bg-white p-4">
      <canvas ref={canvasRef} className="h-48 aspect-square" />
      <button
        className="w-fit px-4 py-2 mt-4 bg-green-400 text-white font-medium rounded-sm cursor-pointer"
        onClick={handleClick}
      >
        Download
      </button>
    </div>
  );
};

export default QRcode;
