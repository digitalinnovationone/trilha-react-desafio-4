import { InputContainer } from "./styles";
import { IInputProps } from "././types";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <InputContainer>
      <input {...rest} />
    </InputContainer>
  );
};

export default Input;
