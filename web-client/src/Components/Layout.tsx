import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { Outlet } from 'react-router'

export default function Layout(){
    return(
        <>
            <NavBar/>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}