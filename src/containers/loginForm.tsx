import React, { useReducer } from "react";
import CustomInput from "../components/common/customInput";
import CustomButton from "../components/common/customButton";
import FormModal from "../components/common/formModal";

type Action = {
  type: "name" | "password" | "email";
  value: string;
};

type State = {
  name: string;
  email: string;
  password: string;
};

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.value,
      };
    default:
      return {
        ...state,
        password: action.value,
      };
  }
};

const LoginForm = (props: { changeForm: () => void }) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  const [{ name, password }, dispatch] = useReducer(inputReducer, {
    name: "",
    email: "",
    password: "",
  });
  const onChange = (action: Action) => {
    dispatch({ type: action.type, value: action.value });
  };

  return (
    <FormModal
      changeForm={props.changeForm}
      message="Don't have an account?"
      linkMessage="click here to sign up"
    >
      <CustomInput label={"name"} onChange={onChange} value={name} />
      <CustomInput label={"password"} onChange={onChange} value={password} />
      <CustomButton text="login" onClick={onClick} />
    </FormModal>
  );
};

export default LoginForm;
