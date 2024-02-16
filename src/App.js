import { Typography } from '@mui/material';
// import Typography from '@mui/material/Typography';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Carlist from './components/Carlist';  // redirect to Login from
// import Login from './components/Login';   // need SpringSecurityJwt 


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6'>
            CAR LIST
          </Typography>
        </Toolbar>
      </AppBar>    
      <Carlist />
      {/* <Login /> */}
    </div>
  );
}

export default App;
