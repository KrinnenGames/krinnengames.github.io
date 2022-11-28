var input = document.getElementById("nameinput");
var table = document.getElementById("searchtable");
var tr = table.getElementsByTagName("tr");
var option_brand = document.getElementById("brand_select");
var filter = input.value.toUpperCase();
var txtValue_0, txtValue_1, td_0, td_1, i;

function namesearch() {
  filter = input.value.toUpperCase();
  for (i = 0; i < tr.length; i++) {
    td_0 = tr[i].getElementsByTagName("td")[0];
    td_1 = tr[i].getElementsByTagName("td")[1];
    if (td_0 && td_1) {
      txtValue_0 = td_0.textContent || td_0.innerText;
      txtValue_1 = td_1.textContent || td_1.innerText;
      if (txtValue_0.toUpperCase().indexOf(filter) > -1) {
        if (option_brand.value == "All") {
          tr[i].style.display = "";
        } else if (option_brand.value == "Intel" && txtValue_1 == "Intel") {
          tr[i].style.display = "";
        } else if (
          option_brand.value == "Albatron" &&
          txtValue_1 == "Albatron"
        ) {
          tr[i].style.display = "";
        } else if (option_brand.value == "ASRock" && txtValue_1 == "ASRock") {
          tr[i].style.display = "";
        }
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function brand_select() {
  if (option_brand.value == "All") {
    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
    }
    namesearch();
  }
  filter = input.value.toUpperCase();
  if (option_brand.value == "Intel") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      if (td_0 && td_1) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        if (
          txtValue_1 == "Intel" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  if (option_brand.value == "Albatron") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      if (td_0 && td_1) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        if (
          txtValue_1 == "Albatron" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  if (option_brand.value == "ASRock") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      if (td_0 && td_1) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        if (
          txtValue_1 == "ASRock" &&
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
