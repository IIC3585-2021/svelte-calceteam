<script>
  import { userName, breeds } from '../store';
  import { navigate } from "svelte-navigator";
  import { onMount } from 'svelte';
  onMount(async () => {
		fetch('https://dog.ceo/api/breeds/list/all')
      .then(async (res) => {
        const resJson = await res.json();
        const breedsList = resJson.message;
        const allBreeds = [];
        Object.keys(breedsList).forEach((breed) => {
          if (breedsList[breed].length > 0) {
            breedsList[breed].forEach((type) => {
              allBreeds.push(`${type} ${breed}`.toUpperCase());
            });
          } else {
            allBreeds.push(breed.toUpperCase());
          }
        });
        $breeds = allBreeds;
      });
	});
  function startGame() {
    if($userName.length > 0) {
      navigate('/game');
    }
  }  
</script>

<div class="home">
  <p class="title">
    DogQuizz
  </p>
  <p class="subtitle">
    Ingresa tu nombre
  </p>
  <input
    bind:value={$userName}
    placeholder="Nombre de usuario"
    class="input"
  />
  <div
    class="start"
    on:click={startGame}
  >
    <p class="start-text">
      Comenzar juego
    </p>
  </div>
</div>

<style>
.home {
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 10vw;
  color: white;
  font-weight: 1000;
  margin: 0 0 12vh 0;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.start {
  width: 30vw;
  height: 7vh;
  display: flex;
  background-color: #35d433;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid white;
}
.start:hover {
  opacity: 0.7;
}
.start-text {
  color: white;
  font-size: 2vw;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 25px;
  color: white;
  font-weight: semi-bold;
  margin: 0 17vw 1vh 0;
}
.input {
  height: 7vh;
  width: 30vw;
  padding: 0 1vw;
  margin-bottom: 1vw;
  border-radius: 15px;
  border: none;
  font-size: 30px;
}
.input:focus {
  outline: none;
}
</style>