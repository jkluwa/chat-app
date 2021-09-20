import React, { useReducer } from "react";
import CustomInput from "../components/common/customInput";
import CustomButton from "../components/common/customButton";
import FormModal from "../components/common/formModal";

type State = {
  name: Input;
  email: Input;
  password: Input;
};
type Input = {
  value: string;
  valid: boolean;
};

type Action = {
  type: string;
  value?: string;
};

const inputReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "nameBlur":
      if (state.name.value.trim().length < 4) {
        return {
          ...state,
          name: {
            value: state.name.value,
            valid: false,
          },
        };
      }
      return state;
    case "passwordBlur":
      let nums = 0;
      if (state.password.value.trim().length > 4) {
        for (let i = 0; i < state.password.value.trim().length; i++) {
          if (
            state.password.value[i] >= "0" &&
            state.password.value[i] <= "9"
          ) {
            ++nums;
            if (nums > 3) {
              return {
                ...state,
                password: {
                  value: state.password.value,
                  valid: true,
                },
              };
            }
          }
        }
      }
      return {
        ...state,
        password: {
          value: state.password.value,
          valid: false,
        },
      };
    case "emailBlur":
      if (state.email.value.trim().length > 4) {
        let lookingFor = "@";
        for (let i = 1; i < state.email.value.trim().length; i++) {
          if (state.email.value[i] === lookingFor) {
            ++i;
            if (lookingFor === "." && i !== state.email.value.trim().length) {
              return {
                ...state,
                email: {
                  value: state.email.value,
                  valid: true,
                },
              };
            }
            lookingFor = ".";
          }
        }
      }
      return { ...state, email: { value: state.email.value, valid: false } };
    case "name":
      return {
        ...state,
        name: {
          // @ts-ignore
          value: action.value,
          valid: true,
        },
      };
    case "password":
      return {
        ...state,
        password: {
          // @ts-ignore
          value: action.value,
          valid: true,
        },
      };
    case "email":
      return {
        ...state,
        email: {
          // @ts-ignore
          value: action.value,
          valid: true,
        },
      };
    default:
      return state;
  }
};

const RegisterForm = (props: { changeForm: () => void }) => {
  const [state, dispatch] = useReducer(inputReducer, {
    name: { value: "", valid: true },
    email: { value: "", valid: true },
    password: { value: "", valid: true },
  });

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const changeHandler = (action: Action) => {
    if (action.value) {
      dispatch({ type: action.type, value: action.value });
    } else {
      dispatch({ type: action.type });
    }
  };
  return (
    <FormModal
      changeForm={props.changeForm}
      message="Already have an account?"
      linkMessage="click here to log in"
    >
      <CustomInput
        label={"name"}
        action={changeHandler}
        value={state.name.value}
        valid={state.name.valid}
      />
      <CustomInput
        label={"email"}
        action={changeHandler}
        value={state.email.value}
        valid={state.email.valid}
      />
      <CustomInput
        label={"password"}
        action={changeHandler}
        value={state.password.value}
        valid={state.password.valid}
      />
      <CustomButton onClick={onClick} text={"register"} />
    </FormModal>
  );
};

export default RegisterForm;
