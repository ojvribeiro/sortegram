/*
  Sortegram.js
  author  :  Victor Ribeiro
  site    :  http://sortegram.com/
  github  :  http://github.com/sortegram/sortegram
  licence : MIT
*/

"use strict";
// Define all vars
var generate = document.getElementById('generate'),
    SSgenerate = document.getElementById('ss-generate'),
    minMax = $('.min-max'),

    // Style vars
    show = "block",
    hide = "none",

    // Colors vars
    green = "#148000",
    blue = "#2881FF",
    red = "#FF0000",
    yellow = "#BFBF00",
    orange = "#FF8A00",
    pink = "#FF7CFC",
    lilac = "#C56BFF",
    cyan = "#1AD2E2",
    violet = "#FF00CB",

    // Number input vars
    n = document.getElementById('n'),
    x = document.getElementById('x'),
    y = document.getElementById('y'),

    // DOM vars
    uiColor = document.getElementById('cover'),
    sb_uiColor = document.getElementById('sidebar'),
    result = document.getElementById('result'),
    SSresult = document.getElementById('SSresult'),
    userName = document.getElementById('username'),
    inputUserNameLabel = document.getElementById('input-username-lbl'),
    scNoP = document.getElementById('number-of-participants'),
    ssNoP = document.getElementById('number-of-participants-2'),
    newOp = document.getElementById('newOp'),
    sgManage = document.getElementById('sgManage'),
    NoPdiv = document.getElementById('NoPdiv'),
    savedNames = document.getElementById('user-names-2'),
    savedNamesEdit = document.getElementById('user-names'),
    saveBtn = document.getElementById('sg-save'),
    deleteBtn = document.getElementById('delete-all'),
    isNew = document.getElementById('is-new'),
    nbOpsBtn = document.getElementById('navbar-ops-btn'),
    nbOpsBtnClose = document.getElementById('navbar-ops-btn-close'),

    // LocalStorage vars
    LSuiColor = localStorage.getItem('ui-color'),
    LSisNew = localStorage.getItem('is-new'),
    LSsavedNames = localStorage.getItem('saved-names'),
    LSsavedNamesEdit = localStorage.getItem('saved-names-edit');




setInterval(function() {
  if ( LSisNew === "true" ) {
  isNew.checked = true;
} else {
  isNew.checked = false;
}
}, 100);




if (!localStorage['is-new']) {
  localStorage.setItem('is-new',true);
  localStorage.setItem('saved-names','');
  localStorage.setItem('saved-names-edit','');
  sgManage.style.display = hide;
  window.location.reload();
}
else if (LSisNew === true) {
  sgManage.style.display = hide;
}
else if (LSisNew === false) {
  sgManage.style.display = show;
  deleteBtn.disabled = false;
}




if (!localStorage['ui-color']) {
  localStorage.setItem('ui-color','');
}
else if (LSuiColor === 'green') {
      $(uiColor).css('background',green);
      $(sb_uiColor).css('background',green);
} else if (LSuiColor === 'blue') {
      $(uiColor).css('background',blue);
      $(sb_uiColor).css('background',blue);
} else if (LSuiColor === 'red') {
      $(uiColor).css('background',red);
      $(sb_uiColor).css('background',red);
} else if (LSuiColor === 'yellow') {
      $(uiColor).css('background',yellow);
      $(sb_uiColor).css('background',yellow);
} else if (LSuiColor === 'orange') {
      $(uiColor).css('background',orange);
      $(sb_uiColor).css('background',orange);
} else if (LSuiColor === 'pink') {
      $(uiColor).css('background',pink);
      $(sb_uiColor).css('background',pink);
} else if (LSuiColor === 'lilac') {
      $(uiColor).css('background',lilac);
      $(sb_uiColor).css('background',lilac);
} else if (LSuiColor === 'cyan') {
      $(uiColor).css('background',cyan);
      $(sb_uiColor).css('background',cyan);
} else if (LSuiColor === 'violet') {
      $(uiColor).css('background',violet);
      $(sb_uiColor).css('background',violet);
}



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




// Inicio
function home() {
  result.style.color = "#FFF";
  result.style.backgroundColor = "rgba(236, 248, 255, 0.5)";
  result.style.borderTop = "3px solid #FFF";
  result.style.borderBottom = "3px solid #FFF";
  $('#home').removeClass('close').addClass('open');
  $('#start').removeClass('open').addClass('close');
    $('#classic').removeClass('open').addClass('close');
      $('#sortegram').removeClass('open').addClass('close');
        $('#start-sortegram').removeClass('open').addClass('close');
  document.getElementById('logo').innerHTML = "Sortegram";
  SSquit();
  SCnew();
}




// Gerenciar SS
function SG() {
  result.style.color = "#FFF";
  result.style.backgroundColor = "rgba(236, 248, 255, 0.5)";
  result.style.borderTop = "3px solid #FFF";
  result.style.borderBottom = "3px solid #FFF";
  $('#start').removeClass('close').addClass('open');
    $('#home').removeClass('open').addClass('close');
    $('#classic').removeClass('open').addClass('close');
      $('#sortegram').removeClass('open').addClass('close');
        $('#start-sortegram').removeClass('open').addClass('close');
  document.getElementById('logo').innerHTML = "Gerenciar";
  SSquit();
  SCnew();
}




// Ultimo sorteio
function Last() {

      $('#start').removeClass('close').addClass('open');
      $('#sortegram').removeClass('open').addClass('close');
      $('#start-sortegram').removeClass('open').addClass('close');
      $('#home').removeClass('open').addClass('close');
}

function editLast () {

      userName.value = "";
      userName.focus();
      $('.new-btn, .back-to-home-btn').hide(); // Esconde o botao "Novo Sorteio"

      $('#sortegram').removeClass('close').addClass('open');
      $('#start').removeClass('open').addClass('close');
      $('#start-sortegram').removeClass('open').addClass('close');
      $('#home').removeClass('open').addClass('close');

        document.getElementById('logo').innerHTML = "Editar";
        savedNamesEdit = document.getElementById('user-names').innerHTML = LSsavedNamesEdit;
        changeNumber();

      saveBtn.disabled = true;
      saveBtn.innerHTML = "Salvo";
      saveBtn.style.backgroundImage = "url(img/ic_done_white_24dp_1x.png)";

}





// Reinicia o Sorteio Clássico
function SCnew () {
  generate.style.display = show;
  result.style.display = hide;
  $('.new-btn, .back-to-home-btn').hide();
  current.innerHTML = "";
  n.removeAttribute('disabled');
  x.removeAttribute('disabled');
  y.removeAttribute('disabled');
  generate.removeAttribute('disabled');
}



// Reinicia o Sorteio Sortegram
function SSnew () {
  SSgenerate.style.display = show;
  SSresult.style.display = hide;
  $('.new-btn, .back-to-home-btn').hide();
  SScurrent.innerHTML = "";
  SSgenerate.removeAttribute('disabled');

      // Esconde o trofeu
    $('#trophy').hide();
    NoPdiv.style.display = show;
    SSresult.style.boxShadow = hide;

      userName.value = "";
      userName.focus();

        $('.new-btn, .back-to-home-btn').hide(); // Esconde o botao "Novo Sorteio"

        $('#sortegram').removeClass('close').addClass('open');
        $('#start').removeClass('open').addClass('close');
        $('#start-sortegram').removeClass('open').addClass('close');
        $('#home').removeClass('open').addClass('close');

        document.getElementById('logo').innerHTML = "Adicionar";

      savedNamesEdit = document.getElementById('user-names').innerHTML = "";
      document.getElementById('user-names-2').innerHTML = "";


      changeNumber();
      sgManage.style.display = hide;

      saveBtn.disabled = true;
      saveBtn.innerHTML = "Salvar";
      saveBtn.style.backgroundImage = "url(img/appbar.save.png)";
}




function SSquit () {
  SSgenerate.style.display = show;
  SSresult.style.display = hide;
  $('.new-btn, .back-to-home-btn').hide();
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
    document.getElementById('logo').innerHTML = "Sorteando";

    $('#logo').removeClass('logo-blink addfadeIn').addClass('logo-blink');
    $(result).removeClass('result-rotate').addClass('result-rotate');
    $(result).removeClass('addfadeIn');

    var sort = setInterval(function() {
      n.setAttribute('disabled','true');
      x.setAttribute('disabled','true');
      y.setAttribute('disabled','true');
      generate.setAttribute('disabled','true');
      generate.style.display = hide;
      result.style.display = show;
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
      $('.new-btn, .back-to-home-btn').fadeIn(); // Mostra o botao "Novo Sorteio"
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
      swal('Erro :(','Preencha os campos de número Máximo e Mínimo corretamente.','error');
    }
}

        // Abre o menu lateral
        nbOpsBtn.addEventListener('click', function() {
        $('#sidebar').removeClass('close').addClass('open');
        document.getElementById('sidebar-overlay').style.display = show;
        nbOpsBtn.style.display = hide;
        nbOpsBtnClose.style.display = show;
        });

        // Fecha o menu lateral
        document.addEventListener('click', function(event) {
          if ( !$(event.target).closest("#sidebar, #navbar-ops-btn").length
            || $(event.target).closest(".sidebar-op").length ) {
              $( '#sidebar' ).removeClass('open').addClass('close');
              document.getElementById('sidebar-overlay').style.display = hide;
              nbOpsBtnClose.style.display = hide;
              nbOpsBtn.style.display = show;
            }
          });

// Seleciona o conteudo de n, y e x
$( '#n, #x, #y' ).on('focus', function() {
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




// SORTEGRAM

function sbmt () { // Funcao que adiciona a lista o participante
  if ( userName.value.length !== 0
    && userName.value.match(/^@?([\w\W]){1,30}$/g)
    ) {
        downList();

        saveBtn.disabled = false;
        deleteBtn.disabled = false;
        saveBtn.innerHTML = "Salvar";
        saveBtn.style.backgroundImage = "url(img/appbar.save.png)";

        userName.blur(); userName.select();

          savedNamesEdit = document.getElementById('user-names').innerHTML +=
          "<dt><div class=\"dt-text\">"
          + userName.value
          + "</div><div class=\"delete-user\" \
          onclick=\"$(this).parent().remove(); \
          sgSaveList();\
          changeNumber();\"></div></dt>";

          savedNames = document.getElementById('user-names-2').innerHTML +=
          "<dt><div class=\"dt-text\">" +userName.value+ "</div></dt>";

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
var sortear = Math.floor(Math.random() * ((Number(ssNoP.innerHTML) - 1) + 1) + 1),
    winner = sortear - 1;

    localStorage.setItem('is-new',true);
    localStorage.setItem('saved-names','');
    localStorage.setItem('saved-names-edit','');

    isNew.checked = true;

    SSresult.style.color = "#FFF";
    SSresult.style.fontSize = "38pt";
    document.getElementById('logo').innerHTML = "Sorteando";

    $('#logo').removeClass('logo-blink addfadeIn').addClass('logo-blink');
    $(SSresult).removeClass('result-rotate').addClass('result-rotate');
    $(SSresult).removeClass('addfadeIn');

    nbOpsBtn.disabled = true;

var sort = setInterval(function() {
      SSgenerate.setAttribute('disabled','true');
      SSgenerate.style.display = hide;
      SSresult.style.display = show;
      SSresult.innerHTML = Math.floor(Math.random() * ((Number(ssNoP.innerHTML) - 1) + 1) + 1);


      if ( SSresult.innerHTML.length <= 10 ) {
          SSresult.style.fontSize = "30pt";
      }
      else if ( SSresult.innerHTML.length <= 19 ) {
          SSresult.style.fontSize = "20pt";
      }
      else if ( SSresult.innerHTML.length >= 20 ) {
          SSresult.style.fontSize = "12pt";
      }
}, 60);

  NoPdiv.style.display = hide;

      // Bloqueia o scroll enquanto o sorteio é feito
      $('#user-names-2').removeClass('scroll').addClass('lock-scroll');

      $('#SSresult').before('<div id=\"spinner\"><\/div>');
      $('#spinner').fadeIn();

// Exibe o "Sorteando"
setTimeout(function() { // Timeout de 4s

$('#user-names-2').animate({
  scrollTop:$('#user-names-2 dt:nth-child(1)').position().top
}, 400);

      clearInterval(sort); // Remove o loop de numeros

              SSresult.innerHTML = sortear; // Exibe os resultados

              SSresult.style.color = "#FFF";
              SSresult.style.backgroundColor = "transparent";

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



          // Mostra o trofeu
          $('#SSresult').before('<div id=\"trophy\"><\/div>');
          $('#trophy').show('bounce');
          $('#spinner').fadeOut();

          nbOpsBtn.disabled = false;

      // Imprime a data e hora do sorteio
      SScurrent.innerHTML =
      "Sorteio feito em "
      + now
      +".<br><br>";

      // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
      $('#logo').removeClass('addfadeIn logo-blink').addClass('addfadeIn');

// Mostra o nome do participante que venceu
      setTimeout(function () {

        if (sortear === 1) {
          $('#user-names-2').animate({
          scrollTop:$('#user-names-2 dt:nth-child('+sortear+')').position().top
          }, 1000);
        }
        else {
          $('#user-names-2').animate({
          scrollTop:$('#user-names-2 dt:nth-child('+winner+')').position().top
          }, 1000);
        }

        $('#user-names-2 dt:nth-child('+sortear+')').css({
          'background-color':'#FFF',
          'color':'#000',
          'border':'3px solid #F00'
          });


        // Permite o scroll quando o sorteio termina
        $('#user-names-2').removeClass('lock-scroll').addClass('scroll');

          SSresult.innerHTML = $('#user-names-2 dt:nth-child('+sortear+')').children().html();
          SSresult.style.backgroundColor = "#37BD1E";
          SSresult.style.boxShadow = "0px 10px 10px #0A3E00";

          $('.new-btn, .back-to-home-btn').show(); // Mostra o botao "Novo Sorteio"

      // Aumenta ou diminui a fonte de acordo com o resultado
      if ( SSresult.innerHTML.length <= 10 ) {
          SSresult.style.fontSize = "30pt";
      }
       else if ( SSresult.innerHTML.length <= 19 ) {
          SSresult.style.fontSize = "20pt";
      }
        else if ( SSresult.innerHTML.length >= 20 ) {
      SSresult.style.fontSize = "12pt";
      }
    }, 2000);

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


// Salva a lista de participantes do SS
document.getElementById('sg-save').addEventListener('click', function () {
  sgSaveRaffle();
});

// Prepara o SS
document.getElementById('sg-done').addEventListener('click', function () {
  sgRaffleReady();
});


function sgSaveList () {
    localStorage.setItem('is-new',false);
    localStorage.setItem('saved-names',savedNames);
    localStorage.setItem('saved-names-edit',savedNamesEdit);
}

// Funcao para selecionar o SC
function classicRaffle () {
  $('.new-btn, .back-to-home-btn').hide(); // Esconde o botao "Novo Sorteio"
  $('#start').addClass('close').removeClass('open');
  $('#home').removeClass('open').addClass('close');
    $('#classic').removeClass('close').addClass('open');
      document.getElementById('logo').innerHTML = "Clássico";
}


// Funcao para selecionar o SS
function sgRaffle () {

  if ( isNew.checked === true ) { // Se NAO EXISTE jogo salvo
    SSnew();
  }
  else if ( isNew.checked === false ) { // Se EXISTE jogo salvo
    Last();
  }
}

// Funcao para limpar a lista de participantes
function deleteRaffle () {
  swal({
      title: "Certeza?",
      text: "Deseja mesmo excluir esse sorteio?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35B138",
      cancelButtonText: "Não",
      confirmButtonText: "Sim",
      allowOutsideClick: true,
      closeOnConfirm: false
    }, function() {
          savedNames = document.getElementById('user-names').innerHTML = "";
          document.getElementById('user-names-2').innerHTML = "";
          sgSaveList();
          changeNumber();

          home();

          sgManage.style.display = hide;

          localStorage.setItem('is-new',true);
          localStorage.setItem('saved-names','');
          localStorage.setItem('saved-names-edit','');

          isNew.checked = true;

      swal({
        title: "Pronto!",
        text: "Sorteio excluído.",
        type: "success",
        timer: 5000,
        allowOutsideClick: true
      });

      Reload();
  });
}

// Remover todos sem confirmacao (atalho)
function removeAllNoConfirm () {
  savedNamesEdit = document.getElementById('user-names').innerHTML = "";
  document.getElementById('user-names-2').innerHTML = "";
  localStorage.setItem('saved-names','');
  localStorage.setItem('saved-names-edit','');
      sgSaveList();
      changeNumber();
      sgManage.style.display = hide;
}

function sgSaveRaffle () {
  if ($("#user-names > dt").size() > 0) {
      sgSaveList();
      changeNumber();
      sgManage.style.display = show;

      saveBtn.disabled = true;
      saveBtn.innerHTML = "Salvo";
      saveBtn.style.backgroundImage = "url(img/ic_done_white_24dp_1x.png)";

      Reload();
    }
      else {
        return false;
      }
}

function sgRaffleReady () {
  if ( isNew.checked
    && $("#user-names > dt").size() > 1
    ) {

        $('#start-sortegram').removeClass('close').addClass('open');
        $('#start').removeClass('open').addClass('close');
        $('#home').removeClass('open').addClass('close');
        $('#sortegram').removeClass('open').addClass('close');

        $('#user-names-2').removeClass('lock-scroll').addClass('scroll');

        document.getElementById('logo').innerHTML = "Sortegram";

        localStorage.setItem('is-new',true);
        localStorage.setItem('saved-names','');
        localStorage.setItem('saved-names-edit','');

        isNew.checked = true;

        sgManage.style.display = hide;
    }

  else if (  !isNew.checked
          && LSsavedNames !== ''
          && $("#user-names > dt").size() > 1
          ) {

          savedNames = document.getElementById('user-names-2').innerHTML = LSsavedNames;

          $('#start-sortegram').removeClass('close').addClass('open');
          $('#start').removeClass('open').addClass('close');
          $('#sortegram').removeClass('open').addClass('close');

          $('#user-names-2').removeClass('lock-scroll').addClass('scroll');

          document.getElementById('logo').innerHTML = "Sortegram";

          localStorage.setItem('is-new',true);
          localStorage.setItem('saved-names','');
          localStorage.setItem('saved-names-edit','');

          isNew.checked = true;

          sgManage.style.display = hide;
    }
  else {
      swal({
        title: "Erro :(",
        text: "O sorteio precisa ter pelo menos 2 participantes!",
        type: "error",
        timer: 10000,
        allowOutsideClick: true
      });
  }
  Reload();
}


$('.ui-color-picker .ui-color').on('click', function () {
    if ( $(this).hasClass('verde') ) {
      $(uiColor).css('background',green);
      $(sb_uiColor).css('background',green);
      localStorage.setItem('ui-color','green');
    } else if ( $(this).hasClass('azul') ) {
      $(uiColor).css('background',blue);
      $(sb_uiColor).css('background',blue);
      localStorage.setItem('ui-color','blue');
    } else if ( $(this).hasClass('vermelho') ) {
      $(uiColor).css('background',red);
      $(sb_uiColor).css('background',red);
      localStorage.setItem('ui-color','red');
    } else if ( $(this).hasClass('amarelo') ) {
      $(uiColor).css('background',yellow);
      $(sb_uiColor).css('background',yellow);
      localStorage.setItem('ui-color','yellow');
    } else if ( $(this).hasClass('laranja') ) {
      $(uiColor).css('background',orange);
      $(sb_uiColor).css('background',orange);
      localStorage.setItem('ui-color','orange');
    } else if ( $(this).hasClass('rosa') ) {
      $(uiColor).css('background',pink);
      $(sb_uiColor).css('background',pink);
      localStorage.setItem('ui-color','pink');
    } else if ( $(this).hasClass('lilas') ) {
      $(uiColor).css('background',lilac);
      $(sb_uiColor).css('background',lilac);
      localStorage.setItem('ui-color','lilac');
    } else if ( $(this).hasClass('ciano') ) {
      $(uiColor).css('background',cyan);
      $(sb_uiColor).css('background',cyan);
      localStorage.setItem('ui-color','cyan');
    } else if ( $(this).hasClass('violeta') ) {
      $(uiColor).css('background',violet);
      $(sb_uiColor).css('background',violet);
      localStorage.setItem('ui-color','violet');
    }
});


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
      document.getElementById('numb-plural').innerHTML = '';
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

userName.oninput = function () {
    if (this.value.length > 30) {
        this.value = this.value.slice(0,30);
        }
}


// Reload script
function Reload () {
  $('#script').remove();

  var _s = document.createElement("script");
  _s.id = "script";
  _s.src = "js/sortegram.js";
  document.body.appendChild(_s);
};
