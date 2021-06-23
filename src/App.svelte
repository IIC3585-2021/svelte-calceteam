<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Question from "./components/Question.svelte";
  import Home from "./components/Home.svelte";
  import GameOver from "./components/GameOver.svelte";
  import InfoBar from "./components/InfoBar.svelte";
</script>

<main>
  <div>
	<Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="game">
      <Question />
    </Route>
    <Route path="gameover">
      <GameOver />
    </Route>
  </Router>
  </div>
  <InfoBar />
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
    background-color: #794a8a;
    display: flex;
    flex-direction: row;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>