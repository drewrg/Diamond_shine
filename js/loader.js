function Loader(name, elem, callback) {
    this.name = name;
    this.callback = callback;

}
Loader.prototype = {

};

function isObject(obj) {
    if(obj !== null && typeof obj === "object") return true;
    else return false;
}
function isEmptyObject(obj) {
    for(var value in obj) {
        if (hasOwnProperty.call(obj, value)) return false;
    }
    return true;
}

var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

function createTree(container, tree) {
    container.innerHTML  = "";

    container = container.appendChild(document.createElement("ul"));

    if(!isObject(tree)) return;
    var key = Object.keys(tree);
    for(var i = 0; i < key.length; i++) {
        if(isObject(tree[key[i]])) {

            if(!isEmptyObject(tree)) {

                var li = document.createElement('li');
                    li.innerHTML = "<p>"+key[i]+"</p>"+"<ul></ul>";
                    li = container.appendChild(li);

                var ul = li.querySelector("ul");
                createTree(ul, tree[key[i]]);
            }
        }

        if(!isObject(tree) || isEmptyObject(tree) ){
            var li = document.createElement('li');
            li.innerHTML = "<p>"+key[i]+"</p>"
        }
    }



}

var cont = document.querySelector("body");

createTree(cont, data);
