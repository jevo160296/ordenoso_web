import logo from './logo.svg';
import './App.css';
import MainPage from './ui/pages/MainPage';
import { Stack } from '@mui/material';
import MainAppBar from './ui/widgets/MainAppBar';

function App() {
  return (
    <div className="App">
      <Stack>
        <MainAppBar/>
        <MainPage/>
      </Stack>
    </div>
  );
}

export default App;
