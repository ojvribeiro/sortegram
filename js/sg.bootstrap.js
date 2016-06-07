


// Funcoes a serem carregadas na inicializacao
function appLoad ()
 {
   console.log('Parece que você gosta de ver como as coisas funcionam por dentro. \nQue tal se juntar à equipe de desenvolvimento do Sortegram?\n http://sortegram.com/join');



   var userAgent = navigator.userAgent;

  if ( userAgent.match( /(IEMobile|Android|Mobile|BB10|Opera Mobi|Edge)/gi ) )
     {
       $('#pause-fullScreen-on').show();
  }
    else
       if ( userAgent.match( /(Chrome|Firefox|iPad)/gi ) )
          {
            $('#pause-fullScreen-off, #pause-fullScreen-on').hide();
    }
      else
         {
           swal({
              title :'Ops! :(',
              text  :'Seu navegador não suporta o Sortegram',
              type  :'error'
           },
              function ()
                {
                  document.location.href = 'https://chrome.google.com/'
            });
      };

  if ( !userAgent.match( /(Chrome|IEMobile|Android|BB10|iPhone|iPad)/gi ) )
    {
      $( '.saved_item-start-btn, .saved_item-edit-btn, .saved_item-delete-btn' )
        .css({
          'margin-top' : '-46px'
        });
  };



   ( function ($)
     {
			$( window ).load( function ()
       {
				$( '.saved_item_Holder' ).mCustomScrollbar(
          {
					  theme:'minimal'
				   }
        );
			});
		})(jQuery);


/*//________________________________________________________
 Este plugin foi postado por "Andrea" no StackOverflow.com
-   permalink: http://stackoverflow.com/a/9964945
-   uso:    $("input").enterKey(function () {
            // Code
            });
*/
$.fn.enterKey = function (fnc)
 {
    return this.each( function ()
     {
        $( this ).keypress( function (ev)
         {
            var keycode = ( ev.keyCode ? ev.keyCode : ev.which );
            if ( keycode == '13' )
               {
                 fnc.call( this, ev );
            };
        });
    });
};
//__________________________________________________________

$( '#userName_Input' ).enterKey( function ()
  {
    submit_Item();
    userName_Input.select();
});



  // Desabilita o menu de contexto
    $( document ).contextmenu( function ()
     {
       return false;
    });



  function loadSavedItem (itemNumber)
    {
       document.getElementById( 'saved_item-' + itemNumber ).style.display = show;
       document.getElementById( 'saved_item-name-' + itemNumber ).innerHTML = window.localStorage.getItem('saved-item-' + itemNumber + '-name');
       document.getElementById( 'saved_item-PartAmount-' + itemNumber ).innerHTML = window.localStorage.getItem('saved-item-' + itemNumber + '-PartAmount') + ' part.';

       $( '#sg-manage-btn' )
            .show();
    };



  if ( _isLight === 'true' )
    {
      isLight.checked = false
  }
     else
        {
          isLight.checked = true
     };



var bgIcon = window.localStorage.getItem('bg-icon'),
    winIcon = window.localStorage.getItem('winner-icon'),
    highlightTip = window.localStorage.getItem('highlight-tip');


  if ( highlightTip === 'on' )
    {
      document.getElementById( 'sg_Config-TipsCb' ).checked = true;
  }
    else
      {
        document.getElementById( 'sg_Config-TipsCb' ).checked = false;
    };



if ( bgIcon )
  {
    if ( bgIcon !== '' )
      {
        $( '#cover, #sg_Config_Page' )
          .css({
            'background-image' : 'url(img/fs-bg-' + bgIcon + '.png)',
            'background-size'  : '100% auto'
          });
    };
}



  if ( bgIcon === 'flowers' )
    {
      $( '#sg_Config-bgDiv' )
        .show();
      $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
      $( '#sg_Config-bg-Flowers' ).addClass( 'sg_Config-bg-selected' );
      document.getElementById( 'sg_Config-DecCb' ).checked = true;
  }
    else if ( bgIcon === 'leaves' )
      {
        $( '#sg_Config-bgDiv' )
          .show();
        $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
        $( '#sg_Config-bg-Leaves' ).addClass( 'sg_Config-bg-selected' );
        document.getElementById( 'sg_Config-DecCb' ).checked = true;
    }
      else if ( bgIcon === 'ducks' )
        {
          $( '#sg_Config-bgDiv' )
            .show();
          $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
          $( '#sg_Config-bg-Ducks' ).addClass( 'sg_Config-bg-selected' );
          document.getElementById( 'sg_Config-DecCb' ).checked = true;
      }
        else if ( bgIcon === 'bfs' )
          {
            $( '#sg_Config-bgDiv' )
              .show();
            $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
            $( '#sg_Config-bg-Bfs' ).addClass( 'sg_Config-bg-selected' );
            document.getElementById( 'sg_Config-DecCb' ).checked = true;
        }
          else
             {
               $( '.sg_Config-bg' ).removeClass( 'sg_Config-bg-selected' );
               document.getElementById( 'sg_Config-DecCb' ).checked = false;

               $( '#sg_Config-bgDiv' )
                  .hide();
          }

  if ( winIcon === 'Trophy' )
    {
      $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
      $( '#sg_Config-winIcon-Trophy' ).addClass( 'sg_Config-winIcon-selected' );
  }
    else if ( winIcon === 'Heart' )
      {
        $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
        $( '#sg_Config-winIcon-Heart' ).addClass( 'sg_Config-winIcon-selected' );
    }
      else if ( winIcon === 'Star' )
        {
          $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
          $( '#sg_Config-winIcon-Star' ).addClass( 'sg_Config-winIcon-selected' );
      }
        else if ( winIcon === 'Sun' )
          {
            $( '.sg_Config-winIcon' ).removeClass( 'sg_Config-winIcon-selected' );
            $( '#sg_Config-winIcon-Sun' ).addClass( 'sg_Config-winIcon-selected' );
        }




  setTimeout( function ()
   {
      $('.splash-loader')
        .css({
          'background-position' : '50% 100%',
          'background-size'     : '45% auto'
          })
        .removeClass('fadeIn')
          .addClass('fadeOut');

      $( '.splash-loader-spinner' )
        .removeClass('spining')
        .addClass('animated zoomOut');


      setTimeout( function ()
       {
         $('.splash-loader')
          .hide();
      }, 1000);
  }, 2000);

  setTimeout(function ()
   {
     $( '#content' )
      .fadeIn();

    // Checar se versao antiga
    if ( window.localStorage.getItem('saved-names-edit') )
       {
          swal({
              title :'Atualizado! :D',
              text  :'O Sortegram está de cara nova!\n\nAgora você tem diversas novas opções\ncomo salvar até 10 sorteios individuais.',
              confirmButtonText:'Entendi',
              confirmButtonColor :     '#35B138',
              type  :'success'
           },
              function ()
                {
                  $('#notifica-dica')
                    .show('drop');

                  $('.dica-texto')
                    .html('Fizemos um backup do seu sorteio anterior.');

                  setTimeout(function ()
                   {
                     $('#notifica-dica')
                      .fadeOut();
                  }, 10000);
            });


          window.localStorage.setItem('saved-item-1-data', window.localStorage.getItem('saved-names-edit'));
          window.localStorage.setItem('saved-item-1-name','Sem título (backup)');
          window.localStorage.setItem('saved-item-1_Creation','-');
          window.localStorage.setItem('saved-item-1_LastEdit','-');

          window.localStorage.setItem('saved-item-1','ok');

          $( '#saved_item-1' )
            .show();

          $( '#sg-manage-btn' )
            .show();

          document.getElementById( 'part_List' ).innerHTML = window.localStorage.getItem( 'saved-item-1-data' );
          window.localStorage.setItem('saved-item-1-PartAmount', $( '#part_List > dt' ).size() );

          document.getElementById( 'saved_item-name-1' ).innerHTML = 'Sem título (backup)';
          document.getElementById( 'saved_item-PartAmount-1' ).innerHTML = $( '#part_List > dt' ).size() + ' part.';

          document.getElementById( 'part_List' ).innerHTML = '';

          Reload();
    };

    if ( window.localStorage.getItem('saved-item-1') === 'ok' )
      {
          window.localStorage.removeItem('saved-names-edit');
    };
  }, 2250);



setTimeout( function ()
   {
  if ( _isLight === 'false' ) { // If theme is set to Dark
    toggleColorPicker();
        if ( !_uiColor ) {
          localStorage.setItem( 'ui-color','' );
          $bg_uiColor.css( 'background-color',green[0] );
          $btn_uiColor.css( 'background-color',green[1] );
          $fnt_uiColor.css( 'color',green[2] );
          $bd_fntColor.css( 'color',green[3] );
          $bgDark_uiColor.css( 'background-color',green[4] );
          $( '.verde' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'green' ) {
              $bg_uiColor.css( 'background-color',green[0] );
              $btn_uiColor.css( 'background-color',green[1] );
              $fnt_uiColor.css( 'color',green[2] );
              $bd_fntColor.css( 'color',green[3] );
              $bgDark_uiColor.css( 'background-color',green[4] );
              $( '.verde' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'blue' ) {
              $bg_uiColor.css( 'background-color',blue[0] );
              $btn_uiColor.css( 'background-color',blue[1] );
              $fnt_uiColor.css( 'color',blue[2] );
              $bd_fntColor.css( 'color',blue[3] );
              $bgDark_uiColor.css( 'background-color',blue[4] );
              $( '.azul' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'red' ) {
              $bg_uiColor.css( 'background-color',red[0] );
              $btn_uiColor.css( 'background-color',red[1] );
              $fnt_uiColor.css( 'color',red[2] );
              $bd_fntColor.css( 'color',red[3] );
              $bgDark_uiColor.css( 'background-color',red[4] );
              $( '.vermelho' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'yellow' ) {
              $bg_uiColor.css( 'background-color',yellow[0] );
              $btn_uiColor.css( 'background-color',yellow[1] );
              $fnt_uiColor.css( 'color',yellow[2] );
              $bd_fntColor.css( 'color',yellow[3] );
              $bgDark_uiColor.css( 'background-color',yellow[4] );
              $( '.amarelo' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'orange' ) {
              $bg_uiColor.css( 'background-color',orange[0] );
              $btn_uiColor.css( 'background-color',orange[1] );
              $fnt_uiColor.css( 'color',orange[2] );
              $bd_fntColor.css( 'color',orange[3] );
              $bgDark_uiColor.css( 'background-color',orange[4] );
              $( '.laranja' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'pink' ) {
              $bg_uiColor.css( 'background-color',pink[0] );
              $btn_uiColor.css( 'background-color',pink[1] );
              $fnt_uiColor.css( 'color',pink[2] );
              $bd_fntColor.css( 'color',pink[3] );
              $bgDark_uiColor.css( 'background-color',pink[4] );
              $( '.rosa' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'lilac' ) {
              $bg_uiColor.css( 'background-color',lilac[0] );
              $btn_uiColor.css( 'background-color',lilac[1] );
              $fnt_uiColor.css( 'color',lilac[2] );
              $bd_fntColor.css( 'color',lilac[3] );
              $bgDark_uiColor.css( 'background-color',lilac[4] );
              $( '.lilas' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'cyan' ) {
              $bg_uiColor.css( 'background-color',cyan[0] );
              $btn_uiColor.css( 'background-color',cyan[1] );
              $fnt_uiColor.css( 'color',cyan[2] );
              $bd_fntColor.css( 'color',cyan[3] );
              $bgDark_uiColor.css( 'background-color',cyan[4] );
              $( '.ciano' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'violet' ) {
              $bg_uiColor.css( 'background-color',violet[0] );
              $btn_uiColor.css( 'background-color',violet[1] );
              $fnt_uiColor.css( 'color',violet[2] );
              $bd_fntColor.css( 'color',violet[3] );
              $bgDark_uiColor.css( 'background-color',violet[4] );
              $( '.violeta' ).addClass( 'ui-color-active' );
        }
    }
    else { // If theme is set to Light
      toggleColorPicker();
      if ( !_uiColor ) {
          localStorage.setItem( 'ui-color','' );
          $bg_uiColor.css( 'background-color',lightGreen[0] );
          $btn_uiColor.css( 'background-color',lightGreen[1] );
          $fnt_uiColor.css( 'color',lightGreen[2] );
          $bd_fntColor.css( 'color',lightGreen[3] );
          $bgDark_uiColor.css( 'background-color',lightGreen[4] );
          $( '.verde' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'green' ) {
              $bg_uiColor.css( 'background-color',lightGreen[0] );
              $btn_uiColor.css( 'background-color',lightGreen[1] );
              $fnt_uiColor.css( 'color',lightGreen[2] );
              $bd_fntColor.css( 'color',lightGreen[3] );
              $bgDark_uiColor.css( 'background-color',lightGreen[4] );
              $( '.verde' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'blue' ) {
              $bg_uiColor.css( 'background-color',lightBlue[0] );
              $btn_uiColor.css( 'background-color',lightBlue[1] );
              $fnt_uiColor.css( 'color',lightBlue[2] );
              $bd_fntColor.css( 'color',lightBlue[3] );
              $bgDark_uiColor.css( 'background-color',lightBlue[4] );
              $( '.azul' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'red' ) {
              $bg_uiColor.css( 'background-color',lightRed[0] );
              $btn_uiColor.css( 'background-color',lightRed[1] );
              $fnt_uiColor.css( 'color',lightRed[2] );
              $bd_fntColor.css( 'color',lightRed[3] );
              $bgDark_uiColor.css( 'background-color',lightRed[4] );
              $( '.vermelho' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'yellow' ) {
              $bg_uiColor.css( 'background-color',lightYellow[0] );
              $btn_uiColor.css( 'background-color',lightYellow[1] );
              $fnt_uiColor.css( 'color',lightYellow[2] );
              $bd_fntColor.css( 'color',lightYellow[3] );
              $bgDark_uiColor.css( 'background-color',lightYellow[4] );
              $( '.amarelo' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'orange' ) {
              $bg_uiColor.css( 'background-color',lightOrange[0] );
              $btn_uiColor.css( 'background-color',lightOrange[1] );
              $fnt_uiColor.css( 'color',lightOrange[2] );
              $bd_fntColor.css( 'color',lightOrange[3] );
              $bgDark_uiColor.css( 'background-color',lightOrange[4] );
              $( '.laranja' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'pink' ) {
              $bg_uiColor.css( 'background-color',lightPink[0] );
              $btn_uiColor.css( 'background-color',lightPink[1] );
              $fnt_uiColor.css( 'color',lightPink[2] );
              $bd_fntColor.css( 'color',lightPink[3] );
              $bgDark_uiColor.css( 'background-color',lightPink[4] );
              $( '.rosa' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'lilac' ) {
              $bg_uiColor.css( 'background-color',lightLilac[0] );
              $btn_uiColor.css( 'background-color',lightLilac[1] );
              $fnt_uiColor.css( 'color',lightLilac[2] );
              $bd_fntColor.css( 'color',lightLilac[3] );
              $bgDark_uiColor.css( 'background-color',lightLilac[4] );
              $( '.lilas' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'cyan' ) {
              $bg_uiColor.css( 'background-color',lightCyan[0] );
              $btn_uiColor.css( 'background-color',lightCyan[1] );
              $fnt_uiColor.css( 'color',lightCyan[2] );
              $bd_fntColor.css( 'color',lightCyan[3] );
              $bgDark_uiColor.css( 'background-color',lightCyan[4] );
              $( '.ciano' ).addClass( 'ui-color-active' );
        } else if ( _uiColor === 'violet' ) {
              $bg_uiColor.css( 'background-color',lightViolet[0] );
              $btn_uiColor.css( 'background-color',lightViolet[1] );
              $fnt_uiColor.css( 'color',lightViolet[2] );
              $bd_fntColor.css( 'color',lightViolet[3] );
              $bgDark_uiColor.css( 'background-color',lightViolet[4] );
              $( '.violeta' ).addClass( 'ui-color-active' );
        };
    };
  //alert();
}, 1000);



    if ( !localStorage['is-new'] || !localStorage['is-light'] || !localStorage['winner-icon'] )
      {
        window.localStorage.setItem('saved-item-1',''),
        window.localStorage.setItem('saved-item-2',''),
        window.localStorage.setItem('saved-item-3',''),
        window.localStorage.setItem('saved-item-4',''),
        window.localStorage.setItem('saved-item-5',''),
        window.localStorage.setItem('saved-item-6',''),
        window.localStorage.setItem('saved-item-7',''),
        window.localStorage.setItem('saved-item-8',''),
        window.localStorage.setItem('saved-item-9',''),
        window.localStorage.setItem('saved-item-10','');

        window.localStorage.setItem( 'is-new','true' );
        window.localStorage.setItem( 'is-light','false' );

        window.localStorage.setItem('highlight-tip','on');
        window.localStorage.setItem( 'winner-icon','Trophy' );
        window.localStorage.setItem( 'bg-icon','' );

        document.location.reload();
    };



    if ( _savedItem1 === 'ok' )
      {
       loadSavedItem(1);
    };
    if ( _savedItem2 === 'ok' )
      {
       loadSavedItem(2);
    };
    if ( _savedItem3 === 'ok' )
      {
       loadSavedItem(3);
    };
    if ( _savedItem4 === 'ok' )
      {
       loadSavedItem(4);
    };
    if ( _savedItem5 === 'ok' )
      {
       loadSavedItem(5);
    };
    if ( _savedItem6 === 'ok' )
      {
       loadSavedItem(6);
    };
    if ( _savedItem7 === 'ok' )
      {
       loadSavedItem(7);
    };
    if ( _savedItem8 === 'ok' )
      {
       loadSavedItem(8);
    };
    if ( _savedItem9 === 'ok' )
      {
       loadSavedItem(9);
    };
    if ( _savedItem10 === 'ok' )
      {
       loadSavedItem(10);
    };







    sg_Number_of_PartEditing.innerHTML = $( '#part_List > dt' ).size();

    $( '#userName_Input' )
      .addClass( 'userName_Input-at-inactive' );
    $( '#toggle-at' )
      .addClass( 'toggle-at-off' );
    $( '.saved_item-edit-btn' )
      .addClass( 'saved_item-edit-btn-close' );
    $( '.saved_item-delete-btn' )
      .addClass( 'saved_item-delete-btn-close' );
    $( '.saved_item-start-btn' )
      .addClass( 'saved_item-start-btn-close' );
    $( '.saved_item-info-btn' )
      .addClass( 'saved_item-info-btn-close' );

    sgTogglePlural();




    userName_Input.oninput = function ()
     {
        if ( this.value.length > 35 )
          {
            this.value = this.value.slice( 0,35 );
        };
    };

    document.getElementById( 'input_winnersAmount' ).onchange = function ()
     {
        if ( Number( document.getElementById( 'input_winnersAmount' ).value ) > $( '#part_List-2 > dt' ).size() )
          {
             document.getElementById( 'input_winnersAmount' ).value = $( '#part_List-2 > dt' ).size();
        }
          else
            if ( Number( document.getElementById( 'input_winnersAmount' ).value ) < 2 )
              {
                document.getElementById( 'input_winnersAmount' ).value = 2;
          };
    };

    x.oninput = function ()
     {
        document.getElementById( 'x' ).setAttribute( 'max', y.value - 2 );

        if ( this.value.length > 7 )
           {
             this.value = this.value.slice( 0,7 );
        };

        document.getElementById( 'n' ).setAttribute( 'max', y.value - x.value - 1 );

        if ( Number(n.value) > 1 )
           {
             document.getElementById( 'numb-plural' ).innerHTML = 's';
        }
          else
             if ( Number(n.value) === 1 )
             {
               document.getElementById( 'numb-plural' ).innerHTML = '';
          }
            else
               if ( Number(n.value) === 0 )
               {
                 document.getElementById( 'numb-plural' ).innerHTML = 's';
            };
    };

    x.onchange = function ()
     {
        if ( Number(x.value) >= Number(y.value) )
           {
              x.value = y.value - 2;
        };

        if ( Number(n.value) >= Number(y.value)
          || Number(n.value) > Number(y.value) - x.value )
           {
              n.value = y.value - x.value;
        };
    };


    y.oninput = function ()
     {
        if ( this.value.length > 7 )
           {
             this.value = this.value.slice( 0,7 );
        };

        document.getElementById( 'n' ).setAttribute( 'max', y.value - x.value - 1 );

        if ( Number(n.value) > 1 )
           {
             document.getElementById( 'numb-plural' ).innerHTML = 's';
        }
          else
             if ( Number(n.value) === 1 )
             {
               document.getElementById( 'numb-plural' ).innerHTML = '';
          }
            else
               if ( Number(n.value) === 0 )
               {
                 document.getElementById( 'numb-plural' ).innerHTML = 's';
            };
    };

    y.onchange = function ()
     {
        if ( Number(y.value) <= Number(x.value) )
           {
          y.value = Number(x.value) + 2;
        };

        if ( Number(n.value) >= Number(y.value)
          || Number(n.value) > Number(y.value) - x.value )
           {
             n.value = y.value - x.value;
        };
    };



    n.oninput = function ()
     {
        if ( this.value.length > 4 )
           {
             this.value = this.value.slice( 0,4 );
        };


        document.getElementById( 'n' ).setAttribute( 'max', y.value - x.value - 1 );

        if ( Number(n.value) > 1 )
           {
             document.getElementById( 'numb-plural' ).innerHTML = 's';
        }
          else
             if ( Number(n.value) === 1 )
             {
               document.getElementById( 'numb-plural' ).innerHTML = '';
          }
            else
               if ( Number(n.value) === 0 )
               {
                 document.getElementById( 'numb-plural' ).innerHTML = 's';
            };
    };

    n.onchange = function ()
     {
        if ( Number(n.value) >= Number(y.value)
          || Number(n.value) > Number(y.value) - x.value )
          {
             n.value = y.value - x.value;
        };

        if ( Number(x.value) > Number(y.value) )
           {
             x.value = y.value - 2;
        };

        if ( Number(n.value) === 0 )
           {
              n.value = 1;
              document.getElementById( 'numb-plural' ).innerHTML = '';
        };

        if ( Number(n.value) > 2000 )
           {
              n.value = 2000;
              document.getElementById( 'numb-plural' ).innerHTML = 's';
        };
    };
};
