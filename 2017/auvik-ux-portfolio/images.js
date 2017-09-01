window.addEventListener('load', function () {
    for (let img of document.querySelectorAll('img')) {
        if (img.width != img.naturalWidth) {
            // The image has been scaled or its natural size is unknown.  So
            // wrap it in a link to the original.
            let a = document.createElement('a');
            a.href = img.src;
            a.classList.add('zoom-img');
            a.setAttribute('title', "View full size image");
            img.parentElement.insertBefore(a, img);
            a.appendChild(img);
        }
    }
});
