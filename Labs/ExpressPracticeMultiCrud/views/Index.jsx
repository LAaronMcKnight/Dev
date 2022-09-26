const React = require('react')


class Index extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Celestial Body Log</h1>
                    <br />
                    <p>Log Planets, Moons, Exo-Planets, and more.</p>
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">
                    </div>
                    <div className="bodyExtra">
                    <a href="http://localhost:3000/planets"><button>Planets</button></a>
                    <br />
                    <a href="http://localhost:3000/stars"><button>Stars</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Index