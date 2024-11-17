import { useOutletContext } from 'react-router-dom';

export default function PortfolioPage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Portfolio');

    setCurrentPage('Portfolio');
    
    return (
        <div>
            <div className='card'>
                <header className='card-header portfolio-header'>Check out my projects!</header>
                <div className='card-body project-list'>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>DMs & DMs</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/dms.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>CMS Style Blog</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/cms-blog.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Marvel Movie Database</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/mcu.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>E-Commerce API</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/e-commerce.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>SVG Logo Generator</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/logo-gen.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Social Media API</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/social-media-api.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>README.md Generator</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/questions.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                    <div className='card project'>
                        <header className='card-header portfolio-header'>Weather Tracker</header>
                        <div className='card-body project-info'>
                            <img className='portfolio-img' src="/weather.png"></img>
                            <p>Info about project</p>
                            <button className='btn btn-primary repo-link'>Link to Repo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}