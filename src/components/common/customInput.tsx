import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  outline: none;
  border-style: none;
  border-radius: 5px;
  width: 100%;
  ${(props) =>
    props.className === "false" &&
    `
        background: #f55;
  `}
`;

type formElements = {
  label: string;
  action: (str: { type: string; value?: string }) => void;
  value: string;
  valid: boolean;
};

const CustomInput = ({ label, action, value, valid }: formElements) => {
  return (
    <div>
      <Input as="label">{label}</Input>
      <Input
        className={valid.toString()}
        value={value}
        placeholder={value}
        onChange={(event) =>
          action({ type: label, value: event.currentTarget.value })
        }
        onBlur={() => action({ type: label + "Blur" })}
      />
    </div>
  );
};
export default CustomInput;
