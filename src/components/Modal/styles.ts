import styled from 'styled-components';


export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 5;

  img{
    width: 50%;
  }
`;
