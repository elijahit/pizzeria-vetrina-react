import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          {/* FOOTER PER DESKTOP */}
          <div className="row d-none d-lg-flex mt-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <h6 className="text-white-50">Navigazione</h6>
                  <nav id="navigation-secondary">
                    <ul className="list-unstyled">
                      <li>
                        <Link to={"/"} className="text-decoration-none text-white">Home</Link>
                      </li>
                      <li>
                        <Link to={"/menu"} className="text-decoration-none text-white">Menù</Link>
                      </li>
                      <li>
                        <Link to={"/about"} className="text-decoration-none text-white">Chi Siamo</Link>
                      </li>
                      <li>
                        <Link to={"/dove-siamo"} className="text-decoration-none text-white">Dove Siamo</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-6">
                  <h6 className="text-white-50">Informazioni</h6>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        Via Duca degli Abruzzi, 50 <br />
                        95037 - San Giovanni la Punta (CT) <br />
                        P.IVA: 06031440875
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <h6 className="text-white-50">Site Copyright</h6>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        Developed with 💛 by <br />
                        <a className="text-decoration-none text-white-50" href="https://www.linkedin.com/in/gabriele-tosto/"  target="_blank">Gabriele Mario Tosto</a> <br />
                        &copy; 2024 - pizzeriatosto.it
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <ul className="list-unstyled d-flex gap-2 align-items-center">
                    <li>
                      <a href="https://m.facebook.com/people/Pizzeria-Tosto/61553390885333/" target="_blank">
                        <img className="img-fluid" src="./src/assets/facebook.svg" alt="Facebook" width="48" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/pizzeriatosto" target="_blank">
                        <img className="img-fluid" src="./src/assets/instagram.svg" alt="Facebook" width="48" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@pizzeriatosto" target="_blank">
                        <img className="img-fluid rounded-4" src="./src/assets/tiktok.svg" alt="Facebook" width="40" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER PER MOBILE */}
        </div>
      </footer>
    </>
  );
}

export default Footer;