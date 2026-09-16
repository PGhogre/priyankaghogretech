
// ============================================
// Priyanka Ghogre Portfolio
// ============================================


// Show a small message when website loads

console.log(
    "Welcome to Priyanka Ghogre's Portfolio"
);


// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

