import styled from 'styled-components';

import { IconComponent } from '../IconComponent/IconComponent';

const Card = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  width: 100%;
  height: 358px;
  border: 1px solid var(--card-border-color);
  border-radius: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 290px;
  max-height: 310px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--main);
`;

const PriceFavorite = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeartButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-left: 10px;
`;

export {
  Card,
  ImgWrapper,
  Img,
  CardInfo,
  FirstDiv,
  Header,
  PriceFavorite,
  HeartButton,
};
