Versão do aplicativo: v2.0.0
Autor: Victor 'JV' Ribeiro




Changelog

v2.0.0
* Adicionada a funcionalidade de adicionar ate´ 10 sorteios individuais
* Melhoria nas cores
* Consertado o bug no Claro/Escuro onde voce tinha que selecionar novamente
  a cor ou reiniciar o app.
* Melhoria no desempenho para sorteios com mais de 1000 participantes
* Adicionado o ativar/desativar arroba (@) na pagina de edicao
  + Essencial para validacao de usernames de Instagram e Twitter
* Agora voce pode escolher entre sortear um ganhador ou varios
  + O numero maximo de ganhadores e´ igual ao numero de participantes e
    o minimo 2.
* Adicionadas novas animacoes
* Leve repaginacao da interface
* Adicionado menu de configuracoes gerais
* Changelog adicionado ao menu Configuracoes


Bugs conhecidos no apk hibrido

v2.0.0
* Transicao para a pagina "Novo sorteio" de fadeIn, em vez de slide.
  + Causa provavel: Ao entrar nesta pagina e´ colocado automaticamente
    um focus() no campo input_UserName. Isso faz com que a transicao
    gaste mais memoria e a transicao muda.
  + Solução possivel: Adicionar um timeout de pelo menos 1500ms ao focus().

* Botoes de editar, excluir e sortear da página "Sorteios salvos" sao
  mostrados com alinhamento vertical errado (um pouco mais acima).

* Moeda do "Cara ou Coroa" mostra apenas o lado "cara", apesar de a barra
  de status superior dar resultados corretos.
  + Nao tenho ainda solucao ou ideia do que fazer para contornar isto.

* Ao estar nos modos "Cara ou Coroa" ou "Números", ao apertar o botao "Novo sorteio",
  aparecem ambas as telas ao mesmo tempo.
  + Causa provavel: O mesmo problema do primeiro item (o focus).
