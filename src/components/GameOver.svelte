<script>
  import { navigate } from "svelte-navigator";
  import { score, userName } from "../store";
  function toHome() {
    $score = 0;
    $userName = '';
    navigate('/');
  }
  function reTry() {
    $score = 0;
    navigate('game');
  }
</script>

<div class="game-over">
  <p class="over">
    Game Over
  </p>
  <div
    on:click={toHome}
    class="button"
  >
    <p class="button-text">
      Nuevo juego
    </p>
  </div>
  <div
    on:click={reTry}
    class="button"
  >
    <p class="button-text">
      Volver a intentar
    </p>
  </div>
</div>

<style>
  .over {
    color: white;
    font-size: 150px;
    font-weight: 1000;
    margin: 0;
  }

  .game-over{
    width: 75vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button {
    width: 40vw;
    height: 7vh;
    display: flex;
    background-color: #35d433;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    margin: 3vh 0 0 0;
    border: 1px solid white;
  }
  .button:hover {
    opacity: .7;
  }
  .button-text {
    color: white;
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }
  </style>