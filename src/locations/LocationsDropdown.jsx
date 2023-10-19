import { useEffect, useState } from "react"
import { JPDropdown } from '../common/JPDropdown'
import locationService from '../services/locationService'


export const LocationsDropdown = ({onItemSelected, label}) => {

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        locationService
            .get()
            .then(({ data }) => setItemList(data))
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleSelectedLocation = (location) => {
        onItemSelected(location)
    }

    return (
        <>
            <JPDropdown itemList={itemList} label={label} onItemSelected={handleSelectedLocation} />
        </>
    )
}