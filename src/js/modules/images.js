const images = () => {
    const imgPopup = document.createElement('div'),
            workSection = document.querySelector('.works'),
            bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.display = 'none';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e)=> {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            body.style.overflow = 'hidden';
            bigImage.style.maxWidth = '70%';
            bigImage.style.maxWidth = '60%';
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            body.style.overflow = '';
        }
    })
};

export default images;