import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ disabled, title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;
