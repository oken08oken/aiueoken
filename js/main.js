
const chars = document.querySelectorAll(".gyou > li")

chars.forEach(char => {
    char.addEventListener("click", e => {
        const target = e.target
        
        if(target.dataset.selected) {
            delete target.dataset.selected
        } else {
            target.dataset.selected = true
        }
    })
})