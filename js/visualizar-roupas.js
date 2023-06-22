function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

var id_roupa = GetURLParameter("id");

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
            $("#input-nome").val(data.nome);
            $("#input-tipo").val(data.tipo);
            $("#input-tamanho").val(data.tamanho);
            $("#input-descriçao").val(data.descriçao);
            $("#input-preço").val(data.preço);
               
        }
    })}
);