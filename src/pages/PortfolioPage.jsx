import { useOutletContext } from 'react-router-dom';

export default function PortfolioPage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Portfolio');

    setCurrentPage('Portfolio');

    document.title = 'Ethan Owens - ' + currentPage;
    
    return (
        <div>
            <div className='card'>
                <header className='card-header portfolio-header'>Check out my projects!</header>
                <div className='card-body project-list'>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>DMs & DMs</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/dms.png"></img>
                            <p>
                                This app allows users to create and share ideas for characters, stories, rules and quests with other Dungeon Masters around the world!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/dms-and-dms">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>CMS Style Blog</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/cms-blog.png"></img>
                            <p>
                                This application allows users to create, edit and delte their own blog posts while also reading other blog posts written by other users!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/cms-blog">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Marvel Movie Database</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/mcu.png"></img>
                            <p>
                                This app allows users to see information about the Marvel Movies, store their favorite movies in a list and watch trailers!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/project-1">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>E-Commerce API</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/e-commerce.png"></img>
                            <p>
                                This app is the back end for a potential E-Commerce website, allowing a database to create, read, update and delete product information.
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/e-commerce">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>SVG Logo Generator</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/logo-gen.png"></img>
                            <p>
                                This app allows users to create simple logos in a .svg file by answering a few questions in the command line!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/logo-generator">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Social Media API</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/social-media-api.png"></img>
                            <p>
                                This app is the backend for a potential Social Media Website. It utilizes MongoDB and allows users to create, read, update and delete information!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/social-media-api">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>README.md Generator</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/questions.png"></img>
                            <p>
                                This app allows a user to create a README.md file with relative ease by just answering a few questions in the command line!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/README-generator">Link to Repo</a>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Weather Tracker</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/weather.png"></img>
                            <p>
                                This app allows users to get weather data for any city that a user decides to search for from a third party API!
                            </p>
                            <a className='btn btn-primary repo-link' href="https://github.com/Teacher2Coder/weather-tracker">Link to Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}