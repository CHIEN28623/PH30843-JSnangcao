// Đối tượng trò chơi
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      'Neuer',
      'Pavard',
      'Lucas',
      'Hernandez',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    scored: [0, 4, 0, 0, 2, 3, 0, 0, 1, 0, 4],
    date: 'Nov 21st, 2022',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5, 
    },
  };
  
  // 1. In ra cầu thủ và số bàn thắng đã ghi
  for (const [index, player] of game.players.entries()) {
    console.log(`Goal ${game.scored[index]}: ${player}`);
  }
  
  // 2. Tính tỉ lệ kết quả trận đấu
  const calculateAverage = (...values) =>
    values.reduce((acc, value) => acc + value, 0) / values.length;
  
  const averageGoals = calculateAverage(...game.scored);
  console.log(`Average goals: ${averageGoals}`);
  
  // 3. In tỉ lệ cược theo định dạng yêu cầu
  console.log(`Tỉ lệ thắng của ${game.team1}: ${game.odds.team1}`);
  console.log(`Tỉ lệ hòa của draw: ${game.odds.x}`);
  console.log(`Tỉ lệ thắng của ${game.team2}: ${game.odds.team2}`);
  
  // 4. Tạo đối tượng scorers
  const scorers = {};
  for (const [index, player] of game.players.entries()) {
    scorers[player] = game.scored[index];
  }
  console.log(scorers);
  