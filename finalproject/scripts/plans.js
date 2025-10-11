// Función para cargar planes o servicios desde un JSON y renderizarlos
function loadPlans(containerId, jsonFile) {
    const container = document.getElementById(containerId);

    fetch(jsonFile)
        .then(response => response.json())
        .then(plans => {
            plans.forEach(plan => {
                const card = document.createElement('div');
                card.classList.add('plan-card');

                card.innerHTML = `
                    <img src="${plan.image}" alt="${plan.name} plan image">
                    <h2>${plan.name}</h2>
                    <p><strong>Speed:</strong> ${plan.speed}</p>
                    <p><strong>Price:</strong> $${plan.price}</p>
                    <p>${plan.description}</p>
                    <ul>
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error(`Error loading ${jsonFile}:`, error));
}

loadPlans('residential-plans', './data/plans.json');
loadPlans('corporate-plans', './data/corp-plans.json');
loadPlans('extra-services', './data/extras.json');
