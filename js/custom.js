'use strict';

//------------------------------------------- Sub menu --------------------------------------

let menuArrow = document.querySelectorAll('.has-sub-menu'),
    subMenuList = document.querySelectorAll('.sub-menu-list');
subMenu();

function subMenu() {
    menuArrow.forEach(function (item, i) {
        item.addEventListener('click', () => {
            if (subMenuList[i].style.display === 'block') {
                subMenuList[i].style.display = 'none'
                item.classList.remove('active-menu')
            } else {
                subMenuList[i].style.display = 'block'
                item.classList.add('active-menu')
            }
        })
    })
}
//------------------------------------------- Mobile menu --------------------------------------

let header = document.querySelector('header'),
    burgerToggle = document.querySelector('.menu-icon'),
    mobileMenu = document.querySelector('.main-menu');
showOrCloseMenu();

function showOrCloseMenu() {
    burgerToggle.onclick = () => {
        burgerToggle.classList.toggle('menu-icon-active');
        mobileMenu.classList.toggle('mobile-menu-active');

        if (mobileMenu.classList.contains('mobile-menu-active')) {
            headerOverflow();
        } else {
            setTimeout(headerOverflow, 400);
        }
    };
}

function headerOverflow () {
    header.classList.toggle('show-menu')
}
