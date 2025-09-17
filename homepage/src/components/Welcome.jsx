import Student from './Student.jsx'

function Welcome({ firstName, lastName }) {
    return <h1>
        Welcome to the Homepage! <Student name={firstName + " " + lastName}
            age="20"
        />
    </h1>;
}

export default Welcome