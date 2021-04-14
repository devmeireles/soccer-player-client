import { Component } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/all';
import './style.css';
import Loading from '../ui/Loading';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            keyword: null,
            data: this.props.currentData || [],
            loading: false,
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    async handleKeyword(keyword) {
        if (keyword.length > 2) {
            this.setState({ loading: true })
            const req = await axios.post(`${process.env.REACT_APP_API_URL}/search`, { keyword });

            if (req.status === 200) {
                const { data } = req.data
                this.setState({
                    loading: false,
                    data
                })
            }
        }
    }

    render() {
        const searchResult = this.state.data;
        return (
            <div
                className={`SearchBar mr-auto ${this.state.isHovered ? 'expand' : ''} w-100`}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}>
                <div className="d-flex flex-row">
                    <input
                        type="text"
                        name="keyword"
                        value={this.state.keyword}
                        onChange={(e) => this.handleKeyword(e.target.value)}
                        className={`form-control search-input mr-auto ${this.state.isHovered ? 'show' : 'hide'}`}
                    />
                    <FaSearch size="35" />
                </div>

                {(this.state.loading
                    ? <Loading height="h-25" />
                    :
                    (this.state.isHovered &&
                        <div className="resultBar mt-3 pa-2 d-flex flex-row align-items-start justify-content-start w-100">
                            {(searchResult.length
                                ? searchResult.map((item, index) => (
                                    <div
                                        className="d-flex flex-column searchRow pa-2 mt-3 justify-content-center align-items-center"
                                        key={index}
                                        onClick={() => { window.location.href = item.id }}
                                    >
                                        <div className="playerPhoto">
                                            <img alt={item.name} src={item.profile_image} className="img-fluid" />
                                        </div>
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <div className="playerName">
                                                <p className="pb-0 text-center">{item.name}</p>
                                            </div>
                                            {item.current_club.club &&
                                                <div className="playerClub d-flex flex-row justify-content-center align-items-center">
                                                    <p className="ml-2">{item.current_club.club}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))
                                : <div
                                    className="d-flex flex-row searchRow w-100"
                                >
                                    <p>There is no result for this search</p>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        );
    }
}