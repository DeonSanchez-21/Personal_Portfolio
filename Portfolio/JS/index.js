const homeSection = document.querySelector('.home-section');
const sections = document.querySelectorAll(".sections");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add("slide");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

