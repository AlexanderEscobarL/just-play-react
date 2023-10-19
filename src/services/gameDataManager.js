
import gameService from "./gameService"

const getAllData = (onResults) => {
    gameService
        .get()
        .then(({ data }) => onResults(data))
        .catch(error => {
            console.log(error)
        })
}

const getGameByLocation = (onResults, selectedLocation) => {
    if (selectedLocation.id) {
        gameService
            .getByLocationId(selectedLocation.id)
            .then(({ data }) => onResults(data))
            .catch(error => {
                console.log(error)
            })

    }
}

const save = (toggle, success, game) => {
    if(game.dateAndTime && game.localTeam?.id > 0 && game.visitorTeam?.id > 0 && game.location?.id > 0){
        gameService.post(game)
        .then(({ data }) => {
            alert('Saved Successfully, ID: ', data.id)
            toggle()
            success(true)
        })
        .catch(e => {
            alert(e.message)
            success(false)
        })
    }
}

export default {
    getAllData,
    getGameByLocation,
    save,
}