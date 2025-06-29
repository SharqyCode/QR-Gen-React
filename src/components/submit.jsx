import { useState, useActionState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const Submit = ({ getOptions }) => {
  const [URL, setURL] = useState("");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [pattern, setPattern] = useState("square");
  // const [state, submitAction, isPending] = useActionState(handleSubmit, null);

  console.log("1");

  let options = {
    URL: URL,
    fgColor: fgColor,
    bgColor: bgColor,
    pattern: pattern,
  };

  useEffect(() => {
    getOptions(options);
  }, [URL, fgColor, bgColor, pattern]);

  function handlePatternClick(e) {
    setPattern(e.target.value);
  }
  return (
    <div className="grow max-w-2xl px-4 py-6 bg-white">
      <form
        className="flex flex-col max-w-2xl h-full justify-between  
      "
      >
        <textarea
          className="text-3xl resize-none outline-none placeholder:font-bold"
          placeholder="Paste your URL here..."
          value={URL}
          type="text"
          id="URL"
          name="URL"
          onChange={(e) => {
            setURL(e.target.value);
          }}
          required
        />
        <div
          className="flex
        "
        >
          <div className="flex items-center font-medium bg-blue-400 rounded-sm p-2 text-white">
            <label htmlFor="fgColor">Foreground</label>
            <input
              className="ml-2"
              type="color"
              name="fgcolor"
              id="fgColor"
              value={fgColor}
              onChange={(e) => {
                setFgColor(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex items-center ml-8 font-medium bg-blue-400 rounded-sm p-2 text-white">
            <label htmlFor="bgColor">Background</label>
            <input
              className="ml-2"
              type="color"
              name="bgcolor"
              id="bgColor"
              value={bgColor}
              onChange={(e) => {
                setBgColor(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="flex items-center w-fit font-medium bg-blue-400 rounded-sm p-2 text-white">
          <span>Pattern</span>
          <select onChange={handlePatternClick}>
            <options className="text-black outline-none text-center p-1">
              <option value="square" selected>
                square
              </option>
              <option value="dot">dot</option>
              <option value="dot-small">dot-small</option>
              <option value="tile">tile</option>
              <option value="rounded">rounded</option>
              <option value="diamond">diamond</option>
              <option value="star">star</option>
              <option value="fluid">fluid</option>
              <option value="fluid-line">fluid-line</option>
              <option value="stripe">stripe</option>
              <option value="stripe-row">stripe-row</option>
              <option value="stripe-column">stripe-column</option>
            </options>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Submit;
