import CartWidget from './CartWidget.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';
import logo from "../logo.png";
import 'bootstrap';

const Navbar = () => {
  return (
    <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Left><Link to='/'><Logo><img src={logo} /></Logo></Link></Left>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <Center>
                <Link to='/category/1' className="menuItem"><MenuItem>Spider-Man</MenuItem></Link>
                {/* <Link><MenuItem>DareDevil</MenuItem></Link>  */}
                <Link to='/category/2' className="menuItem"><MenuItem>Crossovers</MenuItem></Link>
             </Center>
             <Right>
              <form className="d-flex">
               <MenuItem> 
               <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Ingrese su búsqueda"
                  aria-label="Search"
                ></input>
                </MenuItem>
                <MenuItem>
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
                </MenuItem>
                <CartWidget/>
              </form>
              </Right>
            </div>
          </div>
        </nav>
    </Wrapper>
  );
};

export default Navbar;
