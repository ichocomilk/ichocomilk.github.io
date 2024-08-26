document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    cardContainer.appendChild(createCard(
       "ImmunityPotions",
       "assets/immunitypotions.png",
       "Create custom potions that make you invulnerable to taking damage for a period of time.",
       "https://polymart.org/resource/immunitypotions.6415"
    ));

    cardContainer.appendChild(createCard(
        "Go Server",
        "assets/goserver.png",
        "1.8 minecraft server made in go",
        "https://github.com/MineLC/Go-Server"
    ));
    cardContainer.appendChild(createCard(
        "Go Server API",
        "assets/goserverapi.png",
        "Api for plugins in go server",
        "https://github.com/MineLC/Go-Server-Api"
    ));
    cardContainer.appendChild(createCard(
       "Mobstacker",
       "assets/mobstacker.png",
       "Stack your mobs in one 😎",
       "https://www.spigotmc.org/resources/mobstacker.106631/"
    ));

    cardContainer.appendChild(createCard(
        "Minimal World Format",
        "assets/minimalworld.png",
        "1.8 world format for minecraft",
        "https://github.com/ichocomilk/MinimalWorld"
    ));
});

function createCard(name, image, description, href) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-image">
            <a target="_blank" href="${href}"><img src="${image}" alt="${name}" loading="lazy"></a>
        </div>
        <div class="card-content">
            <h2 class="card-title">${name}</h2>
            <p class="card-text">${description}</p>
        </div>
    `;

    return card;
}

document.getElementById('discord').addEventListener('click', function (e) {
    alert("My discord is: ichocomilk")
})