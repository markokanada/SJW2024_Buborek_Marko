document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(node => {
            node.classList.remove('active');
        });
        this.classList.add('active');
    });
});

const imagesData = [
    { title: "Kép 1 Címe", src: "kép1.jpg", info: "Kép 1 Információja" },
    { title: "Kép 2 Címe", src: "kép2.jpg", info: "Kép 2 Információja" },
];

document.querySelectorAll('.img-container').forEach((element, index) => {
    element.addEventListener('click', () => {
        const data = imagesData[index];
        document.getElementById('imageModalLabel').textContent = data.title;
        document.getElementById('modalImage').setAttribute('src', data.src);
        document.getElementById('modalImage').setAttribute('alt', data.title);
        document.getElementById('imageInfo').textContent = data.info;

        $('#imageModal').modal('show');
    });
});