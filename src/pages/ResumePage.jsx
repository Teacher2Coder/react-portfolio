import { useOutletContext } from 'react-router-dom';

export default function ResumePage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Resume');

    setCurrentPage('Resume');
    
    document.title = 'Ethan Owens - ' + currentPage;

    return (
        <div className='card' id="resume-card">
            <header className='card-header'>My Resume</header>
            <div className='card-body'>
                <a href="E.Owens_Resume.docx" className='btn btn-primary' id="download" download>Click here to download a copy of my resume!</a>
                <div className='card resume-cards'>
                    <header className='card-header'>Profile</header>
                    <div className='card-body'>
                        <p>
                        Highly energetic facilitator who strives to meet the needs of all students so they can grow to their fullest potential. 
                        Hard working, passionate, educator who focuses on building positive, constructive relationships with students and faculty. 
                        Proficient in organizing and assessing students’ objectives to properly implement assigned curriculum. 
                        Excels at prioritizing tasks and finding creative ways to challenge students and athletes. Well acclimated in balancing academic responsibilities with athletic commitments. 
                        Strong interprofessional collaboration and communication skills.
                        </p>
                    </div>
                </div>
                <div className='card resume-cards'>
                    <header className='card-header'>Skills and Competencies</header>
                    <div className='card-body'>
                        <ul className="resume-list">
                            <li>Effective Communication</li>
                            <li>Creating a healthy learning atmosphere</li>
                            <li>Proactively carrying out assigned duties</li>
                            <li>Uploading and maintaining Hudl profiles</li>
                            <li>Designing and implementing SAC Programs</li>
                            <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
                            <li>Google Applications (Docs, Sheets, Slides, App Scripts)</li>
                        </ul>
                    </div>
                </div>
                <div className='card resume-cards'>
                    <header className='card-header'>Relevant Work Experience</header>
                    <div className='card-body'>
                        <div className='card job-card'>
                            <header className='card-header'>Austin ISD - James Bowie High School</header>
                            <div className='card-body'>
                                <p className='job-title'>Social Studies Teacher / Coach</p>
                                <p>June 2022 - Present</p>
                                <p>
                                    Teacher responsibilities included teaching Academic Government at the senior level and Street Law at the Junior and Senior level, creating curriculum and activities for Street Law, 
                                    and participating in Student ARD meetings. Coaching responsibilities included coaching running backs and sub-varsity offensive play calling, and assistant track coach specializing in hurdles. 
                                    Produced weekly self assessment data during the football season and actively participated in all Strength and Conditioning activities across all male sports and assisting with laundry duties.
                                </p>
                                <h5>Responsibilities / expoerience includes:</h5>
                                <ul className='resume-list'>
                                    <li>Sub-varsity play calling</li>
                                    <li>Managing Team Hudl Profiles</li>
                                    <li>Coordination between teachers & coaches</li>
                                    <li>Designing and implementing SAC programs</li>
                                    <li>Academic planning and coordination in PLCs</li>
                                    <li>Hands on work with freshman students and athletes</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card job-card'>
                            <header className='card-header'>Hays Consolidated ISD - Lehman High School</header>
                            <div className='card-body'>
                                <p className='job-title'>Social Studies Teacher / Coach</p>
                                <p>June 2020 - May 2022</p>
                                <p>
                                    Teacher responsibilities included teaching World Geography in the freshman level, creating and monitoring credit recovery activities, and actively participating in PLC activities. 
                                    Coaching responsibilities included coaching wide receivers and sub-varsity offensive play calling, assistant powerlifting coach, and assistant track coach specializing in hurdles and high jump. 
                                    Produced highlights weekly and periodically for athletes and participated in community outreach, actively participating in all Strength and Conditioning activities across all male sports and assisting with laundry duties.
                                </p>
                                <h5>Responsibilities / expoerience includes:</h5>
                                <ul className='resume-list'>
                                    <li>Sub-varsity play calling</li>
                                    <li>Managing Team Hudl Profiles</li>
                                    <li>Coordination between teachers & coaches</li>
                                    <li>Designing and implementing SAC programs</li>
                                    <li>Academic planning and coordination in PLCs</li>
                                    <li>Hands on work with freshman students and athletes</li>
                                </ul>
                            </div>
                        </div>
                        <div className='card job-card'>
                            <header className='card-header'>University of Mary Hardin Baylor - Strength and Conditioning</header>
                            <div className='card-body'>
                                <p className='job-title'>Strength and Conditioning Intern</p>
                                <p>January 2020 - May 2020</p>
                                <p>
                                    Strength and Conditioning Intern responsible for assisting collegiate athletes with both in-season and off-season workouts, cleaning and maintaining the weight room, setting up equipment for workouts. 
                                    Worked with athletes in multiple sports with different goals and workout plans. Coordination and communication between the head strength coach and the interns occur within staff meetings and regular one-on-one meetings with members of the program. 
                                    Internship is to be concluded with a project that includes the creation of a complete and heavily detailed workout plan for a six-week period. Internship expected to be concluded May 2020 with the accumulation of 150 work hours.
                                </p>
                                <h5>Responsibilities / expoerience includes:</h5>
                                <ul className='resume-list'>
                                    <li>Motivating athletes</li>
                                    <li>Facilities management</li>
                                    <li>Setting up / tearing down facilities</li>
                                    <li>Distinguishing the need of various athletes</li>
                                    <li>Implementing protocol for treating injured athletes</li>
                                    <li>Ensuring athletes excecute assigned lifts / workouts safely</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card resume-cards'>
                        <header className='card-header'>Education and Certifications</header>
                        <div className='card-body'>
                            <ul className="resume-list">
                                <li>Bachelor of Science (B.S.) - Exercise Physiology: University of Mary Hardin - Baylor</li>
                                <li>Coding Bootcamp - The University of Texas at Austin (Pending)</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}