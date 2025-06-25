// src/pages/Login/index.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import {
  Container,
  ContentWrapper,
  ImageSection,
  Image,
  FormSection,
  Title,
  Subtitle,
  Form,
  RegisterLink,
  Message,
} from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>();
  const [submissionMessage, setSubmissionMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setSubmissionMessage(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (data.email === 'teste@dio.me' && data.password === '123456') {
        setSubmissionMessage({
          text: 'Login realizado com sucesso!',
          type: 'success',
        });
        reset();
      } else {
        setSubmissionMessage({
          text: 'Email ou senha inválidos.',
          type: 'error',
        });
      }
    } catch (error) {
      setSubmissionMessage({
        text: 'Erro de conexão ou servidor. Tente mais tarde.',
        type: 'error',
      });
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <ImageSection>
          <Image src="https://via.placeholder.com/500" alt="DIO Login" />
        </ImageSection>
        <FormSection>
          <Title>Faça seu Login na DIO</Title>
          <Subtitle>
            Acesse a plataforma e continue sua jornada de aprendizado.
          </Subtitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email inválido',
                },
              })}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Senha"
              {...register('password', {
                required: 'Senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'Senha deve ter no mínimo 6 caracteres',
                },
              })}
              error={errors.password?.message}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </Button>
          </Form>
          {submissionMessage && (
            <Message color={submissionMessage.type}>
              {submissionMessage.text}
            </Message>
          )}
          <RegisterLink>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </RegisterLink>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};
