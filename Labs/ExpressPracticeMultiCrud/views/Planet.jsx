const React = require('react')


class PlanetPage extends React.Component {
    render() {
        const {planet} = this.props
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Planets</h1>
                    </div>
                    <div className="planets">
                    <a href={`/planets/${planet.id}`}> <h2>{planet.name}</h2></a>
                                        <br />
                                        Moons: {planet.numOfMoons}
                                        <br />
                                        Rings: {planet.hasRings ? "True" : "False"}
                                        <br />
                                        Class: {planet.class}
                                        <br />
                                        Description: {planet.description}
                                        <br />
                        <a href="http://localhost:3000/planets/"><button>All Planets</button></a>
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">

                    </div>
                    <div className="bodyExtra">

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = PlanetPage