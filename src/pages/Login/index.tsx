import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input placeholder="Usuário" />
          <Spacing />
          <Input placeholder="Senha" />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
