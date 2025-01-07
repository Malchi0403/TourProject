import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import Icon from "../assets/images/Icon.png";
import User from "../assets/images/User.png";
import { UserContext } from "../utils/context/userContext";
import Login from "./Login";
import Register from "./Register";
import BackgroundImage from '../assets/images/Background.png'
const styles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat :'no-repeat',
  backgroundSize :'cover'
};
function NavbarMenu() {
  const [show, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const [showReg, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const location = useLocation()
  const [state, dispatch] = useContext(UserContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  // const tourBookExists = !localStorage.getItem("tourBook");

  // const handleUser = () => {
  //   if (!localStorage.getItem("tourBook")) {
  //     navigate("/");
  //   }
  //   navigate("/Waiting");
  // };

  // // useEffect(() => {
  // //   if (!tourBookExists) {
  // //     navigate("/");
  // //   }
  // // }, [tourBookExists, navigate]);

  return (
    <>
      <Navbar  style={ location.pathname !== "/" ? styles : {}} >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Icon} alt="logo" />
            </Link>
          </Navbar.Brand>
          {/* )
        ) } */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {state.isLogin === true ? (
            state.user.role === "admin" ? (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title={<img src={User} alt="" />}>
                    <NavDropdown.Item href="/trip">Trip</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            ) : (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown title={<img src={User} alt="" />}>
                    <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item
                      href={
                        !localStorage.getItem("tourBook") ? "/" : "/Waiting"
                      }
                    >
                      Pay
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            )
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" >
                <Button
                  variant="outline-light"
                  style={{
                    padding: "6px 23px",
                    width:'120px',
                  }}
                  className="me-3  loginClassname"
                  onClick={() => handleShowLogin()}
                >
                  Login
                </Button>
                <Button
                  variant=""
                  style={{
                    backgroundColor: "#FFAF00",
                    padding: "6px 23px",
                    color: "#fff",
                    width:'120px'
                    
                  }}
                  onClick={() => handleShow()}
                  className="registerClassname"
                >
                  Register
                </Button>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <Register
        showReg={showReg}
        setShow={handleShow}
        handleClose={handleClose}
      />
      <Login
        show={show}
        showReg={handleShow}
        setShowLogin={handleShowLogin}
        handleCloseLogin={handleCloseLogin}
      />
    </>
  );
}

export default NavbarMenu;
