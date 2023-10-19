import { useState } from "react"
import { Search } from "./common/search/Search"
import { Title } from "./common/Title"
import { CreateGameButton } from "./games/CreateGameButton"
import { GamesTable } from "./games/GamesTable"
import { Row, Col, Container } from "reactstrap"

const appTitle = 'Just Play App'

export const JustPlayApp = () => {

    const [gameList, setGameList] = useState([])

    const handleSearchResults = (items) => {
        setGameList(items)
    }

    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <Title title={appTitle} />
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <Search onResults={handleSearchResults} />
                </Col>
                <Col className="text-center" md={2}>
                    <CreateGameButton/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Title title='List of games' />
                </Col>
            </Row>
            <Row>
                <Col className=" border">
                    <GamesTable
                        gameList={gameList}
                    />
                </Col>
            </Row>

        </Container>
    )
}