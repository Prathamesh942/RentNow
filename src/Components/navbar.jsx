import "./navbar.scss"
import { UilEstate } from '@iconscout/react-unicons'
function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <UilEstate size="40" color="#7065F0"/>
            <span>RentNow</span>
        </div>
        <ul>
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>My properties</li>
        </ul>

    </div>
  )
}

export default Navbar