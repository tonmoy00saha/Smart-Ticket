function ticketbuy() {
    displayhiddensection('ticket-buy');
    const ticketBuy = document.getElementById('ticket-buy');
    ticketBuy.scrollIntoView();
}
let numberofseatselected = 0;
document.getElementById('seat-container').addEventListener('click', function (event) {

    if (event.target.tagName === "BUTTON") {
        const buttonid = event.target.id;
        if (document.getElementById(buttonid).classList.contains("bg-green")) {
            deselectseat(buttonid);
        }
        else {
            if(numberofseatselected<=3)
            selectSeat(buttonid);
        else
        alert('Cannot select more than four ticket');
        }
        nextBtn();
    }
    if (numberofseatselected==4) {
        document.getElementById('apply-btn').disabled = false;
    }
    else
    {
        document.getElementById('apply-btn').disabled = true;
        innervaluezero('coupon-input');
        document.getElementById('discount-part').innerHTML='';
    }
    document.getElementById('seat-booked').innerText = numberofseatselected;
    document.getElementById('available-seat').innerText=40-numberofseatselected;
    document.getElementById('total').innerText = 550 * numberofseatselected;
    document.getElementById('grand-total').innerText = 550 * numberofseatselected;
});
document.getElementById('apply-btn').addEventListener('click', function () {
    const text = document.getElementById('coupon-input').value;
    var p=1;
    if (text === "NEW15")
        p = 0.85;
    else if (text === "Couple20")
        p = 0.80;
    else
    alert('Invalid Coupon');
    if (document.getElementById('apply-btn').disabled === false) {
        const total = 550 * numberofseatselected;
        const totalnumber = parseInt(total);
        const grandtotal = totalnumber * p;
        document.getElementById('grand-total').innerText = parseInt(grandtotal);
        const discountamount = Math.round((1-p)*total);
        discount(discountamount);
    }
});
function discount(val)
{
    const html = `<h3>Discount</h3>
    <h3>-BDT ${val}</h3>`;
    document.getElementById('discount-part').innerHTML=html;
}
function nextBtn() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber.length === 11 && numberofseatselected)
        document.getElementById('next-btn').disabled = false;
}
function selectSeat(elementID) {
    backgroundcolorchange(elementID);
    textcolorchange(elementID);
    numberofseatselected++;
    addseatclassprice(elementID);
}
function deselectseat(elementID) {
    removebackgroundcolor(elementID);
    removetextcolor(elementID);
    numberofseatselected--;
    removeseatclassprice(elementID);
}
function addseatclassprice(elementID) {
    const htmlString =
        ` <h3>${elementID}</h3>
         <h3>Economy</h3>
         <h3>550</h3>`;
    const div1 = document.createElement('div');
    div1.innerHTML = htmlString;
    div1.classList.add("flex", "flex-row", "justify-between", "text-[#03071299]", "py-1");
    document.getElementById('seat-price-list-container').appendChild(div1);
}
function removeseatclassprice(elementID) {
    const id = document.getElementById('seat-price-list-container');
    const div = id.getElementsByTagName('div');
    for (let i = 0; i < div.length; i++) {
        let temp = div[i].getElementsByTagName("h3")[0];
        if (temp.innerText == elementID) {
            id.removeChild(div[i]);
        }
    }
}
function next() {
    removeshowsection('header');
    removeshowsection('mainpart1');
    removeshowsection('ticket-buy');
    displayhiddensection('success');
}
function continueBtn() {
    displayhiddensection('header');
    displayhiddensection('mainpart1');
    removeshowsection('success');
    resetthepage();
}
function resetthepage() {
    makeinnerhtmlzero('seat-price-list-container');
    innervaluezero('coupon-input');
    innervaluezero('phone-number');
    innervaluezero('name');
    numberofseatselected = 0;
    document.getElementById('apply-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
    valuezero('total');
    valuezero('grand-total');
    valuezero('seat-booked');
    document.getElementById('available-seat').innerText=40;
    document.getElementById('discount-part').innerHTML='';
}
function valuezero(elementID) {
    document.getElementById(elementID).innerText = 0;
}
function innervaluezero(elementID) {
    document.getElementById(elementID).value = '';
}
function makeinnerhtmlzero(elementID) {
    const id = document.getElementById('seat-price-list-container');
    const div = id.getElementsByTagName('div');
    for (let i = 0; i < div.length; i++) {
        const tempp = div[i].getElementsByTagName("h3")[0];
        const temp = tempp.innerText;
        removebackgroundcolor(temp);
        removetextcolor(temp);
    }
    document.getElementById(elementID).innerHTML = '';
}