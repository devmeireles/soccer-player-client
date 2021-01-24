import './style.css';

function PlayerPosition() {
  return (
    <div className="PlayerPosition">
      <p className="h6 uppercase fw900">Player Position</p>

      <section class="pitch">
        <div class="field left">
          <div class="penalty-area">
          </div>
        </div>
        <div class="field right">
          <div class="penalty-area">
          </div>
        </div>
        <div class="center-circle"></div>
        <div class="home-team">
        </div>
        <div class="visitor-team">
        </div>
      </section>

    </div>
  );
}

export default PlayerPosition;
