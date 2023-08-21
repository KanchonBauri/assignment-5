let total = 0;

function handleClick(target) {
    const selectedItemsContainer = document.getElementById("selected.items");
    // console.log(target.childNodes[7].innerText)
    const itemName = target.childNodes[7].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    // console.log(li);
    selectedItemsContainer.appendChild(li);
    // console.log(target.childNodes[9].childNodes[0].innerText)
    const price = target.childNodes[9].childNodes[0].innerText;

    total = parseInt(total) + parseInt(price);
    // console.log(total);
    document.getElementById("total-price").innerText = total;

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // document.getElementById


}
