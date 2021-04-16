import axios from 'axios';
import { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/ui/Loading';
// import './style.css';

export default class LeaguesPage extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: [],
            clubs: [],
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
        const clubsReq = await axios.get(`${process.env.REACT_APP_API_URL}/league/${id}`);

        if (reqTop.status === 200) {
            const { data } = reqTop.data
            this.setState({
                data
            })
        }

        if (clubsReq.status === 200) {
            const { data } = clubsReq.data
            this.setState({
                clubs: data,
                loading: false,
            })
        }
    }

    render() {
        const { data, clubs } = this.state;

        return (
            (this.state.loading
                ? <Loading />
                : <div className="d-flex flex-row HomePage">
                    <SearchBar currentData={data}/>

                    <div className="leagueList container">
                        {clubs.length > 0 &&
                            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
                                {
                                    clubs.map((item, index) => (
                                        <div
                                            key={index}
                                            className="badgeList d-flex flex-column align-items-center justify-content-center m-3 p-2"
                                            onClick={() => { window.location.href = `/club/${item.club_id}` }}
                                        >
                                            <div className="countryFlag d-flex flex-row">
                                                <p className="mt-n1 pl-1">{item.country}</p>
                                            </div>
                                            <img src={item.club_badge} alt={item.club}/>

                                            <p className="m-0 p-0 text-center">{item.club}</p>
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