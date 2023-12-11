// const accesskey = "E10E5-4sBitypMxLclP58qrXNMYijidk1ZvB6PGEy0Y";
// const searchform = document.getElementById("search-form");
// const searchbox = document.getElementById("search-box");
// const searchresult = document.getElementById("search-result");
// const showmorebtn = document.getElementById("show-more-btn");
// let keyword = "";
// let page = 1;
// async function searchimages() {
//     keyword = searchbox.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
//     const reponse = await fetch(url);
//     const data = await reponse.json();
//     // console.log(data);
//     const results = data.results;
//     results.map((result) => {
//         const image = document.createElement("image");
//         image.src = result.urls.small;
//         const imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.appendChild(image);
//         searchresult.appendChild(imageLink);
//     })
//     showmore.style.display = "block";

// }
// searchform.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchimages();
// })
// showmore.addEventListener("click", () => {
//     page++;
//     searchimages();
// })
const accesskey = "E10E5-4sBitypMxLclP58qrXNMYijidk1ZvB6PGEy0Y";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;

async function searchimages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    const response = await fetch(url); // Corrected variable name "reponse" to "response"
    const data = await response.json();
    // console.log(data);
    const results = data.results;

    results.map((result) => {
        const imageLink = document.createElement("a"); // Corrected variable name "imageLink" to "imageLink"
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        
        const image = document.createElement("img"); // Corrected "image" to "img"
        image.src = result.urls.small;

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    });

    showmorebtn.style.display = "block"; // Corrected variable name "showmore" to "showmorebtn"
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
});

showmorebtn.addEventListener("click", () => {
    page++;
    searchimages();
});
