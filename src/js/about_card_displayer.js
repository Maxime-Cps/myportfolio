let currentIndex = 0;

document.querySelectorAll('.container').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('.about').style.backgroundColor = '#595959'; // Change to your desired color
        document.querySelector('.card_display').style.backgroundColor = '#595959'; // Change to your desired color
        document.querySelector('.about h1').style.color = '#ffffff';
        document.querySelector('.about h3').style.color = '#ffffff';
    });
});

document.getElementById('music').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamic-content');
    const currentYear = new Date().getFullYear();
    const yearsOfMixing = currentYear - 2018;
    dynamicContent.innerHTML = `
        <div class="dynamic-box-1 fade-in">
            <div class="dynamic-box-1__text">
                <h2>Musique</h2>
                <br>
                <p>Depuis maintenant ${yearsOfMixing} ans, j'ai commencé à mixer et à m'intéresser à la production musicale</p>
                <br>
                <p>Je suis passionné par la musique électronique, mes influences viennent particulièrement de <b>Martin Garrix</b>.</p>
                <p>Des artistes comme Brooks, Mesto, Julian Jordan, Mike Williams, RetroVision m'inspirent également.</p>
                <p>J'aime aussi des styles moins "Mainstream" comme la Dubstep, la Drum&Bass, la Techno ou encore la Bass-House.</p>
                <br>
                <p>J'ai eu l'occasion, en 2021, de faire une tournée dans la région Haut-de-France dans trois villes différentes.</p>
                <p>J'ai été également DJ pour plusieurs événements sur le Campus d'Illkirch de Strasbourg pendant ma formation en Informatique.</p>
                <br>
                <p>Vous trouverez à droite un lien vers une playlist de quelques-uns de mes projets :</p>
            </div>
            <div class="dynamic-box-1__audio">
                <div class="audioPlayer">
                    <button id="btnPlaylist"><a href="/audioPlayer.html">MESSMOCKY's Playlist</a></button>
                </div>
            </div>
        </div>
    `;
});

document.getElementById('sports').addEventListener('click', function() {
    const currentYear = new Date().getFullYear();
    const yearsOfGolf = currentYear - 2024;
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="dynamic-box-1 fade-in">
            <div class="dynamic-box-1__text">
                <h2>Sports</h2>
                <br>
                <p>J'ai pratiqué :</p>
                <ul>
                    <li>Le tennis pendant 10 ans, en faisant de la compétition</li>
                    <li>Le Badminton pendant 2 ans</li>
                    <li>Le Tennis de Table pendant 2 ans, pour le RC Strasbourg en compétition</li>
                </ul>
                <br>
                <p>J'ai également récemment découvert le golf, que je pratique depuis ${yearsOfGolf} an</p>
            </div>
            <div class="vids">
            
                        <video class="img-size" muted autoplay loop>
                            <source src="vids/swing2.MP4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <video class="img-size" muted autoplay loop>
                            <source src="vids/swing3.MP4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
            </div>
        </div>
    `;
});

document.getElementById('engagements').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="dynamic-box-1 fade-in">
            <div class="dynamic-box-1__text">
                <h2>Engagements</h2>
                <br>
                <p>Je me suis engagé dans plusieurs associations étudiantes pendant ma scolarité :</p>
                <ul>
                    <br>
                    <li>
                        <p>De 2020 à 2021, dans l'Amicale ARIANE, Amicale étudiante des étudiants en Licence de Physique Ingénierie.</p>
                        <p>En tant que Chargé de Mission du Pôle évènements, j'ai participé à l'organisation
                         de plusieurs événements.</p>
                    </li>
                    <br>
                    <li>
                        <p>De 2023 à 2025, dans l'Amicale CORE, Amicale étudiante des étudiants en BUT Informatique.</p>
                        <p>En tant que Vice-Président du Pôle évènements, j'ai participé à la création et l'organisation
                         de plusieurs événements, je m'occupais des relations avec les différentes entreprises et autres
                          Amicales avec lesquels nous étions en partenariat.</p>
                    </li>
                </ul>
            </div>
            <div class="dynamic-box-1__img">
                <div class="dynamic-box-1__img_title">
                    <img class="img-size" id="ariane_img" src="images/ariane.png" alt="Dynamic Image">
                    <h1>Amicale ARIANE</h1>
                </div>
                <div class="dynamic-box-1__img_title">
                    <img class="img-size" id="core_img" src="images/core.png" alt="">
                    <h1>Amicale CORE</h1>
                </div>
            </div>
        </div>
    `;
});

document.getElementById('languages').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="dynamic-box-1 fade-in">
            <div class="dynamic-box-1__text">
                <h2>Langues</h2>
                <p>Je sais parler actuellement 3 langues :</p>
                <ul>
                    <li>Le Français, ma langue maternelle</li>
                    <li>L'Anglais, que je parle de manière fluide, je la pratique depuis le primaire.</li>
                    <li>L'Allemand, que j'ai pratiqué de la 4ᵉ à la Terminale. Mon niveau est plutôt basique</li>
                </ul>
            </div>
            <div class="dynamic-box-1__img">
                <img class="img-size" src="path/to/your/image.jpg" alt="Dynamic Image">
            </div>
        </div>
    `;
});



