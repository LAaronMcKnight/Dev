const React = require("react");

class Planets extends React.Component {
  render() {
    const { planets } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Planets</h1>
            <a href="http://localhost:3000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="planets">
          {planets.map((planet, i) => {
            return (
              <div id="planetMap" key={i}>
                <a href={`/planets/${planet.id}`}>
                  <h2>{planet.name}</h2>
                </a>
                Moons: {planet.numOfMoons}
                <br />
                Rings: {planet.hasRings ? "True" : "False"}
                <br />
                Class: {planet.class}
                <br />
                Description: {planet.description}
                <br />
                <div id="planetBtns">
                  <a href={`http://localhost:3000/planets/${planet.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/planets/${planet.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:3000/planets/new">
            <button>New Planet</button>
          </a>
        </div>
        <div className="body">
          <div className="bodyMain"></div>
          <div className="bodyExtra"></div>
        </div>
      </div>
    );
  }
}

module.exports = Planets;
