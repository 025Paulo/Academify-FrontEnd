function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

var id_roupa = GetURLParameter("id");

$('#form-editar-roupa').submit(function (event) {

    event.preventDefault();

    preço = new Number($('#input-preço').val());

    var formData = {
        'id': id_roupa,
        'tipo': $('#input-tipo').val(),
        'marca': $('#input-marca').val(),
        'tamanho': $('#input-tamanho').val(),
        'descriçao': $('#input-descriçao').val(),
        'preço': $('#input-Preço').val(),
    };


    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: 'PUT',
        url: 'http://localhost:8080/api/roupa/edit',
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

 function esconderAlert() {
    $('#div-alert-message').html("<a class='close' onclick='esconderAlert()'>×</a>");
    $('#div-alert-message').hide();
}


$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/api/roupa/getById/' + id_roupa,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $("#input-tipo").val(data.tipo);
            $("#input-marca").val(data.marca);
            $("#input-preço").val(data.preço);
        }
    })

});