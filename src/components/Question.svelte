<script>
  import { score, breeds, scores, userName } from '../store'
  import { navigate } from "svelte-navigator";
  import { shuffleArray, sortScores } from '../utils';

  let options = ['', '', '', '']
  let answer = '';

  async function getDog() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const resJson = await res.json();
    const params = resJson.message.split('/');
    const specificBreed = params[4].toUpperCase().split('-');
    let breed = '';
    if (specificBreed.length > 1) {
      breed = `${specificBreed[1]} ${specificBreed[0]}`;
    } else {
      breed = specificBreed[0];
    }
    const newOptions = [breed];
    const len = $breeds.length;
    while (newOptions.length < 4) {
      const index = Math.floor(Math.random() * len);
      const elem = $breeds[index];
      if (!newOptions.includes(elem)) {
        newOptions.push(elem);
      }
    }
    options = shuffleArray(newOptions);
    answer = breed;

		if (res.ok) {
			return resJson.message;
		} else {
			throw new Error(text);
		}
  }

  let promise = getDog();

  function clickOption(option) {
    if (option === answer) {
      $score += 1
      promise = getDog();
    } else {
      $scores = sortScores([...$scores, { name: $userName, score: $score }]);
      navigate('/gameover');
    }
  }
</script>

<div class="question">
  <div class="question-container">
    <p class="question-text">
      ¿De qué raza es el perro de la foto?
    </p>
  </div>
  {#await promise}
    <div class="loading-container">
      <p class="loading">
        Loading...
      </p>
    </div>
  {:then src}
    <img class="dog-image" {src} alt="random dog">
    {#each options as option}
    <div class="option" on:click={() => clickOption(option)}>
      <p class="option-text">
        {option}
      </p>
    </div>  
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<style>
  .question {
    display: flex;
    height: 90vh;
    padding: 5vh 0;
    width: 75vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .dog-image {
    height: 45vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-container {
    height: 70vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    font-size: 3vw;
    margin: 0;
    color: white;
  }

  .option {
    cursor: pointer;
    background-color: #35d433;
    display: flex;
    width: 35vw;
    height: 6vh;
    align-items: center;
    justify-content: center;
    margin: 1vh 0 0 0;
    border: 1px solid white;
    border-radius: 3vh;
  }
  .option:hover {
    opacity: .7;
  }
  .option-text {
    color: white;
    font-size: 3.5vh;
    font-weight: bold;
    margin: 0;
  }

  .question-container {
    width: 50vw;
    background-color: #557bad;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh 0;
    margin-bottom: 3vh;
  }

  .question-text {
    font-size: 40px;
    color: white;
    font-weight: 1000;
    margin: 0;
  }

</style>