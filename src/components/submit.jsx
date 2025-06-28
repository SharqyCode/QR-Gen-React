import { useState, useActionState } from "react";

const Submit = ({ getURL }) => {
  const [URL, setURL] = useState("");
  // const [state, submitAction, isPending] = useActionState(handleSubmit, null);

  const handleURLChange = (event) => {
    setURL(event.target.value);
  };
  console.log(URL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(URL);
    getURL(URL);
  };

  return (
    <div className="grow max-w-2xl bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-2xl p-4  
      "
      >
        <label htmlFor="URL">URL: </label>
        <textarea
          className="p-2 text-3xl resize-none outline-none"
          placeholder="Paste your URL here..."
          value={URL}
          type="text"
          id="URL"
          name="URL"
          onChange={handleURLChange}
          required
        />
        <button
          type="submit"
          className="w-fit px-4 py-2 bg-blue-400 text-white font-medium rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submit;
