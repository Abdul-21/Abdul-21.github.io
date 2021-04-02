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
  });

  targets.forEach(target => {
    const tl = gsap.timeline({
        defaults: {duration: 1.2}
    })
    .from(target,{x:0, opacity: 0, duration: .5})
    .to(target,{ left:"50%", top:"50%", opacity: 1, duration: .5, ease:Power2.easeIn})
  });
