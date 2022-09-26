const React = require('react');
const DefaultLayout = require("./layouts/Default");


// const homeStyle = {
//     border: '0',
//     margin: '0',
//     padding: '0',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'goldenrod'
// }

class Index extends React.Component {
    render() {
        return (
            <div key="home">
                
                <div class="homeDiv">
                    
            <DefaultLayout title = {"Captain's Log"}>
                <br />
                    <h2>Welcome to the Captain's Log Terminal</h2>
                    <br />
                    <a href="http://localhost:4000/new"><button>New Log</button></a>
                    <br />
                    <a href="http://localhost:4000/logs"><button>View Logs</button></a>
            </DefaultLayout>
                </div>
            </div>
        )
    }
}
module.exports = Index