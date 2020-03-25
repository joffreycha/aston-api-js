

const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.text())
    .then(users => {
        users = JSON.parse(users)
        
        for (index in users) {
            let user_card = document.createElement("article");
            user_card.setAttribute("class", "user_card");
            document.querySelector("section").appendChild(user_card);

            user_card.appendChild(document.createElement("h1")).innerHTML = "Carte de visite";

            addElement(users, user_card, "p", "username", index);
            addElement(users, user_card, "p", "name", index);
            addElement(users, user_card, "p", "email", index);
            
            /* sous élément address */
            let address =  document.createElement("p");      
            address.setAttribute("class", "address");
            address.innerHTML = `${users[index].address.street},  ${users[index].address.suite}<br>
            ${users[index].address.city}, ${users[index].address.zipcode}`;
            user_card.appendChild(address);
            
            addElement(users, user_card, "p", "phone", index);
            addElement(users, user_card, "a", "website", index);

            /* sous élément company */
            let company =  document.createElement("p");      
            company.setAttribute("class", "company");
            company.innerHTML = `${users[index].company.name} <br> ${users[index].company.bs} <br> "${users[index].company.catchPhrase}" `;
            user_card.appendChild(company);
        }
        
                 
    });
}

fetchUser();


function addElement(jsonArr, parentNode, elem_type, elem_name, user_index) {
    let elem = document.createElement(`${elem_type}`);    
    console.log(jsonArr[user_index][elem_name]);
    
    elem.setAttribute("class", elem_name);
    if (elem_type == "a"){
        elem.setAttribute("href", jsonArr[user_index][elem_name]);
        elem.setAttribute("target", "blank");
    }

    elem.innerHTML = jsonArr[user_index][elem_name];
    
    parentNode.appendChild(elem);
}