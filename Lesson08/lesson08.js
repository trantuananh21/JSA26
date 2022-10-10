const api_url1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";

function click1 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[0].death)
    });
}

function click2 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[0].cases)
    });
}

function click3 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[0].recovered)
    });
}

function click4 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[1].death)
    });
}

function click5 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[1].cases)
    });
}

function click6 () {
    let dt = fetch(api_url1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Sucess:", data.detail[1].recovered)
    });
}
