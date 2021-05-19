import { useState } from 'react';
const ShippingInfo = () => {
  const [formInput, setFormInput] = useState({
    title: '',
    number: '',
  });

  const submitForm = (event) => {
    event.preventDefault();

    setFormInput((prevState) => {
      return { ...prevState, title: 'Updated' };
    });

    console.log(formInput);
  };

  const textChanged = (event) => {
    console.log(formInput);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" onChange={textChanged} />
        <input type="text" placeholder="Enter title" />

        <button type="submit">Test</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
