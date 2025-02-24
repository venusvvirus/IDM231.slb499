
const fairyDescriptions = {
    'Nymph': 'Nymphs are generally known for their beauty and are found within bodies of water. Though sometimes mistaken as dangerous, nymphs are sensitive and romantic at heart. They are even known to fall in love with humans at times.',
    'Deva': 'Devas are small fairies usually residing in a woodsy area. They appear as bright orbs of light in nature, almost like fireflies. Devas love well cared  gardens, having expertise in making medical remedies from plants,',
    'Will o\' Wisp': 'A will o\' wisp is the type of fairy found in a body of water at night. They look like a firefly or flickering orb of light and gather in groups. When you see will ‘o wisps, you can generally assume they are having a party, which they do almost nightly.',
    'Changeling': 'A changeling is a fairy child that has been swapped for a human child. Raised by human parents, they won\'t appear as a normal child. Fairy features and unusual talents are an indicator someone is actually a changeling.',
    'Banshee': 'Banshees have the “cry of death”, able to predict when someones death is about to take place. While they are often not seen, they are definitely heard. When you hear one of their cries, someone nearby is surely to die.',
    'Pixie': 'Pixies can easily be found in the woods, gardens, or patches of flowers. They\'re the types of fae with the most contact with humans, thus they tend to show up in pop culture such as Disney movies. They are a bit mischievous, often committing petty thefts on humans.',
    'Seelie': 'Members of the Seelie Court act as arbiters and judges in fairy disputes. They are all about exquisite fashion, harmonious instruments, flowers, and dances. As found with their tie to the month of June, Seelie Courts are most active during the spring and summer.',
    'Gnome': 'Gnomes inhabit the tree roots within forests or high lands. They mature quickly, typically appearing old and wearing pointed hats. They enjoy fruit, eggs, vegetables, and mushrooms, They use earth magic to heal and protect animals.',
    'Unseelie': 'The unseelie court is the darker counterpart of the seelie court. They tend to be the most active during autumn and winter. They are known to use black magic and make deals with humans that never end well for the human.',
    'Salamander': 'Taking the form of fiery lizards, salamanders are powerful creatures known as a fire elemental. They normally appear in red and orange tones and can take the identity of a fire fairy or ball of fire. They embody the spirit of fire, aiding humans and witches in the areas of revenge and passion, as well as the manifestation of fire.',
    'Elf': 'Elves are said to have pointed ears and mesmerizing eyes. They are typically a carer and protector for a specific forest. They are smart and agile creatures, with keener perceptions than humans.'
};

const helpText = 'Welcome to the Fairy Zodiac! Enter your birthday to discover which type of fairy you are. Each fairy type has unique characteristics and abilities based on their connection to nature and the elements. Click on any fairy card to learn more about that particular type of fairy.';

document.querySelector('.help-button').addEventListener('click', () => {
    showModal('How to Use', helpText, 'images/helpf.jpeg');
});

document.querySelectorAll('.fairy-card').forEach(card => {
    card.addEventListener('click', () => {
        const fairyType = card.getAttribute('data-fairy');
        const imagePath = card.querySelector('img').src; // Get the correct image source
        showModal(fairyType, fairyDescriptions[fairyType], imagePath);
    });
});

document.querySelector('.discover-button').addEventListener('click', () => {
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    if (isValidDate(month, day)) {
        const fairyType = getFairyType(month);
        const imagePath = document.querySelector(`.fairy-card[data-fairy="${fairyType}"] img`).src;
        showModal('Your Fairy Type', fairyDescriptions[fairyType], imagePath);
    } else {
        showModal('Error', 'Please enter a valid date.');
    }
});

function getFairyType(month) {
    const fairyTypes = [
        'Banshee', 'Changeling', 'Gnome', 'Nymph', 
        'Dryad', 'Seelie', 'Pixie', 'Deva', 
        'Elf', 'Salamander', 'Unseelie', 'Will o\' Wisp'
    ];
    return fairyTypes[month - 1];
}

function isValidDate(month, day) {
    if (isNaN(month) || isNaN(day)) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    return true;
}

function showModal(title, description, imagePath) {
    const modal = document.getElementById('fairyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imagePath; // Dynamically set the correct image

    // Add fade-in effect
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease';
    }, 10);
}

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('fairyModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('fairyModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Close modal function with fade-out effect
function closeModal() {
    const modal = document.getElementById('fairyModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Event listeners for closing the modal
document.querySelector('.close-button').addEventListener('click', closeModal);
document.getElementById('fairyModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('fairyModal')) {
        closeModal();
    }
});