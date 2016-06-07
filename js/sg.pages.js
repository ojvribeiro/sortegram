// Inicio
function go_Home ()
 {
    cResult.style.color = '#FFF';
    cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
    cResult.style.borderTop = '3px solid #FFF';
    cResult.style.borderBottom = '3px solid #FFF';
        goTo( '#home' );
    status('Início');

    sgQuit();
    cNew();
};



function Config ()
  {
    $( '#sg_Config_Page' )
      .removeClass( 'close' )
        .addClass( 'open' );
};

function closeConfig ()
  {
    $( '#sg_Config_Page' )
      .removeClass( 'open' )
        .addClass( 'close' );
};



// Gerenciar Sorteio Sortegram
function sgBlank ()
 {
    goTo( '#sortegram' );

    setTimeout( function ()
     {
       $( '#userName_Input' )
        .focus()
     }, 1500);
};




// Todos os sorteios Sortegram salvos
function ManageAllBtn ()
 {
    cResult.style.color = '#FFF';
    cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
    cResult.style.borderTop = '3px solid #FFF';
    cResult.style.borderBottom = '3px solid #FFF';
        goTo( '#sg_SavedRaffles' );

    $( '.saved_item-info-btn' )
      .show();

    status( 'Sorteios salvos' );
    sgQuit();
    cNew();
};





function sg_Ready ()
 {
    $( '#sg_start_Btn, #sg-current' )
      .hide();
    $( '#sg_start_Winners' )
      .show();
    $( '#part_List-2' )
      .html( '' );

      if ( isNew.checked && $( '#part_List > dt' ).size() > 1 )
         {
            $( '#part_List-2' )
              .html( $( '#part_List' ).html() );

            $( '#part_List' )
              .html( '' );

                    setTimeout( function ()
                        {
                            $('#part_List-2 .delete-user')
                              .hide();

                            document.getElementById( 'input_winnersAmount' ).value = 2;
                            document.getElementById( 'input_winnersAmount' ).setAttribute( 'max', $( '#part_List-2 > dt' ).size() );

                            goTo( '#start-sortegram' );
                    }, 10);

              $( '#part_List-2' )
                .removeClass( 'lock-scroll' )
                  .addClass( 'scroll' );

              status( 'Iniciar sorteio' );

              hlTip(5000);
        }
          else
             if ( !isNew.checked && $( '#part_List > dt' ).size() > 1 )
              {
                $( '#part_List-2' )
                  .html( $( '#part_List' ).html() );

                $( '#part_List' )
                  .html( '' );

                  $( '#part_List-2' )
                    .removeClass( 'lock-scroll' )
                      .addClass( 'scroll' );

                  status( 'Iniciar sorteio' );

                  hlTip(5000);

                  setTimeout( function ()
                      {
                          $( '#part_List-2 .delete-user' )
                            .hide();

                          goTo( '#start-sortegram' );

                          document.getElementById( 'input_winnersAmount' ).value = 2;
                          document.getElementById( 'input_winnersAmount' ).setAttribute( 'max', $( '#part_List-2 > dt' ).size() );
                  }, 10);
            }
              else
                 {
                    swal({
                            title               :     'Eita :(',
                            text                :     'O sorteio precisa ter \npelo menos 2 participantes!',
                            type                :     'error',
                            confirmButtonColor  :     '#35B138',
                            timer               :     10000,
                            allowOutsideClick   :     true
                    });
              };
  Reload();
};








// Sorteio Classico
function cRaffle () {
    $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'
    goTo( '#classic' );
    status( 'Clássico' );

    hlTip(5000);
}





// Cara ou Coroa
function ccRaffle () {
  goTo( '#head_orTales' );
  status( 'Cara ou Coroa' );

  hlTip(1000);
}




// BINGO
function bRaffle () {
  goTo( '#bingo' );
      status( 'Bingo' );
}





// Sorteio Sortegram
function sgRaffle () {
  if ( isNew.checked === true ) { // Se NAO EXISTE jogo salvo
    sgNew();
  }
  else if ( isNew.checked === false ) { // Se EXISTE jogo salvo
    ManageAllBtn();
  }
}




// Sobre
function About ()
 {
    $( '#sg_About' )
      .removeClass( 'close' )
        .addClass( 'open' );
};


function closeAbout ()
  {
    $( '#sg_About' )
      .removeClass( 'open' )
        .addClass( 'close' );
};





function goTo (page)
  {
      $( '.page' )
        .removeClass( 'open' )
          .addClass( 'close' );
      $( page )
        .removeClass( 'close' )
          .addClass( 'open' );

    userName_Input.blur();
};
