const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Function selectItem
function selectItem(e){
    removeBorder();
    this.classList.add('tab-border');
    removeShow();

    const tabContentItem = document.getElementById(`${this.id}-content`);
    console.log(tabContentItem);
    tabContentItem.classList.add('show');

}
// Function removeBorder
function removeBorder(){
    tabItems.forEach(el => el.classList.remove('tab-border'));
}

// Function removeShow
function removeShow(){
    tabContentItems.forEach(el => el.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));

