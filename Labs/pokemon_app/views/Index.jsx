const React = require("react");

const myStyle = {
    color: 'red',
    backgroundColor: '#000000',
}


class Index extends React.Component {
    render(){
        const { pokemons } = this.props;

        return(
            <div style={myStyle}>
                <h1>Pokedex Entries</h1>
                
                <ul>
                    {pokemons?.map((pokemon, i) =>{
                        return(
                            <li>
                                <a href={`../models/pokemon/${i}`}><h2>{pokemon[i].name}</h2></a>
                                <br></br>
                                <img>{pokemon[i].img}</img>
                                
                            </li>
                            );
                        })}
                        </ul>
                
            </div>
        )
    }
}

module.exports = Index

