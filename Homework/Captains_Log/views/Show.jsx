const React = require("react");
const DefaultLayout = require("./layouts/default");

class Show extends React.Component {
  render() {
    const {logs} = this.props;
    console.log(logs)

    return (
      <div>
        <DefaultLayout title = {"Log data"}>
          <ul>
            {logs.map((log, i) => {
              return(
                <li key={i}>
                  <h3>{log.title}</h3>
                  <br />
                  <p>{log.entry}</p>
                  <br />
                  <p>{log.shipIsBroken ? 'Ship fully operational' : 'Ship in need of repair'}</p>
                  <br />
                  
                </li>
              )
            })}
          </ul>
        </DefaultLayout>
      </div>
    )
  }
}

module.exports = Show