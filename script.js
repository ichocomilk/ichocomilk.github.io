document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    cardContainer.appendChild(createCard(
       "ImmunityPotions",
       "assets/immunitypotions.png",
       "Create custom potions that make you invulnerable to taking damage for a period of time.",
       "https://polymart.org/resource/immunitypotions.6415"
    ));

    cardContainer.appendChild(createCard(
       "Mobstacker",
       "assets/mobstacker.png",
       "Stack your mobs in one 😎",
       "https://www.spigotmc.org/resources/mobstacker.106631/"
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
