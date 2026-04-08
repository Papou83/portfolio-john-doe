import { useState, useEffect } from 'react'

function Modal() {
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then(res => res.json())
      .then(data => setGithubData(data))
  }, [])

  return (
    <>
      <div className="modal fade" id="githubModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Profil GitHub</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {githubData ? (
                <div className="text-center">
                  <img src={githubData.avatar_url} alt="Avatar" className="rounded-circle mb-3" width="100" />
                  <h5>{githubData.name}</h5>
                  <p>{githubData.bio}</p>
                  <p>📦 Repos publics : {githubData.public_repos}</p>
                  <p>👥 Followers : {githubData.followers}</p>
                  <a href={githubData.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    Voir le profil
                  </a>
                </div>
              ) : (
                <p>Chargement...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal