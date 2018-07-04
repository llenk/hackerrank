function climbingLeaderboard(scores, alice) {
  // build leaderboard and ranks
  let leaderboard = {};
  let rank = 1;
  for (let i = 0; i< scores.length; i++) {
    if (!leaderboard[scores[i.toString()]]) {
      leaderboard[scores[i.toString()]] = rank;
      rank++;
    }
  }
  // check alice's ranks
  let aliceRank = [];
  for (let i = 0; i<alice.length; i++) {
    let j = 0;
    while (alice[i] < scores[j] && j < scores.length) {
      j++;
    }
    if (j == scores.length) {
      aliceRank.push(rank);
    }
    else {
      aliceRank.push(leaderboard[scores[j].toString()])
    }
  }
  return aliceRank;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[5, 25, 50, 120]));