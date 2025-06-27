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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="URL">URL: </label>
        <input
          value={URL}
          type="text"
          id="URL"
          name="URL"
          onChange={handleURLChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submit;
