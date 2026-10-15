import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin>;
  name: "email" | "password";
  errorMessage?: string;
}