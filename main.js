// using gsap to add animations

gsap.from("#nav", {
    y: 25,
    duration: 2
})

gsap.to("#heading", {
    scale: 1.2,
    duration: 4,
})

gsap.to("#img1", {
    rotation: 30,
    ease: "bounce",
    duration: 3
})

gsap.to("#img2", {
    rotation: 20,
    ease: "bounce",
    duration: 3
})

gsap.to("#img3", {
    rotation: 10,
    ease: "bounce",
    duration: 3
})

gsap.to("#bottom-left", {
    x: 50,
    duration: 3
})

gsap.from("#bottom-right", {
    x: 50,
    duration: 3
})
