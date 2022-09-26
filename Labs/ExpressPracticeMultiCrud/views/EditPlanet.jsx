const React = require('react')

class EditPlanet extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Planets</h1>
                    
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">
                    <form action={`/planets/${this.props.planet._id}?_method=PUT`} method="POST">
                        Planet Name:  <input defaultValue={this.props.planet.name} type="text" name="name" required />
                        <br />
                        # of Moons: <input type="text" defaultValue={this.props.planet.numOfMoons} name="numOfMoons" required />
                        <br />
                        Has Rings?: {this.props.planet.hasRings ? (
                            <input type="checkbox" name="hasRings" defaultChecked />) : (
                                <input type="checkbox" name="hasRings" />
                            )}
                        <br />
                        Classification: <select defaultValue={this.props.planet.class} name="class">
                            <option value="Terrestrial">Terrestrial</option>
                            <option value="Gas Giant">Gas Giant</option>
                            <option value="Ice Giant">Ice Giant</option>
                            <option value="Dwarf Planet">Dwarf</option>
                        </select>
                        <br />
                        Description: <input type="textarea" defaultValue={this.props.planet.description} name="description" required />
                        <br />
                        <input type="submit" value="Submit Planet"></input>
                    </form>
                    </div>
                    <div className="bodyExtra">

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = EditPlanet