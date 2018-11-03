var movies = [
    {
        watched: true,
        title: "In Bruges",
        rating: "5 stars"
    },
    {
        watched: false,
        title: "Frozen",
        rating: "4.5 stars"
    },
    {
        watched: true,
        title: "Mad Max Furry Road",
        rating: "5 stars"
    },
    {
        watched: false,
        title: "Les Miserables",
        rating: "3.5 stars"
    },
]


//This is what actually runs. 
movies.forEach(function(item){
    console.log(buildString(item));
})


function buildString(item){
    var string;
    if(item.watched === true)
    {
        string = "You have watched " + "\"" + item.title + "\"" + " - " + item.rating;
        return string;
    }else{
        string = "You have not watched " + "\"" + item.title + "\"" + " - " + item.rating;
        return string;
    }
}