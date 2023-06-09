$(document).ready(listarRoupas);

function listarRoupas() {

    $.ajax({
        url: 'http://localhost:8080/api/roupa/list',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var html = '';
            $.each(result, function (i, data) {
                html += `<tr><td>` + data.tipo + `</td>`;
                html += `<tr><td>` + data.marca + `</td>`;
                html += `<tr><td>` + data.tamanho + `</td>`;
                html += `<td>` + data.descricao + `</td>`;
                html += `<td>` + data.preco + `</td>`;
                html += `<td><a href="editar-roupas.html?id=` + data.id + `"><i class="bi bi-pencil-fill"></i></a>`;
                html += ` <a href="visualizar-roupas.html?id=` + data.id + `"><i class="bi bi-search"></i></a>`;
                html += ` <a href="#" onclick="removerRoupa(` + data.id + `)"><i class="bi bi-archive-fill"></i></a></td></tr>`;

                $("#tbListarRoupas").html(html);
            });

        }
    })

    let table = new DataTable('#tbListarRoupas');


}

function removerRoupa(id) {

    var respostaPergunta = confirm("Deseje apagar essa roupa?");
    if (respostaPergunta == true) {

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/api/roupa/remove/' + id,
            dataType: 'json',
            success: function (result) {
                location.reload();
            },
            error: function (result) {
                alert(result);
            }
        })

    }
}