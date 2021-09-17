import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #bbb;
    width: 600px;
    height: 320px;
    & > div {
      margin: 10px;
    }
  }
`;

const ChangeForm = styled.p`
  font-size: 12px;
`;

const ChangeFormButton = styled.button`
  outline: none;
  background: none;
  border-style: none;
  color: #0000ee;
  &:link {
    color: #0000ee;
  }
  &:hover {
    cursor: pointer;
    color: #0000aa;
  }
`;

const FormModal = (props: {
  changeForm: () => void;
  children?: React.ReactNode;
  message: string;
  linkMessage: string;
}) => {
  return (
    <Container>
      <form>
        {props.children}
        <ChangeForm>
          {props.message}
          <ChangeFormButton
            onClick={() => {
              props.changeForm();
            }}
          >
            {props.linkMessage}
          </ChangeFormButton>
        </ChangeForm>
      </form>
    </Container>
  );
};

export default FormModal;
