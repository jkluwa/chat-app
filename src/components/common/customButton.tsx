import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #004cff;
  border: 2px solid #033a83;
  border-radius: 5px;
  color: white;
  padding: 10px 15px;
`;
type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
};

const CustomButton = ({ onClick, text }: Props) => {
  return <Button onClick={(event) => onClick(event)}>{text}</Button>;
};

export default CustomButton;
