<script>
  import Player from './Player.svelte';
  import LeaderBoard from './LeaderBoard.svelte';
</script>

<div class="info-container">
  <Player />
  <LeaderBoard />
</div>

<style>
.info-container {
  height: 90vh;
  padding: 5vh 0;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>