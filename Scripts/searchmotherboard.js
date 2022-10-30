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
var cb_intel = document.getElementById("cb_intel");
var cb_albatron = document.getElementById("cb_albatron");

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
  if (cb_intel.checked) {
    cb_intel.checked = false;
  }
  if (cb_albatron.checked) {
    cb_albatron.checked = false;
  }
}

function brandsearch_intel() {
  var td, i, txtValue;
  if (cb_intel.checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue == "Intel") {
          tr[i].style.display = "";
        } else if (cb_albatron.checked) {
          if (txtValue == "Albatron") {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        } else {
          tr[i].style.display = "none";
        }
        if (cb_all.checked) {
          cb_all.checked = false;
        }
      }
    }
  }
}

function brandsearch_albatron() {
  var td, i, txtValue;
  if (cb_albatron.checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue == "Albatron") {
          tr[i].style.display = "";
        } else if (cb_intel.checked) {
          if (txtValue == "Intel") {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        } else {
          tr[i].style.display = "none";
        }
        if (cb_all.checked) {
          cb_all.checked = false;
        }
      }
    }
  }
}
