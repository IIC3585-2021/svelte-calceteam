export function shuffleArray(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function sortScores(list) {
  const sortScores = (user1, user2) => {
    if (user1.score < user2.score) {
      return 1;
    }
    if (user1.score > user2.score) {
      return -1;
    }
    if (user1.name > user2.name) {
      return 1;
    }
    return -1;
  };
  return list.sort(sortScores);
}