import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
  return <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};