function Portfolio() {
  const projets = [
    { titre: "Fresh Food", description: "Site de livraison de repas en ligne." },
    { titre: "Restaurant Akira", description: "Site vitrine pour un restaurant japonais." },
    { titre: "Espace bien-être", description: "Site pour un centre de bien-être." },
    { titre: "SEO", description: "Optimisation SEO pour un site e-commerce." },
    { titre: "Création d'une API", description: "API REST pour une application mobile." },
    { titre: "Maquette d'un site", description: "Maquette d'un site de voyage." },
  ]

  return (
    <div className="container my-5">
      <h1 className="text-dark">Mes Réalisations</h1>
      <div className="row">
        {projets.map((projet, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={`https://picsum.photos/400/200?random=${index}`} className="card-img-top" alt={projet.titre} />
              <div className="card-body">
                <h5 className="card-title">{projet.titre}</h5>
                <p className="card-text">{projet.description}</p>
                <a href="/portfolio" className="btn btn-primary">Voir le projet</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio