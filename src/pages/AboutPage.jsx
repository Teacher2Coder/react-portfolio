import { useOutletContext } from 'react-router-dom';

export default function AboutPage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('About');

    setCurrentPage('About');

    document.title = 'Ethan Owens - ' + currentPage;

    return (
        <div className="card" id="about-card">
            <header className="card-header" id="about-header">All about me!!!</header>
            <div className="card-body about-content">
                <img className="professional" src='./professional.JPG'></img>
                <p>
                    Hello! My name is Ethan and I am a public school educator who is
                    learning how to code! I have worked in public education for the
                    past five years and decided that I needed to make a career change.
                    I have always had an interest in programming and information technology
                    but I never sought to make a career out of that interest until now, and
                    now that I am, I am loving every minute of it!
                </p>
            </div>
            <footer className="card-footer" id="about-footer">Thank you for visiting my portfolio!</footer>
        </div>
    )
}