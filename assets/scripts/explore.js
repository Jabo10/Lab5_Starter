window.addEventListener('DOMContentLoaded', init);

function init() {
    const voiceSelect = document.getElementById('voice-select');
    const textArea = document.getElementById('text-to-speak');
    const speakButton = document.querySelector('button');
    const image = document.querySelector('img');
    let voices = [];

    function populateVoiceList() {
        voices = speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Select Voice:';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        voiceSelect.appendChild(defaultOption);

        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.textContent = voice.name + ' (' + voice.lang + ')';
            if (voice.default) {
                option.textContent += ' -- DEFAULT';
            }
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
        });
    }

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener('click', () => {
        const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
        speak(textArea.value, selectedVoiceName);
    });

    function speak(text, voiceName) {
        if (speechSynthesis.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }
        if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onstart = () => {
                image.src = 'assets/images/smiling-open.png'; 
            };
            utterance.onend = () => {// Revert to smiling image
            };
            utterance.onerror = (event) => {
                console.error('SpeechSynthesisUtterance.onerror', event.error);
            };

            const selectedVoice = voices.find(voice => voice.name === voiceName);
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }

            speechSynthesis.speak(utterance);
        }
    }
}
