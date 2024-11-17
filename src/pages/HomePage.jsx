import { useOutletContext } from 'react-router-dom';

export default function HomePage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Home');

    setCurrentPage('Home');
    
    document.title = 'Ethan Owens - ' + currentPage;

    return (
    <div>
        <div className='card home-cards'>
            <header className='card-header'>Welcome to my Portfolio powered by React!</header>
            <div className="card-body">
                <p>
                    Thank you so much for visiting my portfolio! To learn more about me, click on the About tab.
                    To send me a message, click the Contact tab. To see some of my work, click on the Portfolio tab.
                    To see my resume, click on the Resume tab.
                </p>
            </div>
        </div>
        <div className="card home-cards" id="featured-projects">
            <header className="card-header">Check out some of my featured projects!</header>
            <div className="card-body">
                <div className="feature-list">
                    <div className="card feature-card">
                        <header className="card-header">Marvel Movie Database</header>
                        <div className="card-body">
                            <div className='containter'>
                                <img className='portfolio-img' src="/mcu.png"></img>
                                <p>This app allows users to see information about the Marvel Movies, store their favorite movies in a list and watch trailers!</p>
                                <a className="btn btn-primary" href="https://github.com/Teacher2Coder/project-1">Check out the Repo!</a>
                            </div>
                        </div>
                    </div>
                    <div className="card feature-card">
                        <header className="card-header">DMs & DMs</header>
                        <div className="card-body">
                            <div className='container'>
                                <img className='portfolio-img' src="/dms.png"></img>
                                <p>This app allows users to create and share ideas for characters, stories, rules and quests with other Dungeon Masters around the world!</p>
                                <a className="btn btn-primary" href="https://github.com/Teacher2Coder/dms-and-dms">Check out the Repo!</a>
                            </div>
                        </div>
                    </div>
                    <div className="card feature-card">
                        <header className="card-header">CMS-Style Blog</header>
                        <div className="card-body">
                            <div className='container'>
                                <img className='portfolio-img' src="/cms-blog.png"></img>
                                <p>This application allows users to create, edit and delte their own blog posts while also reading other blog posts written by other users!</p>
                                <a className="btn btn-primary" href="https://github.com/Teacher2Coder/cms-blog">Check out the Repo!</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}