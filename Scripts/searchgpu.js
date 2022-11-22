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
var cb_palit = document.getElementById("cb_palit");
var cb_gf30 = document.getElementById("cb_gf30");
var cb_gf40 = document.getElementById("cb_gf40");

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
  if (cb_palit.checked) {
    cb_palit.checked = false;
  }
  if (cb_gf40.checked) {
    cb_gf40.checked = false;
  }
  if (cb_gf30.checked) {
    cb_gf30.checked = false;
  }
}

function brandsearch_palit() {
  var td, i, txtValue;
  if (cb_palit.checked) {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue == "Palit") {
          tr[i].style.display = "";
        }
        else {
          tr[i].style.display = "none";
        }
        if (cb_all.checked) {
          cb_all.checked = false;
        }
      }
    }
  }
}

function brandsearch_gf30() {
    var td, i, txtValue;
    if (cb_gf30.checked) {
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue == "GeForce RTX 30 Series") {
            tr[i].style.display = "";
          } else if (cb_gf40.checked) {
            if (txtValue == "GeForce RTX 40 Series") {
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
  
  function brandsearch_gf40() {
    var td, i, txtValue;
    if (cb_gf40.checked) {
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue == "GeForce RTX 40 Series") {
            tr[i].style.display = "";
          } else if (cb_gf30.checked) {
            if (txtValue == "GeForce RTX 30 Series") {
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
  