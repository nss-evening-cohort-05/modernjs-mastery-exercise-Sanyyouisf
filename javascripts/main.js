$(document).ready(function() {

    //clicking the X-Men  button
    // $(".btn").click((event){
    // 	console.log($(event.currentTarget));
    // });

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
         //         	for (let i = 0; i < data1.characters.length; i++){
    					// console.log("characters[i]",data1.characters[i])
    					// } ;   
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


    // const checkForTypeMatch = (human, pet) => {
    //     const interestedUnArray = human["interested-in"];
    //     console.log("interestedUnArray",interestedUnArray)
    //     const isMatchNumber = interestedUnArray.indexOf(pet.type);
    //     if (isMatchNumber === -1) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };


    var actorsArray=[];
    
    const checkForTeam = (characters,teams) => {
    	for (let i = 0; i < characters.length; i++){
    		    // var characters.team = [];
    		// var	characterName= characters[i].name;
    		// actorsArray.push(characterName);
    		for (let j = 0; j < teams.length; j++){
    			// console.log("characters[i]",characters[i]);
    			if (characters[i].team_id === teams[j].id){
    				var teamName = teams[j].name;
				   	// var	characterName= characters[i].name;
				    // actorsArray.push(teamName);
				    // actorsArray.push(characterName);
				    characters[i].extend("team name ",teams[j].name);
				    // actorsArray.push(characters[i]);
				    console.log("character.team is :",characters[i]);
    			};	
    		};
    		// console.log("teamName array",teamName)
    		console.log("character.team is :",characters[i]);
    	};
    	// console.log("character.team is :",character.team);
    };




    // const dataGetter = () => {
    	// loadCharacters()

        Promise.all([loadCharacters(), loadGenders(), loadTeams()])
            .then((result) => {
                console.log("result is :", result);
                // result.forEach((xhresult) => {
                // console.log("xhresult[0] is :", xhresult[0]);
                checkForTeam(result[0],result[2]);
               });

                // for (let i = 0; i < myHumans.length; i++) {
                //         for (let j = 0; j < myAnimals.length; j++) {
                //             if (checkForTypeMatch(myHumans[i], myAnimals[j]) && checkForKidFriendly(myHumans[i], myAnimals[j])) {
                //                 myHumans[i].matches.push(myAnimals[j]);
                //                 // console.log("myHumans[i].matches",myHumans[i].matches);
                //             }
                //         }
                //     }
                // printplayerData(players);
                // console.log("players", players);
                // checkForWinner(players);
            })
            // .catch(function(error) {
            //     console.log("the user is ", error.statusText);
            //     alert("the user is ", error.statusText);
            // });
    // };


    // });


















});
