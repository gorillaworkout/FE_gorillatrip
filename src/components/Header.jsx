import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import {Link} from 'react-router-dom' 
import {LogoutFunc,display} from '../Redux/Actions'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'  
import 'react-toastify/dist/ReactToastify.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // {
    warna:{
      
      background: `linear-gradient(45deg,#0984e3 30%, #fd79a8 90%)`
    },
    logopswt:{
        color:'white'
    }
  // }
}));

 function ButtonAppBar(props) {
  const classes = useStyles();

  const logoutbtn=()=>{
    // toast.success('🦄 Wow so easy!', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
    console.log('logout')
    localStorage.removeItem('id')
    props.LogoutFunc()
    props.display({namePlace:'bayu apartment'})
    toast.info(`Logout Berhasil`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
  });
    console.log(props.Auth)
    console.log(props.Disp)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.warna} position="static">
        <Toolbar>
          <a href='http://localhost:3001'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <FlightTakeoff className={classes.logopswt}/>
          </IconButton>
          </a>
          <Typography variant="h6" className={classes.title}>
            GorillaTrip
          </Typography>
            <Button color="inherit">Home</Button>
          
          <Button color="inherit">Browse By</Button>

          <Link to="/stories" style={{textdecoration:'none', color:'white'}}>
              <Button color="inherit">Stories</Button>  
          </Link>

          <Link to='/register' style={{textdecoration:'none', color:'white'}}>
              <Button color="inherit">Register</Button>
          </Link>
          {
            props.Auth.isLogin? 
            <Link to='/' style={{textdecoration:'none',color:'white'}}>
              <Button color="inherit" onClick={logoutbtn}>Logout</Button>
            </Link>

             :

            <Link to='/login' style={{textdecoration:'none',color:'white'}}>
              <Button color="inherit">Login</Button>
            </Link>

          }


         

        </Toolbar>
      </AppBar>
    </div>
  );
}

const Mapstatetoprops=(state)=>{
  return{
    Auth:state.Auth,
    Disp:state.Disp
    
  }
}

export default (connect(Mapstatetoprops,{LogoutFunc,display}) (ButtonAppBar))