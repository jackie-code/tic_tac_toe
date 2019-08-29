//tic-tac-toe

var player_turn = 1;


function check_for_full_board() {
    var counter = 0;
    for (var i = 1; i <= 9; i++) {
        if (
            $('#square' + i).hasClass('x') ||
            $('#square' + i).hasClass('o')
        ) {
            //add 1 to our counter
            counter++
        }
    }
    if (9 == counter) {
        alert('The board is full!');
    }
}

$('table.board td').removeClass('x o'); //clears the table




$('table.board td').on('click', function (e) {



    if (
        !$(this).hasClass('x') &&
        !$(this).hasClass('o')
    ) {
        //console.log("hey got the click");
        if (1 == player_turn) {
            $(this).addClass('x');
            player_turn = 2;
        } else if (2 == player_turn) {
            $(this).addClass('o');
            player_turn = 1;
        }


        const winner_squares = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [1, 4, 7],
        ];

        for (var i = 0; i < winner_squares.length; i++) {
            var set_of_squares = winner_squares[i];
            var symbols = [
               'x',
               'o',
           ];

            for (var j = 0; j < symbols.length; j++) {
                var symbol = symbols[j];
                var player_number = j + 1;

                if (
                    $('#square' + set_of_squares[0]).hasClass(symbol) &&
                    $('#square' + set_of_squares[1]).hasClass(symbol) &&
                    $('#square' + set_of_squares[2]).hasClass(symbol)

                ) {
                    alert('Player' + player_number + 'wins');
                }
            }

            //        if (
            //            $('#square1').hasClass('x') && $('#square2').hasClass('x') && $('#square3').hasClass('x') 
            //                    ||
            //            $('#square4').hasClass('x') && $('#square5').hasClass('x') && $('#square6').hasClass('x') 
            //                    ||
            //            $('#square7').hasClass('x') && $('#square8').hasClass('x') && $('#square9').hasClass('x')
            //                    ||
            //            ('#square1').hasClass('o') && $('#square2').hasClass('o') && $('#square3').hasClass('o')
            //                    ||
            //            $('#square4').hasClass('o') && $('#square5').hasClass('o') && $('#square6').hasClass('o')
            //                    ||
            //            $('#square7').hasClass('o') && $('#square8').hasClass('o') && $('#square9').hasClass('o')
            //            ||
            //            $('#square1').hasClass('o') && $('#square5').hasClass('o') && $('#square9').hasClass('o')
            //            ||
            //            $('#square1').hasClass('x') && $('#square5').hasClass('x') && $('#square9').hasClass('x')
            //            ||
            //            $('#square3').hasClass('o') && $('#square5').hasClass('o') && $('#square7').hasClass('o')
            //            ||
            //            $('#square3').hasClass('x') && $('#square5').hasClass('x') && $('#square7').hasClass('x')
            //        ) {
            //            alert('You win!')
            //        }
            //

            check_for_full_board();
            $('#player-turn').html(player_turn);
        }
    }
});

$('#reset').on('click', function (e) {
    console.log("got the reset");
    $('table.board td').removeClass('x o');
    player_turn = 1;
    $('#player-turn').html(player_turn);
});
