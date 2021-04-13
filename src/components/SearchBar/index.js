import { Component } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/all';
import './style.css';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false,
            keyword: null,
            data: []
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    async handleKeyword(keyword) {
        const req = await axios.post(`${process.env.REACT_APP_API_URL}/search`, { keyword });

        if (req.status === 200) {
            const { data } = req.data
            this.setState({
                data
            })
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

                <div className="d-flex flex-column align-items-start justify-content-start w-100">
                    {searchResult.length > 0 && searchResult.map((item, index) => (
                        <div
                            className="d-flex flex-row searchRow w-100"
                            key={index}
                            onClick={() => {window.location.href=item.id}}
                        >
                            <div className="playerPhoto">
                                <img alt={item.name} src={item.profile_image} className="img-fluid" />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <div className="playerName">
                                    <p className="pb-2">{item.name}</p>
                                </div>
                                {item.current_club.club &&
                                    <div className="playerClub d-flex flex-row">
                                        <img alt={item.name} src={item.current_club.club_badge} className="img-fluid" />
                                        <p className="ml-2">{item.current_club.club}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}