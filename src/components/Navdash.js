import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navdash() {
  const navigate = useNavigate()
  return (

   
    <div className="App">
         <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    
            <nav class="navbar">
                <div class="navbar-left">
                    <div class="logo"><img src="/logo/logonavbar.png"/>ArtsyMe</div>
                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                    <Link to="/explore" class="nav-link">Explore</Link>
                </div>

                <div class= "navbar-center">
                
                    <div class="search-container">
                        <div class="search-box">
                            <span class="search-icon"><img src = '/logo/iconsearch.png' /></span>
                            <input type="text" placeholder="Search design did u want ..." />
                        </div>
                    </div>
                

                </div>
                
                <div class="navbar-right">
                  
                  
                    <Link to="/upload" class="nav-link">Upload</Link>
                    <Link to="/job" class="nav-link">Job</Link>
                    <button onClick = {() => navigate('/Daftar')} class="nav-button" >Sign In</button>
                    <button class="nav-button">Log In</button>
                </div>
        </nav>
   
    </div>

    
  );
}

export default Navdash;
