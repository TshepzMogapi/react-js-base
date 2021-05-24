import { useState, useRef } from 'react';
const ShippingInfo = () => {
  const [formInput, setFormInput] = useState({
    title: '',
    number: '',
  });

  const titleInputRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();

    setFormInput((prevState) => {
      return { ...prevState, title: 'Updated' };
    });

    console.log(titleInputRef);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={titleInputRef} type="text" placeholder="Enter title" />

        <button type="submit">Test</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
