import React, { Component } from "react"
import { Navbar, Button } from "react-bootstrap"
import logo from "./favicon.ico"

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block aling-top"
                        alt={"logo"}
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/">Портфолио студентов</Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className="small"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Button variant="light" className="main_top_button_2">
                        <i className="fa fa-star" aria-hidden="true"></i>Все
                        сервисы{" "}
                    </Button>
                    <Button variant="light" className="main_top_button_1">
                        {" "}
                        <i
                            className="fa fa-power-off"
                            aria-hidden="true"
                        ></i>{" "}
                        Вход{" "}
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header
