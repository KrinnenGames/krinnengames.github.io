var input = document.getElementById("nameinput");
var table = document.getElementById("searchtable");
var tr = table.getElementsByTagName("tr");
var option_brand = document.getElementById("brand_select");
var option_chipset = document.getElementById("chipset_select");
var filter = input.value.toUpperCase();
var txtValue_0, txtValue_1, txtValue_2, td_0, td_1, td_2, i;

function namesearch() {
  filter = input.value.toUpperCase();
  for (i = 0; i < tr.length; i++) {
    td_0 = tr[i].getElementsByTagName("td")[0];
    td_1 = tr[i].getElementsByTagName("td")[1];
    td_2 = tr[i].getElementsByTagName("td")[2];
    if (td_0 && td_1 && td_2) {
      txtValue_0 = td_0.textContent || td_0.innerText;
      txtValue_1 = td_1.textContent || td_1.innerText;
      txtValue_2 = td_2.textContent || td_2.innerText;
      if (txtValue_0.toUpperCase().indexOf(filter) > -1) {
        if (option_brand.value == "All" && option_chipset.value == "All") {
          tr[i].style.display = "";
        } else if (option_brand.value == "Palit" && txtValue_1 == "Palit") {
          tr[i].style.display = "";
        } else if (
          option_chipset.value == "GF30" &&
          txtValue_2 == "GeForce RTX 30 Series"
        ) {
          tr[i].style.display = "";
        } else if (
          option_chipset.value == "GF40" &&
          txtValue_2 == "GeForce RTX 40 Series"
        ) {
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
  if (option_brand.value == "Palit") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_1 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_1 == "Palit" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          if (
            option_chipset.value == "GF30" &&
            txtValue_2 == "GeForce RTX 30 Series"
          ) {
            tr[i].style.display = "";
          } else if (
            option_chipset.value == "GF40" &&
            txtValue_2 == "GeForce RTX 40 Series"
          ) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}

function chipset_select() {
  if (option_chipset.value == "All") {
    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";
    }
    namesearch();
  }
  filter = input.value.toUpperCase();
  if (option_chipset.value == "GF30") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_1 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_2 == "GeForce RTX 30 Series" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          if (option_brand.value == "Palit" && txtValue_1 == "Palit") {
            tr[i].style.display = "";
          } else if (
            option_chipset.value == "GF40" &&
            txtValue_2 == "GeForce RTX 40 Series"
          ) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
  if (option_chipset.value == "GF40") {
    for (i = 0; i < tr.length; i++) {
      td_0 = tr[i].getElementsByTagName("td")[0];
      td_1 = tr[i].getElementsByTagName("td")[1];
      td_2 = tr[i].getElementsByTagName("td")[2];
      if (td_0 && td_1 && td_2) {
        txtValue_0 = td_0.textContent || td_0.innerText;
        txtValue_1 = td_1.textContent || td_1.innerText;
        txtValue_2 = td_2.textContent || td_2.innerText;
        if (
          txtValue_2 == "GeForce RTX 40 Series" &&
          txtValue_0.toUpperCase().indexOf(filter) > -1
        ) {
          if (option_brand.value == "Palit" && txtValue_1 == "Palit") {
            tr[i].style.display = "";
          } else if (
            option_chipset.value == "GF30" &&
            txtValue_2 == "GeForce RTX 30 Series"
          ) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
}
