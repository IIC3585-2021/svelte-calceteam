<script>
import { score, userName } from '../store';
</script>

<div class="player-container">
  <p class="player-text">{`Jugador: ${$userName}`}</p>
  <p class="player-text">{`Puntaje: ${$score}`}</p>
</div>

<style>
.player-container {
  width: 20vw;
  height: 10vh;
  padding: 5vh 0;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
.player-text {
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
}
</style>
