window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');
    const imageElement = document.querySelector('img');
    const audioElement = document.querySelector('audio');
    const playButton = document.querySelector('button');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const jsConfetti = new JSConfetti(); // Create the confetti instance

    hornSelect.addEventListener('change', function() {
        updateHorn(hornSelect.value, imageElement, audioElement);
    });

    // Include jsConfetti when calling playSound
    playButton.addEventListener('click', function() {
        playSound(audioElement, hornSelect.value, jsConfetti);
    });

    volumeSlider.addEventListener('input', function() {
        updateVolumeIcon(volumeSlider.value, volumeIcon);
        audioElement.volume = volumeSlider.value / 100;
    });
}

function updateHorn(selectedHorn, image, audio) {
    switch (selectedHorn) {
        case 'air-horn':
            image.src = 'assets/images/air-horn.svg';
            audio.src = 'assets/audio/air-horn.mp3';
            image.alt = 'Air horn';
            break;
        case 'car-horn':
            image.src = 'assets/images/car-horn.svg';
            audio.src = 'assets/audio/car-horn.mp3';
            image.alt = 'Car horn';
            break;
        case 'party-horn':
            image.src = 'assets/images/party-horn.svg';
            audio.src = 'assets/audio/party-horn.mp3';
            image.alt = 'Party horn';
            if (audioElement.volume > 0) { // Check if volume is not muted
                jsConfetti.addConfetti();
            }
            break;
        default:
            image.src = 'assets/images/no-image.png';
            audio.src = '';
            image.alt = 'No image selected';
            break;
    }
}

function playSound(audioElement, selectedHorn, jsConfetti) {
    if (audioElement.src) {
        audioElement.play();
        // Trigger confetti if the selected horn is the party horn
        if (selectedHorn === 'party-horn') {
            jsConfetti.addConfetti();
        }
    } else {
        console.log("No audio source set");
    }
}

function updateVolumeIcon(volume, icon) {
    if (volume == 0) {
        icon.src = 'assets/icons/volume-level-0.svg';
        icon.alt = 'Mute';
    } else if (volume < 33) {
        icon.src = 'assets/icons/volume-level-1.svg';
        icon.alt = 'Low volume';
    } else if (volume < 67) {
        icon.src = 'assets/icons/volume-level-2.svg';
        icon.alt = 'Medium volume';
    } else {
        icon.src = 'assets/icons/volume-level-3.svg';
        icon.alt = 'High volume';
    }
}
