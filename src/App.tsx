import ViewTimeline from "@mui/icons-material/ViewTimeline";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router";

export default function App() {
    return <>
        <AppBar position="fixed">
            <Toolbar>
                <ViewTimeline sx={{ mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/hobby-charts/"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1,
                    }}>
                    HOBBY CHARTS
                </Typography>
                <IconButton color="inherit" href="https://www.instagram.com/callmepills/" target="_blank">
                    <Instagram />
                </IconButton>
                <IconButton color="inherit" href="https://github.com/callmepills/hobby-charts" target="_blank">
                    <GitHub />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Toolbar /> {/* spacer */}
        <Container maxWidth="lg">
            <Outlet />
        </Container>
    </>
}