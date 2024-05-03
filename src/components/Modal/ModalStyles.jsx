import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: var(--modal-backdrop);
`;

const Content = styled.div`
  position: relative;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 40px;
  width: 982px;
  margin: 40px auto;
  /* height: 720px; */
  border-radius: 20px;
  background-color: var(--background);
`;

export { Backdrop, Content };
