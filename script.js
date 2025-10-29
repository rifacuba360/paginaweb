gsap.from(".titulo", {duration: 2, y: -100, opacity: 0, ease: "bounce"});
gsap.from(".subtitulo", {duration: 2, x: -300, opacity: 0, delay: 0.5});
gsap.from(".boton", {duration: 1.5, scale: 0, opacity: 0, delay: 1});
gsap.to(".imagen-animada", {
  x: 200,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});