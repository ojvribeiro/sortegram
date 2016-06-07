/*
  Sortegram.js
  author  :  Victor Ribeiro
  site    :  http://sortegram.com/
  github  :  http://github.com/sortegram/sortegram
  licence : MIT
*/

// Define all vars
var d = document,
    w = window,
    cGo = document.getElementById( 'c-go' ),
    sgGo = document.getElementById( 'sg-go' ),
    minMax = $( '.min-max' ),

    // Style vars
    show = 'block',
    hide = 'none',

    // Number input vars
    n = document.getElementById( 'n' ),
    x = document.getElementById( 'x' ),
    y = document.getElementById( 'y' ),

    // DOM vars
    cResult = document.getElementById( 'c-result' ),
    sgResult = document.getElementById( 'sg-result' ),
    userName_Input = document.getElementById( 'userName_Input' ),
    inputUserNameLabel = document.getElementById( 'userName_Input-Label' ),
    sg_Number_of_PartEditing = document.getElementById( 'part_Number' ),
    sg_Number_of_Part = document.getElementById( 'part_Number-2' ),
    part_NumberDiv = document.getElementById( 'part_NumberDiv' ),
    part_List2 = document.getElementById( 'part_List-2' ),
    part_List = document.getElementById( 'part_List' ),
    saveBtn = document.getElementById( 'sg_Save' ),
    saveBtn1 = document.getElementById( 'sg_Save-1' ),
    saveBtn2 = document.getElementById( 'sg_Save-2' ),
    saveBtn3 = document.getElementById( 'sg_Save-3' ),
    saveBtn4 = document.getElementById( 'sg_Save-4' ),
    saveBtn5 = document.getElementById( 'sg_Save-5' ),
    saveBtn6 = document.getElementById( 'sg_Save-6' ),
    saveBtn7 = document.getElementById( 'sg_Save-7' ),
    saveBtn8 = document.getElementById( 'sg_Save-8' ),
    saveBtn9 = document.getElementById( 'sg_Save-9' ),
    saveBtn10 = document.getElementById( 'sg_Save-10' ),
    dltBtn = document.getElementById( 'sg_Delete' ),
    deleteBtn1 = document.getElementById( 'sg_Delete-1' ),
    deleteBtn2 = document.getElementById( 'sg_Delete-2' ),
    deleteBtn3 = document.getElementById( 'sg_Delete-3' ),
    deleteBtn4 = document.getElementById( 'sg_Delete-4' ),
    deleteBtn5 = document.getElementById( 'sg_Delete-5' ),
    deleteBtn6 = document.getElementById( 'sg_Delete-6' ),
    deleteBtn7 = document.getElementById( 'sg_Delete-7' ),
    deleteBtn8 = document.getElementById( 'sg_Delete-8' ),
    deleteBtn9 = document.getElementById( 'sg_Delete-9' ),
    deleteBtn10 = document.getElementById( 'sg_Delete-10' ),
    renameBtn1 = document.getElementById( 'sg_Rename-1' ),
    renameBtn2 = document.getElementById( 'sg_Rename-2' ),
    renameBtn3 = document.getElementById( 'sg_Rename-3' ),
    renameBtn4 = document.getElementById( 'sg_Rename-4' ),
    renameBtn5 = document.getElementById( 'sg_Rename-5' ),
    renameBtn6 = document.getElementById( 'sg_Rename-6' ),
    renameBtn7 = document.getElementById( 'sg_Rename-7' ),
    renameBtn8 = document.getElementById( 'sg_Rename-8' ),
    renameBtn9 = document.getElementById( 'sg_Rename-9' ),
    renameBtn10 = document.getElementById( 'sg_Rename-10' ),
    $deleteUser = $( '.delete-user' ),
    deleteBtn = document.getElementById( 'delete-all' ),
    isNew = document.getElementById( 'is-new' ),
    isLight = document.getElementById( 'is-light' ),
    nbOpsBtn = document.getElementById( 'navbar-ops-btn' ),
    nbOpsBtnClose = document.getElementById( 'navbar-ops-btn-close' ),
    cCurrent = document.getElementById( 'c-current' ),
    sgCurrent = document.getElementById( 'sg-current' ),

    // LocalStorage vars (all of them starts with underscore)
    _uiColor = window.localStorage.getItem( 'ui-color' ),
    _isNew = window.localStorage.getItem( 'is-new' ),
    _isLight = window.localStorage.getItem( 'is-light' ),

    _savedItemName1 = window.localStorage.getItem('saved-item-1-name'), _savedItemName2 = window.localStorage.getItem('saved-item-2-name'),
    _savedItemName3 = window.localStorage.getItem('saved-item-3-name'), _savedItemName4 = window.localStorage.getItem('saved-item-4-name'),
    _savedItemName5 = window.localStorage.getItem('saved-item-5-name'), _savedItemName6 = window.localStorage.getItem('saved-item-6-name'),
    _savedItemName7 = window.localStorage.getItem('saved-item-7-name'), _savedItemName8 = window.localStorage.getItem('saved-item-8-name'),
    _savedItemName9 = window.localStorage.getItem('saved-item-9-name'), _savedItemName10 = window.localStorage.getItem('saved-item-10-name'),

    _savedItemLastEdit1 = window.localStorage.getItem('saved-item-1_LastEdit'), _savedItemLastEdit2 = window.localStorage.getItem('saved-item-2_LastEdit'),
    _savedItemLastEdit3 = window.localStorage.getItem('saved-item-3_LastEdit'), _savedItemLastEdit4 = window.localStorage.getItem('saved-item-4_LastEdit'),
    _savedItemLastEdit5 = window.localStorage.getItem('saved-item-5_LastEdit'), _savedItemLastEdit6 = window.localStorage.getItem('saved-item-6_LastEdit'),
    _savedItemLastEdit7 = window.localStorage.getItem('saved-item-7_LastEdit'), _savedItemLastEdit8 = window.localStorage.getItem('saved-item-8_LastEdit'),
    _savedItemLastEdit9 = window.localStorage.getItem('saved-item-9_LastEdit'), _savedItemLastEdit10 = window.localStorage.getItem('saved-item-10_LastEdit'),

    _savedItemCreation1 = window.localStorage.getItem('saved-item-1_Creation'), _savedItemCreation2 = window.localStorage.getItem('saved-item-2_Creation'),
    _savedItemCreation3 = window.localStorage.getItem('saved-item-3_Creation'), _savedItemCreation4 = window.localStorage.getItem('saved-item-4_Creation'),
    _savedItemCreation5 = window.localStorage.getItem('saved-item-5_Creation'), _savedItemCreation6 = window.localStorage.getItem('saved-item-6_Creation'),
    _savedItemCreation7 = window.localStorage.getItem('saved-item-7_Creation'), _savedItemCreation8 = window.localStorage.getItem('saved-item-8_Creation'),
    _savedItemCreation9 = window.localStorage.getItem('saved-item-9_Creation'), _savedItemCreation10 = window.localStorage.getItem('saved-item-10_Creation'),

    _savedItemData1 = window.localStorage.getItem('saved-item-1-data'), _savedItemData2 = window.localStorage.getItem('saved-item-2-data'),
    _savedItemData3 = window.localStorage.getItem('saved-item-3-data'), _savedItemData4 = window.localStorage.getItem('saved-item-4-data'),
    _savedItemData5 = window.localStorage.getItem('saved-item-5-data'), _savedItemData6 = window.localStorage.getItem('saved-item-6-data'),
    _savedItemData7 = window.localStorage.getItem('saved-item-7-data'), _savedItemData8 = window.localStorage.getItem('saved-item-8-data'),
    _savedItemData9 = window.localStorage.getItem('saved-item-9-data'), _savedItemData10 = window.localStorage.getItem('saved-item-10-data'),

    _savedItem1 = window.localStorage.getItem('saved-item-1'), _savedItem2 = window.localStorage.getItem('saved-item-2'),
    _savedItem3 = window.localStorage.getItem('saved-item-3'), _savedItem4 = window.localStorage.getItem('saved-item-4'),
    _savedItem5 = window.localStorage.getItem('saved-item-5'), _savedItem6 = window.localStorage.getItem('saved-item-6'),
    _savedItem7 = window.localStorage.getItem('saved-item-7'), _savedItem8 = window.localStorage.getItem('saved-item-8'),
    _savedItem9 = window.localStorage.getItem('saved-item-9'), _savedItem10 = window.localStorage.getItem('saved-item-10'),

    savedItemName1 = document.getElementById('saved_item-name-1'), savedItemName2 = document.getElementById('saved_item-name-2'),
    savedItemName3 = document.getElementById('saved_item-name-3'), savedItemName4 = document.getElementById('saved_item-name-4'),
    savedItemName5 = document.getElementById('saved_item-name-5'), savedItemName6 = document.getElementById('saved_item-name-6'),
    savedItemName7 = document.getElementById('saved_item-name-7'), savedItemName8 = document.getElementById('saved_item-name-8'),
    savedItemName9 = document.getElementById('saved_item-name-9'), savedItemName10 = document.getElementById('saved_item-name-10'),

    savedItem1 = document.getElementById('saved_item-1'), savedItem2 = document.getElementById('saved_item-2'),
    savedItem3 = document.getElementById('saved_item-3'), savedItem4 = document.getElementById('saved_item-4'),
    savedItem5 = document.getElementById('saved_item-5'), savedItem6 = document.getElementById('saved_item-6'),
    savedItem7 = document.getElementById('saved_item-7'), savedItem8 = document.getElementById('saved_item-8'),
    savedItem9 = document.getElementById('saved_item-9'), savedItem10 = document.getElementById('saved_item-10'),

    savedItemPartAmount1 = document.getElementById('saved_item-PartAmount-1'), savedItemPartAmount2 = document.getElementById('saved_item-PartAmount-2'),
    savedItemPartAmount3 = document.getElementById('saved_item-PartAmount-3'), savedItemPartAmount4 = document.getElementById('saved_item-PartAmount-4'),
    savedItemPartAmount5 = document.getElementById('saved_item-PartAmount-5'), savedItemPartAmount6 = document.getElementById('saved_item-PartAmount-6'),
    savedItemPartAmount7 = document.getElementById('saved_item-PartAmount-7'), savedItemPartAmount8 = document.getElementById('saved_item-PartAmount-8'),
    savedItemPartAmount9 = document.getElementById('saved_item-PartAmount-9'), savedItemPartAmount10 = document.getElementById('saved_item-PartAmount-10'),

    savedItemData1 = document.getElementById('saved_item-data-1'), savedItemData2 = document.getElementById('saved_item-data-2'),
    savedItemData3 = document.getElementById('saved_item-data-3'), savedItemData4 = document.getElementById('saved_item-data-4'),
    savedItemData5 = document.getElementById('saved_item-data-5'), savedItemData6 = document.getElementById('saved_item-data-6'),
    savedItemData7 = document.getElementById('saved_item-data-7'), savedItemData8 = document.getElementById('saved_item-data-8'),
    savedItemData9 = document.getElementById('saved_item-data-9'), savedItemData10 = document.getElementById('saved_item-data-10'),

    savedItem1_info = document.getElementById('saved_item-info-btn-1'), savedItem2_info = document.getElementById('saved_item-info-btn-2'),
    savedItem3_info = document.getElementById('saved_item-info-btn-3'), savedItem4_info = document.getElementById('saved_item-info-btn-4'),
    savedItem5_info = document.getElementById('saved_item-info-btn-5'), savedItem6_info = document.getElementById('saved_item-info-btn-6'),
    savedItem7_info = document.getElementById('saved_item-info-btn-7'), savedItem8_info = document.getElementById('saved_item-info-btn-8'),
    savedItem9_info = document.getElementById('saved_item-info-btn-9'), savedItem10_info = document.getElementById('saved_item-info-btn-10'),

    savedItem1_delete = document.getElementById('saved_item-delete-btn-1'), savedItem2_delete = document.getElementById('saved_item-delete-btn-2'),
    savedItem3_delete = document.getElementById('saved_item-delete-btn-3'), savedItem4_delete = document.getElementById('saved_item-delete-btn-4'),
    savedItem5_delete = document.getElementById('saved_item-delete-btn-5'), savedItem6_delete = document.getElementById('saved_item-delete-btn-6'),
    savedItem7_delete = document.getElementById('saved_item-delete-btn-7'), savedItem8_delete = document.getElementById('saved_item-delete-btn-8'),
    savedItem9_delete = document.getElementById('saved_item-delete-btn-9'), savedItem10_delete = document.getElementById('saved_item-delete-btn-10'),

    savedItem1_edit = document.getElementById('saved_item-edit-btn-1'), savedItem2_edit = document.getElementById('saved_item-edit-btn-2'),
    savedItem3_edit = document.getElementById('saved_item-edit-btn-3'), savedItem4_edit = document.getElementById('saved_item-edit-btn-4'),
    savedItem5_edit = document.getElementById('saved_item-edit-btn-5'), savedItem6_edit = document.getElementById('saved_item-edit-btn-6'),
    savedItem7_edit = document.getElementById('saved_item-edit-btn-7'), savedItem8_edit = document.getElementById('saved_item-edit-btn-8'),
    savedItem9_edit = document.getElementById('saved_item-edit-btn-9'), savedItem10_edit = document.getElementById('saved_item-edit-btn-10'),

    savedItem1_start = document.getElementById('saved_item-start-btn-1'), savedItem2_start = document.getElementById('saved_item-start-btn-2'),
    savedItem3_start = document.getElementById('saved_item-start-btn-3'), savedItem4_start = document.getElementById('saved_item-start-btn-4'),
    savedItem5_start = document.getElementById('saved_item-start-btn-5'), savedItem6_start = document.getElementById('saved_item-start-btn-6'),
    savedItem7_start = document.getElementById('saved_item-start-btn-7'), savedItem8_start = document.getElementById('saved_item-start-btn-8'),
    savedItem9_start = document.getElementById('saved_item-start-btn-9'), savedItem10_start = document.getElementById('saved_item-start-btn-10');


'use strict';

setInterval( function ()
      {
        if ( _isNew === 'true' )
         {
           isNew.checked = true;
         }
          else {
            isNew.checked = false;
          }

        if (  _savedItem1 === '' && _savedItem2 === ''
           && _savedItem3 === '' && _savedItem4 === ''
           && _savedItem5 === '' && _savedItem6 === ''
           && _savedItem7 === '' && _savedItem8 === ''
           && _savedItem9 === '' && _savedItem10 === '' )
          {
             window.localStorage.setItem( 'is-new','true' );
             isNew.checked = true;
          }
            else
               {
                  window.localStorage.setItem( 'is-new','false' );
                  isNew.checked = false;
            }
}, 100);



setInterval( function ()
 {
  if ( isLight.checked )
     {
      localStorage.setItem( 'is-light','false' )
  }
    else
      {
        localStorage.setItem( 'is-light','true' )
    };
}, 100);






function status ( msg )
 {
   document.getElementById( 'statusTitle_Bar' ).innerHTML = msg;
};



$( '#notifica-dica' ).click(function ()
 {
   $( '#notifica-dica' )
    .fadeOut( 'fast' );
});




function sgTogglePlural ()
  {
    if ( $( '#part_List > dt' ).size() === 0 )
      {
        document.getElementById( 'part-plural' ).innerHTML = 's';
        document.getElementById( 'part-plural-2' ).innerHTML = 's';
    }
     else
        if ( $( '#part_List > dt' ).size() === 1 )
         {
           document.getElementById( 'part-plural' ).innerHTML = '';
           document.getElementById( 'part-plural-2' ).innerHTML = '';
       }
        else
          {
           document.getElementById( 'part-plural' ).innerHTML = 's';
           document.getElementById( 'part-plural-2' ).innerHTML = 's';
       }
};





// Abrir menu de pausa > Configurações > Tela Cheia.

$('#pause-fullScreen-off').on('click', function()
 {
  if ( document.exitFullscreen )
     {
       document.ExitFullscreen();
  }
   else
      if ( document.msExitFullscreen )
        {
          document.msExitFullscreen();
   }
     else
        if ( document.mozExitFullScreen )
          {
            document.mozExitFullScreen();
     }
       else
          if ( document.webkitExitFullscreen )
            {
              document.webkitExitFullscreen();
       }
  $('#pause-fullScreen-off').hide();
  $('#pause-fullScreen-on').show();
});

$('#pause-fullScreen-on').on('click', function() {
  if ( document.documentElement.requestFullscreen )
      {
        document.documentElement.requestFullscreen();
   }
    else
       if ( document.documentElement.msRequestFullscreen )
          {
            document.documentElement.msRequestFullscreen();
    }
      else
        if ( document.documentElement.mozRequestFullScreen )
           {
             document.documentElement.mozRequestFullScreen();
      }
        else
          if ( document.documentElement.webkitRequestFullscreen )
             {
               document.documentElement.webkitRequestFullscreen();
        }
  $('#pause-fullScreen-on').hide();
  $('#pause-fullScreen-off').show();
});







// Reinicia o Sorteio Clássico
function cNew ()
{
  cGo.style.display = show;
  cResult.style.display = hide;
  $( '[onclick="cNew()"]' ).hide();
  cCurrent.innerHTML = '';
  n.removeAttribute( 'disabled' );
  x.removeAttribute( 'disabled' );
  y.removeAttribute( 'disabled' );
  cGo.removeAttribute( 'disabled' );

  hlTip(5000);
};



// Reinicia o Sorteio Sortegram
function sgNew () {
  saveBtn.style.display = 'inline-block';
  dltBtn.style.display = 'inline-block';
    hideSaveBtn();

  sgGo.style.display = show;
  sgResult.style.display = hide;
  $( '.new-btn, .back-to-home-btn' ).hide();
  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );

  $('#part_List-2').css({'height':''});

      // Esconde o trofeu
    $( '#trophy' ).remove();

    $( '#sg_start_Btn' ).hide();

    part_NumberDiv.style.display = show;

      userName_Input.value = '';

      setTimeout(function ()
         {
           $( '#userName_Input' ).focus()
      }, 1500);

        $( '.new-btn, .back-to-home-btn' ).hide(); // Esconde o botao 'Novo Sorteio'

        goTo( '#sortegram' );

        status('Novo sorteio');

      part_List = document.getElementById( 'part_List' ).innerHTML = '';
      document.getElementById( 'part_List-2' ).innerHTML = '';


      changeNumber();

      saveBtn.disabled = true;
      saveBtn.style.backgroundImage = 'url(img/appbar.save.png)';
}




function sgQuit ()
{
  $( '#part_List, #part_List-2' )
      .html('');
  setTimeout( function ()
    {
        $( '#trophy' )
          .remove();
        $( '#part_List-2' )
          .css({
              'height':''
          });


        sgGo.style.display = show;


        setTimeout( function ()
          {
              $( sgResult )
                .css({
                    'width'           :   '',
                    'height'          :   '',
                    'font-size'       :   '38pt',
                    'border-radius'   :   '20px',
                    'text-align'      :   '',
                    'overflow-y'      :   'hidden'
              })
                .html('')
                  .hide();
        },100);

        $( '#sg_start_Winners, #part_NumberDiv' )
          .show();
        $( '#sg_start_Btn, #sg-current' )
          .hide();
        sgCurrent.innerHTML = '';
        sgGo.removeAttribute( 'disabled' );
  }, 1000);
};







// SORTEGRAM













$( '#sg_Config-winIcon-Trophy' ).on('click', function ()
 {
   window.localStorage.setItem('winner-icon','Trophy');
   $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
   $( '#sg_Config-winIcon-Trophy' ).addClass( 'sg_Config-winIcon-selected' );
   $( '#trophy' ).removeClass().addClass( 'sg_Config-winIcon-Trophy' );
});

$( '#sg_Config-winIcon-Heart' ).on('click', function ()
 {
   window.localStorage.setItem('winner-icon','Heart');
   $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
   $( '#sg_Config-winIcon-Heart' ).addClass( 'sg_Config-winIcon-selected' );
   $( '#trophy' ).removeClass().addClass( 'sg_Config-winIcon-Heart' );
});

$( '#sg_Config-winIcon-Star' ).on('click', function ()
 {
   window.localStorage.setItem('winner-icon','Star');
   $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
   $( '#sg_Config-winIcon-Star' ).addClass( 'sg_Config-winIcon-selected' );
   $( '#trophy' ).removeClass().addClass( 'sg_Config-winIcon-Star' );
});

$( '#sg_Config-winIcon-Sun' ).on('click', function ()
 {
   window.localStorage.setItem('winner-icon','Sun');
   $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
   $( '#sg_Config-winIcon-Sun' ).addClass( 'sg_Config-winIcon-selected' );
   $( '#trophy' ).removeClass().addClass( 'sg_Config-winIcon-Sun' );
});







document.getElementById( 'sg_Config-DecCb' ).addEventListener('click', function ()
 {
   if ( !document.getElementById( 'sg_Config-DecCb' ).checked )
     {
       window.localStorage.setItem('bg-icon','');
       $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );

       $( '#cover, #sg_Config_Page' ).css({
            'background-image' : '',
            'background-size'  : '100% auto'
       });

       $( '#sg_Config-bgDiv' )
          .hide( 'drop' );
  }
    else
       {
         $( '#sg_Config-bgDiv' )
          .show( 'drop' );

          $( '#sg_Config-bg-Flowers' )
            .click();
    };
});




document.getElementById( 'sg_Config-TipsCb' ).addEventListener('click', function ()
 {
   if ( document.getElementById( 'sg_Config-TipsCb' ).checked )
     {
       window.localStorage.setItem('highlight-tip','on');
       hlTip();
  }
    else
       {
         window.localStorage.setItem('highlight-tip','off');
         $( '.tip' )
            .removeClass( 'animated infinite pulse glow' );
    };
});



$( '#sg_Config-bg-Flowers' ).on('click', function ()
 {
   window.localStorage.setItem('bg-icon','flowers');
   $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
      $( '#sg_Config-bg-Flowers' ).addClass( 'sg_Config-bg-selected' );

   $( '#cover, #sg_Config_Page' ).css({
        'background-image' : 'url(img/fs-bg-flowers.png)',
        'background-size'  : '100% auto'
   });
});

$( '#sg_Config-bg-Leaves' ).on('click', function ()
 {
   window.localStorage.setItem('bg-icon','leaves');
   $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
      $( '#sg_Config-bg-Leaves' ).addClass( 'sg_Config-bg-selected' );

   $( '#cover, #sg_Config_Page' ).css({
        'background-image' : 'url(img/fs-bg-leaves.png)',
        'background-size'  : '100% auto'
   });
});

$( '#sg_Config-bg-Ducks' ).on('click', function ()
 {
   window.localStorage.setItem('bg-icon','ducks');
   $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
      $( '#sg_Config-bg-Ducks' ).addClass( 'sg_Config-bg-selected' );

   $( '#cover, #sg_Config_Page' ).css({
        'background-image' : 'url(img/fs-bg-ducks.png)',
        'background-size'  : '100% auto'
   });
});

$( '#sg_Config-bg-Bfs' ).on('click', function ()
 {
   window.localStorage.setItem('bg-icon','bfs');
   $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
      $( '#sg_Config-bg-Bfs' ).addClass( 'sg_Config-bg-selected' );

   $( '#cover, #sg_Config_Page' ).css({
        'background-image' : 'url(img/fs-bg-bfs.png)',
        'background-size'  : '100% auto'
   });
});









function sg_Repeat ()
 {
  hlTip(5000);

  // Esconde o trofeu
    $( '#trophy' )
      .remove();


  $( '#sg_start_Btn, .new-btn, .back-to-home-btn, #part_List-2 .delete-user' )
    .hide();
  $( '#sg_start_Winners' )
    .show();

  sgCurrent.style.display = hide;
  part_NumberDiv.style.display = show;
  sgGo.style.display = show;

  sgCurrent.innerHTML = '';
  sgGo.removeAttribute( 'disabled' );

  $('#part_List-2')
    .css({
      'height' : ''
  });


  $('#part_List-2 dt')
    .css({
        'background-color'  :   '',
        'color'             :   '',
        'border'            :   ''
  });


        $( '#part_List-2' )
          .removeClass( 'lock-scroll' )
            .addClass( 'scroll' );

        status('Re-sorteio');



    setTimeout( function ()
      {
          $( sgResult )
            .css({
                'width'           :   '',
                'height'          :   '',
                'text-align'      :   '',
                'overflow-y'      :   'hidden',
                'font-size'       :   '38pt',
                'border-radius'   :   '20px'
          })
            .html('')
              .hide();
    },0);

  Reload();
};







function hlTip (timeout)
  {
      $( '.tip' )
        .removeClass( 'animated infinite pulse glow' );

        if ( document.getElementById( 'sg_Config-TipsCb' ).checked )
          {
            setTimeout(function ()
              {
                $( '.tip' )
                  .addClass( 'animated infinite pulse glow' );
            }, timeout);
        }
          else
             {
               setTimeout(function ()
                 {
                   $( '.tip' )
                    .removeClass( 'animated infinite pulse glow' );
                }, timeout);
          };

};






        // Abre o menu lateral
        nbOpsBtn.addEventListener( 'click', function ()
         {
            $( '#sidebar' )
              .removeClass( 'close' )
                .addClass( 'open' );
            document.getElementById( 'sidebar-overlay' ).style.display = show;
            nbOpsBtn.style.display = hide;
            nbOpsBtnClose.style.display = show;
        });

        // Fecha o menu lateral
        document.addEventListener( 'click', function ( event )
         {
          if ( !$( event.target ).closest( '#sidebar, #navbar-ops-btn' ).length
            || $( event.target ).closest( '.sidebar-op' ).length )
             {
                $( '#sidebar' )
                  .removeClass( 'open' )
                    .addClass( 'close' );
                document.getElementById( 'sidebar-overlay' ).style.display = hide;
                nbOpsBtnClose.style.display = hide;
                nbOpsBtn.style.display = show;
            }
          });






// Reload script
function Reload () {
  $( '#script' ).remove();

  var _s = document.createElement( 'script' );
  _s.id = 'script';
  _s.src = 'js/sortegram.dev.js';
  document.getElementById('scrptLoad').appendChild( _s );
};





// Sobre o Sortegram

document.getElementById('sg_aboutText').innerHTML =
'<h2>Sortegram</h2>\
Autor: <b>Victor Ribeiro</b><br>\
Versão: <b>v2.0.0</b><br>\
Website: <b><a href="http://sortegram.com" target="_blank">//sortegram.com</a></b><br>\
<br>\
O <b>Sortegram</b> é um pequeno aplicativo que você pode usar para sortear \
pessoas, números e muitas outras coisas que você precisar.<br><br>\
Melhorias na versão 2.0.0\
<ul><li>Adicionada a funcionalidade de adicionar até 10 sorteios individuais;</li>\
<li>Melhoria nas cores</li>\
<li>Consertado o bug no Claro/Escuro onde você tinha que selecionar novamente;</li>\
  a cor ou reiniciar o app;</li>\
<li>Melhoria no desempenho para sorteios com mais de 1000 participantes;</li>\
<li>Adicionado o ativar/desativar arroba (@) na página de edição.\
  <br>Essencial para validação de usernames de Instagram e Twitter;</li>\
<li>Agora você pode escolher entre sortear um ganhador ou vários.\
  <br>O número maximo de ganhadores é igual ao número de participantes e o minimo 2;</li>\
<li>Adicionadas novas animações;</li>\
<li>Repaginação da interface;</li>\
<li>Adicionado menu de configurações gerais;</li>\
<li>Changelog adicionado ao menu Configurações;</li></ul><br><br>\
Se você tem alguma dúvida de como utilizar o aplicativo, ou apenas quer dar seu feedback, \
elogiando ou dizendo em que o aplicativo pode melhorar, mande um email para o desenvolvedor em <b><a href="mailto:victor_ribeiro135@hotmail.com?subject=Feedback Sortegram">victor_ribeiro135@hotmail.com</a></b>. ;)\
';






// Listen for orientation changes
window.addEventListener('orientationchange', function() {
  // Announce the new orientation number
  if ( window.orientation === 90 ) {
    $('.splash-orientation').show();
    $('.splash-orientation-img-left').show();
    $('.splash-orientation-img-right').hide();
  } else if ( window.orientation === -90 ) {
    $('.splash-orientation').show();
    $('.splash-orientation-img-right').show();
    $('.splash-orientation-img-left').hide();
  } else {
    $('.splash-orientation').hide();
  }
}, false);
