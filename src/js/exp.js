document.getElementById('inter').addEventListener('click', function() {
    const interBox = document.getElementById('interBox');
    interBox.innerHTML = `
    <div class="interBox-Text">
        <h2> Travail saisonnier - Intermarché Drive</h2>
        <br>
        <p> J'ai travaillé en tant que préparateur de commandes pour Intermarché Drive pendant les vacances scolaires de 2021. </p>
        <br>
        <p> J'ai effectué les tâches suivantes : </p>
        <ul>
            <li> Préparation des commandes clients </li>
            <li> Livraison des commandes </li>
        </ul>
        <br>
        <p> J'ai appris à travailler en équipe et à gérer les relations avec les clients. </p>
    </div>
    `;
});

document.getElementById('resto').addEventListener('click', function() {
    // Check if the box already exists
    let existingBox = document.getElementById('restoBox');
    if (!existingBox) {
        // Create a new div element
        let restoBox = document.createElement('div');
        restoBox.id = 'restoBox';
        restoBox.innerHTML = `
            <div class="restoBox-Text">
                <h2>Travail saisonnier - Restaurant Au Petit Bois Vert</h2>
                <br>
                <p>J'ai travaillé en tant que serveur pour le Restaurant Au Petit Bois Vert pendant les vacances scolaires de 2022.</p>
                <br>
                <p>J'ai effectué les tâches suivantes :</p>
                <ul>
                    <li>Service en salle</li>
                    <li>Prise de commandes</li>
                    <li>Encaissement des clients</li>
                </ul>
                <br>
                <p>J'ai appris à travailler sous pression et à offrir un excellent service client.</p>
            </div>
        `;
        // Append the new div below the clicked element
        document.querySelector('.experience-displayer').insertAdjacentElement('afterend', restoBox);
    }
});