const React = require('react')

const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const {students} = this.props;
        console.log(students);

        return (
            <DefaultLayout title = {"StudentDashboard"}>

                <ul>{students.map((student, i) => {
                    return (
                        <li key={i}>
                            {/* eachStudent */}

                            <a href={`/students/${student.id}`}> {student.name}</a> has a GPA of {student.gpa} <br />

                            {student.isPassing ? "And is Eligible to Graduate" : "And is NOT Eligible to Graduate"}

                        {/* =========EDIT */}
                        <a href={`students/${student._id}/edit`}> <button>Edit Student</button></a>

                        {/* ========DELETE */}
                        <form action={`/students/${student._id}?_method=DELETE`} method="POST">

                        <input type="submit" value="DELETE" />
                            
                        </form>

                        </li>
                    )

                })}
                </ul>


            </DefaultLayout>

        )
    }
}

module.exports = Index