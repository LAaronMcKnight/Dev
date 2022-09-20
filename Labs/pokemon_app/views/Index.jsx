const React = require("react");

const myStyle = {
    color: 'red',
    backgroundColor: '#000000',
    margin: '0',
    border: '0',
    padding: '0',
}


class Index extends React.Component {
    render(){
        const { pokemon } = this.props;

        return(
            <div style={myStyle}>
                <h1>Pokedex Entries</h1>
                <br />
                <a href="http://localhost:3000/pokemon/new"><button>Add Pokemon</button></a>
                
                <ul>
                    {pokemon.map((pokemon, i) =>{
                        return(
                            <li key="li">
                                <a href={`http://localhost:3000/pokemon/${i}`}><h2>{pokemon.name}</h2></a>
                                <br></br>
                                <img src={pokemon.img + '.jpg'}></img>
                                
                                
                            </li>
                            );
                        })}
                        </ul>
                
            </div>
        )
    }
}

module.exports = Index

