const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div key="form">
                <h1>Add a Pokemon!</h1>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name" />
                    <br />
                    Image: <input type="file" name="image" />
                    <br />
                    <input type="submit" name="submit" value="Create Pokemon" />
                </form>
            </div>
        )
    }
}

module.exports = New