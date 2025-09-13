async function loadMembers() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);

    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <div>
                <h2>${member.name}</h2>
                <img src="images/members/${member.image}" alt="${member.name}" />
            </div> 
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            <p>${member.description}</p>
        `;

        container.appendChild(card);
    });
}
loadMembers();
