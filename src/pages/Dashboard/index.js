import axios from 'axios';
import { Component } from 'react';
import Dashboard from '../../components/Dashboard';
import Loading from '../../components/ui/Loading';

export default class DashboardPage extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: [],
            loading: true,
            id: null,
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const playerID = this.props.match.params.id;
        this.setState({ loading: true })
        const req = await axios.get(`${process.env.REACT_APP_API_URL}${playerID}`);

        if (req.status === 200) {
            const { data } = req.data
            this.setState({
                loading: false,
                data
            })
        }
    }

    render() {
        const { data } = this.state;
        const playerBio = data.player_bio;
        const currentClub = data.current_club;
        const statsbyClub = data.stats_by_club;
        const statsBySeason = data.stats_by_season;
        const statsByLeague = data.stats_by_league;
        const playedClubs = data.played_clubs;

        return (
            (this.state.loading
                ? <Loading />
                : <Dashboard
                    playerBio={playerBio}
                    currentClub={currentClub}
                    statsbyClub={statsbyClub}
                    statsBySeason={statsBySeason}
                    statsByLeague={statsByLeague}
                    playedClubs={playedClubs}
                />
            )
        )
    }
}