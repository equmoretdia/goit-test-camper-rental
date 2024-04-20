import styled from 'styled-components';

// const Card = styled.li`
//   display: flex;
//   gap: 24px;
//   padding: 24px;
//   width: 100%;
//   height: 358px;
//   border: 1px solid var(--card-border-color);
//   border-radius: 20px;
// `;

// const ImgWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   min-width: 290px;
//   max-height: 310px;
//   border-radius: 10px;
//   overflow: hidden;
// `;

// const Img = styled.img`
//   height: 100%;
// `;

// const CardInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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

// const PriceFavorite = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const HeartButton = styled.button`
//   background-color: transparent;
//   border: none;
//   padding: 0px;
//   margin-left: 10px;
// `;

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

// const Description = styled.p`
//   display: -webkit-box;
//   line-height: 1.5;
//   overflow: hidden;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
// `;

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

// const ShowMore = styled.button`
//   padding: 16px 40px;
//   width: 166px;
//   height: 56px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.5;
//   letter-spacing: -0.01em;
//   color: var(--background);
//   background-color: var(--button);
//   border-radius: 200px;
//   border: none;

//   &:hover {
//     background-color: var(--active-button);
//   }
// `;

export {
  //   Card,
  //   ImgWrapper,
  //   Img,
  //   CardInfo,
  FirstRow,
  Header,
  CloseButton,
  //   PriceFavorite,
  SecondRow,
  RatingBlock,
  RatingData,
  LocationBlock,
  LocationData,
  //   Description,
  //   FeatureBlock,
  //   Feature,
  //   ShowMore,
};
