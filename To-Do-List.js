document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let task = document.getElementById("id").value;
    let table = document.getElementById("tbl");
    let row = table.insertRow();
    row.innerHTML = `
        <td id='text'>${task}</td>
        <td><button id="x" class="btn-toggle"><i class="fas fa-times"></i></button></td>`;
    
    document.getElementById("id").value = "";

    row.addEventListener("click", function() {
        let button = row.querySelector(".btn-toggle");
        let icon = button.querySelector("i");
        icon.classList.toggle("fa-times");
        icon.style.backgroundColor="green"
        icon.classList.toggle("fa-check");
    });
    
});


// function toggleDone(checkbox) {
//     let textElement = checkbox.closest('tr').getElementsByTagName('td')[1];
//     textElement.classList.toggle("done");
// }

// function deleteRow(btn) {
//     let row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }