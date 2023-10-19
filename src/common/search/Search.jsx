import { useState, useEffect } from "react"
import { LocationsDropdown } from "../../locations/LocationsDropdown"
import gameService from "../../services/gameService"

const location = 'Search by Locations'

export const Search = ({ onResults }) => {

    const [selectedLocation, setSelectedLocation] = useState({})

    const getAllData = () => {
        gameService
            .get()
            .then(({ data }) => onResults(data))
            .catch(error => {
                console.log(error)
            })
    }

    const getGameByLocation = () => {
        if (selectedLocation.id) {
            gameService
                .getByLocationId(selectedLocation.id)
                .then(({ data }) => onResults(data))
                .catch(error => {
                    console.log(error)
                })

        }
    }

    useEffect(() => {
        getAllData();
    }, [])

    useEffect(() => {
        getGameByLocation();
    }, [selectedLocation])

    const handleSelectedItem = (selectedItem) => {
        console.log('llamando a selected location...')
        if (selectedItem.id === 0) {
            getAllData();
        } else {
            setSelectedLocation(selectedItem)
        }
    }

    return (
        <>
            <LocationsDropdown onItemSelected={handleSelectedItem} label={location} />
        </>
    )
}