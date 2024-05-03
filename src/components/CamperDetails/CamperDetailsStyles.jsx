import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Header = styled.h2`
  display: -webkit-box;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: var(--main);
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  padding: 0px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const MainBlock = styled.div`
  /* overflow-y: scroll; */
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;

const RatingBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

const RatingData = styled.p`
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`;

const LocationBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

const LocationData = styled.p`
  line-height: 1.5;
  color: var(--main);
`;

const Gallery = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 290px;
  max-height: 310px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--img-shadow);
`;

const Img = styled.img`
  height: 100%;
`;

const Description = styled.p`
  line-height: 1.5;
  padding-bottom: 44px;
`;

// const FeatureBlock = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-items: center;
//   max-height: calc(2 * 48px);
//   overflow: hidden;
//   gap: 8px;
// `;

// const Feature = styled.li`
//   display: flex;
//   padding: 12px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   text-align: center;
//   color: var(--main);
//   border-radius: 100px;
//   background-color: var(--block-features);
//   mix-blend-mode: multiply;
// `;

const FRContainer = styled.div`
  display: flex;
  gap: 42px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--card-border-color);
`;

const FeaturesReviews = styled.button`
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
  background-color: transparent;
  border: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: -27px;
    background-color: ${({ active }) =>
      active ? 'var(--button)' : 'transparent'};
    border-radius: 2px;
  }
`;

export {
  HeaderRow,
  Header,
  CloseButton,
  InfoBlock,
  MainBlock,
  SecondRow,
  RatingBlock,
  RatingData,
  LocationBlock,
  LocationData,
  Gallery,
  ImgWrapper,
  Img,
  Description,
  //   FeatureBlock,
  //   Feature,
  FRContainer,
  FeaturesReviews,
};
