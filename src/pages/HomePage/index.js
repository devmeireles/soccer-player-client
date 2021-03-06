import axios from 'axios';
import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/ui/Loading';
import './style.css';

export default class HomePage extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: [],
            configs: {},
            leagues: [],
            loading: true,
            id: null,
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        this.setState({ loading: true })
        const reqTop = await axios.get(`${process.env.REACT_APP_API_URL}/player/top`);
        const configsReq = await axios.get(`${process.env.REACT_APP_API_URL}/config`);
        const leaguesReq = await axios.get(`${process.env.REACT_APP_API_URL}/leagues`);

        if (reqTop.status === 200) {
            const { data } = reqTop.data
            this.setState({
                data
            })
        }

        if (leaguesReq.status === 200) {
            const { data } = leaguesReq.data
            this.setState({
                leagues: data
            })
        }

        if (configsReq.status === 200) {
            const { data } = configsReq.data;
            this.setState({
                configs: data[0],
                loading: false,
            })
        }
    }

    render() {
        const { data, configs, leagues } = this.state;

        return (
            (this.state.loading
                ? <Loading />
                : <div className="d-flex flex-row HomePage">
                    <SearchBar currentData={data} />

                    <div className="leagueList container">
                        {configs.players &&
                            <h1 className="text-center">We've already crawled <strong>{configs.players} players</strong> from <strong>{configs.clubs} clubs</strong> of <strong>{configs.leagues} leagues </strong></h1>
                        }
                        {leagues.length > 0 &&
                            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
                                {
                                    leagues.map((item, index) => (
                                        <div
                                            key={index}
                                            className="badgeList d-flex flex-column align-items-center justify-content-center m-3 p-2"
                                            onClick={() => { window.location.href = `league/${item.league_id}` }}
                                        >
                                            <div className="countryFlag d-flex flex-row">
                                                <img src={item.country_flag} alt={item.country} />
                                                <p className="mt-n1 pl-1">{item.country}</p>
                                            </div>
                                            <img src={item.league_badge} alt={item.league} />

                                            <p className="m-0 p-0 text-center">{item.league}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            )
        )
    }
}