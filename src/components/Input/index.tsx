import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}
              id={`${name}-input`}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? `${name}-error` : undefined}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? (
        <ErrorMessage id={`${name}-error`} role="alert">
          {errorMessage}
        </ErrorMessage>
      ) : null}
    </>
  );
};

export default Input;
