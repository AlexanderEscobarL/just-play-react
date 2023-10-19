import { Table } from 'reactstrap'

export const GamesTable = ({ gameList }) => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="row">
                            #
                        </th>
                        <th>
                            Local team
                        </th>
                        <th>
                            Visitor team
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
                            Date and Time
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {gameList.map((game, i) => {
                        return (
                            <>
                                <tr key={game.id}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td >
                                        {game.localTeam.name}
                                    </td>
                                    <td >
                                        {game.visitorTeam.name}
                                    </td>
                                    <td >
                                        {game.location.name}
                                    </td>
                                    <td >
                                        {game.dateAndTime}
                                    </td>
                                    <td >
                                        {game.status}
                                    </td>
                                    <td >
                                        {'Actions here'}
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )

}