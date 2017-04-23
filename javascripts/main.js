$(document).ready(function() {

    $("#xmenBtn").click((event) => {
            event.preventDefault();
            $("#logo").addClass("hidden");
            // console.log($(event.currentTarget));
            // dataGetter();
            // loadCharacters();
            // loadGenders();
            // loadTeams();



            const loadCharacters = () => {
                return new Promise((resolve, reject) => {
                    $.ajax("./db/characters.json")
                        .done((data1) => {
                            resolve(data1.characters);
                            console.log("data1 characters :", data1);
                        })
                        .fail((error) => reject(error));
                });
            };

            const loadGenders = () => {
                return new Promise((resolve, reject) => {
                    $.ajax("./db/genders.json")
                        .done((data2) => {
                            resolve(data2.genders);
                            console.log("data2 characters :", data2);
                        })
                        .fail((error) => reject(error));
                });
            };

            const loadTeams = () => {
                return new Promise((resolve, reject) => {
                    $.ajax("./db/teams.json")
                        .done((data3) => {
                            resolve(data3.teams);
                            console.log("data3 characters :", data3);
                        })
                        .fail((error) => reject(error));
                });
            };

            var actorsArray = [];

            const WriteToDom = (actorsArray) => {
                let domString = "";
                for (let i = 0; i < actorsArray.length; i++) {
                    domString += `<div class="col-md-3 col">`;
                    domString += `<p class="name">${actorsArray[i].name}</p>`;
                    //add gender boarder
                    if (actorsArray[i].gender_id === 0) {
                        domString += `<img  class= "image fBoarder" src="${actorsArray[i].image}">`;
                    } else if (actorsArray[i].gender_id === 1) {
                        domString += `<img  class= "image mBoarder" src="${actorsArray[i].image}">`;
                    }
                    //add description
                    if (actorsArray[i].gender_id === 0 && actorsArray[i].description === "") {
                        domString += `<p class="description"> abcde fghij klmno pqrst uvwxy z </p>`;
                    } else if (actorsArray[i].gender_id === 1 && actorsArray[i].description === "") {
                        domString += `<p class="description"> 1234567890 </p>`;
                    }

                    domString += `<p class="description">${actorsArray[i].description}</p>`;
                    domString += `</div>`;
                }
                $("#output").append(domString)
            };




            const checkForTeam = (characters, teams) => {
                for (let i = 0; i < characters.length; i++) {
                    for (let j = 0; j < teams.length; j++) {
                        if (characters[i].team_id === teams[j].id) {
                            var teamName = teams[j].name;
                            characters[i].teamName = teamName;
                            actorsArray.push(characters[i]);
                        };
                    };
                };
                console.log("actorsArray all is :", actorsArray);
            };



            Promise.all([loadCharacters(), loadGenders(), loadTeams()])
                .then((result) => {
                    checkForTeam(result[0], result[2]);
                    WriteToDom(actorsArray);
                });

        })
        // .catch(function(error) {
        //     console.log("the user is ", error.statusText);
        //     alert("the user is ", error.statusText);
        // });
        // };


});
