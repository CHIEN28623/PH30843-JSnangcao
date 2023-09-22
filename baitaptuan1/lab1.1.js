const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [  // arr này chứa 22 cầu thủ của mỗi bên
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
      'Hummels',
      'Erling Haaland',
      'Sancho',
      'Manuel Akanji',
      'Bellingham',
      'Reyna',
      'Schulz',
      'Hakimi',
      'Passlack',
      'Witsel',
      'Burki',
    ],
    score: '4:0', //là biểu thị trận đấu này kết thúc bên team1 thắng với tỉ số 4-0 trước team2 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], // biểu thị tên các cầu thủ đã ghi bàn
                                                                // trong trận đấu này 
    date: 'Nov 9th, 2030', // ngay diễn ra trận đấu được đặt ra ở định dạng ngày tháng năm
    odds: { // đây là 1 obj chứa thông tin về tỉ lệ cược cho trận đấu
      team1: 1.33, // tỷ lệ cược cho team1 là 1.33
      x: 3.25, // tỷ lệ cược hòa là 3.25
      team2: 6.5, // tỷ lệ cược team2 là 6.5
    },
  };
  
  // Task 1: Tạo ra 1 mảng cầu thủ cho mỗi đội
  const players1 = game.players.slice(0, 11); //dung slice để cắt mảng từ 0->11
  const players2 = game.players.slice(11);  //dung slice để cắt mảng từ 11 -> hết
  
  // Task 2: Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại là cầu thủ khác
  const [gk, ...fieldPlayers] = players1; // sử dụng destructuring assignment 
            // để tách phần tử đầu tiên của mảng players1 và gán nó vào biến gk,
           // cùng với việc gán tất cả các phần tử còn lại của mảng players1 vào mảng fieldPlayers.
          // vậy là biến gk sẽ chứa tên thủ môn của team1 là phần tử đầu tiên của mảng tên là 'Neuer'
         // còn các phần tử còn lại từ 'Pavard' đến 'Lewandowski' sẽ được gán vào mảng fieldPlayers
        // điều này có nghĩa là fieldPlayers sẽ chứa tên của tất cả cầu thủ trừ thủ môn 

  // Task 3: Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
  const allPlayers = [...players1, ...players2]; // sử dụng toán tử spread
            // để tạo một mảng mới gộp các phần tử của mảng players1 và players2 
           // lại với nhau để tạo ra một danh sách chứa tất cả cầu thủ trên sân trong trận đấu.
          // tóm lại là dùng dể sao chép all cầu thủ của 2 đội vào biến allPlayers

  // Task 4: Tạo mảng 'players1Final' với 3 cầu thủ thay người
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // [...players1,]  sử dụng toán tử spread
                    // để sao chép tất cả các phần tử của mảng 'players1' 
                   // và thêm chúng vào mảng players1Final     
                  // kết quả là tất cả cầu thủ của team1 đã dc sao chép và thêm vào 'players1Final'
                 // 'Thiago', 'Coutinho', 'Perisic' là 3 cái tên cầu thủ dc liệt kê sau 'players1'
                // và dc thêm vào mảng 'players1Final'
               // kết quả là biến 'players1Final' bây giờ chứa ds cầu thủ ban đầu của team1
              // and 3 cầu thủ thay người  
                   
  // Task 5: Tạo biến tỷ lệ kết quả trận đấu từ object game.odds
  const { team1, x: draw, team2 } = game.odds;
       //sử dụng destructuring assignment để trích xuất các giá trị từ đối 
      //tượng game.odds và gán chúng vào các biến team1, draw, và team2.  
     //team1 sẽ chứa giá trị của thuộc tính team1 trong game.odds.
    //draw sẽ chứa giá trị của thuộc tính x trong game.odds, nhưng được đổi tên thành draw.
   //team2 sẽ chứa giá trị của thuộc tính team2 trong game.odds.   


  // Task 6: Viết hàm 'printGoals' để in ra tên và số bàn thắng của cầu thủ
  function printGoals(...scorers) {
    scorers.forEach((scorer, index) => {
      console.log(`Goal ${index + 1}: ${scorer}`);
    });
  }
  
  // Task 7: Xác định đội chiến thắng dựa trên tỷ lệ chấp
  const winningTeam = team1 < team2 ? game.team1 : game.team2; // cái này dùng để ktra xem nếu team1 có tỷ
                                                // lệ cược thấp hơn team2 thì biến winningTeam sẽ gán bằng 
                                                // game.team1, còn team1 cao hơn thì biến winningTeam sẽ
                                                // là game.team2 
  
  // Test các nhiệm vụ
  console.log(players1);
  console.log(players2);
  console.log(gk);
  console.log(fieldPlayers);
  console.log(allPlayers);
  console.log(players1Final);
  console.log(team1, draw, team2);
  printGoals(...game.scored);
  console.log(winningTeam);
    