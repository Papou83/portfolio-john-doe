function Services() {
  return (
    <div className="container my-5">
      <h1 className="text-dark">Mes Services</h1>
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Développement Web</h5>
              <p className="card-text">Création de sites web modernes et responsives.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Design UI/UX</h5>
              <p className="card-text">Conception d'interfaces utilisateur intuitives.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">SEO</h5>
              <p className="card-text">Optimisation pour les moteurs de recherche.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services