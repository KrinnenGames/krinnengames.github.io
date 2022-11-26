var input = document.getElementById("nameinput");
var table = document.getElementById("searchtable");
var tr = table.getElementsByTagName("tr");
var option_family = document.getElementById("family_select");
var filter = input.value.toUpperCase();
var txtValue_0, txtValue_2, td_0, td_2, i;

function namesearch() {
  filter = input.value.toUpperCase();
  for (i = 0; i < tr.length; i++) {
    td_0 = tr[i].getElementsByTagName("td")[0];
    td_2 = tr[i].getElementsByTagName("td")[2];
    if (td_0 && td_2) {
      txtValue_0 = td_0.textContent || td_0.innerText;
      txtValue_2 = td_2.textContent || td_2.innerText;
      if (txtValue_0.toUpperCase().indexOf(filter) > -1) {
        if (option_family.value == "All") {
          tr[i].style.display = "";
        } else if (option_family.value == "Core" && txtValue_2 == "Core") {
          tr[i].style.display = "";
        } else if (
          option_family.value == "Pentium" &&
          txtValue_2 == "Pentium"
        ) {
          tr[i].style.display = "";
        } else if (
          option_family.value == "Celeron" &&
          txtValue_2 == "Celeron"
        ) {
          tr[i].style.display = "";
        }
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function family_select() {
  if (option_family.value == "All") {
    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
    }
    namesearch();
  }
  filter = input.value.toUpperCase();
  if (option_family.value == "Core") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_2 == "Core" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  if (option_family.value == "Pentium") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_2 == "Pentium" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  if (option_family.value == "Celeron") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_2 == "Celeron" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
