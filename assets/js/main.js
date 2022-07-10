let nameCarHear = document.getElementById("nameCarHear");
let typeCarHear = document.getElementById("typeCarHear");
let modelCarHear = document.getElementById("modelCarHear");
let priceCarHear = document.getElementById("priceCarHear");
let carHearImg = document.getElementById("carHearImg");
let addCareHear = document.getElementById("addCareHear");
let carHearData = document.getElementById("carHearData");
let inCar = document.getElementsByClassName("inCar");
let count = 0;
let carData2 = document.getElementById("carData2");
let lookHear = document.getElementById("lookHear");
if (localStorage.getItem("carHear") == null) {
    var carsHear = [];
} else {
    var carsHear = JSON.parse(localStorage.getItem("carHear"));
    count = carsHear.length;
    loadCarList();
}

function saveNewCar(imgBase64, ) {
    let cars = {
        name: nameCarHear.value,
        type: typeCarHear.value,
        model: modelCarHear.value,
        price: priceCarHear.value,
        img: imgBase64,
    };

    carsHear.push(cars);

    localStorage.setItem("carHear", JSON.stringify(carsHear));
    count++;
}

addCareHear.onclick = function() {
    if (addCareHear.innerHTML != "add car") {
        loadImageAsBase64(function(base64) {
            updateCarHearNow(base64);
            loadCarList();
            clearForm();
        });
    } else {
        loadImageAsBase64(function(base64) {
            saveNewCar(base64);
            loadCarList();
            clearForm();
        });
    }
};

function loadCarList() {
    let recentCars = "";
    for (let i = 0; i < carsHear.length; i++) {
        let j = i + 1;
        recentCars += `
        <tr>
        <td class="text-warning">${j} </td>
        <td class="text-warning">${carsHear[i].name}</td>
        <td class="text-warning"> ${carsHear[i].type}</td>
        <td class="text-warning">${carsHear[i].model}</td>
        <td class="text-warning">${carsHear[i].price}</td>
        <td class="text-warning w-25"><img class="w-50" src="${
          carsHear[i].img
        }" id='carImage' alt=""></td>
        <td><button class="btn btn-outline-danger" onclick="deleteCarLine(${i})">delete</button></td> </td>
        <td><button class="btn btn-outline-success" onclick="updateCarHear(${i})">update</button></td> </td>
        </tr>
        `;
    }
    carHearData.innerHTML = recentCars;
}

function loCarHear() {
    let recentCars = "";
    for (let i = 0; i < carsHear.length; i++) {
        let j = i + 1;
        recentCars +=
            `<div class="col-3">
                        <img src="${carsHear[i].img}" 'alt="Car"class="car--hrear" style="width:100%" onclick="myFunction(this,${i})">
                        
                    </div>`

    }
    carData2.innerHTML = recentCars;

}

function lookToCaar(id) {
    let recentCarss = "";
    for (let i = 0; i < carsHear.length; i++) {
        let j = i + 1;
        if (id == i) {
            recentCarss += `
        <div class="info">
                    
                    <p>${carsHear[i].name}</p>
                    <p>${carsHear[i].type}</p>
                    <p>${carsHear[i].model}</p>
                    <p> ${carsHear[i].price}</p>
                </div>

        
        `
        }
    }
    lookHear.innerHTML = recentCarss;
}

function clearForm() {
    for (let i = 0; i < inCar.length; i++) {
        inCar[i].value = "";
    }

    carHearImg.value = "";
    addCareHear.innerHTML = "add car";
}

function deleteCarLine(index) {
    carsHear.splice(index, 1);
    count = carsHear.length;
    localStorage.setItem("carHear", JSON.stringify(carsHear));
    loadCarList();
}

function deleteAllHear() {
    localStorage.removeItem("carHear");
    carHearData.innerHTML = "";
    carsHear = [];
    addCareHear.innerHTML = "add car";
}

function searchHear(searchText) {
    let recentCars = "";
    for (let i = 0; i < carsHear.length; i++) {
        if (carsHear[i].name.toLowerCase().includes(searchText.toLowerCase())) {
            let j = i + 1;
            recentCars += `
        <tr>
        <td class="text-warning">${[j]} </td>
        <td class="text-warning">${carsHear[i].name}</td>
        <td class="text-warning"> ${carsHear[i].type}</td>
        <td class="text-warning">${carsHear[i].model}</td>
        <td class="text-warning">${carsHear[i].price}</td>
        <td class="text-warning"><img src="${
          carsHear[i].img
        }" class="w-25" alt=""></td>
        <td><button class="btn btn-outline-danger" onclick="deleteCarLine(${i})">delete</button></td> </td>
        <td><button class="btn btn-outline-success" onclick="updateCarHear(${i})">update</button></td> </td>
        </tr>
        `;
        }
    }
    carHearData.innerHTML = recentCars;

}

function updateCarHear(index) {
    let cars = carsHear[index];
    nameCarHear.value = cars.name;
    typeCarHear.value = cars.type;
    modelCarHear.value = cars.model;
    priceCarHear.value = cars.price;
    addCareHear.innerHTML = "update car";
    count = index;
}

function updateCarHearNow(base64) {
    let cars = {
        name: nameCarHear.value,
        type: typeCarHear.value,
        model: modelCarHear.value,
        price: priceCarHear.value,
        img: base64 || carsHear[count].img,
    };
    carsHear[count].name = cars.name;
    carsHear[count].type = cars.type;
    carsHear[count].model = cars.model;
    carsHear[count].price = cars.price;
    carsHear[count].img = cars.img;
    localStorage.setItem("carHear", JSON.stringify(carsHear));
}

function loadImageAsBase64(onLoadSuccess) {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
        "load",
        function() {
            // convert image file to base64 string
            onLoadSuccess(reader.result);
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
    } else {
        onLoadSuccess();
    }
}


// carTaps
function myFunction(imgs, id) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgtext = imgs.imgtext;
    expandImg.parentElement.style.display = "block";
    lookToCaar(id);

}