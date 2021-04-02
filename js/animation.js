// const back = document.querySelector("#centerHome");

// const tl = new TimelineMax();
// tl.fromTo(back, 1, {height: "0%"}, {height: "100vh", ease: Power2.ease})
var targets = [];
targets.push(document.querySelector("#CenterHeading"));
targets.push(document.querySelector("#maintext"));
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 80%",
        end: "center 20%"
      }
    })
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 0, duration: 0.2}, 0.8)
<<<<<<< HEAD
  });

  targets.forEach(target => {
    const tl = gsap.timeline({
        defaults: {duration: 1.2}
    })
    .from(target,{x:0, opacity: 0, duration: .5})
    .to(target,{ left:"50%", top:"50%", opacity: 1, duration: .5, ease:Power2.easeIn})
  });

  const intro = document.querySelector('.intro');
const v = intro.querySelector('video');
const t = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

let con = new ScrollMagic.Controller();
let  scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(con);

const textAnim = TweenMax.fromTo(t,3,{opacity: 1}, {opacity: 0});

let  s2 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(con);

let accel = 0.5;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;

    
});

setInterval(() => {
    delay += (scrollPos - delay) * accel;
    v.currentTime = delay;
}, 70)

=======
  });
>>>>>>> parent of 47a6f8c (Adding animation)
