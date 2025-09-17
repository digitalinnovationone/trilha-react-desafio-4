import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {  
  return <ButtonContainer type="submit" onClick={onClick} disabled={!isValid}>{title}</ButtonContainer>;
  
};

export default Button;
