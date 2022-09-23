const React = require('react')

const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const {planets} = this.props;
        console.log(planets);

        return (
            <DefaultLayout title = {"Planets!"}>

                <ul>{planets.map((planet, i) => {
                    return (
                        <li key={i}>
                            {/* eachStudent */}

                            <a href={`/planets/${planet.id}`}> {planet.name}</a> has a GPA of {planet.moons} <br />

                            {planet.everVisible ? "This planet is sometimes visible from Earth" : "This planet is <strong>never</strong> visible from earth"}

                        {/* =========EDIT */}
                        <a href={`planets/${planet._id}/edit`}> <button>Edit planet</button></a>

                        {/* ========DELETE */}
                        <form action={`/planets/${planet._id}?_method=DELETE`} method="POST">

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