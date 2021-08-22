import { useState, setState } from 'react'
import Letter from './Letter'
import Test from './Test'
import './Form.css'
import TheDate from './Date'
import { ExternalLink } from 'react-external-link';

function Form() {

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [position, setPosition] = useState('')
    const [industry, setIndustry] = useState('')
    const [recentProject, setRecentProject] = useState('')
    const [companyValue1, setCompanyValue1] = useState('')
    const [aboutValue1, setAboutValue1] = useState('')
    const [companyValue2, setCompanyValue2] = useState('')
    const [aboutValue2, setAboutValue2] = useState('')
    const [companyValue3, setCompanyValue3] = useState('')
    const [aboutValue3, setAboutValue3] = useState('')

    const [education, setEducation] = useState('')
    const [personalSkill1, setPersonalSkill1] = useState('')
    const [personalSkill2, setPersonalSkill2] = useState('')
    const [funFact, setFunFact] = useState('')
    const [relevantExperience, setRelevantExperience] = useState('')
    const [relevantWork, setRelevantWork] = useState('')
    const [personalAdjective1, setPersonalAdjective1] = useState('')
    const [personalAdjective2, setPersonalAdjective2] = useState('')

    function scrollDown(e) {
        e.preventDefault()
        window.scrollTo({
            top: document.body.scrollHeight,
            bottom: 0,
            behavior: 'smooth'
        });
    }


    function jokeIntro(e) {
        e.preventDefault()
        let display = document.getElementById('show')
        display.classList.remove('hidden')
        let button = document.getElementById('button-intro')
        button.classList.add('hidden')
    }

    function renderForm() {
        return (
            <div className='form-stuff'>
                <div className='header-title'>
                    <h2>Your Name:</h2>
                    <h2>Company Name:</h2>
                    <h2>Industry:</h2>
                </div>

                <div className='header-input'>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <input type='text' value={companyName} onChange={e => setCompanyName(e.target.value)}></input>
                    <input type='text' value={industry} onChange={e => setIndustry(e.target.value)}></input>
                </div>

                <br></br>
                <div className='table-title'>
                    <h2>About The Company:</h2>
                    <h2>About You:</h2>
                </div>
                <div className='table'>
                    <div className='about-company'>

                        <label className='company-info'>Position:</label>
                        <input type='text' value={position} onChange={e => setPosition(e.target.value)}></input>

                        <label>Recent Company Project:</label>
                        <input type='text' value={recentProject} onChange={e => setRecentProject(e.target.value)}></input>

                        <label className='company-info'>Company Value:</label>
                        <input type='text' value={companyValue1} onChange={e => setCompanyValue1(e.target.value)}></input>

                        <label>Personal Experience With {companyValue1}:</label>
                        <input type='text' value={aboutValue1} onChange={e => setAboutValue1(e.target.value)}></input>

                        <label className='company-info'>Company Value:</label>
                        <input type='text' value={companyValue2} onChange={e => setCompanyValue2(e.target.value)}></input>

                        <label >Personal Experience With {companyValue2}:</label>
                        <input type='text' value={aboutValue2} onChange={e => setAboutValue2(e.target.value)}></input>

                        <label className='company-info'>Company Value:</label>
                        <input type='text' value={companyValue3} onChange={e => setCompanyValue3(e.target.value)}></input>

                        <label>Personal Experience With {companyValue3}:</label>
                        <input type='text' value={aboutValue3} onChange={e => setAboutValue3(e.target.value)}></input>

                    </div>

                    <div className='about-you'>

                        <label>School Info:</label>
                        <input type='text' value={education} onChange={e => setEducation(e.target.value)}></input>

                        <label>Personal Skill:</label>
                        <input type='text' value={personalSkill1} onChange={e => setPersonalSkill1(e.target.value)}></input>

                        <label>Personal Skill:</label>
                        <input type='text' value={personalSkill2} onChange={e => setPersonalSkill2(e.target.value)}></input>

                        <label>Fun Fact:</label>
                        <input type='text' value={funFact} onChange={e => setFunFact(e.target.value)}></input>

                        <label>Relevant Experience:</label>
                        <input type='text' value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)}></input>

                        <label>Relevant Company:</label>
                        <input type='text' value={relevantWork} onChange={e => setRelevantWork(e.target.value)}></input>

                        <label>Personal Adjective:</label>
                        <input type='text' value={personalAdjective1} onChange={e => setPersonalAdjective1(e.target.value)}></input>

                        <label>Personal Adjective:</label>
                        <input type='text' value={personalAdjective2} onChange={e => setPersonalAdjective2(e.target.value)}></input>
                    </div>
                </div>
            </div>

        )
    }

    function renderLetter() {
        return (
            <div id='letter' class='letter'>
                <p><TheDate /></p>

                <p>Dear Hiring Manager</p>

                <p>
                    I'm excited for the opportunity to apply for a {position} position at {companyName}. I recently graduated from {education} and think I could bring great {personalSkill1} and {personalSkill2} to {companyName}'s development team. During my time at {education}, I {funFact}. It was there I also learned my passion for {companyValue1} by {aboutValue1}.
                </p>
                <p>{companyName} is revolutionizing the {industry} industry, but I especially love their recent work on {recentProject}. My {companyValue2} would be a great asset to a similiar project because {aboutValue2}. Using my {relevantExperience} at {relevantWork}, I understand the value of {companyValue3}. There, I {aboutValue3}.</p>

                <p>Thank you for your time and consideration. I believe my {personalAdjective1} and {personalAdjective2} would be an excellent addition to your development team. I’m incredibly interested in the position and would love to talk more soon. I’m looking forward to the opportunity to share my potential.</p>

                <h3>Hire Me.</h3>

                <p>Sincerely,</p>
                {name}
            </div>
        )
    }



    return (
        <div className='form'>

            <div id='button-intro'>
                <h1>This site is for entertainment purposes only.</h1>
                <h2>I would never suggest that we should spend as long writing our cover letters as companies do reading them.</h2>
                <button onClick={jokeIntro}>I gotcha</button>
            </div>

            <div id='show' className='hidden'>
                <form>
                    <div className='full-form'>
                        {renderForm()}
                        <button onClick={scrollDown} className='scroll'>Take me there</button>
                    </div>
                    <div className='full-letter'>
                        {renderLetter()}
                    </div>
                </form>

                <div className='footer'>
                    <p>Obviously it'll need some adjusting, but sometimes getting started is the most difficult part</p>
                    <p>Be confident! And remember that cover letters are your chance to brag about how great you are!</p>
                    <p>Also, this project was made for shits and giggz, the code is bad, I've made better stuff:
                        <ExternalLink href='https://jillklatt.github.io/'><span> here</span></ExternalLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form