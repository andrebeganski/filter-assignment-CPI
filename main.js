// silence
const select = document.querySelector(".filter1")

select.addEventListener("change", function (e) {
    const chosen_cpi1 = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_cpi1}`)
    
    currently_visible.forEach(function (CPI) {
        CPI.classList.remove("active");
    });

    make_visible.forEach(function (CPI1) {
        CPI1.classList.add("active");
    });
});
