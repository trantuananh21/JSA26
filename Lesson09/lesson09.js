let api_url = fetch('https://retoolapi.dev/U9Z01Z/userdata');

function getUser() {
    fetch('https://retoolapi.dev/U9Z01Z/userdata')
    .then((res) => res.json())
    .then((data) =>{
        let output = '<h2>User</h2>';
        data.forEach(function(user){
            output += `
                <img src="${user.avatar}" alt="Avatar">
                <p>Full Name: ${user.fullName}</p>
                <p>Sex: ${user.sex}</p>
            `;
        });
        document.getElementById('output').innerHTML = output;
    }) 
}
getUser();