const filmscontainer = document.getElementById('filmcontainer');

let filmobj = fetch('datasource.json').then(function(response) {
    return response.json();
}).catch((error) => {
    console.log(error)
});

function filmStartFilling() {
    filmobj.then((response) => {
      //response.films[1].filmgenre.trim().split(",")
        for (let i = 0; i < (response.films).length; i++) {
            filmscontainer.innerHTML += `
            <div class="film">
            <img src="./filmbanners/${response.films[i].filmbanner}">
            <p>${response.films[i].filmname}</p>
            </div>
            `
        }
    })
}

filmStartFilling()

function myFunction() {
    // Declare variables
    var input, filter, li, a, i;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    li = filmscontainer.getElementsByClassName("film");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}