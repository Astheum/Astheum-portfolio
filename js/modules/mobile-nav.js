export default function menuToggle() {
    const menu_btn = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.mobile-nav')
    const contact_btn = document.querySelector('.about-btn')

    menu_btn.addEventListener('click',()=>{
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })

    contact_btn.addEventListener('click',()=>{
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })
}