import React, { useState } from 'react'
import PortfolioImage from '../items/PortfolioImage'
import fetchFunc from '../items/fetchFunc'

function Portfolio() {
    const [projects, setProjects] = useState([])

    const url = "http://localhost:9000/portfolio"

    fetch(url)
        .then(response => fetchFunc.handleResponse(response))
        .then(data => setProjects(data))
        .catch(err => fetchFunc.handleError(err))

    return (
        <main>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Portfolio</h2>
                </div>
            </div>

            <section>
                <div className="container portfolio">
                    <div className="row my-3">
                        {projects.map(project =>
                            <PortfolioImage key={project.ProjectID} title={project.Title} imgSrc={project.Image} altText={project.Descr} />)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Portfolio