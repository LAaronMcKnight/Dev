const React = require("react");

class Star extends React.Component {
  render() {
    const { stars } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Stars</h1>
            <a href="http://localhost:3000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="stars">
          {stars.map((star, i) => {
            return (
              <div id="starMap" key={i}>
                <a href={`/stars/${star.id}`}>
                  <h2>{star.name}</h2>
                </a>
                Orbiting Planets: {star.numOfPlanets}
                <br />
                Class: {star.class}
                <br />
                Description: {star.description}
                <br />
                <div id="starBtns">
                  <a href={`http://localhost:3000/stars/${star.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/stars/${star.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:3000/stars/new">
            <button>New Star</button>
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

module.exports = Star;