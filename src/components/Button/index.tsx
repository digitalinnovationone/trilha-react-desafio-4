import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({
  title,
  type = "button",
  disabled = false,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonContainer type={type} disabled={disabled} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
