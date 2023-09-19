import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/utils/theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PresentationPage from './components/presentation/PresentationPage';
import ProjectsPage from './components/projects/ProjectsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PresentationPage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);