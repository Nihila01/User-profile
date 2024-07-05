document.getElementById('more-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;

        displayProfiles(users);
        updateTable(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayProfiles(users) {
    const profilesContainer = document.getElementById('profiles-container');
    profilesContainer.innerHTML = ''; 

    users.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        
        profileCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
        `;
        
        profilesContainer.appendChild(profileCard);
    });
}

function updateTable(users) {
    const tableBody = document.querySelector('#profiles-table tbody');
    tableBody.innerHTML = ''; 

    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><img src="${user.picture.thumbnail}" alt="${user.name.first}"></td>
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.email}</td>
        `;
        
        tableBody.appendChild(row);
    });
}


fetchUsers();
