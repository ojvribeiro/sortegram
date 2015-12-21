/*
  Sortegram.js
  author  :  Victor Ribeiro
  site    :  http://sortegram.com/
  github  :  http://github.com/sortegram/sortegram
  licence : MIT
*/

'use strict';
// Define all vars
var d = document,
    w = window,
    cGo = document.getElementById( 'c-go' ),
    sgGo = document.getElementById( 'sg-go' ),
    minMax = $( '.min-max' ),

    // Style vars
    show = 'block',
    hide = 'none',

    // Colors vars [background, button, font]
    green = ['#116D01','#00B70B','#66FF73'],
    blue = ['#1763D0','#79A9EF','#C6DDFF'],
    red = ['#BB2E2E','#E68383','#FFDCDC'],
    yellow = ['#7B6803','#DED516','#FFFCCF'],
    orange = ['#C7781B','#BD2F2F','#FFFFFF'],
    pink = ['#C35AC1','#FF8FF8','#FFD5FD'],
    lilac = ['#9B4AD0','#C79BEA','#FFFFFF'],
    cyan = ['#009BA9','#75CDEC','#8DFFF5'],
    violet = ['#96197C','#D84EFD','#F8CDFF'],

    // Number input vars
    n = document.getElementById( 'n' ),
    x = document.getElementById( 'x' ),
    y = document.getElementById( 'y' ),

    // DOM vars
    $bg_uiColor = $( '#cover, #sidebar, .splat-loader' ),
    $btn_uiColor = $( '.new-btn, .sort-btn, #c-result, #sg-done' ),
    $fnt_uiColor = $( '#input-username-lbl' ),

    cResult = document.getElementById( 'c-result' ),
    sgResult = document.getElementById( 'sg-result' ),
    userName = document.getElementById( 'username' ),
    inputUserNameLabel = document.getElementById( 'input-username-lbl' ),
    sgNoPEdit = document.getElementById( 'number-of-participants' ),
    sgNoP = document.getElementById( 'number-of-participants-2' ),
    sgManage = document.getElementById( 'sg-manage-btn' ),
    NoPdiv = document.getElementById( 'NoPdiv' ),
    savedNames = document.getElementById( 'user-names-2' ),
    savedNamesEdit = document.getElementById( 'user-names' ),
    savedNamesMng = document.getElementById( 'user-names-manage' ),
    saveBtn = document.getElementById( 'sg-save' ),
    $deleteUser = $( '.delete-user' ),
    deleteBtn = document.getElementById( 'delete-all' ),
    isNew = document.getElementById( 'is-new' ),
    nbOpsBtn = document.getElementById( 'navbar-ops-btn' ),
    nbOpsBtnClose = document.getElementById( 'navbar-ops-btn-close' ),
    cCurrent = document.getElementById( 'c-current' ),
    sgCurrent = document.getElementById( 'sg-current' ),

    // LocalStorage vars (all of them starts with underscore)
    _uiColor = localStorage.getItem( 'ui-color' ),
    _isNew = localStorage.getItem( 'is-new' ),
    _savedNamesEdit = localStorage.getItem( 'saved-names-edit' );




setInterval(function() {
  if ( _isNew === 'true' ) {
  isNew.checked = true;
} else {
  isNew.checked = false;
}
}, 100);




if ( !localStorage['is-new'] ) {
  localStorage.setItem( 'is-new','true' );
  localStorage.setItem( 'saved-names-edit','' );
  sgManage.style.display = hide;
  document.location.reload();
}
if ( _isNew === 'true' ) {
  sgManage.style.display = hide;
}
if ( _isNew === 'false' ) {
  sgManage.style.display = show;
  deleteBtn.disabled = false;
  $( '#user-names' ).html(_savedNamesEdit);
}




// Funções a serem carregadas na inicialização
function appLoad () {
        if ( !_uiColor ) {
          localStorage.setItem( 'ui-color','' );
          $bg_uiColor.css( 'background-color',green[0] );
          $btn_uiColor.css( 'background-color',green[1] );
          $fnt_uiColor.css( 'color',green[2] );
        } else if ( _uiColor === 'green' ) {
              $bg_uiColor.css( 'background-color',green[0] );
              $btn_uiColor.css( 'background-color',green[1] );
              $fnt_uiColor.css( 'color',green[2] );
        } else if ( _uiColor === 'blue' ) {
              $bg_uiColor.css( 'background-color',blue[0] );
              $btn_uiColor.css( 'background-color',blue[1] );
              $fnt_uiColor.css( 'color',blue[2] );
        } else if ( _uiColor === 'red' ) {
              $bg_uiColor.css( 'background-color',red[0] );
              $btn_uiColor.css( 'background-color',red[1] );
              $fnt_uiColor.css( 'color',red[2] );
        } else if ( _uiColor === 'yellow' ) {
              $bg_uiColor.css( 'background-color',yellow[0] );
              $btn_uiColor.css( 'background-color',yellow[1] );
              $fnt_uiColor.css( 'color',yellow[2] );
        } else if ( _uiColor === 'orange' ) {
              $bg_uiColor.css( 'background-color',orange[0] );
              $btn_uiColor.css( 'background-color',orange[1] );
              $fnt_uiColor.css( 'color',orange[2] );
        } else if ( _uiColor === 'pink' ) {
              $bg_uiColor.css( 'background-color',pink[0] );
              $btn_uiColor.css( 'background-color',pink[1] );
              $fnt_uiColor.css( 'color',pink[2] );
        } else if ( _uiColor === 'lilac' ) {
              $bg_uiColor.css( 'background-color',lilac[0] );
              $btn_uiColor.css( 'background-color',lilac[1] );
              $fnt_uiColor.css( 'color',lilac[2] );
        } else if ( _uiColor === 'cyan' ) {
              $bg_uiColor.css( 'background-color',cyan[0] );
              $btn_uiColor.css( 'background-color',cyan[1] );
              $fnt_uiColor.css( 'color',cyan[2] );
        } else if ( _uiColor === 'violet' ) {
              $bg_uiColor.css( 'background-color',violet[0] );
              $btn_uiColor.css( 'background-color',violet[1] );
              $fnt_uiColor.css( 'color',violet[2] );
        }
        $('#content').show();

      setTimeout(function () {
        $('.splat-loader').fadeOut('slow');
      }, 2000);
};
//








$( sgNoPEdit ).html( $( '#user-names > dt' ).size() );




if ( $( '#user-names > dt' ).size() === 0 ) {
  document.getElementById( 'part-plural' ).innerHTML = 's';
  document.getElementById( 'part-plural-2' ).innerHTML = 's';
}
 else if ( $( '#user-names > dt' ).size() === 1 ) {
   document.getElementById( 'part-plural' ).innerHTML = '';
   document.getElementById( 'part-plural-2' ).innerHTML = '';
 }
  else {
   document.getElementById( 'part-plural' ).innerHTML = 's';
   document.getElementById( 'part-plural-2' ).innerHTML = 's';
 }




// Rola a lista de participantes para o final
function downList() {
    $( '#user-names' ).animate({
    scrollTop: $( '#user-names' )[0].scrollHeight
  }, 200);
}




// Inicio
function home() {
  cResult.style.color = '#FFF';
  cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
  cResult.style.borderTop = '3px solid #FFF';
  cResult.style.borderBottom = '3px solid #FFF';
  $( '#home' ).removeClass( 'close' ).addClass( 'open' );
  $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
    $( '#classic' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
        $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
  document.getElementById( 'logo' ).innerHTML = 'Sortegram';
  $( '#trophy' ).hide();
  sgQuit();
  cNew();
}




// Gerenciar SS
function sgManageBtn () {
  cResult.style.color = '#FFF';
  cResult.style.backgroundColor = 'rgba(236, 248, 255, 0.5)';
  cResult.style.borderTop = '3px solid #FFF';
  cResult.style.borderBottom = '3px solid #FFF';
  $( '#sg-manage' ).removeClass( 'close' ).addClass( 'open' );
    $( '#home' ).removeClass( 'open' ).addClass( 'close' );
    $( '#classic' ).removeClass( 'open' ).addClass( 'close' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
        $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
  document.getElementById( 'logo' ).innerHTML = 'Sorteio salvo';
  $('#user-names-manage .delete-user').hide();
  sgQuit();
  cNew();
}




// Ultimo sorteio
function Last () {

      $( '#sg-manage' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );

if ( $( '#user-names' ).html() === _savedNamesEdit ) {
      $( '#user-names-manage' ).html(_savedNamesEdit);
} else {
      $( '#user-names-manage' ).html($( '#user-names' ).html());
  }
      document.getElementById( 'logo' ).innerHTML = 'Sorteio salvo';
      $('#user-names-manage .delete-user').hide();
}

function editLast () {

      userName.value = '';
      userName.focus();
      $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'

      $( '#sortegram' ).removeClass( 'close' ).addClass( 'open' );
      $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
      $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
      $( '#home' ).removeClass( 'open' ).addClass( 'close' );

        document.getElementById( 'logo' ).innerHTML = 'Editar';
        document.getElementById( 'user-names' ).innerHTML = _savedNamesEdit;
        changeNumber();

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvo';
      saveBtn.style.backgroundImage = 'url(img/ic_done_white_24dp_1x.png)';

      Reload();
}





// Reinicia o Sorteio Clássico
function cNew () {
  cGo.style.display = show;
  cResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  cCurrent.innerHTML = '';
  n.removeAttribute( 'disabled' );
  x.removeAttribute( 'disabled' );
  y.removeAttribute( 'disabled' );
  cGo.removeAttribute( 'disabled' );
}



// Reinicia o Sorteio Sortegram
function sgNew () {
  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );

      // Esconde o trofeu
    $( '#trophy' ).hide();
    NoPdiv.style.display = show;

      userName.value = '';
      userName.focus();

        $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'

        $( '#sortegram' ).removeClass( 'close' ).addClass( 'open' );
        $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
        $( '#start-sortegram' ).removeClass( 'open' ).addClass( 'close' );
        $( '#home' ).removeClass( 'open' ).addClass( 'close' );

        document.getElementById( 'logo' ).innerHTML = 'Adicionar';

      savedNamesEdit = document.getElementById( 'user-names' ).innerHTML = '';
      document.getElementById( 'user-names-2' ).innerHTML = '';


      changeNumber();

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvar';
      saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';
}




function sgQuit () {
  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );
}



// Começa o Sorteio Clássico
function cStart () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var arr = []
while ( arr.length < n.value ) {
  var randomnumber = Math.floor(Math.random() * ((Number(y.value) - Number(x.value)) + 1) + Number(x.value))
  var found = false;
  for ( var i = 0; i < arr.length; i++ ) {
  if ( arr[i] === randomnumber ) {
    found = true;
    break
    }
  }
  if ( !found ) {
    arr[arr.length] = randomnumber
    };
}

  if ( y.value.length !== 0 || x.value.length !== 0 // Se os campos x e Y estiverem preenchidos
    && x.value.match(/^(\d){0,7}$/g) //
    && y.value.match(/^(\d){0,7}$/g) // E se eles possuirem ate 7 digitos
    && n.value <= y.value // E o valor de n for menor que y
      ) {
    cResult.style.color = '#888888';
    cResult.style.backgroundColor = '#FFF';
    cResult.style.fontSize = '38pt';
    cResult.style.borderRadius = '0px';
    document.getElementById( 'logo' ).innerHTML = 'Sorteando';

    $( '#logo' ).removeClass( 'logo-blink addfadeIn' ).addClass( 'logo-blink' );
    $( cResult ).removeClass( 'result-rotate' ).addClass( 'result-rotate' );
    $( cResult ).removeClass( 'addfadeIn' );

    var sort = setInterval(function() {
      n.setAttribute( 'disabled','true' );
      x.setAttribute( 'disabled','true' );
      y.setAttribute( 'disabled','true' );
      cGo.setAttribute( 'disabled','true' );
      cGo.style.display = hide;
      cResult.style.display = show;
      cResult.innerHTML = Math.floor(Math.random() * ((Number(y.value) - Number(x.value)) + 1) + Number(x.value));

  if ( cResult.innerHTML.length <= 5 ) {
      cResult.style.fontSize = '38pt';
  }
   else if ( cResult.innerHTML.length >= 6 ) {
      cResult.style.fontSize = '20pt';
  }
}, 60);


// Resultado do sorteio
setTimeout(function() { // Timeout de 4s

if ( n.value !== '' ) { // Se o campo n NAO estiver vazio...
      clearInterval(sort); // Remove o loop de numeros
      $( '.new-btn, .back-to-home-btn' ).fadeIn(); // Mostra o botao 'Novo Sorteio'
              cResult.innerHTML = arr; // Exibe os resultados

              cResult.style.color = '#FFF';
              cResult.style.backgroundColor = 'rgba(242, 255, 0, 0.5)';
              cResult.style.borderTop = '3px solid #FFF';
              cResult.style.borderBottom = '3px solid #FFF';
              cResult.style.marginLeft = '-3px';

              document.getElementById( 'logo' ).innerHTML = 'Resultado';

      // Acrescenta um tracinho apos cada numero do resultado
      cResult.innerHTML = cResult.innerHTML.replace(/,/g,' - ');

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      cCurrent = document.getElementById( 'c-current' );
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = 's';
      }
      else if ( Number(n.value) === 1 ) {
        plural = '';
      }
      else if ( Number(n.value) === 0 ) {
        plural = 's';
      }

      // Imprime a data e hora do sorteio
      cCurrent.innerHTML =
      'Número'
      +plural
      +' gerado'
      +plural
      +' em '
      + now
      +'.<br><br>';

      // Remove o efeito de fadeIn e rotacao
      $( '#c-result' ).removeClass( 'addfadeIn result-rotate' ).addClass( 'addfadeIn' );
      $( '#logo' ).removeClass( 'addfadeIn logo-blink' ).addClass( 'addfadeIn' );

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( cResult.innerHTML.length <= 12 ) {
          cResult.style.fontSize = '38pt';
      }
       else if ( cResult.innerHTML.length >= 13 ) {
          cResult.style.fontSize = '20pt';
      }
    };

  }, 4000);
  }
    else {
      swal('Erro :(','Preencha os campos de número Máximo e Mínimo corretamente.','error');
    }
}

        // Abre o menu lateral
        nbOpsBtn.addEventListener( 'click', function() {
        $( '#sidebar' ).removeClass( 'close' ).addClass( 'open' );
        document.getElementById( 'sidebar-overlay' ).style.display = show;
        nbOpsBtn.style.display = hide;
        nbOpsBtnClose.style.display = show;
        });

        // Fecha o menu lateral
        document.addEventListener( 'click', function ( event ) {
          if ( !$( event.target ).closest( '#sidebar, #navbar-ops-btn' ).length
            || $( event.target ).closest( '.sidebar-op' ).length ) {
              $( '#sidebar' ).removeClass( 'open' ).addClass( 'close' );
              document.getElementById( 'sidebar-overlay' ).style.display = hide;
              nbOpsBtnClose.style.display = hide;
              nbOpsBtn.style.display = show;
            }
          });

// Seleciona o conteudo de n, y e x
$( '#n, #x, #y' ).on( 'focus', function() {
    this.select();
});

// Altera o numero de participantes do sorteio Sortegram
function changeNumber () {
  sgNoPEdit.innerHTML = $( '#user-names > dt' ).size();
  sgNoP.innerHTML = $( '#user-names > dt' ).size();

if ( $( '#user-names > dt' ).size() === 0 ) {
  document.getElementById( 'part-plural' ).innerHTML = 's';
  document.getElementById( 'part-plural-2' ).innerHTML = 's';
}
 else if ( $( '#user-names > dt' ).size() === 1 ) {
   document.getElementById( 'part-plural' ).innerHTML = '';
   document.getElementById( 'part-plural-2' ).innerHTML = '';
 }
  else {
   document.getElementById( 'part-plural' ).innerHTML = 's';
   document.getElementById( 'part-plural-2' ).innerHTML = 's';
 }
}




// SORTEGRAM

function sbmt () { // Funcao que adiciona a lista o participante
  if ( userName.value.length !== 0
    && userName.value.match(/^@?([\w\W]){1,30}$/g)
    ) {
        downList();

        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Salvar';
        saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';

        userName.blur(); userName.select();

          savedNamesEdit = document.getElementById( 'user-names' ).innerHTML +=
          '<dt><div class=\'dt-text\'>'
          + userName.value
          + '</div><button class=\'delete-user\'></button></dt>';

          savedNames = document.getElementById( 'user-names-2' ).innerHTML = savedNamesEdit;

              changeNumber();
}
 else {
  userName.select();
  inputUserNameLabel.innerHTML = 'Nome de participante inválido!';
  inputUserNameLabel.style.color = '#FFFF00';
  $( inputUserNameLabel ).removeClass( 'error-shake' ).addClass( 'error-shake' );

  setTimeout(function () {
    inputUserNameLabel.innerHTML = 'Digite o nome do participante';
    inputUserNameLabel.style.color = '#FFFFFF';
    $( inputUserNameLabel ).removeClass( 'error-shake' );
  }, 5000);
  }
}


/*//________________________________________________________
 Este plugin foi postado por "Andrea" no StackOverflow.com
-   permalink: http://stackoverflow.com/a/9964945
-   uso:    $("input").enterKey(function () {
            // Code
            });
*/
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
};
//__________________________________________________________
$(userName).enterKey(function () {
  sbmt();
});

$( d ).on('click','.delete-user',function () {
      $( this ).parent().remove();
      $( '#user-names-2' ).html($( '#user-names' ).html());
      $( '#user-names-manage' ).html($( '#user-names' ).html());

        changeNumber();

        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Salvar';
        saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';

});



// Começa o Sorteio Sortegram
function sgStart () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var sortear = Math.floor(Math.random() * ((Number(sgNoP.innerHTML) - 1) + 1) + 1),
    winner = sortear - 1;

    isNew.checked = true;

    sgResult.style.color = '#FFF';
    sgResult.style.fontSize = '38pt';
    document.getElementById( 'logo' ).innerHTML = 'Sorteando';

    $( '#logo' ).removeClass( 'logo-blink addfadeIn' ).addClass( 'logo-blink' );
    $( sgResult ).removeClass( 'addfadeIn' );

    nbOpsBtn.disabled = true;

var sort = setInterval(function() {
      sgGo.disabled = true;
      sgGo.style.display = hide;
      sgResult.style.display = show;
      sgResult.innerHTML = Math.floor(Math.random() * ((Number(sgNoP.innerHTML) - 1) + 1) + 1);


      if ( sgResult.innerHTML.length <= 10 ) {
          sgResult.style.fontSize = '30pt';
      }
      else if ( sgResult.innerHTML.length <= 19 ) {
          sgResult.style.fontSize = '20pt';
      }
      else if ( sgResult.innerHTML.length >= 20 ) {
          sgResult.style.fontSize = '12pt';
      }
}, 60);

  NoPdiv.style.display = hide;

      // Bloqueia o scroll enquanto o sorteio é feito
      $( '#user-names-2' ).removeClass( 'scroll' ).addClass( 'lock-scroll' );

      $( '#sg-result' ).before( '<div id=\'spinner\'><\/div>' );
      $( '#spinner' ).fadeIn();



// Exibe o 'Sorteando'
setTimeout(function() { // Timeout de 4s

$( '#user-names-2' ).animate({
  scrollTop: $( '#user-names-2 dt:nth-child(1)' ).position().top
}, 400);

      clearInterval(sort); // Remove o loop de numeros

              sgResult.innerHTML = sortear; // Exibe os resultados

              sgResult.style.color = '#FFF';
              sgResult.style.backgroundColor = 'transparent';

              document.getElementById( 'logo' ).innerHTML = 'Resultado';

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      sgCurrent = document.getElementById( 'sg-current' );
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = 's';
      }
      else if ( Number(n.value) === 1 ) {
        plural = '';
      }
      else {
        plural = 's';
      }



          // Mostra o trofeu
          $( '#sg-result' ).before( '<div id=\'trophy\'><\/div>' );
          $( '#trophy' ).show( 'bounce' );
          $( '#spinner' ).fadeOut();

          nbOpsBtn.disabled = false;

      // Imprime a data e hora do sorteio
      sgCurrent.innerHTML =
      'Sorteio feito em '
      + now
      +'.<br><br>';

      // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
      $( '#logo' ).removeClass( 'addfadeIn logo-blink' ).addClass( 'addfadeIn' );

// Mostra o nome do participante que venceu
      setTimeout(function () {

        if ( sortear === 1 ) {
          $( '#user-names-2' ).animate({
          scrollTop: $( '#user-names-2 dt:nth-child('+sortear+')' ).position().top
          }, 1000);
        }
        else {
          $( '#user-names-2' ).animate({
          scrollTop: $( '#user-names-2 dt:nth-child('+winner+')' ).position().top
          }, 1000);
        }

        $( '#user-names-2 dt:nth-child('+sortear+')' ).css({
          'background-color':'#FFF',
          'color':'#000',
          'border':'3px solid #F00'
          });


        // Permite o scroll quando o sorteio termina
        $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

          sgResult.innerHTML = $( '#user-names-2 dt:nth-child('+sortear+')' ).children().html();
          sgResult.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

          $( '.new-btn, .back-to-home-btn' ).show(); // Mostra o botao 'Novo Sorteio'

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( sgResult.innerHTML.length <= 10 ) {
          sgResult.style.fontSize = '30pt';
      }
       else if ( sgResult.innerHTML.length <= 19 ) {
          sgResult.style.fontSize = '20pt';
      }
        else if ( sgResult.innerHTML.length >= 20 ) {
      sgResult.style.fontSize = '12pt';
      }
    }, 2000);

  }, 4000);
};

// Desabilita o botao direito (ou o toque continuo)
$( d ).contextmenu(function() {
  return false;
});




// Funcao para selecionar o SC
function cRaffle () {
  $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'
  $( '#sg-manage' ).addClass( 'close' ).removeClass( 'open' );
  $( '#home' ).removeClass( 'open' ).addClass( 'close' );
    $( '#classic' ).removeClass( 'close' ).addClass( 'open' );
      document.getElementById( 'logo' ).innerHTML = 'Clássico';
}


// Funcao para selecionar o SS
function sgRaffle () {

  if ( isNew.checked === true ) { // Se NAO EXISTE jogo salvo
    sgNew();
  }
  else if ( isNew.checked === false ) { // Se EXISTE jogo salvo
    Last();
  }
}

// Funcao para limpar a lista de participantes
function deleteRaffle () {
  swal({
      title: 'Certeza?',
      text: 'Deseja mesmo excluir esse sorteio?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#35B138',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      allowOutsideClick: true,
      closeOnConfirm: false
    }, function() {
          savedNames = document.getElementById( 'user-names' ).innerHTML = '';
          document.getElementById( 'user-names-2' ).innerHTML = '';
          sgSaveList();
          changeNumber();

          home();

          sgManage.style.display = hide;

          localStorage.setItem( 'is-new',true );
          localStorage.setItem( 'saved-names-edit','' );

          isNew.checked = true;

      swal({
        title: 'Pronto!',
        text: 'Sorteio excluído.',
        type: 'success',
        timer: 5000,
        allowOutsideClick: true
      });

      Reload();
  });
}

// Remover todos sem confirmacao (atalho)
function removeAllNoConfirm () {
  savedNamesEdit = document.getElementById( 'user-names' ).innerHTML = '';
  document.getElementById( 'user-names-2' ).innerHTML = '';
  localStorage.setItem( 'saved-names-edit','' );
      sgSaveList();
      changeNumber();
      sgManage.style.display = hide;
}


function sgSaveList () {
  savedNamesEdit = document.getElementById( 'user-names' ).innerHTML;
  savedNamesMng = document.getElementById( 'user-names' ).innerHTML;
    localStorage.setItem( 'is-new',false );
    localStorage.setItem( 'saved-names-edit',savedNamesEdit );
}

function sgSaveRaffle () {
  if ( $( '#user-names > dt' ).size() > 0 ) {
      sgSaveList();
      changeNumber();
      sgManage.style.display = show;

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'Salvo';
      saveBtn.style.backgroundImage = 'url(img/ic_done_white_24dp_1x.png)';

      $( '#user-names-manage' ).html($( '#user-names' ).html());

      Reload();
    }
      else {
        return false;
      }
}

function sgRaffleReady () {
sgResult.style.backgroundColor = 'transparent';
  if ( isNew.checked
    && $( '#user-names > dt' ).size() > 1
    ) {
        $( '#user-names-2' ).html($( '#user-names' ).html());

        $( '#start-sortegram' ).removeClass( 'close' ).addClass( 'open' );
        $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
        $( '#home' ).removeClass( 'open' ).addClass( 'close' );
        $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );

        $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

        document.getElementById( 'logo' ).innerHTML = 'Sortegram';

        $('#user-names-2 .delete-user').hide();
    }

  else if (  !isNew.checked
          && $( '#user-names > dt' ).size() > 1
          ) {

          $( '#user-names-2' ).html($( '#user-names' ).html());

          $( '#start-sortegram' ).removeClass( 'close' ).addClass( 'open' );
          $( '#sg-manage' ).removeClass( 'open' ).addClass( 'close' );
          $( '#sortegram' ).removeClass( 'open' ).addClass( 'close' );

          $( '#user-names-2' ).removeClass( 'lock-scroll' ).addClass( 'scroll' );

          document.getElementById( 'logo' ).innerHTML = 'Sortegram';

          $('#user-names-2 .delete-user').hide();
    }
  else {
      swal({
        title: 'Erro :(',
        text: 'O sorteio precisa ter pelo menos 2 participantes!',
        type: 'error',
        timer: 10000,
        allowOutsideClick: true
      });
  }
  Reload();
}


$( '.ui-color-picker .ui-color' ).on( 'click', function () {

    if ( $( this ).hasClass( 'verde' ) ) {
      $bg_uiColor.css( 'background-color', green[0] );
      $btn_uiColor.css( 'background-color', green[1] );
      $fnt_uiColor.css( 'color', green[2] );
      localStorage.setItem( 'ui-color','green' );
    }
     else if ( $( this ).hasClass( 'azul' ) ) {
      $bg_uiColor.css( 'background-color', blue[0] );
      $btn_uiColor.css( 'background-color', blue[1] );
      $fnt_uiColor.css( 'color', blue[2] );
      localStorage.setItem( 'ui-color','blue' );
    }
     else if ( $( this ).hasClass( 'vermelho' ) ) {
      $bg_uiColor.css( 'background-color', red[0] );
      $btn_uiColor.css( 'background-color', red[1] );
      $fnt_uiColor.css( 'color', red[2] );
      localStorage.setItem( 'ui-color','red' );
    }
     else if ( $( this ).hasClass( 'amarelo' ) ) {
      $bg_uiColor.css( 'background-color', yellow[0] );
      $btn_uiColor.css( 'background-color', yellow[1] );
      $fnt_uiColor.css( 'color', yellow[2] );
      localStorage.setItem( 'ui-color','yellow' );
    }
     else if ( $( this ).hasClass( 'laranja' ) ) {
      $bg_uiColor.css( 'background-color', orange[0] );
      $btn_uiColor.css( 'background-color', orange[1] );
      $fnt_uiColor.css( 'color', orange[2] );
      localStorage.setItem( 'ui-color','orange' );
    }
     else if ( $( this ).hasClass( 'rosa' ) ) {
      $bg_uiColor.css( 'background-color', pink[0] );
      $btn_uiColor.css( 'background-color', pink[1] );
      $fnt_uiColor.css( 'color', pink[2] );
      localStorage.setItem( 'ui-color','pink' );
    }
     else if ( $( this ).hasClass( 'lilas' ) ) {
      $bg_uiColor.css( 'background-color', lilac[0] );
      $btn_uiColor.css( 'background-color', lilac[1] );
      $fnt_uiColor.css( 'color', lilac[2] );
      localStorage.setItem( 'ui-color','lilac' );
    }
     else if ( $( this ).hasClass( 'ciano' ) ) {
      $bg_uiColor.css( 'background-color', cyan[0] );
      $btn_uiColor.css( 'background-color', cyan[1] );
      $fnt_uiColor.css( 'color', cyan[2] );
      localStorage.setItem( 'ui-color','cyan' );
    }
     else if ( $( this ).hasClass( 'violeta' ) ) {
      $bg_uiColor.css( 'background-color', violet[0] );
      $btn_uiColor.css( 'background-color', violet[1] );
      $fnt_uiColor.css( 'color', violet[2] );
      localStorage.setItem( 'ui-color','violet' );
    }
});


x.oninput = function () {
    document.getElementById( 'x' ).setAttribute( 'max', y.value - 2 );
}

n.onchange = function () {
    if ( Number(n.value) >= Number(y.value)
      || Number(n.value) > Number(y.value) - x.value )
      { n.value = y.value - x.value;
      }
    if ( Number(x.value) > Number(y.value) ) {
      x.value = y.value - 2;
    }
    if ( Number(n.value) === 0 ) {
      n.value = 1;
      document.getElementById( 'numb-plural' ).innerHTML = '';
    }
    if ( Number(n.value) > 100 ) {
      n.value = 100;
      document.getElementById( 'numb-plural' ).innerHTML = 's';
    }
}

x.onchange = function () {
    if ( Number(x.value) >= Number(y.value) ) {
      x.value = y.value - 2;
    }
    if ( Number(n.value) >= Number(y.value)
      || Number(n.value) > Number(y.value) - x.value ) {
      n.value = y.value - x.value;
    }
}

n.oninput = function () {
    if ( this.value.length > 3 ) {
        this.value = this.value.slice( 0,3 );
    }

document.getElementById( 'n' ).setAttribute( 'max', y.value - x.value - 1 );

if ( Number(n.value) > 1 ) {
  document.getElementById( 'numb-plural' ).innerHTML = 's';
}
else if ( Number(n.value) === 1 ) {
  document.getElementById( 'numb-plural' ).innerHTML = '';
}
else if ( Number(n.value) === 0 ) {
  document.getElementById( 'numb-plural' ).innerHTML = 's';
}
}

x.oninput = function () {
    if ( this.value.length > 7 ) {
        this.value = this.value.slice( 0,7 );
        }
}

y.oninput = function () {
    if ( this.value.length > 7 ) {
        this.value = this.value.slice( 0,7 );
        }
}

userName.oninput = function () {
    if ( this.value.length > 30 ) {
        this.value = this.value.slice( 0,30 );
        }
}


// Reload script
function Reload () {
  $( '#script' ).remove();

  var _s = document.createElement( 'script' );
  _s.id = 'script';
  _s.src = 'js/sortegram.dev.js';
  document.body.appendChild( _s );
};
