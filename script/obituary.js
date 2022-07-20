function add_resident() {
    var my_tbody = document.getElementById('addTable');
    // var row = my_tbody.insertRow(0); // 상단에 추가
    var row = my_tbody.insertRow(my_tbody.rows.length); // 하단에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);

    cell1.innerHTML = '제발';
    cell2.innerHTML = 'aa';
}


