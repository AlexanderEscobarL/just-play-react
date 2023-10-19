import { useState } from "react";
import { Button } from "reactstrap"
import gameDataManager from "../services/gameDataManager";
import { CreateGameModal } from "./CreateGameModal";

export const CreateGameButton = ({ onResults }) => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal);
    const handleSuccess = (value) => {
        if (value) {
            gameDataManager.getAllData(onResults)
        }
    }

    return (
        <>
            <Button
                onClick={toggle}
                color="success"
                size="md"
            >
                Create new game
            </Button>
            <CreateGameModal modal={modal} toggle={toggle} success={handleSuccess} />
        </>
    )
}