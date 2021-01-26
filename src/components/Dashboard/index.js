import PlayerCard from '../../components/PlayerCard';
import CustomCard from '../../components/ui/CustomCard';
import { Bar, Line } from '../../components/ui/Chart';
import './style.css';


const Dashboard = (props) => (
    <>
        <div className="Dashboard">
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="flex-fill">
                                <CustomCard classes="align-items-start" ycenter>
                                    <PlayerCard
                                        name={props.playerBio.name}
                                        position={props.playerBio.position}
                                        image={props.playerBio.profile_image}
                                        birth={props.playerBio.birth}
                                        birth_country={props.playerBio.birth_country}
                                        birth_place={props.playerBio.birth_place}
                                        height={props.playerBio.height}
                                    />
                                </CustomCard>
                            </div>

                            {props.playedClubs &&
                                <div className="w-sm-100 w-md-25 mx-md-3 flex-fill">
                                    <CustomCard
                                        title="Played Clubs"
                                        alt={`${props.playedClubs.length} Clubs`}
                                        classes="align-items-center"
                                        xcenter
                                    >

                                        <div className="d-flex flex-row flex-wrap">
                                            {props.playedClubs.map((value, index) => {
                                                return (
                                                    <div className="d-flex px-1">
                                                        <img alt={value.club} key={value.club} src={value.club_badge} className="img-fluid" style={{maxWidth: 50}} />
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </CustomCard>
                                </div>
                            }

                            {props.currentClub &&
                                <div className="w-sm-100 w-md-25 mx-md-3 flex-fill">
                                    <CustomCard
                                        title="Current Team"
                                        alt={props.currentClub.club}
                                        classes="align-items-center"
                                        xcenter
                                    >
                                        <img
                                            alt={props.currentClub.name}
                                            src={props.currentClub.club_badge}
                                            className="py-2"
                                        />
                                    </CustomCard>
                                </div>
                            }

                            <div className="w-sm-100 w-md-25 flex-fill">
                                <CustomCard
                                    title="Contract"
                                    alt={props.playerBio.contract_expires}
                                    classes="align-items-center"
                                    xcenter
                                >
                                    <h1>{props.playerBio.contract_expires_days}</h1>
                                    <p className="h6">days to expire</p>
                                </CustomCard>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-lg-row my-4">
                            {props.statsbyClub &&
                                <div className="flex-fill w-md-50 mr-lg-2">
                                    <CustomCard
                                        title="Stats by Club"
                                        alt={`${props.statsbyClub.length} Clubs`}
                                        classes="align-items-center"
                                        xcenter
                                    >
                                        <Bar data={props.statsbyClub} indexKey={"club"} />
                                    </CustomCard>
                                </div>
                            }

                            {props.statsBySeason &&
                                <div className="flex-fill w-md-50 ml-2">
                                    <CustomCard
                                        title="Stats by Season"
                                        alt={`${props.statsBySeason.length} Seasons`}
                                        classes="align-items-center"
                                        xcenter
                                    >
                                        <Line data={props.statsBySeason} />
                                    </CustomCard>
                                </div>
                            }
                        </div>

                        <div className="d-flex flex-row my-4">
                            {props.statsByLeague &&
                                <div className="w-100 ml-2">
                                    <CustomCard
                                        title="Stats by League"
                                        alt={`${props.statsByLeague.length} Leagues`}
                                        classes="align-items-center"
                                        xcenter
                                    >
                                        <Bar data={props.statsByLeague} indexKey={"league"} />
                                    </CustomCard>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Dashboard;