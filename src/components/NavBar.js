//Componente navbar Responsive

const NavBarBoostrap = ()=>{
   //Original Navbar 
   // hacer CSS para agregar (o no) display al elemento nav.


   /*NavBar responsive max-width 550px*/
    /* hacer CSS para agregar (o no) display al elemento nav.*/
    return(
    <>
        <nav className="navbar navbar-dark bg-dark d-none">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav> 

       <nav className="navBarBoostrap bg-dark d-flex justify-content-center align-items-center">
            <div className="containerBrand">
                <a className="navbar-brand brandNavBar text-light " href="./App.js">Brand</a>
            </div>

            <a className="text-light text-decoration-none" href="#" > Candy Store </a>
            <a className="text-light text-decoration-none" href="#"> Movies-Collapse </a>
            <a className="text-light text-decoration-none" href="#"> Cinema %OFF </a>

            <div className="containerProfileSearch">

                <a className="navbar-brand text-light " href="#"> Bors Menu </a>
                <a className="navbar-brand text-light " href="#">Profile</a>
            </div>
       </nav>
  </>      
    )
}

export default NavBarBoostrap;
