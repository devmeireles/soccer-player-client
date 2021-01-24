function PlayerCard(props) {
    return (
        <div className="CurrentClub d-flex">
            <img
                alt={props.name}
                src={props.image}
                className="img-fluid"
                style={{maxHeight: 105}}
            />
        </div>
    )
}

export default PlayerCard;