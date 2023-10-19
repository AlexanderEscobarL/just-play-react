import { useEffect, useState } from "react"
import { JPDropdown } from '../common/JPDropdown'
import teamService from "../services/teamService"


export const TeamsDropdown = ({ onItemSelected, label }) => {

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        teamService
            .get()
            .then(({ data }) => setItemList(data))
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleSelectedTeam = (team) => {
        onItemSelected(team)
    }

    return (
        <>
            <JPDropdown itemList={itemList} label={label} onItemSelected={handleSelectedTeam} />
        </>
    )
}