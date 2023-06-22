$('#form-incluir-roupa').submit(function (event) {

    event.preventDefault();

    preço = new Number($('#input-preço').val());

    //Criar formData
    var formData = {
        'tipo': $('#input-Tipo').val(),
        'nome': $('#input-Marca').val(),
        'tamanho': $('#input-tamanho').val(),
        'descriçao': $('#input-descriçao').val(),
        'Preço': $('#input-Preço').val(),
    };

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: 'POST',
        url: 'http://localhost:8080/api/roupa/create',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (data) {
            location.href = 'listar-roupas.html';
        },
        error: function (data) {
            $('#div-alert-message').prepend(data.responseText);
            $('#div-alert-message').fadeIn();
        }
    });
 });