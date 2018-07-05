function climbingLeaderboard(scores, alice) {
  let scoresIndex = 0;
  let aliceIndex = alice.length - 1;
  let aliceRank = [];
  let rank = 1;
  let currentTopScore = scores[scoresIndex];
  while (aliceIndex >= 0) {
    if (alice[aliceIndex] >= scores[scoresIndex]) {
      aliceRank.unshift(rank);
      aliceIndex--;
    }
    else if (scoresIndex === scores.length) {
      rank++;
      scoresIndex++;
      aliceRank.unshift(rank);
      aliceIndex--;
    }
    else {
      scoresIndex++;
      if (currentTopScore > scores[scoresIndex]) {
        rank++
        currentTopScore = scores[scoresIndex];
      }
    }
  }
  return aliceRank;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[5, 25, 50, 120]));