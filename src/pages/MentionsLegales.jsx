import { Helmet } from 'react-helmet-async'

function MentionsLegales() {
  return (
    <div className="container my-5">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-dark">Mentions Légales</h1>
      <div className="accordion" id="accordionMentions">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editeur">
              Éditeur du site
            </button>
          </h2>
          <div id="editeur" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <p>John Doe</p>
              <p>123 Rue de la Paix, 83700 Saint Raphael, France</p>
              <p>john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hebergeur">
              Hébergeur du site
            </button>
          </h2>
          <div id="hebergeur" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <p>GitHub Pages</p>
              <p>88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#credits">
              Crédits
            </button>
          </h2>
          <div id="credits" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
            <div className="accordion-body">
              <p>Images : <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
              <p>Favicon : <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MentionsLegales