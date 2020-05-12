import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

interface FormProps {
  hasError: boolean;
}

export const ImageLogo = styled.img``;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
`;

export const Error = styled.span`
  margin-top: 8px;
  display: block;
  color: #c53030;
`;

export const InputRepo = styled.input<FormProps>`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const ButtonSubmit = styled.button`
  width: 210px;
  height: 70px;
  background: #04d361;
  border-radius: 0 5px 5px 0;
  color: #fff;
  border: 0;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#04d361')};
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const RepositoriesItemLink = styled(Link)`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const RepositoriesItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const RepositoriesItemAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const RepositoriesItemContent = styled.div`
  margin: 0 16px;
  flex: 1;
`;

export const RepositoriesItemTitle = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
`;

export const RepositoriesItemDescription = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
`;
