import { Box } from "@mui/material";
import { Card } from "../Card";
import { Graphic } from "../Graphic";

export const ConteudoPrincipal = () => {
  return (
    <Box
      component="section"
      sx={{
        color: "#000",
        p: 5,
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Card />
      <Graphic />
    </Box>
  );
};
