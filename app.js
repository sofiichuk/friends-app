const dudesList = document.getElementById('user_cards');
const searchBar = document.getElementById('searchBar');
const reset = document.getElementById('reset');
const disclaimer = document.getElementById('chooseAnotherGender');
let theDudes = [];

reset.addEventListener('click', (e) => {
    loaddudes();
})

disclaimer.addEventListener('click', (e) => {
  alert("We are sorry - the are only two genders");
})

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filtereddudes = theDudes.results.filter((dude) => {
        return (
            dude.name.first.toLowerCase().includes(searchString)||
            dude.name.last.toLowerCase().includes(searchString)
        );
    });
    displaydudes(filtereddudes);
});

const loaddudes = async () => {
    try {
        const res = await fetch(`https://randomuser.me/api/?results=32&nat=au,us,ca,gb,fr,nl,nz&inc=nat,location,gender,name,email,dob,phone,picture`);
        theDudes = await res.json();
        displaydudes(theDudes.results);
        const tempArray = [...theDudes.results];
        let toSortLater = [];
        tempArray.map(el=>toSortLater.push(el.name.last,el.dob.age,el.gender,';'));
        console.log(toSortLater);
        // toSortLater.sort((a,b)=>
        // console.log(theDudes.results[0].name.last, theDudes.results[1].name.last,)
    } catch (err) {
        console.error(err);
    }
};

const displaydudes = (dudes) => {
    const htmlString = dudes
        .map((dude) => {
             return `   
            <li class="user_card">
                <div class="user_name">${dude.name.first}</div>
                 <div class="user_card_content">
                   <div class="user_photo">
                   <img src="${dude.picture.medium}">
                   </div>
                  <div class="user_about">
                    <p class="email">${dude.email.replace('@','<br/>@')}</p>
                    <p class="phone">${dude.phone}</p>
                    <p class="city">${dude.location.city},</p>
                    <p class="country">${dude.location.country}</p>
                  </div>
                  <div class="age">Age: ${dude.dob.age}</div>
                </div>
            </li>
        `;
        })
        .join('');
    dudesList.innerHTML = htmlString;
};

const toSortByABC = document.querySelectorAll('.user_name');
console.log(toSortByABC)

loaddudes();

// console.log(
//     Array.from(toSortByABC).forEach(el => {
//     if (el !== null) {
//         (async() => {
//             await Array.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//
//     // names must be equal
//     return 0;
// })})}})
//         })();
//     }
// });

// const elements = await this;
// const arrayOfElementFinders = elements.slice(0, 3); // or Array.from?
// const comparableArray = await Promise.all(arrayOfElementFinders.map(async x => [await x.getText(), x]));
// comparableArray.sort((a, b) => +(a[0] > b[0]) || -(a[0] < b[0]));
// const sortedArray = comparableArray.map(x => x[1]);
// console.log('array sorted');
//
// let asyncCompare = async (function(a, b) {
//     let x = await (a.name());
//     let y = await (b.name());
//     console.log(x.localeCompare(y));
//     return x.localeCompare(y);
// });
//
// let sortTheArray = async(function(toSortByABC) {
//     return await (toSortByABC.sort(asyncCompare));
// });
//
// this.then((elements) => {
//     let toSortByABC = [elements[0], elements[1], elements[2]];
//     let sortedArray = sortTheArray(toSortByABC);
//     console.log('array sorted');
// });


// function getMetadataPromise(entry) {
//     return new Promise((resolve, reject) => {
//         entry.getMetadata(resolve, reject);
//     });
// }
//
//     readEntries().then(entries =>
//         Promise.all(entries.map(entry =>
//             getMetadataPromise(entry).then(metadata => {
//                 entry.metadata = metadata;
//                 return entry;
//             })
//         ))
//     ).then(entries =>
//         entries.sort((a, b) => a.metadata.name - b.metadata.name) // or whatever
//     ).then(sortedEntries => {
//         console.log(JSON.stringify(sortedEntries));
//     }, console.error);

// let sorted=Array.from(toSortByABC);
// if (sorted != null) {sorted.sort((a, b) => {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//
//     // names must be equal
//     return 0;
// })};
//
// console.log(sorted)

// Array.from(toSortByABC).forEach(el => {
//     if (el !== null) {
//         (async() => {
//             await import(`app/module/${el.dataset.component}`);
//         })();
//     }
// }))



// let getAge = document.querySelectorAll


// -fetch('https://randomuser.me/api/?results=30&nat=us,fr,nl,nz&inc=nat,location,gender,name,email,dob,phone,picture')
//  .then(response=>response.json()) //json is a promise
//  .then(json=>console.log(json))
//  .catch(error=>console.log(error));
// Object { results: (30) […], info: {…} }
// info:{…}
// results: Array(30) [ {…}, {…}, {…}, … ]
// 0:Object {
//     "gender": "female",
//     "name": {
//     "title": "Ms",
//         "first": "Hailey",
//         "last": "Wood"
// },
//     "location": {
//     "street": {
//         "number": 1193,
//             "name": "Country Club Rd"
//     },
//     "city": "Miami",
//         "state": "Missouri",
//         "country": "United States",
//         "postcode": 29901,
//         "coordinates": {
//         "latitude": "-66.8613",
//             "longitude": "169.7719"
//     },
//     "timezone": {
//         "offset": "+4:30",
//             "description": "Kabul"
//     }
// },
//     "email": "hailey.wood@example.com",
//     "dob": {
//     "date": "1961-04-17T14:55:06.882Z",
//         "age": 61
// },
//     "phone": "(639) 823-5062",
//     "picture": {
//     "large": "https://randomuser.me/api/portraits/women/11.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
// },
//     "nat": "US"
// },
//
// picture: Object { large: "https://randomuser.me/api/portraits/women/11.jpg", medium: "https://randomuser.me/api/portraits/med/women/11.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg" }
// large: "https://randomuser.me/api/portraits/women/11.jpg"
// medium: "https://randomuser.me/api/portraits/med/women/11.jpg"
// thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg"

//==========================================================================

// async function getUsersData() {
//     const response =
//     await fetch(`https://randomuser.me/api/?results=30&nat=us,fr,nl,nz&inc=nat,location,gender,name,email,dob,phone,picture`);
//     const result = await response.json();
//     console.log(result)
// }
//
// getUsersData();

//==========================================================================

//
// const url = 'https://randomuser.me/api/?results=30&nat=us,fr,nl,nz&inc=nat,location,gender,name,email,dob,phone,picture';
//
// const getData = async (url) => {
//     try {
//         const result = await fetch(url)
//         const json = await result.json()
//        console.log(json.results[0].name.first)
//         return json
//     } catch (error) {
//         console.log(error.message)
//     }
// }
//
// getData(url)

//==========================================

// const mainContent = document.getElementsByClassName("user_cards");
//
// const displayUsers = (json) => {
//     const htmlString = json
//         .map((user) => {
//             return `
//             <li>
//             <div class="user_card">
//                 <div class="user_name">${json.results[0].name.first}</div>
//                 <div class="user_card_content">
//                     <div class="user_photo">
//                         <img class="picture" alt="" src="${json.results[0].picture.medium}">
//                     </div>
//                     <div class="user_about">
//                         <span class="bold">${json.results[0].dob.age}years old.</span>
//                         ${json.results[0].email}
//                         (063)-101-0022
//                         <p class="bold">${json.results[0].city}</p>
//                     </div>
//                     <div class="sex">Male</div>
//                 </div>
//             </div>
//         </li>
//         `;
//         })
//         .join('');
//     mainContent.innerHTML = htmlString;
// };
// displayUsers()
// mainContent.innerHTML = htmlString;

//=====================================================================

// innerHTML+=` <li>
//         <div class="user_card">
//             <div class="user_name">${json.results[0].name.first}</div>
//             <div class="user_card_content">
//                 <div class="user_photo">
//                     <img class="picture" alt="" src="avatar_15.jpg">
//                 </div>
//                 <div class="user_about">
//                     <span class="bold">I have 57 wears old.</span>
//                     aaron.duval@example.com
//                     (063)-101-0022
//                     <p class="bold">Sewer</p>
//                 </div>
//                 <div class="sex">Male</div>
//             </div>
//         </div>
//     </li>`

//========================================================================

