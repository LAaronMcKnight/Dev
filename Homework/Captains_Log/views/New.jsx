const React = require("react");
const DefaultLayout = require("./layouts/Default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Captain's Log"}>
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            <br />
            <input type="textarea" name="entry" />
            <br />
            Ship in need of repairs?<input type="checkbox" name="shipIsBroken" />
            <br />
            <input type="submit" name="submitBtn" value="Submit Log" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;