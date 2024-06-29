async function loadTableData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        let tableBody = document.querySelector('#dataTable tbody');
        tableBody.innerHTML = '';

        data.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.info}</td><td>${item.type}</td><td><img src="${item.access}"></td>`;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

// Load data when the page loads
window.onload = loadTableData;