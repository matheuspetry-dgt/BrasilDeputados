import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  buscaQuantidadeDeputados,
  buscaQuantidadePartidos,
  buscaQuantidadeOrgaos,
} from "../../services/Api";
import { FaFlag, FaUserAlt } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";

export const Card = () => {
  const [totalDeputados, setTotalDeputados] = useState();
  const [totalPartidos, setTotalPartidos] = useState();
  const [totalOrgaos, setTotalOrgaos] = useState();

  useEffect(() => {
    buscaQuantidadeDeputados().then((total) => {
      setTotalDeputados(total);
    });
    buscaQuantidadePartidos().then((total) => {
      setTotalPartidos(total);
    });
    buscaQuantidadeOrgaos().then((total) => {
      setTotalOrgaos(total);
    });
  }, []);

  return (
    <Box component="section" sx={{ display: "flex", gap: 5 }}>
      <Paper
        sx={{
          bgcolor: "#333",
          color: "#fff",
          boxShadow: "16px",
          width: "100%",
          maxWidth: "270px",
          borderRadius: 1,
          p: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: 18 }}>
            Total de Deputados
          </Typography>
          <FaUserAlt color="#3B82F6" strokeWidth={2.5} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: 20 }}>
          {totalDeputados > 0 ? totalDeputados : "Carregando..."}
        </Typography>
      </Paper>

      <Paper
        sx={{
          bgcolor: "#333",
          color: "#fff",
          boxShadow: "16px",
          width: "100%",
          maxWidth: "270px",
          borderRadius: 1,
          p: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: 18 }}>
            Total de Partidos
          </Typography>
          <FaFlag color="#3B82F6" strokeWidth={2.5} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: 20 }}>
          {totalPartidos > 0 ? totalPartidos : "Carregando..."}
        </Typography>
      </Paper>
      <Paper
        sx={{
          bgcolor: "#333",
          color: "#fff",
          boxShadow: "16px",
          width: "100%",
          maxWidth: "270px",
          borderRadius: 1,
          p: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: 18 }}>
            Total de Órgãos
          </Typography>
          <RiAuctionFill color="#3B82F6" strokeWidth={2.5} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: 20 }}>
          {totalOrgaos > 0 ? totalOrgaos : "Carregando..."}
        </Typography>
      </Paper>
    </Box>
  );
};
