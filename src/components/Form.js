import React, { useState } from "react";

const Form = ({ value, setValue, handleSubmit }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex pt-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야할 일을 입력하세요."
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-200 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  );
};

export default Form;
