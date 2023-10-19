
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

export default {
    getAllData,
    getGameByLocation,
}