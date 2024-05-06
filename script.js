var crsr = document.querySelector("#cursor")
var cblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    cblr.style.left = dets.x - 200 + "px"; // 150 is added so beacause the cursor was pointing to the upper left corner of the blur div.
    cblr.style.top = dets.y - 200+ "px";
})
var navButton = document.querySelectorAll("#nav h3"); 
navButton.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid white";
        crsr.style.transition = "ease 0.2s";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "0px solid #95C11E";    
    })

})
gsap.to("#nav",{
    backgroundColor: "#000",
    // duration: 3,
    height:"110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end : "top -11%",
        scrub: 1 // SCRUB is used to repeat the process, we can put it true or any value bw 1-5      
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    // duration: 3,
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end : "top -75%",
        scrub: 1 // SCRUB is used to repeat the process, we can put it true or any value bw 1-5      
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:200,
    opacity : 0,
    duration:1,
    stagger: 0.3, //used to put the animation on each element one by one.
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub:2 //very important element, without this the animation was running only once,no matter how many times you scroll up or down.
    }
})
gsap.from(".card",{
    scale:0.9,
    opacity : 0,
    // duration:80,
    // stagger: 0.3, //used to put the animation on each element one by one.
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub:-1 //very important element, without this the animation was running only once,no matter how many times you scroll up or down.
    }
})

gsap.to("#colon1",{
    y:60,
    x:55,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 40%",
        scrub:3
    }
})
gsap.to("#colon2",{
    y:-40,
    x:-60,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end: "top 90%",
        scrub:3
    }
})
gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#three-train",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end: "top 60%",
        scrub:3
    }
})

