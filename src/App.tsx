import { Container } from "@mui/material";
import { Outlet } from "react-router";

export default function App() {
    return (
        <Container fixed>
            <Outlet />
        </Container>
    )
}