import { Container, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from './components/layout/Header';

const App = () => {
  return (
    <Box 
      bgColor="secondary" 
      minH="100vh" 
      w="full"
    >
      <Header/>
      <Container pt="28" maxW="container.xl">
        <Outlet />
      </Container>
    </Box>
  );
};

export default App;
