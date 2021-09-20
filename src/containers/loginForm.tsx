import React, { useReducer } from "react";
import CustomInput from "../components/common/customInput";
import CustomButton from "../components/common/customButton";
import FormModal from "../components/common/formModal";

type Action = {
  type: string;
  value?: string;
};

type Input = {
  value: string;
  valid: boolean;
};

type State = {
  name: Input;
  password: Input;
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
      for (let i = 0; i < state.password.value.trim().length; i++) {
        if (state.password.value[i] >= "0" && state.password.value[i] <= "9") {
          ++nums;
        }
        if (nums >= 3) {
          console.log(state.password.value.trim().length - nums);
          if (state.password.value.trim().length - nums < 3) {
            if (state.password.value.trim().length === i) {
              break;
            } else {
              continue;
            }
          }
          return {
            ...state,
            password: {
              value: state.password.value,
              valid: true,
            },
          };
        }
      }
      return {
        ...state,
        password: {
          value: state.password.value,
          valid: false,
        },
      };
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
    default:
      return state;
  }
};

const LoginForm = (props: { changeForm: () => void }) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  const [state, dispatch] = useReducer(inputReducer, {
    name: { value: "", valid: true },
    password: { value: "", valid: true },
  });
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
      message="Don't have an account?"
      linkMessage="click here to sign up"
    >
      <CustomInput
        label="name"
        action={changeHandler}
        value={state.name.value}
        valid={state.name.valid}
      />
      <CustomInput
        label="password"
        action={changeHandler}
        value={state.password.value}
        valid={state.password.valid}
      />
      <CustomButton text="login" onClick={onClick} />
    </FormModal>
  );
};

export default LoginForm;
