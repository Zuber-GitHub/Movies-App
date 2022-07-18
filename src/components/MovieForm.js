const MovieForm = (props)=>{



    const showForm =(event)=>{
        event.preventDefault();
        const NewMovieObj = {title: event.target[0].value,
        Opening_Text: event.target[1].value,
        Release_date:event.target[2].value}
        console.log(NewMovieObj)
        
    }
    
    
    
    return<>
    <form onSubmit={showForm}>
        <span>
        <label >Title</label>
        <input type="text" className="title" /></span>
        <span>
        <label >Opening Text</label>
        <input type="text" className="openingText" />
        </span>
        <span>
        <label >Release Date</label>
        <input type="text" className="releaseDate" />
        <button className="submitForm">Add Movie</button>
        </span>
    </form>
    </>
};
export default MovieForm;