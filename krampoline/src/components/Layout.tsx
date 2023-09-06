import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 475px;
  background-color: #ffffff;
`;