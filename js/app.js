const firstSection = document.getElementById("1950");
const indicator = document.getElementById("scrollIndicator");

window.addEventListener("scroll", () => {

    const top = firstSection.getBoundingClientRect().top;

    if (top <= window.innerHeight * 0.5) {
        indicator.classList.add("hide");
    } else {
        indicator.classList.remove("hide");
    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".timeline-nav a");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            console.log(entry.target.id);
            // 모두 비활성화
            navLinks.forEach(link=>{
                link.classList.remove("active");
            });

            // 현재 section과 같은 href 찾기
            const activeLink = document.querySelector(
                `.timeline-nav a[href="#${entry.target.id}"]`
            );

            if(activeLink){
                activeLink.classList.add("active");
            }

        }

    });

},{
    threshold: 0.1,
    rootMargin: "-20% 0px -20% 0px"
});

sections.forEach(section=>{
    observer.observe(section);
});