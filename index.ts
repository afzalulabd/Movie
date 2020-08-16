class Movie{
    title:string;
    studio:string;
    rating:string;
    movies:any[]=[{title:"Home Alone 3",studio:"Hughes Entertainment",rating:"PG"},
                     {title:"Juno",studio:"Mandate Pictures Mr. Mudd",rating:"PG-13"},
                     {title:"The Goonies",studio:"Amblin Entertainment",rating:"PG"},
                     {title:"The secret in their eyes",studio:"STXfilms",rating:"R"},
                     {title:"Quantum of solace",studio:"Eon Productions Metro-Goldwyn-Mayer Pictures Columbia Pictures",rating:"PG-13"}];

    constructor(gettitle:string,getstudio:string,getrating:string="PG"){
          this.title=gettitle;
          this.studio=getstudio;
          this.rating=getrating;
          console.log("the title : "+this.title, "  the studio : "+this.studio, "  and the rating :"+this.rating);
    }

    getPG(){
    let movielist:any[]=[];
    
   for (var i=0;i<this.movies.length;i++){
    if(this.movies[i].rating==='PG'){
        console.log(this.movies[i])
        movielist.push(this.movies[i]);
    }
    console.log(movielist)
    return movielist;
   }
     

    }

}

let film= new Movie("Casino Royale","Eon Productions","PG­13");
film.getPG();



