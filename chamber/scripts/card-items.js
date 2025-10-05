
fetch('./data/items-interest.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');

        data.forEach((item, index) => {
            const card = document.createElement('article');
            card.classList.add('card');

            card.id = `card${index + 1}`;

            const title = document.createElement('h2');
            title.textContent = item.name;

            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            figure.appendChild(img);

            const address = document.createElement('address');
            address.textContent = item.address;

            const desc = document.createElement('p');
            desc.textContent = item.description;

            const button = document.createElement('button');
            button.textContent = 'Learn More';
            button.addEventListener('click', () => {
                alert(`More info about ${item.name}`);
            });

            card.append(title, figure, address, desc, button);

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));