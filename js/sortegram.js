"use strict";
var generate = document.getElementById('generate'),
    SSgenerate = document.getElementById('ss-generate'),
    minMax = $('.min-max'),
    n = document.getElementById('n'),
    x = document.getElementById('x'),
    y = document.getElementById('y'),
    result = document.getElementById('result'),
    SSresult = document.getElementById('SSresult'),
    userName = document.getElementById('username'),
    inputUserNameLabel = document.getElementById('input-username-lbl'),
    scNoP = document.getElementById('number-of-participants'),
    ssNoP = document.getElementById('number-of-participants-2'),
    savedNames = document.getElementById('user-names').innerHTML,
    getSavedNames = localStorage.getItem('saved-names');



$(scNoP).html( $("#user-names > dt").size() );

if ( $("#user-names > dt").size() === 0 ) {
  document.getElementById('part-plural').innerHTML = "s";
  document.getElementById('part-plural-2').innerHTML = "s";
}
 else if ( $("#user-names > dt").size() === 1 ) {
   document.getElementById('part-plural').innerHTML = "";
   document.getElementById('part-plural-2').innerHTML = "";
 }
  else {
   document.getElementById('part-plural').innerHTML = "s";
   document.getElementById('part-plural-2').innerHTML = "s";
 }

// Rola a lista de participantes para o final
function downList() {
    $("#user-names").animate({
    scrollTop: $("#user-names")[0].scrollHeight
  }, 200);
}

// Novo sorteio
function novo () {
  result.style.color = "#FFF";
  result.style.backgroundColor = "rgba(236, 248, 255, 0.5)";
  result.style.borderTop = "3px solid #FFF";
  result.style.borderBottom = "3px solid #FFF";
  $('#start').removeClass('close').addClass('open');
    $('#classic').removeClass('open').addClass('close');
      $('#sortegram').removeClass('open').addClass('close');
        $('#start-sortegram').removeClass('open').addClass('close');
  document.getElementById('logo').innerHTML = "Novo";
  SSquit();
  SCnew();
}

// Reinicia o Sorteio Clássico
function SCnew () {
  generate.style.display = "block";
  result.style.display = "none";
  $('.new-btn').hide();
  current.innerHTML = "";
  n.removeAttribute('disabled');
  x.removeAttribute('disabled');
  y.removeAttribute('disabled');
  generate.removeAttribute('disabled');
}

// Reinicia o Sorteio Sortegram
function SSnew () {
  SSgenerate.style.display = "block";
  SSresult.style.display = "none";
  $('.new-btn').hide();
  SScurrent.innerHTML = "";
  SSgenerate.removeAttribute('disabled');
  newSGRaffle();
}

function SSquit () {
  SSgenerate.style.display = "block";
  SSresult.style.display = "none";
  $('.new-btn').hide();
  SScurrent.innerHTML = "";
  SSgenerate.removeAttribute('disabled');
}

// Começa o Sorteio Clássico
function SCgo () {
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
    result.style.color = "#888888";
    result.style.backgroundColor = "#FFF";
    result.style.fontSize = "38pt";
    result.style.borderRadius = "0px";
    document.getElementById('logo').innerHTML = "Sorteando...";

    $('#logo').removeClass('logo-blink addfadeIn').addClass('logo-blink');
    $(result).removeClass('result-rotate').addClass('result-rotate');
    $(result).removeClass('addfadeIn');

    var sort = setInterval(function() {
      n.setAttribute('disabled','true');
      x.setAttribute('disabled','true');
      y.setAttribute('disabled','true');
      generate.setAttribute('disabled','true');
      generate.style.display = "none";
      result.style.display = "block";
      result.innerHTML = Math.floor(Math.random() * ((Number(y.value) - Number(x.value)) + 1) + Number(x.value));

  if ( result.innerHTML.length <= 5 ) {
      result.style.fontSize = "38pt";
  }
   else if ( result.innerHTML.length >= 6 ) {
      result.style.fontSize = "20pt";
  }
}, 60);


// Resultado do sorteio
setTimeout(function() { // Timeout de 4s

if ( n.value !== "" ) { // Se o campo n NAO estiver vazio...
      clearInterval(sort); // Remove o loop de numeros
      $('.new-btn').fadeIn(); // Mostra o botao "Novo Sorteio"
              result.innerHTML = arr; // Exibe os resultados

              result.style.color = "#FFF";
              result.style.backgroundColor = "rgba(242, 255, 0, 0.5)";
              result.style.borderTop = "3px solid #FFF";
              result.style.borderBottom = "3px solid #FFF";
              result.style.marginLeft = "-3px";

              document.getElementById('logo').innerHTML = "Resultado";

      // Acrescenta um tracinho apos cada numero do resultado
      result.innerHTML = result.innerHTML.replace(/,/g,' - ');

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      current = document.getElementById('current');
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = "s";
      }
      else if ( Number(n.value) === 1 ) {
        plural = "";
      }
      else if ( Number(n.value) === 0 ) {
        plural = "s";
      }

      // Imprime a data e hora do sorteio
      current.innerHTML =
      "Número"
      +plural
      +" gerado"
      +plural
      +" em "
      + now
      +".<br><br>";

      // Remove o efeito de fadeIn e rotacao
      $('#result').removeClass('addfadeIn result-rotate').addClass('addfadeIn');
      $('#logo').removeClass('addfadeIn logo-blink').addClass('addfadeIn');

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( result.innerHTML.length <= 12 ) {
          result.style.fontSize = "38pt";
      }
       else if ( result.innerHTML.length >= 13 ) {
          result.style.fontSize = "20pt";
      }
    };

  }, 4000);
  }
    else {
      alert('Preencha os campos de número Máximo e Mínimo corretamente.');
    }
}

// Abre o menu lateral
document.getElementById('navbar-ops-btn').addEventListener('click', function() {
      $('#sidebar').removeClass('close').addClass('open');
        document.getElementById('sidebar-overlay').style.display = "block";
          document.getElementById('navbar-ops-btn').style.display = "none";
            document.getElementById('navbar-ops-btn-close').style.display = "block";
});

// Fecha o menu lateral
document.addEventListener('click', function(event) {
    if ( !$(event.target).closest("#sidebar, #navbar-ops-btn").length
      || $(event.target).closest(".sidebar-op").length ) {
      $( '#sidebar' ).removeClass('open').addClass('close');
        $( '#sidebar-overlay' ).fadeOut();
          document.getElementById('navbar-ops-btn-close').style.display = "none";
            document.getElementById('navbar-ops-btn').style.display = "block";
    }
});

// Seleciona o conteudo de n, y e x
$( '#n, #x, #y' ).on('click', function() {
    this.select();
});

// Altera o numero de participantes do sorteio Sortegram
function changeNumber () {
  scNoP.innerHTML = $("#user-names > dt").size();
  ssNoP.innerHTML = $("#user-names > dt").size();

if ( $('#user-names > dt').size() === 0 ) {
  document.getElementById('part-plural').innerHTML = "s";
  document.getElementById('part-plural-2').innerHTML = "s";
}
 else if ( $('#user-names > dt').size() === 1 ) {
   document.getElementById('part-plural').innerHTML = "";
   document.getElementById('part-plural-2').innerHTML = "";
 }
  else {
   document.getElementById('part-plural').innerHTML = "s";
   document.getElementById('part-plural-2').innerHTML = "s";
 }
}

function sgSaveList () {
  savedNames = document.getElementById('user-names-2').innerHTML;
    localStorage.setItem('saved-names',savedNames);
}

// SORTEGRAM

function sbmt () { // Funcao que adiciona a lista o participante
  if ( userName.value.length !== 0
    && userName.value.match(/^@?([a-zA-Z0-9_. ]){1,30}$/g) ) {
    downList();
        userName.blur(); userName.select();

          savedNames = document.getElementById('user-names').innerHTML +=
          "<dt>"
          + userName.value
          + "<div class=\"delete-user\" \
          onclick=\"$(this).parent().remove(); \
          sgSaveList();\
          changeNumber();\"></div></dt>";

          document.getElementById('user-names-2').innerHTML +=
          "<dt>" +userName.value+ "</dt>";

            sgSaveList();
              changeNumber();
}
 else {
  userName.select();
  inputUserNameLabel.innerHTML = "Nome de participante inválido!";
  inputUserNameLabel.style.color = "#FFFF00";
  $(inputUserNameLabel).removeClass('error-shake').addClass('error-shake');

  setTimeout(function () {
    inputUserNameLabel.innerHTML = "Digite o nome do participante";
    inputUserNameLabel.style.color = "#66FF73";
    $(inputUserNameLabel).removeClass('error-shake');
  }, 5000);
  }
}


// Começa o Sorteio Sortegram
function SSgo () {
// Cria uma array com a quantidade de numeros dada de modo que não se repitam
var sortear = Math.floor(Math.random() * ((Number(ssNoP.innerHTML) - 1) + 1) + 1);

    SSresult.style.color = "#888888";
    SSresult.style.backgroundColor = "#FFF";
    SSresult.style.fontSize = "38pt";
    SSresult.style.borderRadius = "0px";
    document.getElementById('logo').innerHTML = "Sorteando...";

    $('#logo').removeClass('logo-blink addfadeIn').addClass('logo-blink');
    $(SSresult).removeClass('result-rotate').addClass('result-rotate');
    $(SSresult).removeClass('addfadeIn');

    var sort = setInterval(function() {
      SSgenerate.setAttribute('disabled','true');
      SSgenerate.style.display = "none";
      SSresult.style.display = "block";
      SSresult.innerHTML = Math.floor(Math.random() * ((Number(ssNoP.innerHTML) - 1) + 1) + 1);

  if ( SSresult.innerHTML.length <= 5 ) {
      SSresult.style.fontSize = "30pt";
  }
   else if ( SSresult.innerHTML.length >= 6 ) {
      SSresult.style.fontSize = "20pt";
  }
}, 60);


// Resultado do SS
setTimeout(function() { // Timeout de 4s

      clearInterval(sort); // Remove o loop de numeros
      $('.new-btn').show(); // Mostra o botao "Novo Sorteio"
              SSresult.innerHTML = sortear; // Exibe os resultados

              SSresult.style.color = "#FFF";
              SSresult.style.backgroundColor = "rgba(242, 255, 0, 0.5)";
              SSresult.style.marginLeft = "-3px";

              document.getElementById('logo').innerHTML = "Resultado";

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      SScurrent = document.getElementById('SScurrent');
      // Plural ou singular?
      if ( Number(n.value) > 1 ) {
        plural = "s";
      }
      else if ( Number(n.value) === 1 ) {
        plural = "";
      }
      else if ( Number(n.value) === 0 ) {
        plural = "s";
      }

      // Imprime a data e hora do sorteio
      SScurrent.innerHTML =
      "Sorteio gerado em "
      + now
      +".<br><br>";

      // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
      $('#logo').removeClass('addfadeIn logo-blink').addClass('addfadeIn');

      // Mostra o nome d(o|a) participante que venceu
      setTimeout(function () {
        scrollTop:$('#user-names-2 dt:nth-child(1)').position().top
        $('#user-names-2').animate({
          scrollTop:$('#user-names-2 dt:nth-child('+sortear+')').position().top
        }, 1000);

        $('#user-names-2 dt:nth-child('+sortear+')').css({
          'background-color':'#00FFCD',
          'color':'#000'
          });

          SSresult.innerHTML = $('#user-names-2 dt:nth-child('+sortear+')').html();
          SSresult.style.backgroundColor = "rgb(38, 167, 49)";


      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( SSresult.innerHTML.length <= 10 ) {
          SSresult.style.fontSize = "30pt";
      }
       else  {
          SSresult.style.fontSize = "20pt";
      }
    }, 2000)

  }, 4000);
};

// Desabilita o botao direito (ou o toque continuo)
$(document).contextmenu(function() {
  return false;
});

// Seleciona o sorteio Classico (SC)
document.getElementById('classic-raffle').addEventListener('click', function () {
  classicRaffle();
});

// Seleciona o sorteio Sortegram (SS)
document.getElementById('sortegram-raffle').addEventListener('click', function () {
  newSGRaffle();
});

// Salva a lista de participantes do SS
document.getElementById('sg-save').addEventListener('click', function () {
  sgSaveRaffle();
});

// Funcao para selecionar o SC
function classicRaffle () {
  $('.new-btn').hide(); // Esconde o botao "Novo Sorteio"
  $('#start').addClass('close').removeClass('open');
    $('#classic').removeClass('close').addClass('open');
      document.getElementById('logo').innerHTML = "Clássico";
}


// Funcao para selecionar o SS
function newSGRaffle () {
  userName.value = "";
  userName.focus();
  $('.new-btn').hide(); // Esconde o botao "Novo Sorteio"
  $('#start').addClass('close').removeClass('open');
    $('#sortegram').removeClass('close').addClass('open');
    $('#start-sortegram').addClass('close').removeClass('open');
      document.getElementById('logo').innerHTML = "Sortegram";
  removeAllNoConfirm();
}

// Funcao para limpar a lista de participantes
function sgRemoveAll () {
  if ( $("#user-names > dt").size() > 0 ) {
  var sgRemoval = confirm("Deseja mesmo remover todos os participantes?");

  if ( sgRemoval === true ) {
    savedNames = document.getElementById('user-names').innerHTML = "";
    document.getElementById('user-names-2').innerHTML = "";
      sgSaveList();
        changeNumber();
      }
       else { return false; }
       }
        else {
          return false;
        }
}
// Remover todos sem confirmacao (atalho)
function removeAllNoConfirm () {
  savedNames = document.getElementById('user-names').innerHTML = "";
  document.getElementById('user-names-2').innerHTML = "";
    sgSaveList();
      changeNumber();
}

function sgSaveRaffle () {
  if ($("#user-names > dt").size() > 1) {
  $('#start').addClass('close').removeClass('open');
    $('#sortegram').addClass('close').removeClass('open');
    $('#start-sortegram').removeClass('close').addClass('open');
      document.getElementById('logo').innerHTML = "Sortegram";
    }
      else {
        alert('O sorteio precisa ter pelo menos 2 participantes!');
      }
}



x.oninput = function () {
    document.getElementById("x").setAttribute("max", y.value - 2);
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
      document.getElementById('numb-plural').innerHTML = "";
    }
    if ( Number(n.value) > 100 ) {
      n.value = 100;
      document.getElementById('numb-plural').innerHTML = "s";
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
    if (this.value.length > 3) {
        this.value = this.value.slice(0,3);
    }

document.getElementById("n").setAttribute("max", y.value - x.value - 1);

if (Number(n.value) > 1) {
  document.getElementById('numb-plural').innerHTML = "s";
}
else if (Number(n.value) === 1) {
  document.getElementById('numb-plural').innerHTML = "";
}
else if (Number(n.value) === 0) {
  document.getElementById('numb-plural').innerHTML = "s";
}
}

x.oninput = function () {
    if (this.value.length > 7) {
        this.value = this.value.slice(0,7);
        }
}

y.oninput = function () {
    if (this.value.length > 7) {
        this.value = this.value.slice(0,7);
        }
}
