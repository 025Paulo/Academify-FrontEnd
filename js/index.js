$(document).ready(onInit);

function onInit() {
    $.ajax({
        url: "http://localhost:8080/api/roupa/total",
        type: "get",
        dataType: "json",
        success: function(res) {
           $("#div-total-alunos").html(res);
        }
    });
}
$(document).ready(onInit);

function onInit() {
    $.ajax({
        url: "http://localhost:8080/api/roupa/total",
        type: "get",
        dataType: "json",
        success: function(res) {
           $("#div-total-roupas").html(res);
        }
    });
}

