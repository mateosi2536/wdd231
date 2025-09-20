function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function loadMembers() {
  try {
    const response = await fetch('./data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');

    const members = await response.json();

    const spotlightMembers = members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);

    const selectedMembers = shuffle(spotlightMembers).slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById("spotlights");
    container.innerHTML = "";

    selectedMembers.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";
      
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

  } catch (error) {
    console.error('Error loading members:', error);
  }
}

loadMembers();
