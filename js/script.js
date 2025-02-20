/* ========= EMAIL JS ========= */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_7yv84zn','template_e36qde6','#contact-form','ZXavjAG-q4tt6Zbhv')

    .then(() =>{
        // Mostramos el mensaje de envio
        contactMessage.textContent = 'Tu mensaje ha sido enviado ✔'
        // Eliminamos el mensaje de envio
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        // Reseteamos el formulario
        contactForm.reset()
    }, () => {
        //Mostrar mensaje de error
        contactMessage.textContent = 'Mensaje no enviado (error de servidor) 😂'
    } )
}
contactForm.addEventListener('submit', sendEmail);
/* =============== Show Scroll UP ========== */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : 
                         scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)
/* =============== Scroll Section Active Link ========== */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_list a[href*=' + sectionId + ']' )
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* =============== Scroll Reveal Animation ========== */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, // Repetición de la animación 
})
sr.reveal(`.perfil .contact_form`)
sr.reveal(`.info`, {origin: 'letf', delay:800})
sr.reveal(`.skills`, {origin: 'letf', delay:1400})
sr.reveal(`.about`, {origin: 'rigth', delay:1200})
sr.reveal(`.projects_card, .services_card, .experiences_card`, {interval: 100})