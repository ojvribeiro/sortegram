// Começa o Cara ou coroa
function ccStart ()
 {
    // Cria uma array com a quantidade de numeros dada de modo que não se repitam
    var sortearCC = Math.floor( Math.random() * ( ( 1001 - 1 ) + 1 ) + 1 );

        status( 'Rodando...' );

        $( '.flip-container' )
          .attr( 'onmousedown','' );

        $( '#statusTitle_Bar' )
          .removeClass( 'statusTitle_Bar-blink addfadeIn' )
            .addClass( 'statusTitle_Bar-blink' );

        $( '.flipper' )
          .addClass( 'rotate-coin' );

        nbOpsBtn.disabled = true;


    setTimeout( function()
      { // Timeout de 3s
                $( '.flipper' )
                  .removeClass( 'rotate-coin' );

                  if ( sortearCC <= 500 )
                     {
                        $( '.cara' )
                          .css({
                                'transform'    :    'rotateY(0deg)'
                        });

                        $( '.coroa' )
                          .css({
                                'transform'    :    'rotateY(180deg)'
                        });

                        var resultCC = 'Cara';
                  }
                   else
                      {
                        $( '.coroa' )
                          .css({
                                'transform'     :    'rotateY(0deg)'
                        });

                        $('.cara' )
                          .css({
                                'transform'      :   'rotateY(180deg)'
                        });

                        var resultCC = 'Coroa';
                  };

                  status( resultCC );

                  nbOpsBtn.disabled = false;

                  $( '.flip-container' )
                    .attr( 'onmousedown','ccStart()' );

                  hlTip(5000);


          // Remove o efeito de fadeIn e blink e adiciona fadeIn novamente
          $( '#statusTitle_Bar' )
            .removeClass( 'addfadeIn statusTitle_Bar-blink' )
              .addClass( 'addfadeIn' );

      }, 3000);
};
