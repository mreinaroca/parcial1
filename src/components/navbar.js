import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/"><strong>TuSegundazo.com</strong></Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;