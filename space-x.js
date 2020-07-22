console.log("this works");

const container = document.querySelector(".container");

fetch("https://api.spacexdata.com/v3/capsules") //this fetch call is like a js function
.then(response => {
    console.log(response);
    return response.json();
})

.then(data => {
    // //console.log(data);
    // const firstElement = data[0];
    // //console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;
    // //console.log(capsuleID)
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);

    for (let i = 0; i < data.length; i++) { //for loop iterating through all data
        let eachCapsule = data[i]; //eachcapsule will be each object in that array
        //console.log(eachCapsule);
        const obj = {
            capsuleID: eachCapsule.capsule_id, //dragon 1
            details: eachCapsule.details, // sentencce
            landings: eachCapsule.landings //1
        };
        console.log(obj);
        
        const capsuleElement = document.createElement("p");
        capsuleElement.textContent = obj.capsuleID;
        container.appendChild(capsuleElement); //appending all of the data that was grabbed to the container

    }
})