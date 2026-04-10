import Modal from '../components/Modal'

function Home() {
  return (
    <>
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button className="btn btn-danger mt-3" data-bs-toggle="modal" data-bs-target="#githubModal">
          En savoir plus
        </button>
      </section>

      <Modal />

      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-dark">A propos</h2>
            <hr className="border-primary border-2" />
            <img src="https://picsum.photos/400/300" alt="John Doe" className="img-fluid mb-3" />
            <p>"Développeur Web fraîchement diplômé du CEF (Centre Européen de Formation), je combine une maîtrise technique des langages modernes et une forte capacité d'adaptation. 
              Passionné par la résolution de problèmes et l'expérience utilisateur, je suis prêt à mettre mon énergie et mes compétences au service de projets innovants au sein d'une équipe dynamique.".</p>
          </div>
          <div className="col-md-6">
            <h2 className="text-dark">Mes compétences</h2>
            <hr className="border-primary border-2" />
            <p>HTML5 90%</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
            </div>
            <p>CSS3 80%</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-info" style={{width: '80%'}}></div>
            </div>
            <p>JAVASCRIPT 70%</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
            </div>
            <p>PHP 60%</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style={{width: '60%'}}></div>
            </div>
            <p>REACT 50%</p>
            <div className="progress mb-3">
              <div className="progress-bar" style={{width: '50%'}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home