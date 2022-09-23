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
                  <a href={`http://localhost:4000/logs/${log.id}/edit`}><h3>{log.title}</h3></a>
                  <br />
                  <p>{log.entry}</p>
                  <br />
                  <p>{log.shipIsBroken ? 'Ship fully operational' : 'Ship in need of repair'}</p>
                  <br />
                  <form action={`/logs/${log._id}?_method=DELETE`} method="POST">

                    <input type="submit" value="DELETE" />
                  </form>
                </li>
              )
            })}
          </ul>
          <a href="http://localhost:4000/"><button>Return</button></a>
        </DefaultLayout>
      </div>
    )
  }
}

module.exports = Show