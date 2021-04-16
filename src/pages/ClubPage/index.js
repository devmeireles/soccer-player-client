import axios from 'axios';
import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/ui/Loading';
// import './style.css';

export default class ClubPage extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: [],
            players: [],
            loading: true,
            id: null,
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const id = this.props.match.params.id;
        this.setState({ loading: true })
        const reqTop = await axios.get(`${process.env.REACT_APP_API_URL}/player/top`);
        const clubsReq = await axios.get(`${process.env.REACT_APP_API_URL}/club/${id}`);

        if (reqTop.status === 200) {
            const { data } = reqTop.data
            this.setState({
                data
            })
        }

        if (clubsReq.status === 200) {
            const { data } = clubsReq.data
            this.setState({
                players: data,
                loading: false,
            })
        }
    }

    render() {
        const { data, players } = this.state;

        return (
            (this.state.loading
                ? <Loading />
                : <div className="d-flex flex-row HomePage">
                    <SearchBar currentData={data}/>

                    <div className="leagueList container">
                        {players.length > 0 &&
                            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
                                {
                                    players.map((item, index) => (
                                        <div
                                            key={index}
                                            className="badgeList d-flex flex-column align-items-center justify-content-center m-3 p-2"
                                            onClick={() => { window.location.href = `/player/${item.id}` }}
                                        >
                                            <img src={item.profile_image} alt={item.name}/>

                                            <p className="m-0 p-0 text-center">{item.name}</p>
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