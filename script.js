let isIginite = false

function changeCard(event) {
    const card = event.currentTarget
    const bg = isIginite ? "explorer" : "ignite"
        isIginite = !isIginite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}