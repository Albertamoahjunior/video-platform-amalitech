const display_menu = () =>{
    let menuObject = window.getComputedStyle(document.getElementById('menu_section')).display
    if(menuObject == 'none'){
        document.getElementById('menu_section').setAttribute('style', 'display:block')
    }else if(document.getElementById('menu_section').style.display == 'block'){
        document.getElementById('menu_section').setAttribute('style', 'display:none')
    }
}