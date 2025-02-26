document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hashKeyInput = document.getElementById('hash-key').value;
    const errorMessage = document.getElementById('error-message');

    if (hashKeyInput === 'SOUND') {
        window.location.href = 'loading.html';
    } else if (hashKeyInput === 'Yandhi') {
        window.location.href = 'catalogue.html';
    } else {
        fetch('./datakeys.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const validKeys = Object.values(data);
                if (validKeys.includes(hashKeyInput)) {
                    window.location.href = 'sound.html';
                } else {
                    errorMessage.textContent = 'Incorrect HASH-KEY';
                }
            })
            .catch(error => {
                console.error('Error fetching or parsing JSON:', error);
                errorMessage.textContent = 'Error validating HASH-KEY';
            });
    }
});
