/**
 * ---------------------------------------Modal form-------------------------------------------
 * Date: 21/07/2021
 * Created by: VDTuan
 */

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("button1")[0];
var cancel = document.querySelector(".popup_header-cancel");
var save = document.querySelector(".button");

// When the user clicks the button, open the modal 
btn.onclick = function() {  
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

cancel.onclick = function() {
    modal.style.display = "none";
}

save.onclick = function() {
    modal.style.display = "none";
}

/**
 * --------------------------------------------------Dropdown---------------------------------------------------
 * Date: 21/07/2021
 * Created by: VDTuan
 */

var dropdownData = [
    "Nhà hàng Biển Đông",
    "Nhà hàng 1"
]



