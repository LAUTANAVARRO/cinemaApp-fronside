import SpinnerComponent from '../components/SpinnerComponent'


export default (props)=>{
   //Renderizado condicional, el spinner se muestra si el array está vacío, sino se muestra la lista de componentes. 
   if(props.cinemas.length<=0){
      return(
         <SpinnerComponent></SpinnerComponent>
         )
      }
      
      //iterar cada elemento del array 'cinemas' y mostrarlo
      return( 
      props.cinemas.map((cinema)=>{
         
      return(
            <div className="containerCinema" key={cinema.id}> 
                 <div className="containerPicCinema">
                 </div>
                 <div className='containerGeneralInfo'>
                    <div className="movieCinemaInfo">
                        <p>{cinema.name}</p>
                        <p>{cinema.description}</p>
                        <p>{cinema.address}</p>
                        <span>Duracion</span>
                    </div>
                    <div className="cinemaDescription">
                       <p> hola Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
                    </div>
                 </div>
            </div>
      
      )

   
      

})
 
)

}
    