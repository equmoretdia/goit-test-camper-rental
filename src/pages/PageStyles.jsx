import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  font-size: 32px;
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
`;

// const Header = styled.h1`
//   text-align: center;
//   margin-bottom: 32px;
//   font-size: 32px;
//   /* border: 0;
//   padding: 0; */
// `;

const Reason = styled.li`
  padding-bottom: 16px;
`;

const ReasonHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Moto = styled.h2`
  text-align: center;
  font-size: 24px;
  color: var(--button);
  padding: 32px 0;
  margin-bottom: 32px;
`;

const MotoSpan = styled.span`
  color: var(--rating);
`;

export {
  Header,
  HiddenHeader,
  ContentContainer,
  Reason,
  ReasonHeader,
  Moto,
  MotoSpan,
};
