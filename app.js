const tl = gsap.timeline();
const banner = document.querySelector('#banner');
const headline = document.querySelector('.headline');
const lead = document.querySelector('.lead');

tl.fromTo(banner, 1, { width:'0%'}, {  width:'100%',ease: Power2.easeInOut })
    .fromTo(headline, 1, { x: '-100%' }, { x: 0, ease: Power2.easeInOut })
    .fromTo(lead, 1, { x: '-100%' }, { x: 0, ease: Power2.easeInOut });