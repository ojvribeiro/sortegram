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
    nbOpsBtn.disabled = true;
    status( 'Sorteando...' );

    $( '.sg_SavedRaffles_Btn' ).hide();

    $( '#statusTitle_Bar' ).removeClass( 'statusTitle_Bar-blink addfadeIn' ).addClass( 'statusTitle_Bar-blink' );
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
      $( '.sg_SavedRaffles_Btn' ).show();
      $( '[onclick="cNew()"]' ).show(); // Mostra o botao 'Novo Sorteio'
      hlTip(5000);
              cResult.innerHTML = arr; // Exibe os resultados

              cResult.style.color = '#FFF';
              cResult.style.backgroundColor = 'rgba(8, 181, 20, 0.5)';
              cResult.style.borderTop = '3px solid #FFF';
              cResult.style.borderBottom = '3px solid #FFF';
              cResult.style.marginLeft = '-3px';
              nbOpsBtn.disabled = false;

              status( 'Resultado' );

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
      $( '#statusTitle_Bar' ).removeClass( 'addfadeIn statusTitle_Bar-blink' ).addClass( 'addfadeIn' );

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
    else if ( Number(n.value) >= Number(y.value) ) {
      swal('Erro :(','','error');
    }
    else {
      swal('Erro :(','Preencha os campos de número Máximo e Mínimo corretamente.','error');
    }
}



// Seleciona o conteudo de n, y e x
$( '#n, #x, #y' ).on( 'focus', function ()
 {
    this.select();
});
