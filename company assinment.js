let menE1 = document.getElementById('men');
let womenE1 = document.getElementById('women');
let kidE1 = document.getElementById('kid');
let m = document.getElementById('container');
let w = document.getElementById('container1');
let k = document.getElementById('cotainer2');




function display_results(main) {
    m.innerHTML = '';
    let length = main.length;
    for (let i = 0; i <= length - 1; i++) {
        let {
            badge_text,
            compare_at_price,
            id,
            image,
            price,
            second_image,
            title,
            vendore
        } = main[i];

        let divE1 = document.createElement('div');
        divE1.classList.add('cart');

        let sum = document.createElement('div');
        sum.classList.add('koll');
        divE1.appendChild(sum);

        let subDivE1 = document.createElement('img');
        subDivE1.src = image;
        subDivE1.classList.add('manage');
        sum.appendChild(subDivE1);


        let kill = document.createElement('div');
        kill.classList.add('sub-dive2');
        divE1.appendChild(kill);

        let h1E3 = document.createElement('p');
        h1E3.textContent = title + "   ";
        h1E3.classList.add('cart-hd');
        kill.appendChild(h1E3);

        let subPara = document.createElement('p');
        subPara.textContent = ' .minthra';
        subPara.classList.add('cart-hd1');
        kill.appendChild(subPara);

        let subPara1 = document.createElement('p');
        subPara1.textContent = 'RS ' + price + '/-';
        subPara1.classList.add('cart-hd2');
        kill.appendChild(subPara1);

        let subPara2 = document.createElement('p');
        subPara2.textContent = 'Rs' + compare_at_price;
        subPara2.classList.add('cart-hd3');
        kill.appendChild(subPara2);

        let subPara3 = document.createElement('p');
        subPara3.textContent = 'Rs' + (compare_at_price - price) + 'Discount';
        subPara3.classList.add('cart-hd4');
        kill.appendChild(subPara3);

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button-div');
        divE1.appendChild(buttonDiv);

        let buttonE1 = document.createElement('button');
        buttonE1.textContent = 'Add To Cart';
        buttonE1.classList.add('but');
        buttonDiv.append(buttonE1);

        m.appendChild(divE1);

    }
}


womenE1.onclick = function(event) {
    let url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
    let options = {
        method: 'GET'
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            display_results(data.categories[event.target.value].category_products);
        });

};

menE1.onclick = function(event) {
    let url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
    let options = {
        method: 'GET'
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            display_results(data.categories[event.target.value].category_products);
        });

};

kidE1.onclick = function(event) {
    let url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';
    let options = {
        method: 'GET'
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            display_results(data.categories[event.target.value].category_products);
        });
};