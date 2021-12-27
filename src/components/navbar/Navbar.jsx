import React from "react";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Paper,
  Dialog,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./navbar.css"
import Login from "../Login/Login";
import Registration from "../Registration/Registration"

import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    marginBottom: "35px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: "60px",
    marginTop: "40px",
  },
}));


function Navbar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openAuth, setOpenAuth] = React.useState(false);
  const handleClickOpenAuth = () => {
    setOpenAuth(true);
  };
  const handleCloseAuth = () => {
    setOpenAuth(false);
  };

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }


  return (
    
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
          <HomeIcon
           sx={{ color: pink[500] }} fontSize="large" />
            <Typography variant="h5" mr={5} className={classes.title}>
              Проект "Интерны"
            </Typography>
            <Box mr={5}>
              <Button
                style={{
                  borderRadius: 35,
                  backgroundColor: "#8eacbb",
                  padding: "10px 26px",
                  fontSize: "16px",
                }}
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Авторизация
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <Login />
                <Grid container justifyContent="center">
                  <Button    
                  style={{
                    maxWidth: '80px',
                    maxHeight: '40px',
                    minWidth: '60px',
                    minHeight: '40px',
                    marginBottom:"18px",     
                  }}
                   variant="outlined"
                   onClick={handleClose} color="primary">
                    Отмена
                  </Button>
                  </Grid>
              </Dialog>
            </Box>

            
            <Box mr={5} >
              <Button
                style={{
                  borderRadius: 35,
                  backgroundColor: "#8eacbb",
                  padding: "10px 26px",
                  fontSize: "16px",
                }}
                color="inherit"
                variant="outlined"
                onClick={handleClickOpenAuth}
              >
                Регистрация
              </Button>
              <Dialog
                open={openAuth}
                onClose={handleCloseAuth}
                aria-labelledby="form-dialog-title-auth"
               
              >

                  <Registration />
                <Grid container justifyContent="center">
                  <Button    
                  style={{
                    maxWidth: '80px',
                    maxHeight: '40px',
                    minWidth: '60px',
                    minHeight: '40px',
                    marginBottom:"18px",     
                  }}
                   variant="outlined"
                   onClick={handleCloseAuth} color="primary">
                    Отмена
                  </Button>
                  </Grid>
              </Dialog>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <Grid container>
              <div className={classes.overlay} />
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography 
                    component="h1"
                    variant="h3"
                    color="primary"
                    gutterBottom
                   
                  >
                    For Eastern Peak
                  </Typography>

                  <Typography
                    // component="h4"
                    // fontSize="25px"
                    className="text-color"
                    paragraph
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Наша команда
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <div>Pavel Shcherbyna</div>
              <div>Rostislav Zachepa</div>
              <div>Evgeniya Alekseyenko</div>
            </Typography>

            <div className={classes.mainButton}>
              <Grid container justifyContent="center">
                <Grid item>
                <form  action="https://easternpeak.com/" target="_blank">
                  <Button type="submit" variant="outlined" color="primary">
                    Learn more
                  </Button>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
export default Navbar;