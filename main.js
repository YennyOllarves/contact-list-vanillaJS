let name_ = document.getElementById('data-name');
let number = document.getElementById('data-number');
let address = document.getElementById('data-address');
let buttonAdd = document.getElementById('btn-add');


let contactList = document.getElementById('contact-list')

const db = window.localStorage;

buttonAdd.onclick = () => {
    let contact =  {
        id : Math.random(1, 50),
        name : name_.value,
        number : number.value,
        address : address.value,

    }
    saveContact(db, contact);

    // console.log(contact);
}
loadContact(db, contactList);