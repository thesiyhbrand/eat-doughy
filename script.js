// var tl = gsap.timeline({scrollTrigger:{
//     trigger:"#three",
//     // markers:true,
//     start:"50% 50%",
//     end:"80% 50%",
//     scrub:3,
//     pin:true
// }});
// tl
// .to("#three-one",{
//     duration:3,
//     opacity:0,
// })
// .fromTo("#three-two", {opacity: 0}, {ease:Power0.easeOut, duration:3, top:"-100%", opacity:1})

// gsap.fromTo(".animate1",{opacity:0}, {opacity:1})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#three",
    // markers:true,
    start:"50% 50%",
    end:"80% 50%",
    scrub:3,
    pin:true
}});
tl
.to(".txt-three0",{
    opacity:0,
})
.fromTo(".txt-three1",{
    y:"-28vw",
    opacity:0,
},
{
    y: "-28vw",
    opacity:1,
})
.to(".txt-three1",{
    opacity:0,
})
.fromTo(".txt-three2",{
    y:"-55.6vw",
    opacity:0,
},
{
    y: "-55.6vw",
    opacity:1,
}
)

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#three",
    // markers:true,
    start:"50% 50%",
    end:"80% 50%",
    scrub:3,
    pin:true
}});
tl2
.to("#can",{
    y: "-115vw"
})

var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"txt-three1",
    // markers:true,
    start:"185% 50%",
    end:"200% 50%",
    scrub:3,
    // pin:true
}});
tl3
.to(".cir",{
    backgroundColor: "#E7BF97"
},'a')
.to("#sm-cir1",{
    backgroundColor: "transparent"
},'a')
.to("#sm-cir2",{
    backgroundColor: "#333"
},'a')

var tl4 = gsap.timeline({scrollTrigger:{
    trigger:"txt-three2",
    // markers:true,
    start:"200% 50%",
    end:"210% 50%",
    scrub:3,
    // pin:true
}});
tl3
.to(".cir",{
    backgroundColor: "#E0BD88"
},'b')
.to("#sm-cir2",{
    backgroundColor: "transparent"
},'b')
.to("#sm-cir3",{
    backgroundColor: "#333"
},'b')