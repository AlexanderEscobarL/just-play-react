import { useEffect, useState } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Col,
    Input
} from 'reactstrap'
import { LocationsDropdown } from '../locations/LocationsDropdown'
import gameService from '../services/gameService'
import { TeamsDropdown } from '../teams/TeamsDropdown'

const location = 'Select a Location'
const localTeam = 'Select a Visitor Team'
const visitorTeam = 'Select a Local Team'

export const CreateGameModal = ({ modal, toggle }) => {

    const [selectedLocation, setSelectedLocation] = useState({})
    const [selectedLocalTeam, setSelectedLocalTeam] = useState({})
    const [selectedVisitorTeam, setSelectedVisitorTeam] = useState({})
    const [date, setDate] = useState({})
    const [time, setTime] = useState({})
    const [game, setGame] = useState({})

    const handleSelectedLocation = (selectedItem) => {
        setSelectedLocation(selectedItem)
    }
    const handleSelectedLocalTeam = (selectedItem) => {
        setSelectedLocalTeam(selectedItem)
    }
    const handleSelectedVisitorTeam = (selectedItem) => {
        setSelectedVisitorTeam(selectedItem)
    }
    const handleSelectedDate = ({target}) => {
        const { value } = target
        setDate(value)
    }
    const handleSelectedTime = ({target}) => {
        const { value } = target
        setTime(value)
    }

    useEffect(() => {
        if (game.dateAndTime) {
            saveGame();
        }
    }, [game])

    const handleSave = () => {
        const newGame = {
            dateAndTime: `${date}T${time}:00Z`,
            localTeam: selectedLocalTeam,
            visitorTeam: selectedVisitorTeam,
            location: selectedLocation
        }
        setGame(newGame)
    }

    const saveGame = () => {
        gameService.post(game)
            .then(({data}) => alert(data))
            .catch(e => alert(e.message))
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Game</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label
                                sm={2}
                            >
                                Location
                            </Label>
                            <Col sm={10}>
                                <LocationsDropdown onItemSelected={handleSelectedLocation} label={location} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                sm={2}
                            >
                                Local
                            </Label>
                            <Col sm={10}>
                                <TeamsDropdown onItemSelected={handleSelectedLocalTeam} label={localTeam} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                sm={2}
                            >
                                Visitor
                            </Label>
                            <Col sm={10}>
                                <TeamsDropdown onItemSelected={handleSelectedVisitorTeam} label={visitorTeam} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">
                                Date
                            </Label>
                            <Input
                                id="date"
                                name="date"
                                placeholder="date placeholder"
                                type="date"
                                onChange={handleSelectedDate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="time">
                                Time
                            </Label>
                            <Input
                                id="time"
                                name="time"
                                placeholder="time placeholder"
                                type="time"
                                onChange={handleSelectedTime}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        Save Game
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}