import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 56px;
`;

export const Columns = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 8px 0;
  width: 48px;
  height: 100%;
  background: #353535;
  z-index: 1;
`;
