import {Box, Container, Stack} from "@mui/material";
import TopPanel from "../../components/top-panel";
import BoardBlock from "../../components/board-block";
import PaperContainer from "../../components/paper-container";
import React from "react";

const CheckersPage = () => {
  return (
    <Box>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TopPanel />
        <Container>
          <div className="main-container">
            <BoardBlock />
            <PaperContainer />
          </div>
        </Container>
      </Stack>
    </Box>
  );
};

export default CheckersPage