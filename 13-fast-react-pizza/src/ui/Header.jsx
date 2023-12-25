import { Link } from "react-router-dom";
import SearchOrders from "../features/order/SearchOrders";

function Header() {
  return (
    <div>
      <header>
        <Link to="/">Fast React Pizza.co</Link>
        <SearchOrders />
      </header>
    </div>
  );
}

export default Header;
