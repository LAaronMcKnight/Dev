const React = require('react')

const myStyle = {
    color: 'red',
    backgroundColor: '#000000',
    margin: '0',
    border: '0',
    padding: '0',
}

// const thisPage = window.location.href
{/* <a href={}><button>Next</button></a> */}

class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <div style={myStyle} key="dex">
                <h1>Gotta Catch Em All!</h1>
                <ul>
                    <li>
                        <h2>{pokemon.name}</h2>
                        <br></br>
                        <img src={pokemon.img + ".jpg"}></img>
                    </li>
                </ul>
                <a href="http://localhost:3000/pokemon/"><button>Back</button></a>
                <br></br>
                <form action="/pokemon" method="POST">
                    <input type="submit" value="Delete" />
                </form>
            </div>
        )
    }
}

module.exports = Show

// class Show extends React.Component {
//     render(){
//         const pokemon = this.props.pokemon;

//         return(
//             <div style={myStyle}>
//                 <h1>Gotta Catch Em All</h1>
                
                
//                     {pokemon.map((pokemon, i) =>{
//                         return(
//                             <ul>
//                             <li key={i}><a href={`/../models/pokemon/${i}`}><h2>{pokemon.name}</h2></a>
//                                 <br></br>
                                
//                                 <img src={pokemon.img + '.jpg'}></img></li>
                                
                            
//                         </ul>
//                             );
//                         })}
//                         <a href="localhost:3000/pokemon"><p>back</p></a>
                
//             </div>
//         )
//     }
// }