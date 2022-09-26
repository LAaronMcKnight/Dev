const React = require('react')

class NewPlanet extends React.Component {
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
                    <form action="/planets" method="POST">
                        Planet Name:  <input type="text" name="name" required />
                        <br />
                        # of Moons: <input type="text" name="numOfMoons" required />
                        <br />
                        Has Rings?: <input type="checkbox" name="hasRings" />
                        <br />
                        Classification: <select name="class">
                            <option value="Terrestrial">Terrestrial</option>
                            <option value="Gas Giant">Gas Giant</option>
                            <option value="Ice Giant">Ice Giant</option>
                            <option value="Dwarf Planet">Dwarf</option>
                        </select>
                        <br />
                        Description: <input type="textarea" name="description" required />
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

module.exports = NewPlanet