function openMenuMobile(isOpen) {
    const menu = document.getElementById('menu-mobile')
    if(isOpen) {
        menu.style.right = '0px'
    } else {
        menu.style.right = '-320px'
    }
}