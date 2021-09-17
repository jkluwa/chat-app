import React from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
};

const CustomButton = ({ onClick, text }: Props) => {
  return <button onClick={(event) => onClick(event)}>{text}</button>;
};

export default CustomButton;
