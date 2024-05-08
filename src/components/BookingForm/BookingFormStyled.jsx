import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid var(--card-border-color);
  border-radius: 10px;
  padding: 24px;
  min-width: 448px;
  height: 532px;
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  padding-bottom: 8px;
  color: var(--main);
`;

const Form = styled.form`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Input = styled.input`
  padding: 18px;
  border-radius: 10px;
  background-color: var(--inputs);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--form-input-color);

  &::placeholder {
    color: var(--form-input-color);
  }
`;

export { Container, Header, Form, Input };
