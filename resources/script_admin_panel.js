let buttonShop = document.getElementById("shop");
let tableProduct = document.getElementById("prod_table");

buttonShop.onclick = function() {
        var httpReg = new XMLHttpRequest();
        httpReg.open("GET", "/products/list", false);
        httpReg.send();
        let response = httpReg.responseText;
        let products = JSON.parse(response);
        console.log(products);
        tableProduct.innerHTML = ""
        tableProduct.innerHTML += "<div id=\"table_header\"><div class=\"table_header__item\">Категория</div><div class=\"table_header__item\">Наименование</div><div class=\"table_header__item\">Количество</div><div class=\"table_header__item\">Цена</div></div>"
        for(let product of products){
            let productsHtml = "<div id=\"table_body\">"
            productsHtml += "<div class=\"table_body__item\">" + product.category + "</div>"
            productsHtml += "<div class=\"table_body__item\">" + product.name + "</div>"
            productsHtml += "<div class=\"table_body__item\">" + product.count + " шт.</div>"
            productsHtml += "<div class=\"table_body__item\">" + product.price + "</div>"
            productsHtml += "</div>"
            console.log(productsHtml)
            tableProduct.innerHTML += productsHtml
        }    
        tableProduct.innerHTML += "<button id=\"button_add_row\"> Добавить строку </button>"
        let btnAddRow = document.getElementById("button_add_row");
        btnAddRow.onclick = function(){
            var httpRegAddRow = new XMLHttpRequest();
            httpRegAddRow.open("GET", "/products/list/add", false);
            httpRegAddRow.send();
        
            }
    }


    function rotateImage() {
        let img = document.getElementById('account_menu');
        img.style.transform = 'rotate(360deg)';
    }




