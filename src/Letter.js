import Date from './Date'

function Letter(props) {

    

    return(
        <div>
            <p>
            Hello!
            {/* {Date} */}
            Dear Hiring Manager for {props.companyName}
            I know your company values {props.value1}, {props.value2}, {props.value3}.
            I think I can bring a lot to the table  based on my {props.experience}.

            I also {props.funFact}!

            Hire Me!

            Sincerely,
            {props.name}
            </p>
        </div>
    )

}

export default Letter