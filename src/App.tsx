import logo from './logo.svg';
import './App.css';
import MainPage from './ui/pages/MainPage';
import { Stack } from '@mui/material';
import MainAppBar from './ui/widgets/MainAppBar';
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './ui/pages/LoginPage';
import ErrorPage from './ui/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/dashboard",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
