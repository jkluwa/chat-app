import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  display: block;
  outline: none;
  border-style: none;
  border-radius: 5px;
`;

type formElements = {
  label: "name" | "password" | "email";
  onChange: (str: {
    type: "name" | "password" | "email";
    value: string;
  }) => void;
  value: string;
};

const CustomInput = ({ label, onChange, value }: formElements) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(event) =>
          onChange({ type: label, value: event.currentTarget.value })
        }
      />
    </div>
  );
};
export default CustomInput;
