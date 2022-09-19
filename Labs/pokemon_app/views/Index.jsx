const React = require("react");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Index extends React.Component {
    render(){
        const { pokemon } = this.props;

        return(
            <div style={myStyle}>
                <h1>Pokedex Entries</h1>
                <ul>
                    {pokemon?.map((pokemon, i) =>{
                        return(
                            <li>
                                <a href={`/models/pokemon/${i}`}>{pokemon.name}</a>
                                <br></br>
                                <img>{pokemon.img}</img>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index