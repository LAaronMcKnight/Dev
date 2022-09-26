const React = require('react')

class EditStar extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Stars</h1>
                    
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">
                    <form action={`/stars/${this.props.star._id}?_method=PUT`} method="POST">
                        Name:  <input defaultValue={this.props.star.name} type="text" name="name" required />
                        <br />
                        Orbiting Planets: <input type="text" defaultValue={this.props.star.numOfPlanets} name="numOfPlanets" required />
                        <br />
                        Classification: <select defaultValue={this.props.star.class} name="class">
                        <option value="Blue Star">Blue Star</option>
                            <option value="Red Dwarf">Red Dwarf</option>
                            <option value="Yellow Dwarf">Yellow Dwarf</option>
                            <option value="Orange Dwarf">Orange Dwarf</option>
                            <option value="Blue Giant">Blue Giant</option>
                            <option value="Red Giant">Red Giant</option>
                            <option value="Red Super Giant">Red Super Giant</option>
                            <option value="Blue Super Giant">Blue Super Giant</option>
                            <option value="White Dwarf">White Dwarf</option>
                            <option value="Neutron Stars">Neutron Stars</option>
                            <option value="Black Dwarf">Black Dwarf</option>
                        </select>
                        <br />
                        Description: <input type="textarea" defaultValue={this.props.star.description} name="description" required />
                        <br />
                        <input type="submit" value="Submit Star"></input>
                    </form>
                    </div>
                    <div className="bodyExtra">

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = EditStar