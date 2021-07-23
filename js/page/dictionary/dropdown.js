/**
 * Dropdown Restaurant click
 * Created by VDTuan
 * Date: 23/07/2021
 */

var restaurantList = document.querySelector(".restaurant-list");
var restaurantValue = document.querySelector(".dropdown-value");
var restaurantData = [
    "Nhà hàng Biển Đông",
    "Nhà hàng Biển Tây",
    "Nhà hàng Biển Nam",
    "Nhà hàng Biển Bắc",
]     

renderDropdown(restaurantValue, restaurantList, restaurantData);

$(function(){
    $('.restaurant').click(function(){ 
        $('.restaurant-list').toggleClass('show');
        $('.restaurant .down_icon').toggleClass('show');
        $('.restaurant .up_icon').toggleClass('show');
    })
});

/**
 * Dropdown Department click
 * Created by VDTuan
 * Date: 23/07/2021
 */

var departmentList = document.querySelector(".department-list");
var departmentValue = document.querySelector(".dropdown-value1");
var departmentData = [
    "Tất cả phòng ban",
    "Phòng Nhân sự",
    "Phòng Đào tạo",
    "Phòng Công nghệ",
    "Phòng Marketing",
]     

renderDropdown(departmentValue, departmentList, departmentData);
 
$(function(){
    $('.department').click(function(){
        $('.department-list').toggleClass('show');
        $('.department .down_icon').toggleClass('show');
        $('.department .up_icon').toggleClass('show');
    })
});

/**
 * Dropdown Position click
 * Created by VDTuan
 * Date: 23/07/2021
 */

var positionList = document.querySelector(".position-list");
var positionValue = document.querySelector(".dropdown-value2");
var positionData = [
    "Tất cả vị trí",
    "Nhân viên",
    "Giám đốc",
    "Thu ngân",
    "Nhân viên Marketing",
]     

renderDropdown(positionValue, positionList, positionData);

$(function(){
    $('.position').click(function(){
        $('.position-list').toggleClass('show');
        $('.position .down_icon').toggleClass('show');
        $('.position .up_icon').toggleClass('show');
    })
});

/**
 * renderDropdown
 * Created by VDTuan
 * Date: 23/07/2021
 */



var currVal = 0;
function renderDropdown(dropdownValue, dropdownList, dropdownData) {
    render();
    
    function render() {
        var dropdownListHTML='';
        
        for (var i = 0; i < dropdownData.length; i++) {
            if (i == currVal) {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item dropdown-item--active"> ${dropdownData[i]} <i class="fas fa-check"></i> </li>`;
                dropdownValue.innerText = dropdownData[i];
            } else {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item"> ${dropdownData[i]} </li>`;
            }
        }   
        
        
        dropdownList.innerHTML = dropdownListHTML;
        var items = document.querySelectorAll('.dropdown-item');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                var dataId = item.getAttribute('data-id');
                this.currVal = dataId;
                render();
            })
        });
    }
}
