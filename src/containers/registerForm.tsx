import React, { useReducer } from "react";
import CustomInput from "../components/common/customInput";
import CustomButton from "../components/common/customButton";
import FormModal from "../components/common/formModal";

type State = {
  name: string;
  email: string;
  password: string;
};

type Action = {
  type: "name" | "email" | "password";
  value: string;
};

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    default:
      return { ...state, password: action.value };
  }
};

const RegisterForm = (props: { changeForm: () => void }) => {
  const [{ name, email, password }, dispatch] = useReducer(inputReducer, {
    name: "",
    email: "",
    password: "",
  });

  const onClick = () => {
    props.changeForm();
  };
  const onChange = (action: Action) => {
    dispatch({ type: action.type, value: action.value });
  };
  return (
    <FormModal
      changeForm={props.changeForm}
      message="Already have an account?"
      linkMessage="click here to log in"
    >
      <CustomInput label={"name"} onChange={onChange} value={name} />
      <CustomInput label={"email"} onChange={onChange} value={email} />
      <CustomInput label={"password"} onChange={onChange} value={password} />
      <CustomButton onClick={onClick} text={"register"} />
    </FormModal>
  );
};

export default RegisterForm;
