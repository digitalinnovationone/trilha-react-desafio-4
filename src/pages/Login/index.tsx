import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { IFormLogin, defaultValues } from "./types";
import {
  Column,
  Container,
  Feedback,
  Form,
  Hint,
  Label,
  LoginContainer,
  Spacing,
  Success,
  Title,
} from "./styles";

const demoCredentials: IFormLogin = {
  email: "admin@dio.com",
  password: "123456",
};

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .email("Informe um e-mail válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const [authenticatedEmail, setAuthenticatedEmail] = useState<string | null>(
    null
  );
  const {
    clearErrors,
    control,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });
  const [email, password] = watch(["email", "password"]);

  useEffect(() => {
    clearErrors("root.auth");
  }, [email, password, clearErrors]);

  const onSubmit = ({
    email: submittedEmail,
    password: submittedPassword,
  }: IFormLogin) => {
    const matchesDemoCredentials =
      submittedEmail.trim().toLowerCase() === demoCredentials.email &&
      submittedPassword === demoCredentials.password;

    if (!matchesDemoCredentials) {
      setError("root.auth", {
        type: "manual",
        message: "E-mail ou senha incorretos.",
      });
      return;
    }

    setAuthenticatedEmail(submittedEmail.trim());
  };

  const handleLogout = () => {
    setAuthenticatedEmail(null);
  };

  return (
    <Container>
      <LoginContainer>
        {authenticatedEmail ? (
          <Column>
            <Title>Bem-vindo!</Title>
            <Success role="status">
              Login realizado com sucesso para {authenticatedEmail}.
            </Success>
            <Spacing />
            <Button title="Sair" onClick={handleLogout} />
          </Column>
        ) : (
          <Column>
            <Title>Login</Title>
            <Hint>
              Acesso de demonstração: <strong>admin@dio.com</strong> /{" "}
              <strong>123456</strong>
            </Hint>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Label htmlFor="email-input">E-mail</Label>
              <Input
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Digite seu e-mail"
                control={control}
                errorMessage={errors.email?.message}
              />
              <Spacing />
              <Label htmlFor="password-input">Senha</Label>
              <Input
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Digite sua senha"
                control={control}
                errorMessage={errors.password?.message}
              />
              {errors.root?.auth?.message && (
                <Feedback role="alert">{errors.root.auth.message}</Feedback>
              )}
              <Spacing />
              <Button title="Entrar" type="submit" disabled={!isValid} />
            </Form>
          </Column>
        )}
      </LoginContainer>
    </Container>
  );
};

export default Login;
