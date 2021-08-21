import { useState, setState } from 'react'
import Letter from './Letter'
import Test from './Test'
import './Form.css'
import TheDate from './Date'

function Form() {

    const [acknowledged, setAcknowledged] = useState(false)

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [position, setPosition] = useState('')
    const [personalSkill1, setPersonalSkill1] = useState('')
    const [personalSkill2, setPersonalSkill2] = useState('')
    const [companyValue1, setCompanyValue1] = useState('')
    const [aboutValue1, setAboutValue1] = useState('')
    const [aboutValue2, setAboutValue2] = useState('')
    const [aboutValue3, setAboutValue3] = useState('')
    const [companyValue2, setCompanyValue2] = useState('')
    const [companyValue3, setCompanyValue3] = useState('')
    const [funFact, setFunFact] = useState('')
    const [relevantExperience, setRelevantExperience] = useState('')
    const [relevantWork, setRelevantWork] = useState('')
    const [recentProject, setRecentProject] = useState('')

    function handleSubmit(e) {
        console.log('submit')
        e.preventDefault();
        return (
            <div>
                <Letter name={companyName} value1={companyValue1} value2={companyValue2} value3={companyValue3} fact={funFact} experience={relevantExperience} />
            </div>
        )
    }

    function jokeIntro(e) {
        e.preventDefault()
        setAcknowledged(true)
        let display = document.getElementById('show')
        display.classList.remove('hidden')
        let button = document.getElementById('button-intro')
        button.classList.add('hidden')
    }

    function renderForm() {
        return (
            <div className='form-stuff'>
                <h2>Your Name:</h2>
                <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
<div className='table-title'>
                <h2>About The Company:</h2>
                <h2>About You:</h2>
                </div>
<div className='table'>
                <div className='about-company'>

                    <label className='company-info'>Company Name:</label>
                    <input type='text' value={companyName} onChange={e => setCompanyName(e.target.value)}></input>

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
                </div>
                </div>
            </div>

        )
    }

    function renderLetter() {
        return (
            <div class='letter'>
                <p><TheDate /></p>

                <h2>Dear Hiring Manager</h2>

                <p>
                    I'm excited for the opportunity to apply for a {position} at {companyName}. I recently graduated from Flatiron School's Software Engineering Program in July and think I could bring great {personalSkill1} and {personalSkill2} {companyName}'s development team. During my time at Flatiron, I {funFact}. It was there I also learned my passion for {companyValue1} by {aboutValue1}.
                </p>
                <p>{companyName} is revolutionizing the industry, but I especially love {recentProject}. My {companyValue2} would be a great assesst to a similiar project because {aboutValue2}. Using my {relevantExperience} at {relevantWork}, I understand the value of {companyValue3}. There, I {aboutValue3}.</p>

                <p>Thank you for your time and consideration. I believe my positivity and personality would be an excellent addition to your development team. I’m incredibly interested in the position and would love to talk more soon. I’m looking forward to the opportunity to share my potential.</p>

                <h3>Hire Me!</h3>

                <p>Sincerely,</p>
                {name}
            </div>
        )
    }



    return (
        <div className='form'>

            <div id='button-intro'>
                <h1>This site is for entertainment purposes only</h1>
                <button onClick={jokeIntro}>I gotcha</button>
            </div>

            <div id='show' className='hidden'>
                <form>
                    {renderForm()}
                    {renderLetter()}

                </form>
            </div>
        </div>
    )
}

export default Form