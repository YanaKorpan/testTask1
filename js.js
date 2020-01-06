function setPosition () {
    const els = document.querySelectorAll('.menu__link');
    let headerWidth = document.querySelector('.header__wrap').offsetWidth;
    els.forEach(el => {
        let linkWidth = el.offsetWidth / 2;
        let left = el.offsetLeft + linkWidth;
        const hiddenEl = el.querySelector('.menu__hidden-wrap');
        let hiddenElWidth = hiddenEl.offsetWidth / 2;
        hiddenEl.style.maxWidth = `${ headerWidth }px`;
        if( left < hiddenElWidth ){
            hiddenEl.style.left = '0px';
            hiddenEl.style.right = 'auto';
        } else if(( left > hiddenElWidth ) && ( headerWidth - left > hiddenElWidth )) {
            hiddenEl.style.left = `${ left - hiddenElWidth }px`;
            hiddenEl.style.right = 'auto';
        } else if(( headerWidth - left ) < hiddenElWidth ){
            hiddenEl.style.right = '0px';
            hiddenEl.style.left = 'auto';
        }
    });
}
setPosition();
window.addEventListener("onload", setPosition);
window.addEventListener("resize", setPosition);

document.querySelector('.header__btn').onclick = function () {
    this.classList.toggle('active');
    this.classList.toggle('no-active');
    const test = document.querySelectorAll('.no-animation');
    test.forEach(function(){
        for(let i = 0; i < test.length; i++){
            test[i].classList.remove('no-animation');
        }
    });
    document.querySelector('#header .header__menu').classList.toggle('show');
};

document.querySelectorAll('.menu__link').forEach(link => {
    link.querySelector('a').onclick = function () {
        const hiddenMenu = link.querySelector('.menu__hidden-wrap');
        hiddenMenu.style.display = hiddenMenu.style.display === '' ? 'block' : '';
    }
});


document.querySelector('.current__value').onclick = function () {
    const currentValue = document.querySelector('.all__value');
    currentValue.style.display = (currentValue.style.display == '') ? 'flex' : '';
};


document.querySelectorAll('.all__value-country li').forEach(item => {
    const currentFlag = document.querySelector('.current__country .img__wrap > img');
    item.onclick = function () {
        let nextClass = item.classList.value;
        let currentClass = currentFlag.classList.value;
        currentFlag.classList.remove(currentClass);
        currentFlag.classList.add(nextClass);
        switch (currentFlag.classList.value) {
            case('de'):
                document.querySelector('.current__country span').innerHTML = 'DE';
                break;
            case('ru'):
                document.querySelector('.current__country span').innerHTML = 'RU';
                break;
            case('es'):
                document.querySelector('.current__country span').innerHTML = 'ES';
                break;
            case('us'):
                document.querySelector('.current__country span').innerHTML = 'EN';
                break;
        }
    }
});

document.querySelectorAll('.all__value-currency li').forEach(item => {
    const currentFlag = document.querySelector('.current__currency span');
    item.onclick = function () {
        let nextClass = item.classList.value;
        let currentClass = currentFlag.classList.value;
        currentFlag.classList.remove(currentClass);
        currentFlag.classList.add(nextClass);
        switch (currentFlag.classList.value) {
            case('eur'):
                document.querySelector('.current__currency span').innerHTML = '&euro; EUR';
                break;
            case('rub'):
                document.querySelector('.current__currency span').innerHTML = '&#8381; RUB';
                break;
            case('usd'):
                document.querySelector('.current__currency span').innerHTML = '$ USD';
                break;
        }
    }
});

