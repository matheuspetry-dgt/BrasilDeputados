import { Box, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { FaLandmark } from "react-icons/fa";

export const Header = () => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 5,
        borderBottom: 1
      }}
    >
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
      >
        <FaLandmark color="#3B82F6" strokeWidth={2.5} size={30} />
        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 600 }}>
          BrasilDeputados
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: 5, fontSize: 20 }}
      >
        <Link
          component={RouterLink}
          to='/'
          sx={{
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              color: theme.palette.primary.contrasteForte,
            },
          }}
        >
          Deputados
        </Link>
        <Link
          component={RouterLink}
          to='/'
          sx={{
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              color: theme.palette.primary.contrasteForte,
            },
          }}
        >
          Órgãos
        </Link>
      </Box>
    </Box>
  );
};
