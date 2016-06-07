var svdItemCheck1 = document.getElementById( 'saved_item-check-1' ), svdItemCheck2 = document.getElementById( 'saved_item-check-2' ),
    svdItemCheck3 = document.getElementById( 'saved_item-check-3' ), svdItemCheck4 = document.getElementById( 'saved_item-check-4' ),
    svdItemCheck5 = document.getElementById( 'saved_item-check-5' ), svdItemCheck6 = document.getElementById( 'saved_item-check-6' ),
    svdItemCheck7 = document.getElementById( 'saved_item-check-7' ), svdItemCheck8 = document.getElementById( 'saved_item-check-8' ),
    svdItemCheck9 = document.getElementById( 'saved_item-check-9' ), svdItemCheck10 = document.getElementById( 'saved_item-check-10' ),

    svdItemFakeCheckbox1 = document.getElementById( 'saved_item-cb-1' ), svdItemFakeCheckbox2 = document.getElementById( 'saved_item-cb-2' ),
    svdItemFakeCheckbox3 = document.getElementById( 'saved_item-cb-3' ), svdItemFakeCheckbox4 = document.getElementById( 'saved_item-cb-4' ),
    svdItemFakeCheckbox5 = document.getElementById( 'saved_item-cb-5' ), svdItemFakeCheckbox6 = document.getElementById( 'saved_item-cb-6' ),
    svdItemFakeCheckbox7 = document.getElementById( 'saved_item-cb-7' ), svdItemFakeCheckbox8 = document.getElementById( 'saved_item-cb-8' ),
    svdItemFakeCheckbox9 = document.getElementById( 'saved_item-cb-9' ), svdItemFakeCheckbox10 = document.getElementById( 'saved_item-cb-10' );



// Altera o numero de participantes do sorteio Sortegram
function changeNumber ()
 {
    sg_Number_of_PartEditing.innerHTML = $( '#part_List > dt' ).size();
    sg_Number_of_Part.innerHTML = $( '#part_List > dt' ).size();

  if ( $( '#part_List > dt' ).size() === 0 )
     {
        document.getElementById( 'part-plural' ).innerHTML = 's';
        document.getElementById( 'part-plural-2' ).innerHTML = 's';

          document.getElementById( 'sg_Save' )
            .setAttribute('disabled','');

        $( '#part_List' )
          .removeClass( 'part_List-no-empty' )
            .addClass( 'part_List-empty' );
  }
     else
        if ( $( '#part_List > dt' ).size() === 1 )
           {
               document.getElementById( 'part-plural' ).innerHTML = '';
               document.getElementById( 'part-plural-2' ).innerHTML = '';

               document.getElementById( 'sg_Save' )
                .removeAttribute( 'disabled' );

               $( '#part_List' )
                  .removeClass( 'part_List-empty' )
                    .addClass( 'part_List-no-empty' );
     }
        else
           {
             document.getElementById( 'part-plural' ).innerHTML = 's';
             document.getElementById( 'part-plural-2' ).innerHTML = 's';

             document.getElementById( 'sg_Save' )
              .removeAttribute( 'disabled' );

             $( '#part_List' )
                .removeClass( 'part_List-empty' )
                  .addClass( 'part_List-no-empty' );
       };
};





// Adiciona o participante a lista
function submit_Item ()
 {
   if ( $( '#userName_Input' ).hasClass( 'userName_Input-at-active' ) )
          {
            if ( userName_Input.value.length !== 0
              && userName_Input.value.match(/^([\w\.?\_?]){1,35}$/g)
              )
                {
                  downList();

                  enable_SaveBtn(saveBtn);
                    enable_SaveBtn(saveBtn1);
                      enable_SaveBtn(saveBtn2);
                        enable_SaveBtn(saveBtn3);
                          enable_SaveBtn(saveBtn4);
                            enable_SaveBtn(saveBtn5);
                              enable_SaveBtn(saveBtn6);
                                enable_SaveBtn(saveBtn7);
                                  enable_SaveBtn(saveBtn8);
                                    enable_SaveBtn(saveBtn10);

                        part_List = document.getElementById( 'part_List' ).innerHTML +=
                        '<dt class="dt"><div class="dt-text">'
                        + '@' // Inserimos um arroba
                        + userName_Input.value
                        + '</div><button class="delete-user"></button></dt>';

                    part_List2 = document.getElementById( 'part_List-2' ).innerHTML = part_List;

                    changeNumber();
            }
             else
                {
                  userName_Input.select();
                  inputUserNameLabel.innerHTML = 'Nome de participante inválido!';
                  $( inputUserNameLabel )
                    .removeClass( 'error-shake' )
                      .addClass( 'error-shake' );

                  setTimeout(function ()
                   {
                      inputUserNameLabel.innerHTML = 'Digite o nome do participante';
                      $( inputUserNameLabel )
                        .removeClass( 'error-shake' );
                    }, 5000);
              };

  }
    else
        {
          if ( userName_Input.value.length !== 0
            && userName_Input.value.match(/^@?([\w\W]){1,35}$/g)
            )
              {
                downList();

                enable_SaveBtn(saveBtn);
                  enable_SaveBtn(saveBtn1);
                    enable_SaveBtn(saveBtn2);
                      enable_SaveBtn(saveBtn3);
                        enable_SaveBtn(saveBtn4);
                          enable_SaveBtn(saveBtn5);
                            enable_SaveBtn(saveBtn6);
                              enable_SaveBtn(saveBtn7);
                                enable_SaveBtn(saveBtn8);
                                  enable_SaveBtn(saveBtn10);

                        part_List = document.getElementById( 'part_List' ).innerHTML +=
                        '<dt class="dt"><div class="dt-text">'
                        + userName_Input.value
                        + '</div><button class="delete-user"></button></dt>';

                  part_List2 = document.getElementById( 'part_List-2' ).innerHTML = part_List;

                  changeNumber();
          }
           else
              {
                userName_Input.select();
                inputUserNameLabel.innerHTML = 'Nome de participante inválido!';
                $( inputUserNameLabel )
                  .removeClass( 'error-shake' )
                    .addClass( 'error-shake' );

                setTimeout( function ()
                 {
                    inputUserNameLabel.innerHTML = 'Digite o nome do participante';
                    $( inputUserNameLabel )
                      .removeClass( 'error-shake' );
                  }, 5000);
            };
    };
};





// Deleta um participante
$( document ).on( 'click','.delete-user', function ()
 {
            $( this )
                .parent()
                  .remove();

              enable_SaveBtn(saveBtn);
                enable_SaveBtn(saveBtn1);
                  enable_SaveBtn(saveBtn2);
                    enable_SaveBtn(saveBtn3);
                      enable_SaveBtn(saveBtn4);
                        enable_SaveBtn(saveBtn5);
                          enable_SaveBtn(saveBtn6);
                            enable_SaveBtn(saveBtn7);
                              enable_SaveBtn(saveBtn8);
                                enable_SaveBtn(saveBtn10);

              $( '#part_List-2' )
                .html( $( '#part_List' )
                  .html() );
              changeNumber();
});






// Rola a lista de participantes para o final
function downList ()
 {
    $( '#part_List' )
      .animate({
        scrollTop : $( '#part_List' )[0].scrollHeight
    }, 200);
};





function enable_SaveBtn (elem)
  {
    elem.disabled = false;
    elem.style.backgroundImage = 'url(img/appbar.save.png)';
};





function disable_SaveBtn (elem)
  {
    if ( elem === saveBtn )
      {
        elem.disabled = true;
        elem.style.backgroundImage = 'url(img/appbar.save.png)';
    }
      else
        {
          elem.disabled = true;
          elem.style.backgroundImage = 'url(img/appbar.saved.png)';
      };
};




// Salva os sorteios ou mostra mensagem de memoria cheia
function sg_Save ()
 {
    var part_List = document.getElementById( 'part_List' ).innerHTML;

    if ( $( '#part_List > dt' ).size() > 0 )
       {
            swal({
                title               :     'Salvar Sorteio',
                text                :     'Escolha um nome para ele',
                cancelButtonText    :     'Cancelar',
                confirmButtonText   :     'Salvar',
                type                :     'input',
                showCancelButton    :     true,
                closeOnConfirm      :     false,
                confirmButtonColor  :     '#35B138',
                inputPlaceholder    :     'Nome do Sorteio'
              },
                  function ( inputValue )
                   {
                      if (inputValue === false) return false;

                     function saveItem ( itemNumber )
                        {
                          savedNamesMng = document.getElementById( 'part_List' ).innerHTML;
                          isNew.checked = false;
                          saveBtn.disabled = true;
                          saveBtn.style.backgroundImage = 'url(img/appbar.saved.png)';

                          window.localStorage.setItem( 'saved-item-' + itemNumber + '-name', inputValue );
                          window.localStorage.setItem( 'saved-item-' + itemNumber + '_LastEdit', new Date().toLocaleString() );
                          window.localStorage.setItem( 'saved-item-' + itemNumber + '_Creation', new Date().toLocaleString() );
                          window.localStorage.setItem( 'saved-item-' + itemNumber + '-PartAmount', $( '#part_List > dt' ).size() );
                          window.localStorage.setItem( 'saved-item-' + itemNumber + '-data', part_List );
                          window.localStorage.setItem( 'saved-item-' + itemNumber, 'ok' );
                          window.localStorage.setItem( 'is-new','false' );

                          document.getElementById( 'saved_item-name-' + itemNumber ).innerHTML = inputValue;
                          document.getElementById( 'saved_item-PartAmount-' + itemNumber ).innerHTML = $( '#part_List > dt' ).size() + ' part.';

                          $( '#saved_item-' + itemNumber )
                            .show();

                          setTimeout(function ()
                            {
                              swal({
                                  title               :     'Salvo!',
                                  type                :     'success',
                                  showConfirmButton  :     false,
                                  timer               :     1500
                              });
                          }, 1200);

                          $( '#sg-manage-btn' )
                            .show();

                          $( '#saved_item-edit-btn-' + itemNumber )
                            .click();

                          status( '<span style="margin-right: 10px">Editar</span>"' + inputValue + '"' );

                          Reload();
                      };

                if ( inputValue === '' )
                    {
                      swal({
                          title               :     'Não seja assim ;)',
                          text                :     'Escolha um nome para seu sorteio. \n Ex.: "Rifa de Família"',
                          type                :     'error',
                          confirmButtonColor  :     '#35B138',
                          timer               :     10000
                      });

                      return false;
                };

                if ( inputValue.length >= 30 )
                       {
                          swal.showInputError( 'Por gentileza, escolha um nome mais curto.' );
                          return false;
                };

                if ( _savedItem1 === '' )
                         {
                            saveItem(1);
                }
                  else
                     if ( _savedItem1 !== ''
                          && _savedItem2 === '' )
                           {
                              saveItem(2);
                  }
                    else
                       if ( _savedItem2 !== ''
                            && _savedItem3 === '' )
                             {
                                saveItem(3);
                    }
                      else
                         if ( _savedItem3 !== ''
                              && _savedItem4 === '' )
                               {
                                  saveItem(4);
                      }
                        else
                           if ( _savedItem4 !== ''
                                && _savedItem5 === '' )
                                 {
                                    saveItem(5);
                        }
                          else
                             if ( _savedItem5 !== ''
                                  && _savedItem6 === '' )
                                   {
                                      saveItem(6);
                          }
                            else
                               if ( _savedItem6 !== ''
                                    && _savedItem7 === '' )
                                     {
                                        saveItem(7);
                            }
                              else
                                 if ( _savedItem7 !== ''
                                      && _savedItem8 === '' )
                                       {
                                          saveItem(8);
                              }
                                else
                                   if ( _savedItem8 !== ''
                                        && _savedItem9 === '' )
                                         {
                                            saveItem(9);
                                }
                                  else
                                     if ( _savedItem9 !== ''
                                          && _savedItem10 === '' )
                                           {
                                              saveItem(10);
                                  }
                                    else
                                       {
                                          swal({
                                              title               :     'Ops!',
                                              text                :     'Limite de 10 sorteios atingido. \nApague um dos sorteios para salvar um novo.',
                                              type                :     'error',
                                              confirmButtonColor  :     '#35B138'
                                          });
                                    };
            });

        sgSaveList();
          changeNumber();
      }/*
        else
           {
             return false;
        };*/
};






function toggleDeleteSelectedBtn ()
 {
   if ( svdItemCheck1.checked || svdItemCheck2.checked
     || svdItemCheck3.checked || svdItemCheck4.checked
     || svdItemCheck5.checked || svdItemCheck6.checked
     || svdItemCheck7.checked || svdItemCheck8.checked
     || svdItemCheck9.checked || svdItemCheck10.checked )
    {
      document.getElementById( 'saved-raffle-button-delete-selected' )
        .removeAttribute( 'disabled' );

      document.getElementById( 'saved-raffle-button-new' )
        .setAttribute( 'disabled','' );
    }
     else
        if ( !svdItemCheck1.checked && !svdItemCheck2.checked
          && !svdItemCheck3.checked && !svdItemCheck4.checked
          && !svdItemCheck5.checked && !svdItemCheck6.checked
          && !svdItemCheck7.checked && !svdItemCheck8.checked
          && !svdItemCheck9.checked && !svdItemCheck10.checked )
      {
        document.getElementById( 'saved-raffle-button-delete-selected' )
          .setAttribute( 'disabled','' );

        document.getElementById( 'saved-raffle-button-new' )
          .removeAttribute( 'disabled' );
      };
};





function hideSaveBtn ()
 {
    saveBtn1.style.display = hide;
    saveBtn2.style.display = hide;
    saveBtn3.style.display = hide;
    saveBtn4.style.display = hide;
    saveBtn5.style.display = hide;
    saveBtn6.style.display = hide;
    saveBtn7.style.display = hide;
    saveBtn8.style.display = hide;
    saveBtn9.style.display = hide;
    saveBtn10.style.display = hide;

    deleteBtn1.style.display = hide;
    deleteBtn2.style.display = hide;
    deleteBtn3.style.display = hide;
    deleteBtn4.style.display = hide;
    deleteBtn5.style.display = hide;
    deleteBtn6.style.display = hide;
    deleteBtn7.style.display = hide;
    deleteBtn8.style.display = hide;
    deleteBtn9.style.display = hide;
    deleteBtn10.style.display = hide;

    renameBtn1.style.display = hide;
    renameBtn2.style.display = hide;
    renameBtn3.style.display = hide;
    renameBtn4.style.display = hide;
    renameBtn5.style.display = hide;
    renameBtn6.style.display = hide;
    renameBtn7.style.display = hide;
    renameBtn8.style.display = hide;
    renameBtn9.style.display = hide;
    renameBtn10.style.display = hide;
};





function sgSaveList ()
 {
  var part_List = document.getElementById( 'part_List' ).innerHTML;
    localStorage.setItem( 'is-new',false );
};





function selectItem ( itemNumber )
 {
  $( '#saved_item-cb-' + itemNumber )
    .removeClass( 'saved_item-cb-no-selected' )
      .addClass( 'saved_item-cb-selected' );
        selectSavedRaffle();
          toggleDeleteSelectedBtn();
};

function unselectItem ( itemNumber )
 {
  $( '#saved_item-cb-' + itemNumber )
    .removeClass( 'saved_item-cb-selected' )
      .addClass( 'saved_item-cb-no-selected' );
        toggleDeleteSelectedBtn();
};



function unselectAll ()
 {
  setTimeout( function ()
    {
      document.getElementById( 'saved-raffle-button-select' )
        .click();
    },50);
      toggleDeleteSelectedBtn();
};



function selectSavedRaffleClose ()
  {
    svdItemCheck1.checked = !1; svdItemCheck2.checked = !1;
    svdItemCheck3.checked = !1; svdItemCheck4.checked = !1;
    svdItemCheck5.checked = !1; svdItemCheck6.checked = !1;
    svdItemCheck7.checked = !1; svdItemCheck8.checked = !1;
    svdItemCheck9.checked = !1; svdItemCheck10.checked = !1;

    $( '.saved_item-cb' )
      .removeClass( 'saved_item-cb-selected' )
        .addClass( 'saved_item-cb-no-selected' );

    $( '.saved_item-edit-btn' )
      .show();
    $( '.saved_item-delete-btn' )
      .show();
    $( '.saved_item-start-btn' )
      .show();
    $( '.saved_item-info-btn' )
      .show();

    $( '.saved_item-cb' )
      .removeClass( 'saved_item-cb-open' )
        .addClass( 'saved_item-cb-close' );

    $( '.saved_item' )
      .css({
            'background-image':'url(img/appbar.list.two.png)'
          });

    $( '#saved-raffle-button-select' )
      .removeClass( 'saved-raffle-button-select-active' )
        .addClass( 'saved-raffle-button-select-inactive' );

    $( '#saved_item-selectAll' )
      .removeClass( 'saved-raffle-button-select-active' )
        .addClass( 'saved-raffle-button-select-inactive' )
          .hide();

    toggleDeleteSelectedBtn();
};



function selectSavedRaffle ()
  {
    $( '.saved_item-edit-btn' )
      .hide();
    $( '.saved_item-delete-btn' )
      .hide();
    $( '.saved_item-start-btn' )
      .hide();
    $( '.saved_item-info-btn' )
      .hide();

    $( '.saved_item-cb' )
      .removeClass( 'saved_item-cb-close' )
        .addClass( 'saved_item-cb-open' );

    $( '.saved_item' )
      .css({
          'background-image':'none'
          });

    $( '#saved-raffle-button-select' )
      .removeClass( 'saved-raffle-button-select-inactive' )
        .addClass( 'saved-raffle-button-select-active' );

    $( '#saved_item-selectAll' )
      .show();

    toggleDeleteSelectedBtn();
};




function sg_selectAll ()
  {
    if ( !svdItemCheck1.checked || !svdItemCheck2.checked
          || !svdItemCheck3.checked || !svdItemCheck4.checked
          || !svdItemCheck5.checked || !svdItemCheck6.checked
          || !svdItemCheck7.checked || !svdItemCheck8.checked
          || !svdItemCheck9.checked || !svdItemCheck10.checked )
      {
          selectSavedRaffle ();

          svdItemCheck1.checked = true; svdItemCheck2.checked = true;
          svdItemCheck3.checked = true; svdItemCheck4.checked = true;
          svdItemCheck5.checked = true; svdItemCheck6.checked = true;
          svdItemCheck7.checked = true; svdItemCheck8.checked = true;
          svdItemCheck9.checked = true; svdItemCheck10.checked = true;

          selectItem(1);
          selectItem(2);
          selectItem(3);
          selectItem(4);
          selectItem(5);
          selectItem(6);
          selectItem(7);
          selectItem(8);
          selectItem(9);
          selectItem(10);

          $( '#saved_item-selectAll' )
            .removeClass( 'saved-raffle-button-select-inactive' )
              .addClass( 'saved-raffle-button-select-active' );
    }
      else {
        unselectAll();

        $( '#saved_item-selectAll' )
            .removeClass( 'saved-raffle-button-select-active' )
              .addClass( 'saved-raffle-button-select-inactive' );
      }
};



function deleteSelected ()
 {
   swal(
    {
      title               :   'Certeza?',
      text                :   'Deseja mesmo excluir os \nsorteios selecionados?',
      type                :   'warning',
      showCancelButton    :   true,
      confirmButtonColor  :   '#35B138',
      cancelButtonText    :   'Não',
      confirmButtonText   :   'Sim',
      allowOutsideClick   :   true,
      closeOnConfirm      :   false
    },
     function ()
        {
          if ( svdItemCheck1.checked )
            {
              deleteItem(1);
            };
          if ( svdItemCheck2.checked )
            {
              deleteItem(2);
            };
          if ( svdItemCheck3.checked )
            {
              deleteItem(3);
            };
          if ( svdItemCheck4.checked )
            {
              deleteItem(4);
            };
          if ( svdItemCheck5.checked )
            {
              deleteItem(5);
            };
          if ( svdItemCheck6.checked )
            {
              deleteItem(6);
            };
          if ( svdItemCheck7.checked )
            {
              deleteItem(7);
            };
          if ( svdItemCheck8.checked )
            {
              deleteItem(8);
            };
          if ( svdItemCheck9.checked )
            {
              deleteItem(9);
            };
          if ( svdItemCheck10.checked )
            {
              deleteItem(10);
            };

      swal({
          title               :   'Pronto!',
          text                :   'Sorteios excluídos.',
          type                :   'success',
          timer               :   3000,
          confirmButtonColor  :   '#35B138',
          allowOutsideClick   :   true
      });

      selectSavedRaffleClose();

      if ( !$( '#saved_item-1' ).is( ':visible' )
        && !$( '#saved_item-2' ).is( ':visible' )
        && !$( '#saved_item-3' ).is( ':visible' )
        && !$( '#saved_item-4' ).is( ':visible' )
        && !$( '#saved_item-5' ).is( ':visible' )
        && !$( '#saved_item-6' ).is( ':visible' )
        && !$( '#saved_item-7' ).is( ':visible' )
        && !$( '#saved_item-8' ).is( ':visible' )
        && !$( '#saved_item-9' ).is( ':visible' )
        && !$( '#saved_item-10' ).is( ':visible' )
        && !isNew.checked )
        {
          go_Home();
          isNew.checked = true;
          window.localStorage.setItem( 'is-new','true' );
          Reload();
      };
  });
};





function deleteCurrentNew ()
 {
    if ( document.getElementById( 'part_List' ).innerHTML !== '' )
       {
          swal({
              title               :   'Certeza?',
              text                :   'Todo conteúdo não salvo será perdido.',
              type                :   'warning',
              showCancelButton    :   true,
              confirmButtonColor  :   '#35B138',
              cancelButtonText    :   'Manter',
              confirmButtonText   :   'Descartar',
              closeOnConfirm      :   true
          },
           function ()
            {
              if ( !$( '#saved_item-1' ).is( ':visible' )
                && !$( '#saved_item-2' ).is( ':visible' )
                && !$( '#saved_item-3' ).is( ':visible' )
                && !$( '#saved_item-4' ).is( ':visible' )
                && !$( '#saved_item-5' ).is( ':visible' )
                && !$( '#saved_item-6' ).is( ':visible' )
                && !$( '#saved_item-7' ).is( ':visible' )
                && !$( '#saved_item-8' ).is( ':visible' )
                && !$( '#saved_item-9' ).is( ':visible' )
                && !$( '#saved_item-10' ).is( ':visible' ) )
                {
                  go_Home();
                  isNew.checked = true;
                  window.localStorage.setItem( 'is-new','true' );
                  Reload();
              }
                else
                   {
                     ManageAllBtn();
                };
           });
    }
     else
      {
        if ( !$( '#saved_item-1' ).is( ':visible' )
                && !$( '#saved_item-2' ).is( ':visible' )
                && !$( '#saved_item-3' ).is( ':visible' )
                && !$( '#saved_item-4' ).is( ':visible' )
                && !$( '#saved_item-5' ).is( ':visible' )
                && !$( '#saved_item-6' ).is( ':visible' )
                && !$( '#saved_item-7' ).is( ':visible' )
                && !$( '#saved_item-8' ).is( ':visible' )
                && !$( '#saved_item-9' ).is( ':visible' )
                && !$( '#saved_item-10' ).is( ':visible' ) )
                {
                  go_Home();
                  isNew.checked = true;
                  window.localStorage.setItem( 'is-new','true' );
                  Reload();
              }
                else
                   {
                     ManageAllBtn();
                };
     };
};




function renameItem ( itemNumber )
  {
    swal({
                title                 :    'Renomear',
                text                  :    'Você pode digitar até \n35 caracteres.',
                type                  :    'input',
                closeOnConfirm        :    false,
                confirmButtonColor    :    '#2DB536',
                inputPlaceholder      :    window.localStorage.getItem( 'saved-item-' + itemNumber + '-name'),
                inputValue            :    window.localStorage.getItem( 'saved-item-' + itemNumber + '-name')
              },
                function ( inputValue )
                 {
                    if ( inputValue === '' )
                       {
                          swal.showInputError( 'Você não pode deixar em branco.' );
                          return false;
                    };


                    if ( inputValue.length <= 35 )
                       {

                  window.localStorage.setItem( 'saved-item-' + itemNumber + '-name', inputValue );

                  status( '<span style="margin-right: 10px">Editar</span>"' + inputValue + '"' );

                  $( '#saved_item-name-' + itemNumber )
                    .html( inputValue );

                        swal({
                              title               :    '',
                              text                :    '',
                              timer               :    100,
                              showConfirmButton   :    false
                        });
                      }
                       else
                          {
                            swal.showInputError('O limite de caracteres é de 35.');
                            return false;
                       };
                  });
}

$( document ).on( 'click', '#sg_Rename-1', function ()
 {
    renameItem(1)
});

$( document ).on( 'click', '#sg_Rename-2', function ()
 {
    renameItem(2)
});

$( document ).on( 'click', '#sg_Rename-3', function ()
 {
    renameItem(3)
});

$( document ).on( 'click', '#sg_Rename-4', function ()
 {
    renameItem(4)
});

$( document ).on( 'click', '#sg_Rename-5', function ()
 {
    renameItem(5)
});

$( document ).on( 'click', '#sg_Rename-6', function ()
 {
    renameItem(6)
});

$( document ).on( 'click', '#sg_Rename-7', function ()
 {
    renameItem(7)
});

$( document ).on( 'click', '#sg_Rename-8', function ()
 {
    renameItem(8)
});

$( document ).on( 'click', '#sg_Rename-9', function ()
 {
    renameItem(9)
});

$( document ).on( 'click', '#sg_Rename-10', function ()
 {
    renameItem(10)
});





function deleteItem ( itemNumber )
 {
    window.localStorage.setItem( 'saved-item-'+itemNumber,'' );
      window.localStorage.removeItem( 'saved-item-' + itemNumber + '-name' );
        window.localStorage.removeItem( 'saved-item-' + itemNumber + '_LastEdit' );
          window.localStorage.removeItem( 'saved-item-' + itemNumber + '-data' );
            window.localStorage.removeItem( 'saved-item-' + itemNumber + '_Creation' );
              window.localStorage.removeItem( 'saved-item-' + itemNumber + '-PartAmount' );
            document.getElementById( 'saved_item-' + itemNumber ).style.display = hide;

    if ( !$( '#saved_item-1' ).is( ':visible' )
        && !$( '#saved_item-2' ).is( ':visible' )
        && !$( '#saved_item-3' ).is( ':visible' )
        && !$( '#saved_item-4' ).is( ':visible' )
        && !$( '#saved_item-5' ).is( ':visible' )
        && !$( '#saved_item-6' ).is( ':visible' )
        && !$( '#saved_item-7' ).is( ':visible' )
        && !$( '#saved_item-8' ).is( ':visible' )
        && !$( '#saved_item-9' ).is( ':visible' )
        && !$( '#saved_item-10' ).is( ':visible' )
        && !isNew.checked )
        {
          go_Home();
          isNew.checked = true;
          window.localStorage.setItem( 'is-new','true' );
          $( '#sg-manage-btn' )
            .hide();
          Reload();
      };
};




function deleteItemConfirm (itemNumber)
  {
    swal({
      title               :     'Certeza?',
      text                :     'Deseja mesmo excluir esse sorteio?',
      type                :     'warning',
      showCancelButton    :     true,
      confirmButtonColor  :     '#35B138',
      cancelButtonText    :     'Não',
      confirmButtonText   :     'Sim',
      allowOutsideClick   :     true,
      closeOnConfirm      :     false
    },
      function ()
       {
          deleteItem(itemNumber);

          if ( $( '#sortegram' ).hasClass( 'open' ) )
            {
              ManageAllBtn();
          };

          swal({
            title              :    'Pronto!',
            text               :    'Sorteio excluído.',
            type               :    'success',
            timer              :    3000,
            confirmButtonColor :     '#35B138',
            allowOutsideClick  :     true
          });

        Reload();
      });
};






function editItem (itemNumber)
  {
      sgBlank(); hideSaveBtn();

        $( '#part_List' ).hide();
        status( '<span style="margin-right: 10px">Editar</span>"' + window.localStorage.getItem( 'saved-item-' + itemNumber + '-name' ) + '"' );
          document.getElementById( 'sg_Save-' + itemNumber ).style.display = 'inline-block';
            document.getElementById( 'sg_Save-' + itemNumber ).style.backgroundImage = 'url(img/appbar.saved.png)';
              document.getElementById( 'sg_Save-' + itemNumber ).disabled = true;
                document.getElementById( 'sg_Delete-' + itemNumber ).style.display = 'inline-block';
                  document.getElementById( 'sg_Rename-' + itemNumber ).style.display = 'inline-block';
                  saveBtn.style.display = hide;
                    dltBtn.style.display = hide;
                      userName_Input.value = '';

                      setTimeout(function ()
                         {
                           $( '#userName_Input' ).focus()
                      }, 1500);


                        swal({
                          title               :     'Aguarde',
                          text                :     'Carregando...',
                          type                :     'info',
                          showConfirmButton   :     false
                        });

                        setTimeout(function ()
                          {
                            document.getElementById( 'part_List' ).innerHTML = window.localStorage.getItem( 'saved-item-' + itemNumber + '-data' );
                            swal.close();
                            $( '#part_List' )
                              .show();
                              changeNumber();
                        }, 1000);

      $( '#saved_item-info-btn-' + itemNumber )
        .hide();
};



$( document ).on( 'click', '#part_List .dt-text', function ()
 {
    $( this ).addClass( 'editingUser' );
        swal({
                title                 :    'Editar participante',
                text                  :    'Você pode digitar até \n35 caracteres.',
                type                  :    'input',
                closeOnConfirm        :    false,
                confirmButtonColor    :    '#2DB536',
                inputPlaceholder      :    $( this ).html(),
                inputValue            :    $( this ).html()
              },
                function ( inputValue )
                 {
                    if ( inputValue === '' )
                       {
                          swal.showInputError( 'Você não pode deixar em branco.' );
                          return false;
                    };


                    if ( inputValue.length <= 35 )
                       {
                          $( '.editingUser' )
                            .html(inputValue)
                              .removeClass( 'editingUser' );

                              enable_SaveBtn(saveBtn);
                                enable_SaveBtn(saveBtn1);
                                  enable_SaveBtn(saveBtn2);
                                    enable_SaveBtn(saveBtn3);
                                      enable_SaveBtn(saveBtn4);
                                        enable_SaveBtn(saveBtn5);
                                          enable_SaveBtn(saveBtn6);
                                            enable_SaveBtn(saveBtn7);
                                              enable_SaveBtn(saveBtn8);
                                                enable_SaveBtn(saveBtn10);

                        document.getElementById( 'part_List-2' ).innerHTML = document.getElementById( 'part_List' ).innerHTML;

                        swal({
                              title               :    '',
                              text                :    '',
                              timer               :    100,
                              showConfirmButton   :    false
                        });
                      }
                       else
                          {
                            swal.showInputError('O limite de caracteres é de 35.');
                            return false;
                       };
                  });
});






$( '.saved-raffle-button-home-back' ).on( 'click', function ()
  {
    go_Home();
});





$( '#saved-raffle-button-delete-selected' ).on( 'click', function ()
  {
    deleteSelected();
});

$( '#saved-raffle-button-new' ).on( 'click', function ()
  {
    sgNew();
});





$( '#saved-raffle-button-select' ).on( 'click', function ()
  {
    if ( $( '#saved-raffle-button-select' )
          .hasClass( 'saved-raffle-button-select-active' ) )
      {
        selectSavedRaffleClose();
    }
      else
        if ( $( '#saved-raffle-button-select' )
              .hasClass( 'saved-raffle-button-select-inactive' ) )
          {
            selectSavedRaffle();
      };
});





$( '#sg-start-radio-span-1' ).on( 'click', function ()
  {
    $( '#sg_start_Winners div' )
      .hide();
    document.getElementById( 'sg-start-radio-1' ).checked = true;

    $( '#sg-start-radio-span-1' )
      .addClass( 'sg-start-radio-span-active' );

    $( '#sg-start-radio-span-2' )
      .removeClass( 'sg-start-radio-span-active' );
});

$( '#sg-start-radio-span-2' ).on( 'click', function ()
  {
    $( '#sg_start_Winners div' )
      .show();
    document.getElementById( 'sg-start-radio-2' ).checked = true;

    $( '#sg-start-radio-span-2' )
      .addClass( 'sg-start-radio-span-active' );

    $( '#sg-start-radio-span-1' )
    .removeClass( 'sg-start-radio-span-active' );
});




$( '#sg-go, .flip-container' ).on( 'mousedown', function ()
    {
      $( '#sg-go, .flip-container' )
        .removeClass( 'pulse glow' );
  });






function toggleAtBtn ()
 {
    if ( $( '#userName_Input' ).hasClass( 'userName_Input-at-active' ) )
      {
        $( '#userName_Input' )
          .removeClass( 'userName_Input-at-active' )
            .addClass( 'userName_Input-at-inactive' );

        $( '#toggle-at' )
          .removeClass( 'toggle-at-on' )
            .addClass( 'toggle-at-off' );

                $('#notifica-dica')
                    .hide('drop');
    }
        else
           if ( $( '#userName_Input' ).hasClass( 'userName_Input-at-inactive' ) )
            {
              $( '#userName_Input' )
                .removeClass( 'userName_Input-at-inactive' )
                  .addClass( 'userName_Input-at-active' );

              $( '#toggle-at' )
                .removeClass( 'toggle-at-off' )
                  .addClass( 'toggle-at-on' );

                $('#notifica-dica')
                    .show('drop');

                  $('.dica-texto')
                    .html('Validação para nomes de usuário ligada.');

                  setTimeout(function ()
                   {
                     $('#notifica-dica')
                      .fadeOut();
                  }, 8000);
        };
    document.getElementById( 'userName_Input' ).focus();
};





$( '#toggle-at' ).on( 'click', function ()
  {
    toggleAtBtn();
});




svdItemFakeCheckbox1.addEventListener( 'click' , function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(1);
    };

   if ( svdItemCheck1.checked && !svdItemCheck2.checked
     && !svdItemCheck3.checked && !svdItemCheck4.checked
     && !svdItemCheck5.checked && !svdItemCheck6.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck1.checked )
        {
          svdItemCheck1.checked = true;
          selectItem(1);
        }
          else
            {
              svdItemCheck1.checked = false;
              unselectItem(1);
            };
});





svdItemFakeCheckbox2.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(2);
    };

   if ( svdItemCheck2.checked && !svdItemCheck1.checked
     && !svdItemCheck3.checked && !svdItemCheck4.checked
     && !svdItemCheck5.checked && !svdItemCheck6.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck2.checked )
        {
          svdItemCheck2.checked = true;
          selectItem(2);
        }
          else
            {
              svdItemCheck2.checked = false;
              unselectItem(2);
            };
});





svdItemFakeCheckbox3.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(3);
    };

   if ( svdItemCheck3.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck4.checked
     && !svdItemCheck5.checked && !svdItemCheck6.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck3.checked )
        {
          svdItemCheck3.checked = true;
          selectItem(3);
        }
          else
            {
              svdItemCheck3.checked = false;
              unselectItem(3);
            };
});





svdItemFakeCheckbox4.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(4);
    };

   if ( svdItemCheck4.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck5.checked && !svdItemCheck6.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck4.checked )
        {
          svdItemCheck4.checked = true;
          selectItem(4);
        }
          else
            {
              svdItemCheck4.checked = false;
              unselectItem(4);
            };
});





svdItemFakeCheckbox5.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(5);
    };

   if ( svdItemCheck5.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck6.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck5.checked )
        {
          svdItemCheck5.checked = true;
          selectItem(5);
        }
          else
            {
              svdItemCheck5.checked = false;
              unselectItem(5);
            };
});





svdItemFakeCheckbox6.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(6);
    };

   if ( svdItemCheck6.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck5.checked
     && !svdItemCheck7.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck6.checked )
        {
          svdItemCheck6.checked = true;
          selectItem(6);
        }
          else
            {
              svdItemCheck6.checked = false;
              unselectItem(6);
            };
});





svdItemFakeCheckbox7.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(7);
    };

   if ( svdItemCheck7.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck5.checked
     && !svdItemCheck6.checked && !svdItemCheck8.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck7.checked )
        {
          svdItemCheck7.checked = true;
          selectItem(7);
        }
          else
            {
              svdItemCheck7.checked = false;
              unselectItem(7);
            };
});





svdItemFakeCheckbox8.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(8);
    };

   if ( svdItemCheck8.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck5.checked
     && !svdItemCheck6.checked && !svdItemCheck7.checked
     && !svdItemCheck9.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck8.checked )
        {
          svdItemCheck8.checked = true;
          selectItem(8);
        }
          else
            {
              svdItemCheck8.checked = false;
              unselectItem(8);
            };
});





svdItemFakeCheckbox9.addEventListener( 'click', function ()
  {
    if ( svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(9);
    };

   if ( svdItemCheck9.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck5.checked
     && !svdItemCheck6.checked && !svdItemCheck7.checked
     && !svdItemCheck8.checked && !svdItemCheck10.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck9.checked )
        {
          svdItemCheck9.checked = true;
          selectItem(9);
        }
          else
            {
              svdItemCheck9.checked = false;
              unselectItem(9);
            };
});





svdItemFakeCheckbox10.addEventListener( 'click', function ()
  {
    if ( !svdItemCheck1.checked && !svdItemCheck2.checked
      && !svdItemCheck3.checked && !svdItemCheck4.checked
      && !svdItemCheck5.checked && !svdItemCheck6.checked
      && !svdItemCheck7.checked && !svdItemCheck8.checked
      && !svdItemCheck9.checked && !svdItemCheck10.checked )
    {
      selectItem(10);
    };

   if ( svdItemCheck10.checked && !svdItemCheck1.checked
     && !svdItemCheck2.checked && !svdItemCheck3.checked
     && !svdItemCheck4.checked && !svdItemCheck5.checked
     && !svdItemCheck6.checked && !svdItemCheck7.checked
     && !svdItemCheck8.checked && !svdItemCheck9.checked  )
    {
        unselectAll();
    };



      if ( !svdItemCheck10.checked )
        {
          svdItemCheck10.checked = true;
          selectItem(10);
        }
          else
            {
              svdItemCheck10.checked = false;
              unselectItem(10);
            };
});




  document.getElementById( 'sg_Delete-1' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(1);
  });

  document.getElementById( 'sg_Delete-2' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(2);
  });

  document.getElementById( 'sg_Delete-3' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(3);
  });

  document.getElementById( 'sg_Delete-4' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(4);
  });

  document.getElementById( 'sg_Delete-5' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(5);
  });

  document.getElementById( 'sg_Delete-6' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(6);
  });

  document.getElementById( 'sg_Delete-7' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(7);
  });

  document.getElementById( 'sg_Delete-8' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(8);
  });

  document.getElementById( 'sg_Delete-9' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(9);
  });

  document.getElementById( 'sg_Delete-10' ).addEventListener( 'click', function ()
    {
      deleteItemConfirm(10);
  });









  document.getElementById( 'saved_item-edit-btn-1' ).addEventListener( 'click', function ()
   {
     editItem(1);
  });

  document.getElementById( 'saved_item-edit-btn-2' ).addEventListener( 'click', function ()
   {
     editItem(2);
  });

  document.getElementById( 'saved_item-edit-btn-3' ).addEventListener( 'click', function ()
   {
     editItem(3);
  });

  document.getElementById( 'saved_item-edit-btn-4' ).addEventListener( 'click', function ()
   {
     editItem(4);
  });

  document.getElementById( 'saved_item-edit-btn-5' ).addEventListener( 'click', function ()
   {
     editItem(5);
  });

  document.getElementById( 'saved_item-edit-btn-6' ).addEventListener( 'click', function ()
   {
     editItem(6);
  });

  document.getElementById( 'saved_item-edit-btn-7' ).addEventListener( 'click', function ()
   {
     editItem(7);
  });

  document.getElementById( 'saved_item-edit-btn-8' ).addEventListener( 'click', function ()
   {
     editItem(8);
  });

  document.getElementById( 'saved_item-edit-btn-9' ).addEventListener( 'click', function ()
   {
     editItem(9);
  });

  document.getElementById( 'saved_item-edit-btn-10' ).addEventListener( 'click', function ()
   {
     editItem(10);
  });








  document.getElementById( 'saved_item-delete-btn-1' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(1);
  });

  document.getElementById( 'saved_item-delete-btn-2' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(2);
  });

  document.getElementById( 'saved_item-delete-btn-3' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(3);
  });

  document.getElementById( 'saved_item-delete-btn-4' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(4);
  });

  document.getElementById( 'saved_item-delete-btn-5' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(5);
  });

  document.getElementById( 'saved_item-delete-btn-6' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(6);
  });

  document.getElementById( 'saved_item-delete-btn-7' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(7);
  });

  document.getElementById( 'saved_item-delete-btn-8' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(8);
  });

  document.getElementById( 'saved_item-delete-btn-9' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(9);
  });

  document.getElementById( 'saved_item-delete-btn-10' ).addEventListener( 'click', function ()
   {
     deleteItemConfirm(10);
  });






  function show_opBtns (itemNumber)
    {
      $( '#saved_item-delete-btn-' + itemNumber )
        .removeClass( 'saved_item-delete-btn-close' )
          .addClass( 'saved_item-delete-btn-open' );

      $( '#saved_item-edit-btn-' + itemNumber )
        .removeClass( 'saved_item-edit-btn-close' )
          .addClass( 'saved_item-edit-btn-open' );

      $( '#saved_item-start-btn-' + itemNumber )
        .removeClass( 'saved_item-start-btn-close' )
          .addClass( 'saved_item-start-btn-open' );

      $( '#saved_item-info-btn-' + itemNumber )
        .removeClass( 'saved_item-info-btn-close' )
          .addClass( 'saved_item-info-btn-open' );
  };







  // Open the 'edit' and 'delete' buttons
  savedItem1.addEventListener( 'click', function ()
   {
      show_opBtns(1);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-1, \
                       #saved_item-1' ).length )
         {
            $( '#saved_item-delete-btn-1' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-1' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-1' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-1' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem2.addEventListener( 'click', function ()
   {
      show_opBtns(2);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-2, \
                       #saved_item-2' ).length )
         {
            $( '#saved_item-delete-btn-2' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-2' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-2' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-2' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem3.addEventListener( 'click', function ()
   {
      show_opBtns(3);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-3, \
                       #saved_item-3' ).length )
         {
            $( '#saved_item-delete-btn-3' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-3' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-3' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-3' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem4.addEventListener( 'click', function ()
   {
      show_opBtns(4);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-4, \
                       #saved_item-4' ).length )
         {
            $( '#saved_item-delete-btn-4' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-4' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-4' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-4' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem5.addEventListener( 'click', function ()
   {
      show_opBtns(5);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-5, \
                       #saved_item-5' ).length )
         {
            $( '#saved_item-delete-btn-5' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-5' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-5' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-5' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem6.addEventListener( 'click', function ()
   {
      show_opBtns(6);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-6, \
                       #saved_item-6' ).length )
         {
            $( '#saved_item-delete-btn-6' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-6' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-6' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-6' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem7.addEventListener( 'click', function ()
   {
      show_opBtns(7);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-7, \
                       #saved_item-7' ).length )
         {
            $( '#saved_item-delete-btn-7' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-7' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-7' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-7' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem8.addEventListener( 'click', function ()
   {
      show_opBtns(8);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-8, \
                       #saved_item-8' ).length )
         {
            $( '#saved_item-delete-btn-8' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-8' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-8' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-8' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem9.addEventListener( 'click', function ()
   {
      show_opBtns(9);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-9, \
                       #saved_item-9' ).length )
         {
            $( '#saved_item-delete-btn-9' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-9' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-9' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-9' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });

  savedItem10.addEventListener( 'click', function ()
   {
      show_opBtns(10);
  });

  document.addEventListener( 'click', function ( e )
   {
      if ( !$( e.target )
            .closest( '#saved_item-cb-10, \
                       #saved_item-10' ).length )
         {
            $( '#saved_item-delete-btn-10' )
              .removeClass( 'saved_item-delete-btn-open' )
                .addClass( 'saved_item-delete-btn-close' );

            $( '#saved_item-edit-btn-10' )
              .removeClass( 'saved_item-edit-btn-open' )
                .addClass( 'saved_item-edit-btn-close' );

            $( '#saved_item-start-btn-10' )
              .removeClass( 'saved_item-start-btn-open' )
                .addClass( 'saved_item-start-btn-close' );

            $( '#saved_item-info-btn-10' )
              .removeClass( 'saved_item-info-btn-open' )
                .addClass( 'saved_item-info-btn-close' );
      };
  });








function sg_showInfo ( itemNumber )
  {
    swal({
        title               : 'Informações',
        text                : '<div style="text-align: left">Título: <b style="color: #000; word-wrap: break-word">' + window.localStorage.getItem('saved-item-'+itemNumber+'-name') + '</b> <br>Participantes: <b style="color: #000">' + window.localStorage.getItem('saved-item-'+itemNumber+'-PartAmount') + '</b> <br>Criação: <b style="color: #000">' + window.localStorage.getItem('saved-item-'+itemNumber+'_Creation') + '</b> <br>Última edição: <b style="color: #000">' + window.localStorage.getItem('saved-item-'+itemNumber+'_LastEdit') + '</b></div>',
        type                : 'info',
        html                : true,
        allowOutsideClick   : true,
        confirmButtonColor  : '#35B138'
      });
};



  savedItem1_info.addEventListener( 'click', function ()
   {
      sg_showInfo(1);
  });

  savedItem2_info.addEventListener( 'click', function ()
   {
      sg_showInfo(2);
  });

  savedItem3_info.addEventListener( 'click', function ()
   {
      sg_showInfo(3);
  });

  savedItem4_info.addEventListener( 'click', function ()
   {
      sg_showInfo(4);
  });

  savedItem5_info.addEventListener( 'click', function ()
   {
      sg_showInfo(5);
  });

  savedItem6_info.addEventListener( 'click', function ()
   {
      sg_showInfo(6);
  });

  savedItem7_info.addEventListener( 'click', function ()
   {
      sg_showInfo(7);
  });

  savedItem9_info.addEventListener( 'click', function ()
   {
      sg_showInfo(9);
  });

  savedItem8_info.addEventListener( 'click', function ()
   {
      sg_showInfo(8);
  });

  savedItem9_info.addEventListener( 'click', function ()
   {
      sg_showInfo(9);
  });

  savedItem10_info.addEventListener( 'click', function ()
   {
      sg_showInfo(10);
  });






  savedItem1_start.addEventListener( 'click', function ()
   {
      editItem(1);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1000);
  });

  savedItem2_start.addEventListener( 'click', function ()
   {
      editItem(2);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem3_start.addEventListener( 'click', function ()
   {
      editItem(3);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem4_start.addEventListener( 'click', function ()
   {
      editItem(4);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem5_start.addEventListener( 'click', function ()
   {
      editItem(5);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem6_start.addEventListener( 'click', function ()
   {
      editItem(6);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem7_start.addEventListener( 'click', function ()
   {
      editItem(7);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem8_start.addEventListener( 'click', function ()
   {
      editItem(8);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem9_start.addEventListener( 'click', function ()
   {
      editItem(9);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });

  savedItem10_start.addEventListener( 'click', function ()
   {
      editItem(10);
      setTimeout(function ()
       {
         sg_Ready();
      }, 1170);
  });






function saveItem_Overwrite ( itemNumber )
  {
    var part_List = document.getElementById( 'part_List' ).innerHTML;
      window.localStorage.setItem('saved-item-' + itemNumber + '-data', part_List);
      window.localStorage.setItem( 'saved-item-' + itemNumber + '-PartAmount', $( '#part_List > dt' ).size() );
      window.localStorage.setItem( 'saved-item-1_LastEdit', new Date().toLocaleString() );

      document.getElementById( 'saved_item-PartAmount-' + itemNumber ).innerHTML = $( '#part_List > dt' ).size() + ' part.';

      document.getElementById('sg_Save-' + itemNumber ).disabled = true;
      document.getElementById('sg_Save-' + itemNumber ).style.backgroundImage = 'url(img/appbar.saved.png)';
};



    $( '#sg_Save-1' ).on( 'click', function ()
     {
        saveItem_Overwrite(1);
    });

    $( '#sg_Save-2' ).on('click', function ()
     {
        saveItem_Overwrite(2);
    });

    $( '#sg_Save-3' ).on('click', function ()
     {
        saveItem_Overwrite(3);
    });

    $( '#sg_Save-4' ).on('click', function ()
     {
        saveItem_Overwrite(4);
    });

    $( '#sg_Save-5' ).on('click', function ()
     {
        saveItem_Overwrite(5);
    });

    $( '#sg_Save-6' ).on('click', function ()
     {
        saveItem_Overwrite(6);
    });

    $( '#sg_Save-7' ).on('click', function ()
     {
        saveItem_Overwrite(7);
    });

    $( '#sg_Save-8' ).on('click', function ()
     {
        saveItem_Overwrite(8);
    });

    $( '#sg_Save-9' ).on('click', function ()
     {
        saveItem_Overwrite(9);
    });

    $( '#sg_Save-10' ).on('click', function ()
     {
        saveItem_Overwrite(10);
    });








// Comeca a sortear
function sg_Start ()
 {

  if ( document.getElementById( 'sg-start-radio-1' ).checked )
    {

      // Exibe o 'Sorteando'
          status( 'Sorteando...' );

      // Definimos as variaveis dos resultados
      var sortear = Math.floor( Math.random() * ( ( Number( sg_Number_of_Part.innerHTML ) - 1 ) + 1 ) + 1 ), // Numero vencedor
          winner = sortear - 1; // Ajuste para a rolagem correta da lista

      sgGo.disabled = true;
      nbOpsBtn.disabled = true;

      sgGo.style.display = hide;
      $( '#sg_start_Btn, #sg_start_Winners' )
        .hide(); // Esconde alguns elementos

      $( sgResult )
        .fadeIn();


      // Comeca a mostrar numeros aleatorios mudando frequentemente
      var sort = setInterval( function ()
          {
            sgResult.innerHTML = Math.floor( Math.random() * ( ( Number( sg_Number_of_Part.innerHTML ) - 1 ) + 1 ) + 1 );

            // Aumenta ou diminui a fonte de acordo com a quantidade de algarismos mostrada
            if ( sgResult.innerHTML.length <= 2 )
               {
                 sgResult.style.fontSize = '38pt';
            }
             else
                if ( sgResult.innerHTML.length <= 3 )
                  {
                    sgResult.style.fontSize = '36pt';
             }
               else
                  if ( sgResult.innerHTML.length <= 4 )
                    {
                      sgResult.style.fontSize = '25pt';
               };
      }, 60); // Os numeros mudam a cada 60 milissegundos



          $( sgResult )
            .css({
              'width'             :   '75px',
              'height'            :   '',
              'font-size'         :   '38pt',
              'border-radius'     :   '',
              'background-color'  :   '',
              'color'             :   '',
              'text-align'        :   '',
              'text-align'        :   '',
              'margin-left'       :   ''
            })
              .removeClass( 'addfadeIn' )
                .before( '<div id="spinner"></div>' );

            // Mostra o loader
            $( '#spinner' )
              .fadeIn();

            // Move o trofeu para seu lugar original
            $( '#trophy' )
              .css({
                'margin-left':''
            });

            // Adiciona um efeito 'blink' a barra de titulo
            $( '#statusTitle_Bar' )
              .removeClass( 'statusTitle_Bar-blink addfadeIn' )
                .addClass( 'statusTitle_Bar-blink' );

            // Bloqueia o scroll enquanto o sorteio e feito
            $( '#part_List-2' )
              .removeClass( 'scroll' )
                .addClass( 'lock-scroll' );


      // Mostra o resultado final depois de 4s
      setTimeout( function ()
       {

         status( 'Resultado' );

         clearInterval( sort ); // Remove o loop de numeros

         // Retorna a data e hora atuais
         var now = new Date().toLocaleString(),
             sgCurrent = document.getElementById( 'sg-current' );

          nbOpsBtn.disabled = false;

          // Imprime a data e hora do sorteio
          sgCurrent.style.display = show;
          sgCurrent.innerHTML = 'Sorteado em ' + now;

         // Rola a lista de participantes pro inicio
          $( '#part_List-2' )
            .animate({
              scrollTop: $( '#part_List-2 dt:nth-child(1)' ).position().top
          }, 400);


                  $( sgResult )
                    .css({
                      'width'           :   '',
                      'border-radius'   :   '20px',
                      'text-align'      :   ''
                    })
                      .html( sortear ) // Imprime o numero ganhador
                        .before( '<div id="trophy"></div>' ); //

                    // Mostra o trofeu
                    $( '#trophy' )
                      .show()
                        .addClass( 'animated infinite pulse sg_Config-winIcon-' + localStorage.getItem('winner-icon') );

                    // Esconde o loader
                    $( '#spinner' ).fadeOut();
                    setTimeout( function ()
                     {
                       $( '#spinner' )
                        .remove();
                    }, 1000);


                // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
                $( '#statusTitle_Bar' )
                  .removeClass( 'addfadeIn statusTitle_Bar-blink' )
                    .addClass( 'addfadeIn' );


          // Mostra o nome do participante que venceu
                setTimeout( function ()
                 {

                    if ( sortear === 1 ) // Se o ganhador for o numero 1, a rolagem ate o ganhador nao ocorre
                       {
                          $( '#part_List-2' )
                            .animate({
                              scrollTop: $( '#part_List-2 dt:nth-child(' + sortear + ')' ).position().top
                          }, 1000);
                    }
                      else // Se nao, ocorre uma rolagem na lista ate o nome anterior ao ganhador
                        {
                            $( '#part_List-2' )
                              .animate({
                                scrollTop: $( '#part_List-2 dt:nth-child(' + winner + ')' ).position().top
                            }, 1000);
                      };



                  // Destaca o ganhador na lista
                  $( '#part_List-2 dt:nth-child(' + sortear + ')' )
                    .css({
                        'background-color'  :   '#FFF',
                        'color'             :   '#000',
                        'border-left'       :   '4px solid #F00'
                  });


                  // Permite o scroll quando o sorteio termina
                  $( '#part_List-2' )
                    .removeClass( 'lock-scroll' )
                      .addClass( 'scroll' );



                    // Imprime o nome
                    $( sgResult )
                      .css({
                          'text-align'  :   '',
                          'color'       :   '#53AF52'
                    });
                    sgResult.innerHTML = sortear
                    + '.<span style="margin-left: 5px;">'
                    + $( '#part_List-2 dt:nth-child(' + sortear + ')' ).children().html()
                    + '</span>';


                    $( '#sg_start_Btn' )
                      .show(); // Mostra os botoes 'Novo Sorteio' e 'Inicio'


                // Aumenta ou diminui a fonte de acordo com o resultado
                if ( sgResult.innerHTML.length <= (39 + 5) ) // O numero 39 foi adicionado para nao levarmos em consideracao as tags HTML
                   {
                     sgResult.style.fontSize = '30pt';
                }
                  else
                     if ( sgResult.innerHTML.length <= (39 + 10) )
                       {
                         sgResult.style.fontSize = '20pt';
                  }
                    else
                       if ( sgResult.innerHTML.length <= (39 + 16) )
                         {
                           sgResult.style.fontSize = '18pt';
                    }
                      else
                         if ( sgResult.innerHTML.length <= (39 + 18) )
                           {
                             sgResult.style.fontSize = '16pt';
                      }
                        else
                           if ( sgResult.innerHTML.length >= (39 + 19) )
                             {
                               sgResult.style.fontSize = '14pt';
                        };
              }, 1000);

        }, 4000);
  }

  else
    {
      // Cria uma array com a quantidade de numeros dada de modo que não se repitam
      var arr = [];

      while ( arr.length < Number( $( '#input_winnersAmount' ).val() ) )
         {
            var randomnumber = Math.floor( Math.random() * ( ( Number( $( '#part_List-2 > dt' ).size() ) - 1 ) + 1 ) + 1 );
            var found = false;

            for ( var i = 0; i < arr.length; i++ )
               {
                  if ( arr[i] === randomnumber )
                     {
                        found = true;
                        break
                  };
            };

            if ( !found )
               {
                 arr[arr.length] = randomnumber
            };
      };


        // Exibe o 'Sorteando'
          status( 'Sorteando...' );

          sgGo.disabled = true;
          nbOpsBtn.disabled = true;

          sgGo.style.display = hide;
          $( '#sg_start_Btn, #sg_start_Winners' )
            .hide(); // Esconde alguns elementos

          $( sgResult ).fadeIn();

          $( '#part_List-2' )
            .css({
              'height'    :   '0px'
          });

          $( sgResult )
            .css({
              'width'             :   '75px',
              'height'            :   '',
              'font-size'         :   '38pt',
              'border-radius'     :   '',
              'background-color'  :   '',
              'color'             :   '',
              'text-align'        :   '',
              'text-align'        :   '',
              'margin-left'       :   ''
            })
              .removeClass( 'addfadeIn' )
                .before( '<div id="spinner"></div>' );

            // Mostra o loader
            $( '#spinner' )
              .fadeIn();

            // Move o trofeu para seu lugar original
            $( '#trophy' )
              .css({
                'margin-left'    :    ''
            });

            // Adiciona um efeito 'blink' a barra de titulo
            $( '#statusTitle_Bar' )
              .removeClass( 'statusTitle_Bar-blink addfadeIn' )
                .addClass( 'statusTitle_Bar-blink' );



            // Comeca a mostrar numeros aleatorios mudando frequentemente
            var sort = setInterval( function ()
                {
                  sgResult.innerHTML = Math.floor( Math.random() * ( ( Number( sg_Number_of_Part.innerHTML ) - 1 ) + 1 ) + 1 );

                  // Aumenta ou diminui a fonte de acordo com a quantidade de algarismos mostrada
                  if ( sgResult.innerHTML.length <= 2 )
                     {
                       sgResult.style.fontSize = '38pt';
                  }
                   else
                      if ( sgResult.innerHTML.length <= 3 )
                        {
                          sgResult.style.fontSize = '36pt';
                   }
                     else
                        if ( sgResult.innerHTML.length <= 4 )
                          {
                            sgResult.style.fontSize = '25pt';
                     };
            }, 60); // Os numeros mudam a cada 60 milissegundos




      // Mostra o resultado final depois de 4s
      setTimeout( function ()
       {
            status( 'Resultado' );

            clearInterval( sort ); // Remove o loop de numeros

        // Retorna a data e hora atuais
         var now = new Date().toLocaleString(),
             sgCurrent = document.getElementById( 'sg-current' );

            // Imprime a data e hora do sorteio
            sgCurrent.style.display = show;
            sgCurrent.innerHTML = 'Sorteado em ' + now;

            nbOpsBtn.disabled = false;



              var j = Number( $( '#input_winnersAmount' ).val() ),
                  resultContainer = sgResult;


                    $( sgResult ).css({
                        'width'             :   '',
                        'height'            :   '70px',
                        'font-size'         :   '38pt',
                        'border-radius'     :   '20px',
                        'text-align'        :   'left',
                        'overflow'          :   'hidden',
                        'word-wrap'         :   ''
                    })
                      .html('')
                        .before( '<div id="trophy"></div>' );

                    for ( i = 0; i <= (j-1); i++ )
                       {
                          var newListItem = document.createElement('span');
                          newListItem.innerHTML = '<li style="list-style: none; padding: 0 0 0 40px; text-shadow: -1px 1px 0px #fff;">' + arr[i] + '</li>';
                          resultContainer.appendChild(newListItem);
                    };


                    // Mostra o trofeu
                    $( '#trophy' )
                      .fadeIn()
                        .addClass( 'sg_Config-winIcon-' + localStorage.getItem('winner-icon') );

                    // Esconde o loader
                    $( '#spinner' )
                      .fadeOut();
                    setTimeout( function ()
                     {
                       $( '#spinner' )
                        .remove();
                    }, 1000);

                    // Remove o efeito de fadeIn e rotacao e adiciona fadeIn novamente
                    $( '#statusTitle_Bar' )
                      .removeClass( 'addfadeIn statusTitle_Bar-blink' )
                        .addClass( 'addfadeIn' );


      // Mostra os nomes dos participantes que venceram
            setTimeout( function ()
             {
                $( sgResult )
                  .css({
                        'height'          :     '270px',
                        'font-size'       :     '15pt',
                        'text-align'      :     'left',
                        'overflow-y'      :     'auto',
                        'margin-left'     :     '10px',
                        'width'           :     'calc(100% - 40px)'
                      })
                        .html('');

                $( '#trophy' )
                  .css({
                    'margin-left'   :   '-65px'
                });

                for ( i = 0; i <= (j-1); i++ )
                   {
                      var newListItem = document.createElement( 'span' );
                      $(newListItem).css({
                        'position': 'relative',
                        'width': '100%',
                        'float': 'left'
                      });
                      newListItem.innerHTML = '<li style="height: 32px; padding: 0 0 0 40px; overflow: hidden; text-overflow: ellipsis; list-style: none; text-shadow: -1px 1px 0px #fff; border-bottom: 1px solid #E8E8E8;">' + arr[i] + '.<span style="margin-left: 10px">' + $( '#part_List-2 dt:nth-child(' + arr[i] + ')' ).children().html() + '</span></li>';
                      resultContainer.appendChild( newListItem );
                };

                  $( '#sg_start_Btn' )
                      .show(); // Mostra os botoes 'Novo Sorteio' e 'Inicio'

                setTimeout( function ()
                 {
                    $( '#sg-result > span:nth-child(1)' )
                      .css({
                        'background-image'      :     'url(img/appbar.trophy.png)',
                        'background-size'       :     'auto 125%',
                        'background-repeat'     :     'no-repeat',
                        'background-position'   :     '0 -5px',
                        'color':'#C3BC02'
                      });
                }, 1000);

                setTimeout( function ()
                 {
                    $( '#sg-result > span:nth-child(2)' )
                      .css({
                        'background-image'      :     'url(img/appbar.trophy-silver.png)',
                        'background-size'       :     'auto 125%',
                        'background-repeat'     :     'no-repeat',
                        'background-position'   :     '0 -5px',
                        'color':'#979797'
                      });
                }, 1500);

                setTimeout( function ()
                 {
                    $( '#sg-result > span:nth-child(3)' )
                      .css({
                        'background-image'      :     'url(img/appbar.trophy-bronze.png)',
                        'background-size'       :     'auto 125%',
                        'background-repeat'     :     'no-repeat',
                        'background-position'   :     '0 -5px',
                        'color':'#B15902'
                      });
                }, 2000);

          }, 1000);
        }, 4000);
      };
};
//
