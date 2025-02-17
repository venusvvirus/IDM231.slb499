function showModal(title, description, imagePath) {
    const modal = document.getElementById('fairyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = `images/aprilf.png`;
    modalImage.src = `images/augf.png`;
    
    // Add fade-in effect
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease';
    }, 10);
}

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