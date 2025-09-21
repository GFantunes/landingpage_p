
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const tecnologias = ["Power BI", "SQL", "Java", "Python", "Excel"];
    const elemento = document.querySelector(".tecnologias");
    let techIndex = 0;
    let charIndex = 0;
    let typing = true;

    function type() {
        const currentTech = tecnologias[techIndex];

        if (typing) {
            elemento.textContent = currentTech.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentTech.length) {
                typing = false;
                setTimeout(type, 1000);
                return;
            }
        } else {
            elemento.textContent = currentTech.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                typing = true;
                techIndex = (techIndex + 1) % tecnologias.length;
            }
        }
        setTimeout(type, 150);
    }

    type();
});

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.height = scrolled + "%";
});

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    
    if(document.body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌙';
    } else {
        toggleButton.textContent = '☀️';
    }
});