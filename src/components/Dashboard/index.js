import PlayerCard from '../../components/PlayerCard';
import CustomCard from '../../components/ui/CustomCard';
import { Bar, Line, Doughnut } from '../../components/ui/Chart';


const Dashboard = (props) => (
    <>
        <div className="Dashboard">
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-row">
                            <div className="mr-auto w-50">
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

                            {props.currentClub &&
                                <div className="w-25 mx-3">
                                    <CustomCard
                                        title="Current Team"
                                        alt={props.currentClub.name}
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

                            <div className="w-25">
                                <CustomCard
                                    title="Contract"
                                    alt={props.playerBio.contract_expires}
                                    classes="align-items-center"
                                    xcenter
                                >
                                    <Doughnut />
                                </CustomCard>
                            </div>
                        </div>

                        <div className="d-flex flex-row my-4">
                            {props.statsbyClub &&
                                <div className="w-50 mr-2">
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
                                <div className="w-50 ml-2">
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