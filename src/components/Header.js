import { Link } from "react-router-dom";
import "../styles/style.css";

function Header() {

	// remove from Locale Storage the saved user
	const handleLogout = () => {
		localStorage.removeItem("userId")
	};
	
  return (
		<div className="main-header">
			<div className="element-header">
				<div><Link to="/"><div className="element-logo"></div></Link></div>
				<nav><ul><li><Link to="/" onClick={handleLogout}>Log out</Link></li></ul></nav>
			</div>
		</div>
  );
}

export default Header;