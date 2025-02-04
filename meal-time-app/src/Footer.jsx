
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {

  return (
    <div class="container p-0" style={{"color": "#ffff"}}>
      <div class="d-md-flex flex-row  p-3 justify-content-center gap-3" style={{"width": "100%", "border": "1px solid white"}}>
        <p>Contact Us: 9876543210</p>
        <p>Email @: connect@quickmeals.com</p>
        <div className="d-flex flex-row justify-content-center gap-3">
          <span className="text-center">&copy; Follow Us: </span>
          <a class="nav-link" style={{"width": "30px", "height": "30px"}} href="/"><TwitterIcon/></a>
          <a class="nav-link" style={{"width": "30px", "height": "30px"}} href="/"><XIcon/></a>
          <a class="nav-link" style={{"width": "30px", "height": "30px"}} href="/"><FacebookIcon/></a>
          <a class="nav-link" style={{"width": "30px", "height": "30px"}} href="/"><LinkedInIcon/></a>
          <a class="nav-link" style={{"width": "30px", "height": "30px"}} href="/"><PinterestIcon/></a>
        </div>
      </div>
    </div>
  );
}
export default Footer;