import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSchool } from 'react-icons/fa';
import { HeartIcon } from '@phosphor-icons/react';

const Header = ({ paginaAtual, setPaginaAtual }) => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
        <Container>
          <Navbar.Brand 
            onClick={() => setPaginaAtual('home')} 
            style={{ cursor: 'pointer' }}
            className="fw-bold d-flex align-items-center gap-2"
          >
            <FaSchool /> 
            <HeartIcon color="#AE2983" weight="fill" size={32} /> 
            Censo Escolar
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="header-navbar" />
          <Navbar.Collapse id="header-navbar">
            <Nav className="ms-auto">
              <Nav.Link 
                active={paginaAtual === 'home'}
                onClick={() => setPaginaAtual('home')}
                style={{ cursor: 'pointer' }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                active={paginaAtual === 'instituicoes'}
                onClick={() => setPaginaAtual('instituicoes')}
                style={{ cursor: 'pointer' }}
              >
                Instituições Ensino
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;