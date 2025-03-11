# Projeto Lista de Tarefas

## Layout

![Layout](img/md/Lista%20de%20tarefas.jpg)

## Funcionalidades

### Adicionar Tarefa
Adiciona o que o usuário escreveu da forma que está em "Atividade a Concluir".

### Marcar como Concluído
Quando o usuário clicar na tarefa, uma linha será adicionada riscando seu texto.

**Possibilidade extra →** Após alguns segundos, a tarefa poderá ser automaticamente excluída após ser concluída.

### Apagar Lista
Caso a possibilidade extra anterior não seja implementada, será colocado um botão que apaga toda a lista.

## Processos para Execução

### HTML
Criar um HTML contendo:
- Logo
- Subtítulo
- Formulário
- Lista

#### Formulário
O formulário terá um input de texto e dois botões: um para adicionar a tarefa e outro para apagar a lista.

#### Lista
Onde as informações serão armazenadas e exibidas para o usuário.

### CSS
No CSS, serão definidos:
- Cor de fundo da página
- Tamanho da logo
- Posicionamento e espaçamento dos elementos
- Cores dos elementos do HTML

### JavaScript
O JavaScript, junto ao jQuery, será usado para adicionar interatividade à lista de tarefas.

Funções necessárias:
- Adicionar uma tarefa à lista.
- Apagar a lista de tarefas.
- Aplicar efeito de texto riscado ao clicar em uma tarefa.

## Nome e Logo

### Nome
O primeiro processo que imaginei foi a criação do nome e da logo do projeto. Para o nome, pedi sugestões ao ChatGPT com o seguinte prompt:

> Nome para um aplicativo de lista de tarefas  

Dentre as opções sugeridas, escolhi "Feito!", mas confesso que fiquei tentado a usar "Tudu", uma referência a "To Do".

### Logo
Para a criação da logo, tentei utilizar o ChatGPT, mas os resultados não saíram como esperado. Eu queria apenas a logo, mas o ChatGPT continuava adicionando elementos extras. Acabei desistindo de usá-lo para isso.

Seguindo nesse processo, pedi recomendações sobre onde poderia criar a logo e fui direcionado ao [Canva](https://www.canva.com/).  

Uma dica: se você for estudante ou professor, pode se inscrever no [Canva para Educação](https://www.canva.com/pt_br/educacao/) e ter acesso ao plano premium (ou Pro) gratuitamente!

Para criar a logo, utilizei inteligência artificial e alguns modelos de letras como referência:

<img src="./img/Feito!.png" style="height:300px;">

A logo ficou muito escura, então o desafio foi encontrar uma cor mais clara para criar contraste e melhorar a visibilidade. Como não sou fã de cores muito claras, pensei em utilizar a cor de papel reciclável, que trouxe um bom contraste sem ficar excessivamente clara.

## Desafios

- Não criar o design previamente no Figma ou em outro programa similar. Fiquei em dúvida sobre o design da aplicação durante o desenvolvimento.
- Ver referências com mais funcionalidades e querer aplicá-las ao projeto. Sinto que perco o foco tentando adicionar recursos extras e acabo gastando muito tempo. Vou tentar evitar isso e manter o escopo inicial.

## Considerações Finais

## Envios

### 10.03.25
No primeiro envio, fiz a estrutura básica do HTML. Inicialmente, tentei construir a lista de tarefas usando `<table>`, mas depois percebi que o exercício solicitava especificamente o uso de listas.

### 11.03.25
Comecei os estudos sobre Markdown, organizei a estrutura escrita do projeto da lista de tarefas e desenvolvi o layout/design da aplicação.
