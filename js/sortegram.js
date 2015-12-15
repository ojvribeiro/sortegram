"use strict";
var generate = document.getElementById('generate'),
    minMax = $('.min-max'),
    n = document.getElementById('n'),
    x = document.getElementById('x'),
    y = document.getElementById('y'),
    result = document.getElementById('result'),
    userName = document.getElementById('username'),
    inputUserNameLabel = document.getElementById('input-username-lbl'),
    savedNames = document.getElementById('user-names').innerHTML,
    getSavedNames = localStorage.getItem('saved-names');

if ( getSavedNames === null ) {
  document.getElementById('user-names').innerHTML = "";
}
 else {
  document.getElementById('user-names').innerHTML = getSavedNames;
}

$('#number-of-participants').html( $("#user-names > dt").size() );

if ( $("#user-names > dt").size() === 0 ) {
  document.getElementById('part-plural').innerHTML = "s";
}
 else if ( $("#user-names > dt").size() === 1 ) {
   document.getElementById('part-plural').innerHTML = "";
 }
  else {
   document.getElementById('part-plural').innerHTML = "s";
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
  document.getElementById('logo').innerHTML = "Novo Sorteio";
}

function SCnew () {
  generate.style.display = "block";
  result.style.display = "none";
  $('.SCnew-btn').hide();
  current.innerHTML = "";
  n.removeAttribute('disabled');
  x.removeAttribute('disabled');
  y.removeAttribute('disabled');
  generate.removeAttribute('disabled');
}

// Começa o sorteio Classico
function go () {
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

  if ( y.value.length !== 0 || x.value.length !== 0
    && x.value.match(/^(\d){0,7}$/g)
    && y.value.match(/^(\d){0,7}$/g)
    && n.value < y.value
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
      $(generate).hide();
      $(result).show();
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
if ( n.value !== "" ) { // Se o campo "n" NÃO estiver vazio...
      clearInterval(sort);
      $('.SCnew-btn').fadeIn();
              result.innerHTML = arr;
              result.style.color = "#FFF";
              result.style.backgroundColor = "rgba(242, 255, 0, 0.5)";
              result.style.borderTop = "3px dotted #FFF";
              result.style.borderBottom = "3px dotted #FFF";
              result.style.marginLeft = "-3px";
                        console.log(Number(x.value),Number(y.value));
                          document.getElementById('logo').innerHTML = "Resultado";

      // Acrescenta um tracinho apos cada numero do resultado
      result.innerHTML = result.innerHTML.replace(/,/g,' - ');

      // Retorna a data e hora atuais
      var now = new Date().toLocaleString(),
      plural,
      current = document.getElementById('current');
      if ( Number(n.value) > 1 ) {
        plural = "s";
      }
      else if ( Number(n.value) === 1 ) {
        plural = "";
      }
      else if ( Number(n.value) === 0 ) {
        plural = "s";
      }
      current.innerHTML =
      "Número"
      +plural
      +" gerado"
      +plural
      +" em "
      + now
      +"<br>(Horário de Brasília)<br><br>";


      $('#result').removeClass('addfadeIn result-rotate').addClass('addfadeIn');
      $('#logo').removeClass('addfadeIn logo-blink').addClass('addfadeIn');

      if ( result.innerHTML.length <= 12 ) {
          result.style.fontSize = "38pt";
      }
       else if ( result.innerHTML.length >= 13 ) {
          result.style.fontSize = "20pt";
      }
    }

  }, 4000);
  }
    else if ( x.value.match(/^(\d){8,99999999}$/g) || y.value.match(/^(\d){8,99999999}$/g) ) {
      alert('Os campos devem ter até 7 dígitos.');
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

// Seleciona o conteudo de y e x
$( '#n, #x, #y' ).on('click', function() {
    this.select();
});

// Altera o numero de participantes do sorteio Sortegram
function changeNumber () {
  document.getElementById('number-of-participants').innerHTML = $("#user-names > dt").size();

if ( $('#user-names > dt').size() === 0 ) {
  document.getElementById('part-plural').innerHTML = "s";
}
 else if ( $('#user-names > dt').size() === 1 ) {
   document.getElementById('part-plural').innerHTML = "";
 }
  else {
   document.getElementById('part-plural').innerHTML = "s";
 }
}

function sgSaveList () {
  savedNames = document.getElementById('user-names').innerHTML;
    localStorage.setItem('saved-names',savedNames);
}

// SORTEGRAM

function sbmt () { // Funcao que adiciona a lista o participante
  if ( userName.value.length !== 0
    && userName.value.match(/^@?([a-zA-Z0-9_. ]){1,30}$/g) ) {
    downList();
        userName.blur(); userName.select();
          savedNames = document.getElementById('user-names').innerHTML += "<dt>" +userName.value+ "<div class=\"delete-user\" onclick=\"$(this).parent().remove();sgSaveList();changeNumber();\"></div></dt>";

            sgSaveList();
              changeNumber();
}
 else {
  userName.select();
  inputUserNameLabel.innerHTML = "Nome de participante inválido!";
  inputUserNameLabel.style.color = "#FFABAB";
  }
}

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

// Funcao para selecionar o SC
function classicRaffle () {
  $('#start').addClass('close').removeClass('open');
    $('#classic').removeClass('close').addClass('open');
      document.getElementById('logo').innerHTML = "Clássico";
}

// Funcao para selecionar o SS
function newSGRaffle () {
  $('#start').addClass('close').removeClass('open');
    $('#sortegram').removeClass('close').addClass('open');
      document.getElementById('logo').innerHTML = "Sortegram";
}

// Funcao para limpar a lista de participantes
function sgRemoveAll () {
  if ( $("#user-names > dt").size() > 0 ) {
  var sgRemoval = confirm("Deseja mesmo remover todos os participantes?");

  if ( sgRemoval === true ) {
    savedNames = document.getElementById('user-names').innerHTML = "";
      sgSaveList();
        changeNumber();
      }
       else { return false; }
       }
        else {
          return false;
        }
}

function sgSaveRaffle () {
  return false;
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
