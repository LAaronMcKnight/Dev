const React = require("react");
const DefaultLayout = require("./layouts/Default");

const newStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  border: 'dashed black',
  margin: '10px',
}

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Captain's Log"}>
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" required />
            <br />
            Entry: 
            <input type="textarea" name="entry" required/>
            <br />
            Ship fully functional?<input type="checkbox" name="shipIsBroken" />
            <br />
            <input type="submit" name="submitBtn" value="Submit Log" />
          </form>
          <br />
          <br />
        </div>
          <a href="http://localhost:4000/"><button>Back</button></a>
      </DefaultLayout>
    );
  }
}

module.exports = New;