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
            loading: true,
            id: null,
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        this.setState({ loading: true })
        const req = await axios.get(`${process.env.REACT_APP_API_URL}/top`);
        const configsReq = await axios.get(`${process.env.REACT_APP_API_URL}/config`);

        if (req.status === 200) {
            const { data } = req.data
            this.setState({
                data
            })
        }

        if (configsReq.status === 200) {
            const { data } = configsReq.data;
            console.log(data[0])
            this.setState({
                configs: data[0],
                loading: false,
            })
        }
    }

    render() {
        const { data, configs } = this.state;

        return (
            (this.state.loading
                ? <Loading />
                : <div className="d-flex flex-row HomePage">
                    <SearchBar currentData={data}/>

                    <div className="d-flex flex-row align-items-center justify-content-center my-auto w-100 h-100">
                        {configs.players &&
                            <h1 className="text-center">We already crawled <strong>{configs.players} players</strong> from <strong>{configs.clubs} clubs</strong> of <strong>{configs.leagues} leagues </strong></h1>
                        }
                    </div>
                </div>
            )
        )
    }
}