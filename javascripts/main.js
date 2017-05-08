$(document).ready(function() {

    //variables
    const actorsArray = [];
    let teamToPrint = "";

    //event for the button
    $(".btn").click((event) => {
        $("#logo").addClass("hidden");
        event.preventDefault();
        dataGetter();
        teamToPrint = ($(event.currentTarget).attr('id'));
    });


    const loadCharacters = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/characters.json")
                .done((data1) => resolve(data1.characters))
                .fail((error) => reject(error));
        });
    };


    const loadGenders = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/genders.json")
                .done((data2) => resolve(data2.genders))
                .fail((error) => reject(error));
        });
    };


    const loadTeams = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/teams.json")
                .done((data3) => resolve(data3.teams))
                .fail((error) => reject(error));
        });
    };


    const WriteToDom = (actorsArray) => {
        let domString = "";
        let j=0 ;        
        for (let i = 0; i < actorsArray.length; i++) {
        	if ((j%4) ===0){
				//creating a row
		 		domString += `<div class="row">`;
		 	}
		 	j++;
        	// domString += `<div class="row">`
            domString += `<div class="col-md-3 col">`;
            domString += `<p class="name">${actorsArray[i].name}</p>`;
            //add gender boarder
            if (actorsArray[i].gender_id === 0) {
                domString += `<center><img  class= "image fBoarder" src="${actorsArray[i].image}"></center>`;
            } 
            else if (actorsArray[i].gender_id === 1) {
                domString += `<center><img  class= "image mBoarder" src="${actorsArray[i].image}"></center>`;
            }
            //add description
            if (actorsArray[i].gender_id === 0 && actorsArray[i].description === "") {
                domString += `<p class="description"> abcde fghij klmno pqrst uvwxy z </p>`;
            } 
            else if (actorsArray[i].gender_id === 1 && actorsArray[i].description === "") {
                domString += `<p class="description"> 1234567890 </p>`;
            }
            domString += `<p class="description">${actorsArray[i].description}</p>`;
            domString += `</div>`;//for col
            if ((j%4) ===0){
			// closing the row after three columns
		 		domString +=`</div>`;
			}
    	}
    	$("#output").append(domString);
    };


    //to check which team to print depending on the button
    const checkForTeam = (characters, teams, teamToPrint) => {
        for (let i = 0; i < characters.length; i++) {
            for (let j = 0; j < teams.length; j++) {
                if (characters[i].team_id === teams[j].id && teams[j].name === teamToPrint) {
                    let teamName = teams[j].name;
                    characters[i].teamName = teamName;
                    actorsArray.push(characters[i]);
                }
            }
        }
    };


    const dataGetter = () => {
        Promise.all([loadCharacters(), loadGenders(), loadTeams()])
            .then((result) => {
                checkForTeam(result[0], result[2], teamToPrint);
                WriteToDom(actorsArray);
            }) 
        .catch(function(error) {
        });
    };

});
