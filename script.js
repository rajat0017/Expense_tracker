var container = document.getElementById('cot');
var main_container = document.getElementById('maincon');
var exps = document.getElementById('expense12');
var descp = document.getElementById('descrp');
var cat = document.getElementById('catg');
var calculatebt = document.getElementById('calculatebtn');


calculatebt.addEventListener('click', addtolist);
calculatebt.addEventListener('click', addtostorage);

function addtolist() {

    if (exps.value == '') {
        alert('please enter data');
        return;
    }

    var li = document.createElement('li');
    li.className = 'list-item';
    li.id = 'expense';
    li.appendChild(document.createTextNode(exps.value + 'Rs. on ' + cat.value + ' - ' + descp.value));
    container.appendChild(li);

    var delexp = document.createElement('button');
    delexp.className = 'btn btn-primary';
    delexp.id = exps.value;
    delexp.style.marginLeft = '20px';
    delexp.appendChild(document.createTextNode('Delete'));
    
    li.appendChild(delexp);

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary';
    editbtn.id = descp.value;
    editbtn.style.marginLeft = '20px';
    editbtn.appendChild(document.createTextNode('Edit Expenses'));

    li.appendChild(editbtn);

    var dltex = document.getElementById(exps.value);
    
    dltex.onclick = () => {
        container.removeChild(li);
        localStorage.removeItem(delexp.id);
    }

    var editb = document.getElementById(descp.value);

    editb.onclick = () => {
        container.removeChild(li);
        localStorage.removeItem(delexp.id);
        exps.value = delexp.id;
        descp.value = editbtn.id;
    }
}

function addtostorage(e) {

    let myobj = {
        expense: exps.value,
        catg: cat.value,
        decsr: descp.value
    };
    var objstr = JSON.stringify(myobj);
    localStorage.setItem(exps.value, objstr);
    var newobj = JSON.parse(localStorage.getItem(exps.value));


}