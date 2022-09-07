const radio = {
    stations: [
        station1 = {
            channelName: "102.7 WEBN",
            song1: {
                title: "My Name is Mud",
                artist: "Primus",
            },

            song2: {
                title: "Good Times, Bad Times",
                artist: "Led Zeppelin",
            },

            song3: {
                title: "Chop Suey!",
                artist: "System of a Down",
            }
        },
        station2 = {
            channelName: "101.1 THE WIZZ",
            song1: {
                title: "FRANCHISE",
                artist: "Travis Scott",
            },
            song2: {
                title: "Flashing Lights",
                artist: "Kanye West",
            },
            song3: {
                title: "NEW MAGIC WAND",
                artist: "Tyler, The Creator",
            }

        },
        station3 = {
            channelName: "96.5 ROCK",
            song1: {
                title: "Runnin' On Empty",
                artist: "Jackson Browne",
            },
            song2: {
                title: "You're the Devil in Disguise",
                artist: "Elvis Presley",
            },
            song3: {
                title: "Loser",
                artist: "Beck",
            }
        }
    ]
}

// randomStation = ()=> {
//     let Num = Math.random()*10
//     if (Num > 0 && Num < 3){
//         console.log( `Now Playing: *${radio.stations[0].channelName}* || ${radio.stations[0].song1.artist} - ${radio.stations[0].song1.title}` )
//     }
//     if (Num > 3 && Num < 6){
//         console.log( `Now Playing: *${radio.stations[1].channelName}* || ${radio.stations[1].song1.artist} - ${radio.stations[1].song1.title}` )
//     }
//     if (Num > 6 && Num < 10){
//         console.log( `Now Playing: *${radio.stations[2].channelName}* || ${radio.stations[2].song1.artist} - ${radio.stations[2].song1.title}` )
//     }
// }

randomStation = ()=> {
    let Num = Math.random()*10
    if (Num > 0 && Num < 3){
        console.log( `Now Playing: || ${radio.stations[0].channelName} || `)
        randomSong(0)
    }
    if (Num > 3 && Num < 6){
        console.log( `Now Playing: || ${radio.stations[1].channelName} || `)
        randomSong(1)
    }
    if (Num > 6 && Num < 10){
        console.log( `Now Playing: || ${radio.stations[2].channelName} || `)
        randomSong(2)
    }
}


randomSong = (stationNumber)=> {
    let Num = Math.random()*10
    if (Num > 0 && Num < 3){
        console.log(`${radio.stations[stationNumber].song1.artist} - ${radio.stations[stationNumber].song1.title}`)
    }
    if (Num > 3 && Num < 6){
        console.log(`${radio.stations[stationNumber].song2.artist} - ${radio.stations[stationNumber].song2.title}`)
    }
    if (Num > 6 && Num < 10){
        console.log(`${radio.stations[stationNumber].song3.artist} - ${radio.stations[stationNumber].song3.title}`)
    }
}

randomStation()