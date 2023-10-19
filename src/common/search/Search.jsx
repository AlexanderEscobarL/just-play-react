import { useState, useEffect } from "react"
import { LocationsDropdown } from "../../locations/LocationsDropdown"
import gameDataManager from "../../services/gameDataManager"
import gameService from "../../services/gameService"

const location = 'Search by Locations'

export const Search = ({ onResults }) => {

    const [selectedLocation, setSelectedLocation] = useState({})

    const getAllData = () => {
        gameDataManager.getAllData(onResults)
    }

    const getGameByLocation = () => {
        gameDataManager.getGameByLocation(onResults, selectedLocation)
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