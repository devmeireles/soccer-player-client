import PlayerCard from '../../components/PlayerCard';
import PlayedClubs from '../../components/PlayedClubs';
import CustomCard from '../../components/ui/CustomCard';
import { Bar, Line } from '../../components/ui/Chart';
import { Tabs, Tab } from 'react-bootstrap';
import { BsFillBarChartFill, BsTable } from 'react-icons/all';
import './style.css';
import DataTable from '../ui/DataTable';

const statsbyClubHead = {}
statsbyClubHead.head = ['Club', 'Apps', 'Goals', 'Assists']
statsbyClubHead.keys = ['club', 'apps', 'goals', 'assists']

const statsbySeasonHead = {}
statsbySeasonHead.head = ['Season', 'Apps', 'Goals', 'Assists']
statsbySeasonHead.keys = ['season', 'apps', 'goals', 'assists']

const statsbyLeagueHead = {}
statsbyLeagueHead.head = ['League', 'Apps', 'Goals', 'Assists']
statsbyLeagueHead.keys = ['league', 'apps', 'goals', 'assists']


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
                                <div className="w-sm-100 w-md-25 flex-fill mx-md-3">
                                    <CustomCard
                                        title="Played Clubs"
                                        alt={`${props.playedClubs.length} Clubs`}
                                        classes="align-items-center"
                                        xcenter
                                    >

                                        <div className="d-flex flex-row flex-wrap">
                                            <PlayedClubs data={props.playedClubs} />
                                        </div>

                                    </CustomCard>
                                </div>
                            }

                            {props.currentClub.length > 0 &&
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

                            {props.playerBio.length > 0 &&
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
                            }
                        </div>


                        <div className="row my-4">
                            {props.statsbyClub &&
                                <div className="col-md-6">
                                    <CustomCard>
                                        <Tabs defaultActiveKey="chart" className="custom-tab" id="uncontrolled-tab-example">
                                            <Tab eventKey="chart" title={<BsFillBarChartFill />}>
                                                <Bar data={props.statsbyClub} indexKey={"club"} />
                                            </Tab>
                                            <Tab eventKey="table" title={<BsTable />}>
                                                <DataTable data={props.statsbyClub} head={statsbyClubHead} />
                                            </Tab>
                                        </Tabs>
                                    </CustomCard>
                                </div>
                            }

                            {props.statsBySeason &&
                                <div className="col-md-6">
                                    <CustomCard>
                                        <Tabs defaultActiveKey="chart" className="custom-tab" id="uncontrolled-tab-example">
                                            <Tab eventKey="chart" title={<BsFillBarChartFill />}>
                                                <Line data={props.statsBySeason} />
                                            </Tab>
                                            <Tab eventKey="table" title={<BsTable />}>
                                                <DataTable data={props.statsBySeason} head={statsbySeasonHead} />
                                            </Tab>
                                        </Tabs>
                                    </CustomCard>
                                </div>
                            }
                        </div>

                        <div className="d-flex flex-row my-4">
                            {props.statsByLeague &&
                                <div className="w-100 ml-2">
                                    <CustomCard>
                                        <Tabs defaultActiveKey="chart" className="custom-tab" id="uncontrolled-tab-example">
                                            <Tab eventKey="chart" title={<BsFillBarChartFill />}>
                                                <Bar data={props.statsByLeague} indexKey={"league"} />
                                            </Tab>
                                            <Tab eventKey="table" title={<BsTable />}>
                                                <DataTable data={props.statsByLeague} head={statsbyLeagueHead} />
                                            </Tab>
                                        </Tabs>
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