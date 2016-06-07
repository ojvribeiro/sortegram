var
    // [background, buttonBackground, font, fontBody, backgroundDarkColors]
//  Dark colors
    green = ['#116D01','#00B70B','#FFF','#FFF','#114A07'],
    blue = ['#287DF7','#79A9EF','#FFF','#FFF','#104DA5'],
    red = ['#BB2E2E','#E68383','#FFF','#FFF','#821212'],
    yellow = ['#DEBB00','#DED516','#FFF','#FFF','#776A16'],
    orange = ['#F18405','#FF4F00','#FFF','#FFF','#B34C06'],
    pink = ['#FF5AFB','#FF8FF8','#FFF','#FFF','#F12FEE'],
    lilac = ['#9B4AD0','#C79BEA','#FFF','#FFF','#7322A9'],
    cyan = ['#49E4F3','#62C4E6','#FFF','#000','#52CEFB'],
    violet = ['#F108C1','#D84EFD','#FFF','#FFF','#B50C92'],

//  Light colors
    lightGreen = ['#D2FFCA','#7DD887','#FFF','#043A08','#9BDE8F'],
    lightBlue = ['#DCEAFF','#72A7F5','#FFF','#040A3A','#97BDF5'],
    lightRed = ['#FFC6C6','#DA0808','#FFF','#8A1D1D','#FF5A5A'],
    lightYellow = ['#FFEF9B','#DAD108','#FFF','#585308','#C7B01B'],
    lightOrange = ['#FBE5C6','#FF8E41','#FFF','#EA5308','#FF8E41'],
    lightPink = ['#FEDEFF','#FF89F7','#FFF','#690465','#FF90FD'],
    lightLilac = ['#ECDEFF','#DB89FF','#FFF','#5A0469','#D08DFD'],
    lightCyan = ['#D1FFF8','#57B9CE','#FFF','#045169','#62DFF9'],
    lightViolet = ['#FC97FF','#F53DE9','#FFF','#690465','#EB29F1'],

    // DOM vars
    $bg_uiColor = $( '.bg_uiColor' ),
    $btn_uiColor = $( '.btn_uiColor' ),
    $fnt_uiColor = $( '.fnt_uiColor' ),
    $bd_fntColor = $( '.bd_fntColor, #classic span, #sortegram span, #start-sortegram span, #start-sortegram p, #head_orTales p, #sg_Config_Page label' ),
    $bgDark_uiColor = $( '.bgDark_uiColor' );



$( '.ui-color-picker .ui-color' ).on( 'click', function () {
    $( '.ui-color' ).removeClass( 'ui-color-active' );
    $( this ).addClass( 'ui-color-active' );

if ( !isLight.checked ) { // If is not dark
    if ( $( this ).hasClass( 'verde' ) ) {
      $bg_uiColor.css( 'background-color', lightGreen[0] );
      $btn_uiColor.css( 'background-color', lightGreen[1] );
      $fnt_uiColor.css( 'color', lightGreen[2] );
      $bd_fntColor.css( 'color',lightGreen[3] );
      $bgDark_uiColor.css( 'background-color',lightGreen[4] );
      localStorage.setItem( 'ui-color','green' );
    }
     else if ( $( this ).hasClass( 'azul' ) ) {
      $bg_uiColor.css( 'background-color', lightBlue[0] );
      $btn_uiColor.css( 'background-color', lightBlue[1] );
      $fnt_uiColor.css( 'color', lightBlue[2] );
      $bd_fntColor.css( 'color',lightBlue[3] );
      $bgDark_uiColor.css( 'background-color',lightBlue[4] );
      localStorage.setItem( 'ui-color','blue' );
    }
     else if ( $( this ).hasClass( 'vermelho' ) ) {
      $bg_uiColor.css( 'background-color', lightRed[0] );
      $btn_uiColor.css( 'background-color', lightRed[1] );
      $fnt_uiColor.css( 'color', lightRed[2] );
      $bd_fntColor.css( 'color',lightRed[3] );
      $bgDark_uiColor.css( 'background-color',lightRed[4] );
      localStorage.setItem( 'ui-color','red' );
    }
     else if ( $( this ).hasClass( 'amarelo' ) ) {
      $bg_uiColor.css( 'background-color', lightYellow[0] );
      $btn_uiColor.css( 'background-color', lightYellow[1] );
      $fnt_uiColor.css( 'color', lightYellow[2] );
      $bd_fntColor.css( 'color',lightYellow[3] );
      $bgDark_uiColor.css( 'background-color',lightYellow[4] );
      localStorage.setItem( 'ui-color','yellow' );
    }
     else if ( $( this ).hasClass( 'laranja' ) ) {
      $bg_uiColor.css( 'background-color', lightOrange[0] );
      $btn_uiColor.css( 'background-color', lightOrange[1] );
      $fnt_uiColor.css( 'color', lightOrange[2] );
      $bd_fntColor.css( 'color',lightOrange[3] );
      $bgDark_uiColor.css( 'background-color',lightOrange[4] );
      localStorage.setItem( 'ui-color','orange' );
    }
     else if ( $( this ).hasClass( 'rosa' ) ) {
      $bg_uiColor.css( 'background-color', lightPink[0] );
      $btn_uiColor.css( 'background-color', lightPink[1] );
      $fnt_uiColor.css( 'color', lightPink[2] );
      $bd_fntColor.css( 'color',lightPink[3] );
      $bgDark_uiColor.css( 'background-color',lightPink[4] );
      localStorage.setItem( 'ui-color','pink' );
    }
     else if ( $( this ).hasClass( 'lilas' ) ) {
      $bg_uiColor.css( 'background-color', lightLilac[0] );
      $btn_uiColor.css( 'background-color', lightLilac[1] );
      $fnt_uiColor.css( 'color', lightLilac[2] );
      $bd_fntColor.css( 'color',lightLilac[3] );
      $bgDark_uiColor.css( 'background-color',lightLilac[4] );
      localStorage.setItem( 'ui-color','lilac' );
    }
     else if ( $( this ).hasClass( 'ciano' ) ) {
      $bg_uiColor.css( 'background-color', lightCyan[0] );
      $btn_uiColor.css( 'background-color', lightCyan[1] );
      $fnt_uiColor.css( 'color', lightCyan[2] );
      $bd_fntColor.css( 'color',lightCyan[3] );
      $bgDark_uiColor.css( 'background-color',lightCyan[4] );
      localStorage.setItem( 'ui-color','cyan' );
    }
     else if ( $( this ).hasClass( 'violeta' ) ) {
      $bg_uiColor.css( 'background-color', lightViolet[0] );
      $btn_uiColor.css( 'background-color', lightViolet[1] );
      $fnt_uiColor.css( 'color', lightViolet[2] );
      $bd_fntColor.css( 'color',lightViolet[3] );
      $bgDark_uiColor.css( 'background-color',lightViolet[4] );
      localStorage.setItem( 'ui-color','violet' );
    }
  }
    else { // If is dark
      if ( $( this ).hasClass( 'verde' ) ) {
      $bg_uiColor.css( 'background-color', green[0] );
      $btn_uiColor.css( 'background-color', green[1] );
      $fnt_uiColor.css( 'color', green[2] );
      $bd_fntColor.css( 'color',green[3] );
      $bgDark_uiColor.css( 'background-color',green[4] );
      localStorage.setItem( 'ui-color','green' );
    }
     else if ( $( this ).hasClass( 'azul' ) ) {
      $bg_uiColor.css( 'background-color', blue[0] );
      $btn_uiColor.css( 'background-color', blue[1] );
      $fnt_uiColor.css( 'color', blue[2] );
      $bd_fntColor.css( 'color',blue[3] );
      $bgDark_uiColor.css( 'background-color',blue[4] );
      localStorage.setItem( 'ui-color','blue' );
    }
     else if ( $( this ).hasClass( 'vermelho' ) ) {
      $bg_uiColor.css( 'background-color', red[0] );
      $btn_uiColor.css( 'background-color', red[1] );
      $fnt_uiColor.css( 'color', red[2] );
      $bd_fntColor.css( 'color',red[3] );
      $bgDark_uiColor.css( 'background-color',red[4] );
      localStorage.setItem( 'ui-color','red' );
    }
     else if ( $( this ).hasClass( 'amarelo' ) ) {
      $bg_uiColor.css( 'background-color', yellow[0] );
      $btn_uiColor.css( 'background-color', yellow[1] );
      $fnt_uiColor.css( 'color', yellow[2] );
      $bd_fntColor.css( 'color',yellow[3] );
      $bgDark_uiColor.css( 'background-color',yellow[4] );
      localStorage.setItem( 'ui-color','yellow' );
    }
     else if ( $( this ).hasClass( 'laranja' ) ) {
      $bg_uiColor.css( 'background-color', orange[0] );
      $btn_uiColor.css( 'background-color', orange[1] );
      $fnt_uiColor.css( 'color', orange[2] );
      $bd_fntColor.css( 'color',orange[3] );
      $bgDark_uiColor.css( 'background-color',orange[4] );
      localStorage.setItem( 'ui-color','orange' );
    }
     else if ( $( this ).hasClass( 'rosa' ) ) {
      $bg_uiColor.css( 'background-color', pink[0] );
      $btn_uiColor.css( 'background-color', pink[1] );
      $fnt_uiColor.css( 'color', pink[2] );
      $bd_fntColor.css( 'color',pink[3] );
      $bgDark_uiColor.css( 'background-color',pink[4] );
      localStorage.setItem( 'ui-color','pink' );
    }
     else if ( $( this ).hasClass( 'lilas' ) ) {
      $bg_uiColor.css( 'background-color', lilac[0] );
      $btn_uiColor.css( 'background-color', lilac[1] );
      $fnt_uiColor.css( 'color', lilac[2] );
      $bd_fntColor.css( 'color',lilac[3] );
      $bgDark_uiColor.css( 'background-color',lilac[4] );
      localStorage.setItem( 'ui-color','lilac' );
    }
     else if ( $( this ).hasClass( 'ciano' ) ) {
      $bg_uiColor.css( 'background-color', cyan[0] );
      $btn_uiColor.css( 'background-color', cyan[1] );
      $fnt_uiColor.css( 'color', cyan[2] );
      $bd_fntColor.css( 'color',cyan[3] );
      $bgDark_uiColor.css( 'background-color',cyan[4] );
      localStorage.setItem( 'ui-color','cyan' );
    }
     else if ( $( this ).hasClass( 'violeta' ) ) {
      $bg_uiColor.css( 'background-color', violet[0] );
      $btn_uiColor.css( 'background-color', violet[1] );
      $fnt_uiColor.css( 'color', violet[2] );
      $bd_fntColor.css( 'color',violet[3] );
      $bgDark_uiColor.css( 'background-color',violet[4] );
      localStorage.setItem( 'ui-color','violet' );
    }
    }


    swal({
        title: 'Aguarde...',
        type: 'info',
        showConfirmButton: false,
        timer: 800
      });
});





function toggleColorPicker ()
 {
  if ( !isLight.checked )
     {
        $( '.verde' ).addClass( 'verde-claro' );
        $( '.azul' ).addClass( 'azul-claro' );
        $( '.vermelho' ).addClass( 'vermelho-claro' );
        $( '.amarelo' ).addClass( 'amarelo-claro' );
        $( '.laranja' ).addClass( 'laranja-claro' );
        $( '.rosa' ).addClass( 'rosa-claro' );
        $( '.lilas' ).addClass( 'lilas-claro' );
        $( '.ciano' ).addClass( 'ciano-claro' );
        $( '.violeta' ).addClass( 'violeta-claro' );
  }
  else
    {
      $( '.verde' ).removeClass( 'verde-claro' );
      $( '.azul' ).removeClass( 'azul-claro' );
      $( '.vermelho' ).removeClass( 'vermelho-claro' );
      $( '.amarelo' ).removeClass( 'amarelo-claro' );
      $( '.laranja' ).removeClass( 'laranja-claro' );
      $( '.rosa' ).removeClass( 'rosa-claro' );
      $( '.lilas' ).removeClass( 'lilas-claro' );
      $( '.ciano' ).removeClass( 'ciano-claro' );
      $( '.violeta' ).removeClass( 'violeta-claro' );
  };
};


$( '#is-light-cb' ).on( 'click', function ()
 {
   var isLight = document.getElementById('is-light');

    if ( $( '.verde' ).hasClass( 'ui-color-active' ) )
       {
          setTimeout( function ()
            {
              $( '.verde' ).click();
                toggleColorPicker();
          }, 10);
        }
         else
            if ( $( '.azul' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.azul' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.vermelho' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.vermelho' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.amarelo' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.amarelo' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.laranja' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.laranja' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.rosa' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.rosa' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.lilas' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.lilas' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            if ( $( '.ciano' ).hasClass( 'ui-color-active' ) )
               {
                  setTimeout(function ()
                    {
                      $( '.ciano' ).click();
                        toggleColorPicker();
                  }, 10);
        }
         else
            {
              setTimeout(function ()
                {
                  $( '.violeta' ).click();
                    toggleColorPicker();
              }, 10);
        };


    swal({
        title: '',
        type: 'success',
        showConfirmButton: false,
        timer: 500
    });
});
