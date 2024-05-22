import './App.css';
import MainPage, { MAINROUTE } from './ui/pages/MainPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage, { LOGINROUTE } from './ui/pages/LoginPage';
import ErrorPage from './ui/ErrorPage';

const router = createBrowserRouter([
  {
    path: LOGINROUTE,
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: MAINROUTE,
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
