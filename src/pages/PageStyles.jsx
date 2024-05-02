import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  padding: 32px 0;
  font-size: 32px;
  color: var(--rating);
`;

const HiddenHeader = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 32px;
`;

const ImgLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 643px;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 20px;
`;

const CatalogButton = styled.button`
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--background);
  background-color: var(--button);
  border-radius: 200px;
  border: none;

  &:hover {
    background-color: var(--active-button);
  }
`;

const Reason = styled.li`
  padding-bottom: 16px;
`;

const ReasonHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const MotoContainer = styled.div`
  width: 100%;
  padding: 0 48px;
`;

const MotoStart = styled.h2`
  text-align: left;
  font-size: 24px;
  color: var(--button);
  padding-bottom: 8px;
`;

const MotoEnd = styled.h2`
  text-align: right;
  font-size: 24px;
  color: var(--rating);
`;

export {
  Header,
  HiddenHeader,
  ContentContainer,
  ImgLinkContainer,
  Img,
  CatalogButton,
  Reason,
  ReasonHeader,
  MotoContainer,
  MotoStart,
  MotoEnd,
};
