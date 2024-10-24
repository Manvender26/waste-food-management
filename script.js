document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const foodDescription = document.getElementById('foodDescription').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    const data = {
        name,
        foodDescription,
        quantity,
        location
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        appendDonation(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function appendDonation(donation) {
    const list = document.getElementById('donationList');
    const listItem = document.createElement('li');
    listItem.textContent = ${donation.name} has ${donation.quantity} servings of ${donation.foodDescription} available at ${donation.location};
    list.appendChild(listItem);
}
