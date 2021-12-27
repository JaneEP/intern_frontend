import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { createRandomCoords } from "../../utils";
import "./top-panel.scss";
// import axios from "axios";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { getUserSelector } from "../../store/auth/selectors";
import { logoutThunk } from "../../store/auth/thunks";
import { saveMoves } from "../../services/checkers";
import { CREATE_RND_POS, MOVE_BACK } from "../../store/checkers/action";

const TopPanel = ({ CREATE_RND_POS, MOVE_BACK, historyOfMoves }) => {
  const dispatch = useDispatch();

  // ===== Data =====

  const user = useSelector((state) => state.auth.user);

  // ===== Handlers =====

  const logoutHandler = () => dispatch(logoutThunk());

  const saveMovesHandler = async () => {
    try {
      const response = await saveMoves(historyOfMoves);
      alert(response.data.message);
      console.log(response);
      // alert(response);
    } catch (e) {
      // alert(e.response.data.message);
      alert("Произошла ошибка, ходы не сохранены");
    }
  };

  return (
    <AppBar className="top-panel" position="static">
      <Toolbar>
        <Grid className="button-grid-container" container spacing={2}>
          <Grid item xs={3} className="icon-grid">
            <InsertEmoticonIcon />
            <button className="user-span-btn" onClick={logoutHandler}>
              Выйти
            </button>
            {user && <span className="user-span-btn">{user.name}</span>}
          </Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => CREATE_RND_POS(createRandomCoords())}
            >
              <span>Начать игру</span>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={MOVE_BACK}>
              Назад
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={saveMovesHandler}>
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    historyOfMoves: state.checkers.historyOfMoves,
  };
};

const mapDispatchToProps = {
  CREATE_RND_POS,
  MOVE_BACK,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);
