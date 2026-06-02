import {Link } from "react-router-dom";



export default function Footer() {
    return(
<footer className="footer" >

  {/* <!-- Widgets - Bootstrap Brain Component --> */}
  <section className="py-4 py-md-5 py-xl-8 bg-dark border-top">
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-lg-0">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="widget">
            <h4 className="widget-title mb-4 text-light">Trouve ton Artisan</h4>
            <address className="mb-4"> <a className="link-light text-decoration-none" href="https://maps.app.goo.gl/cDYgqyZQtnF1f2Pi7" >101 cours Charlemagne,<br/>CS 20033<br/>69269 LYON CEDEX 02<br/> France</a></address>
            <p className="mb-1">
              <Link className="link-light text-decoration-none" to="tel:+33071020304050">(+33) 04 26 73 40 00</Link>
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-4">
          <div className="widget">
            <h4 className="widget-title mb-4 text-light">Menu du site</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="link-light text-decoration-none">Accueil</Link>
              </li>
              <li className="mb-2">
                <Link to="/artisanprofil" className="link-light text-decoration-none">Artisan Profil</Link>
              </li>
              <li className="mb-2">
                <Link to="/artisanliste" className="link-light text-decoration-none">Artisan Liste</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="link-light text-decoration-none">A propos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-4">
          <div className="widget">
            <h4 className="widget-title mb-4 text-light">Liens utiles</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/cookies" className="link-light text-decoration-none">Cookies</Link>
              </li>
              <li className="mb-2">
                <Link to="/mentions-legales" className="link-light text-decoration-none">Mentions légales</Link>
              </li>
              <li className="mb-2">
                <Link to="/donnees-personnelles" className="link-light text-decoration-none">Données personnelles</Link>
              </li>
              <li className="mb-2">
                <Link to="/accessibilite" className="link-light text-decoration-none">Accessibilités</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
  </section>

  {/* <!-- Copyright - Bootstrap Brain Component --> */}
  <div className="bg-dark py-4 py-md-5 py-xl-8 border-top border-dark-subtle">
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-md-0 align-items-sm-center">
        <div className="col-xs-12 col-sm-6 col-md-4 order-0 order-md-0">
        </div>

        <div className="col-xs-12 col-md-4 order-2 order-md-1">
          <div className="footer-copyright-wrapper text-center text-light">
            &copy; 2026. All Rights Reserved. 
          </div>
          <div className="credits text-light text-center mt-2 fs-8">
            Built by Borys with <span className="text-danger">&#9829;</span>
          </div>
        </div>


      </div>
    </div>
  </div>

</footer>
    )
}