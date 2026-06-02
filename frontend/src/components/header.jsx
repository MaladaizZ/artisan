import {Link} from "react-router-dom";
import"./header.css"


const Header = () => {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="/Logo.png" alt="Logo" className="logo" >
    </img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">À propos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/artisanliste">Artisans</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/artisanprofil">Profil</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/batiment">Bâtiment</Link></li>
            <li><Link className="dropdown-item" to="/service">Service</Link></li>
            <li><Link className="dropdown-item" to="/alimentation">Alimentation</Link></li>
            <li><Link className="dropdown-item" to="/fabrication">Fabrication</Link></li>
          </ul>
        </li>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="sur l'ensemble du site"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>


    )
}
export default Header