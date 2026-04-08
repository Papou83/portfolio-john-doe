function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Me Contacter</h1>
      <div className="row">

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nom *</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Téléphone *</label>
              <input type="tel" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Sujet *</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message *</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        <div className="col-md-6">
          <h5>Mes coordonnées</h5>
          <p>📍 40 rue Laure Diebold, 69009 Lyon, France</p>
          <p>📞 10 20 30 40 50</p>
          <p>✉️ john.doe@gmail.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d4.8357!3d45.7640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzUwLjQiTiA0wrA1MCcwOC41IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="300"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default Contact