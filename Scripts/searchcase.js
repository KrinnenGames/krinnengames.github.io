var input = document.getElementById("nameinput");
var table = document.getElementById("searchtable");
var tr = table.getElementsByTagName("tr");

function namesearch() {
  var td, i, txtValue;
  var filter = input.value.toUpperCase();
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

var cb_all = document.getElementById("cb_all");
var cb_deepcool = document.getElementById("cb_deepcool");

function brandsearch_all() {
  var td, i;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      tr[i].style.display = "";
    }
  }
  if (!cb_all.checked) {
    cb_all.checked = true;
  }
  if (cb_deepcool.checked) {
    cb_deepcool.checked = false;
  }
}

function brandsearch_deepcool() {
  var td, i, txtValue;
  if (cb_deepcool.checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue == "Deepcool") {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    if (cb_all.checked) {
      cb_all.checked = false;
    }
  }
}
