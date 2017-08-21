/**
 * Created by Timur on 21.08.2017.
 */

var ajUrl="/admin/users/";

function deleteBtn(id) {
    $.ajax({
        url:ajUrl+id,
        type: 'delete',
        success: function () {
            updateTable();


        }
    })
}

function updateTable() {
    $.get(ajUrl, updateTableByData);
}

function updateTableByData(data) {
    datatableApi.clear().rows.add(data).draw();
}