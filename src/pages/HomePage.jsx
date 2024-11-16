export default function HomePage() {
    return (
    <div>
        <div className='card home-cards'>
            <header className='card-header'>Welcome to my Portfolio powered by React!</header>
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                    tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
                    impedit suscipit sed magnam alias in, repellat expedita hic explicabo
                    architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit voluptate exercitationem quaerat pariatur
                    mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
                    nostrum temporibus ad omnis nam rerum eligendi.
                </p>
            </div>
        </div>
        <div className="card home-cards" id="featured-projects">
            <header className="card-header">Here are some of my featured projects!</header>
            <div className="card-body">
                <div className="feature-list">
                    <div className="card feature-card">
                        <header className="card-header">Marvel Movie Database</header>
                        <div className="card-body">
                            <p>Info about first project</p>
                            <a className="btn btn-primary" href="https://github.com/Teacher2Coder/project-1">Check out the Repo!</a>
                        </div>
                    </div>
                    <div className="card feature-card">
                        <header className="card-header">DMs & DMs</header>
                        <div className="card-body">
                            <p>Info about first project</p>
                            <a className="btn btn-primary" href="https://github.com/Teacher2Coder/dms-and-dms">Check out the Repo!</a>
                        </div>
                    </div>
                    <div className="card feature-card">
                        <header className="card-header">CMS-Style Blog</header>
                        <div className="card-body">
                            <p>Info about first project</p>
                            <a className="btn btn-primary" href="https://github.com/Teacher2Coder/cms-blog">Check out the Repo!</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}