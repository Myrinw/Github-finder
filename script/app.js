const github = new GitHub;
//init ui
const ui = new Ui;

//Search input
const search = document.getElementById("searchUser");

search.addEventListener("keyup", (e) =>{
    //Get input text
    const userText = e.target.value;
    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{  
        //clear profile
        ui.clearProfile();
    }
});