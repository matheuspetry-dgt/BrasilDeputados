import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";


export const Card = () => {
    const theme = useTheme()

    return (
        <Box component='section' sx={{ bgcolor: theme.palette.primary.dark }}>
            ...
        </Box>
    )
}