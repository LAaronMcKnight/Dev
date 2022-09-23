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
            Ship fully functional?<input type="checkbox" name="shipIsBroken" />
            <br />
            <input type="submit" name="submitBtn" value="Submit Log" />
          </form>
          <br />
          <br />
          <a href="http://localhost:4000/"><button>Back</button></a>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;