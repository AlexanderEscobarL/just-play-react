import { useState } from "react";
import { Button } from "reactstrap"
import { CreateGameModal } from "./CreateGameModal";

export const CreateGameButton = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button
                onClick={toggle}
                color="success"
                size="md"
            >
                Create new game
            </Button>
            <CreateGameModal modal={modal} toggle={toggle} />
        </>
    )
}