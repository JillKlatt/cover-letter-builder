import { useState, setState } from 'react'
import Letter from './Letter'
import Test from './Test'
import './Form.css'

function Form() {

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyValue1, setCompanyValue1] = useState('')
    const [aboutValue1, setAboutValue1] = useState('')
    const [aboutValue2, setAboutValue2] = useState('')
    const [aboutValue3, setAboutValue3] = useState('')
    const [companyValue2, setCompanyValue2] = useState('')
    const [companyValue3, setCompanyValue3] = useState('')
    const [funFact, setFunFact] = useState('')
    const [relevantExperience, setRelevantExperience] = useState('')
    const [relevantWork, setRelevantWork] = useState('')

    function handleSubmit(e) {
        console.log('submit')
        e.preventDefault();
        return (
            <div>
                <Letter name={companyName} value1={companyValue1} value2={companyValue2} value3={companyValue3} fact={funFact} experience={relevantExperience} />
            </div>
        )
    }

    return (
        <div>
            <form>

                <label>Your Name:</label>
                <input type='text' value={name} onChange={e => setName(e.target.value)}></input>

                <label>Company Name:</label>
                <input type='text' value={companyName} onChange={e => setCompanyName(e.target.value)}></input>
                <br />
                <label>Company Value:</label>
                <input type='text' value={companyValue1} onChange={e => setCompanyValue1(e.target.value)}></input>

                <label>Personal Experience With This Value:</label>
                <input type='text' value={aboutValue1} onChange={e => setAboutValue1(e.target.value)}></input>
                <br />
                <label>Company Value:</label>
                <input type='text' value={companyValue2} onChange={e => setCompanyValue2(e.target.value)}></input>

                <label>Personal Experience With This Value:</label>
                <input type='text' value={aboutValue2} onChange={e => setAboutValue2(e.target.value)}></input>
                <br />
                <label>Company Value:</label>
                <input type='text' value={companyValue3} onChange={e => setCompanyValue3(e.target.value)}></input>

                <label>Personal Experience With This Value:</label>
                <input type='text' value={aboutValue3} onChange={e => setAboutValue3(e.target.value)}></input>
                <br />
                <label>Fun Fact:</label>
                <input type='text' value={funFact} onChange={e => setFunFact(e.target.value)}></input>
                <br />
                <label>Relevant Experience:</label>
                <input type='text' value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)}></input>

                <label>Relevant Company:</label>
                <input type='text' value={relevantWork} onChange={e => setRelevantWork(e.target.value)}></input>

                {/* <input type='submit' onClick={handleSubmit} value='Generate!' /> */}

            </form>
            <div class='letter'>         
           <p>
            {/* {Date} */}
            <h2>Dear Hiring Manager for {companyName}</h2>
            <p>I know your company values {companyValue1}, {companyValue2}, {companyValue3}.</p>
            <p>I think I can bring a lot to the table  based on my {relevantExperience}.</p>

            <p>I also {funFact}!</p>

            Hire Me!

            Sincerely,
            {name}
            </p>
            </div>
        </div>
    )
}

export default Form