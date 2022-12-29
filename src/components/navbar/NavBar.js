/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
function NavScrollExample() {
    return (
      <Navbar className="nav-grande" bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><a class="navbar-brand col-6" href="./index.html">
                            <img class="logotipo" src="https://drive.google.com/uc?export=download&id=1tBsb0t3bUc1vG8BzvAs0wuCOBos_2_fa" alt="Logo de Dasein"/>
                          </a>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
              <NavDropdown title="Menú" class="Menu" id="navbarScrollingDropdown">
                
                <NavDropdown.Item href="#action3">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Mayoristas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Promociones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Contacto
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Somos Dasein
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  Ir a @dasein.outfit
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            
            <CardWidget
              cantidad='10'>
            </CardWidget>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

/*#############################################
                 Exportacion
###############################################*/
export default NavScrollExample;





/*

Padre -> Hijo

Padre (propiedades) -> Hijo

padre{
    propiedad{
        //todos los atributos que escribos en la etiqueta
        saludo = "asd",
        despedida = "asd"
    }
}




*/


