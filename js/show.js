function window({
    innerSelector,
    linkSelector
}) {
    const inner = document.querySelector(innerSelector),
        links = document.querySelector('.links');

    inner.addEventListener('click', (e) => {
        if (e.target.getAttribute(['data-content'])) {
            
            createElement(links, e.target.getAttribute(['data-content']));
            windowClose('.cross', '.links');

        }
    });

    function createElement(selector, element) {

        selector.innerHTML = `
        <span class= "cross">×</span>
        <a class="text__active" href="">${element}</a>
    
    `;
        links.classList.remove('hide');
        links.classList.add('links__active');

    }

    function windowClose(selector, elementToHide) {
        const close = document.querySelector(selector),
            hide = document.querySelector(elementToHide);

        close.addEventListener('click', function () {
            hide.classList.add('hide');
            this.style.visibility = "hidden";
        });

    }
}

export default window;