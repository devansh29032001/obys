

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        
        })
        // console.log(dets.x)
    })
    
    
    
}
// cursorAnimation()
function navMagnetEffect(){
    Shery.makeMagnet("#nav-part2 h1" /* Element to target.*/, {
        //Parameters are optional.
        
      });
}




// loader timer 0-100
function loadertimer() {
    var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0
    var int = setInterval(function () {
        // console.log("hello")
        grow++;
        h5timer.textContent = grow;
        if (grow === 100) {
            clearInterval(int)
        }
    }, 20)
}

var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
})
tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
        loadertimer()
    }
})


tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 0,
})


// after the loader this code will bring the page1 animation from down to up
tl.from("#page1", {
    y: 1200,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
}
)

tl.from("#nav",{
    opacity:0,
    
})

tl.from(".hero h1,#hero3 h2,#hero3 h3",{
y:120,
stagger:0.2
})






// cursorAnimation()


// document.addEventListener("mousemove",function(dets){
//     gsap.to("#video-crsr",{
//         left:dets.x,
//         top:dets.y,
//     })
// })


   function sherryAnimation(){
    Shery.imageEffect(".image-div",{
        style:6,
        // dubug:true
        config:{"noiseDetail":{"value":9.92,"range":[0,100]},"distortionAmount":{"value":2.75,"range":[0,10]},"scale":{"value":37.4,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749998247967},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":-0.021505376344086002}},"shapeScale":{"value":{"x":0.72,"y":0.88}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.29,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.53,"range":[1,15]},"durationOut":{"value":5,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.06,"range":[0,10]},"metaball":{"value":0.58,"range":[0,2],"_gsap":{"id":17}},"discard_threshold":{"value":0.69,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
        gooey:true
    })
   } 
   //debug panel ki settings clipboard copy krke yaha configmien paste krdenge

sherryAnimation()






function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotiveAnimation();


function cursorAnimation(){
    Shery.mouseFollower({
        skew:true,
        ease:"cubic-bezier(0.23, 1, 0.320, 1)",
        duration:0.5
    });
    navMagnetEffect()
   var videoContainer= document.querySelector("#video-container");
   videoContainer.addEventListener("mouseenter",function(){
       videoContainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
        opacity:0
        })
        gsap.to("#video-crsr",{
            left:dets.x - 500,
            top:dets.y - 300
        })
       })
    })
    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
           opacity:1
        })
    })
}

cursorAnimation()