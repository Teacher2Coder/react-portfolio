import { useOutletContext } from 'react-router-dom';

export default function ResumePage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Resume');

    setCurrentPage('Resume');
    
    return (
        <div className='card' id="resume-card">
            <p>Coming soon!!!</p>
        </div>
    )
}