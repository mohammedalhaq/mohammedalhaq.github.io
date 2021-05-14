import React from 'react';
import Button from '@material-ui/core/Button';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2505D',
    }
  }
});

function Nav() {
  return (
    <ul>
      <li style={{ float: 'left',  marginLeft: '3vh', marginRight: '-1vh' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Mohammed Alhaq
        </Link>
      </li>
      <li>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> 
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'white' }}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          Contact
        </Link>
      </li>
      <li style={{ float: 'right',  marginRight: '3vh', right: 0}}>
      <ThemeProvider theme={theme}>
        <Button href="https://github.com/mohammedalhaq/Portfolio/blob/main/src/Mohammed%20Alhaq%20Resume.pdf" variant="contained" color="primary">
          Resume
        </Button>
        </ThemeProvider>
      </li>
    </ul>
  );
}

export default Nav;
