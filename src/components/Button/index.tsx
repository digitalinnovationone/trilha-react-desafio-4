import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disableButton }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disableButton={disableButton}>{title}</ButtonContainer>;
};

export default Button;
