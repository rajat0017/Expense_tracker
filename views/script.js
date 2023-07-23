let form = document.getElementById('form');
let itemList = document.getElementById('users');

let flag = false;

window.addEventListener('DOMContentLoaded', () => {
    axios.get("http://localhost:3000/forms")
        .then((response) => {

            response.data.allUsers.forEach((ele) => {
                showNewUserOnscreen(ele);

            })
        })
        .catch((err) => {
            console.log(err);
        })
})



form.addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();
    let id = document.getElementById('id').value;
    let expense = document.getElementById('expense').value;
    let catagary = document.getElementById('catagary').value;
    let description = document.getElementById('description').value;

    let obj = {
        id,
        expense,
        catagary,
        description
    };
    postRequest = async () => {
        try {
            if (flag == false) {
                const response = await axios.post("http://localhost:3000/forms", obj);
                console.log(response);
                console.log(response.data.newUserDetail);

                showNewUserOnscreen(response.data.newUserDetail);
                let expense = document.getElementById('expense').value='';
                let catagary = document.getElementById('catagary').value='';
                let description = document.getElementById('description').value='';
                return;
            }

            else {
                console.log(obj.id);
                const response = await axios.put(`http://localhost:3000/forms/${obj.id}`, obj);
                console.log(response.data);
                location.reload();


            }
        } catch (err) {
            document.body.innerHTML += "<h4>Something went wrong !</h4>";
            console.log(err);
        }
    }
    postRequest();
}

deleteUserfromapi = async (id) => {
    try {
        const users = await axios.delete(`http://localhost:3000/forms/${id}`);
        deleteUser(id);
    } catch (err) {
        document.body.innerHTML += "<h4>Something went wrong !</h4>";
        console.log(err);
    }
}

function showNewUserOnscreen(userDetails) {
    const d = document.getElementById('users')
    let li = `<li id="${userDetails.id}"> Spent Rs. ${userDetails.expense}  on  ${userDetails.catagary},  ${userDetails.description}
     <button onclick = editUser('${userDetails.id}','${userDetails.expense}','${userDetails.catagary}','${userDetails.description}')> Edit </button> 
     
     <button onclick = deleteUserfromapi('${userDetails.id}')> Delete </button> 
      </li>`
    d.innerHTML = d.innerHTML + li
}

function deleteUser(id) {
    let child = document.getElementById(id)
    let parent = document.getElementById('users')
    parent.removeChild(child)

}

function editUser(id, expense, catagary, description) {
    flag = true;
    document.getElementById('id').value = id;
    document.getElementById('expense').value = expense;
    document.getElementById('catagary').value = catagary;
    document.getElementById('description').value = description;

}

function deleteUser(id) {
    let child = document.getElementById(id)
    let parent = document.getElementById('users')
    parent.removeChild(child)

}

function editUser(id, expense, catagary, description) {
    document.getElementById('id').value = id;
    document.getElementById('expense').value = expense;
    document.getElementById('catagary').value = catagary;
    document.getElementById('description').value = description;
    deleteUserfromapi(id)
}





