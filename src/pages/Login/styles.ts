import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 16px 48px rgba(36, 7, 45, 0.24);
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #81259d;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin: 8px 0;
  color: #332c37;
  font-size: 14px;
  font-weight: 600;
`;

export const Hint = styled.p`
  margin: 8px 0 16px;
  color: #615768;
  font-size: 13px;
  line-height: 1.5;

  strong {
    color: #81259d;
  }
`;

export const Feedback = styled.p`
  margin: 10px 0;
  color: #bd1e32;
  font-size: 13px;
`;

export const Success = styled.p`
  margin-top: 12px;
  color: #247a43;
  line-height: 1.5;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;
