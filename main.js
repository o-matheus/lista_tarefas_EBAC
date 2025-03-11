$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $(`<li>${tarefa}</li>`);
        $(novaTarefa).appendTo('ul');

        $('#tarefa').val('');
    })

    $('#apagar-lista').click(function(){
        $('ul').empty();
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('concluido');
    })

});