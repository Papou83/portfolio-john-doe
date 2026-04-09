import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>123 Rue de la Paix<br />83700 Saint Raphael</p>
            <p>📞 06 18 22 03 09</p>
            <div className="d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white">LinkedIn</a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li><NavLink className="text-white text-decoration-none" to="/">Accueil</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/services">Services</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Réalisations</h5>
            <ul className="list-unstyled">
              <li><NavLink className="text-white text-decoration-none" to="/portfolio">Projet 1</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/portfolio">Projet 2</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/portfolio">Projet 3</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer