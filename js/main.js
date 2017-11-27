(function () {
    var text = document.querySelector('.modelDetails'),
        headline= document.querySelector('.modelName'),
        price = document.querySelector('.priceInfo'),
        images = document.querySelectorAll('.data-ref'),
        appliedClass;

    function changeElements() {

        let objectIndex = carData[this.id];

        text.innerHTML = objectIndex.text;
        headline.innerHTML = objectIndex.headline;
        price.innerHTML = objectIndex.price;

    }

    images.forEach(function (element, index) {

        element.addEventListener('click', changeElements, false);
    });


})();
