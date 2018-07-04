function climbingLeaderboard(scores, alice) {
  // build new leaderboard
  // this includes every int between the top score and 0
  let leaderboard = {};
  let rank = 1;
  for (let i = scores[0]; i >= 0; i--) {
    leaderboard[i.toString()] = rank;
    if (scores.includes(i)) {
      rank++;
    }
  }
  // check alice's ranks
  let aliceRank = [];
  for (let i = 0; i < alice.length; i++) {
    if (!leaderboard[alice[i].toString()]) {
      aliceRank.push(1);
    }
    else {
      aliceRank.push(leaderboard[alice[i].toString()]);
    }
  }
  return aliceRank;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[5, 25, 50, 120]));