import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  :disabled {
    background-color: #c1c1c1;
    cursor: not-allowed;
    border: none;
    :hover {
      opacity: 1;
      border: none;
    }
  }
`;
