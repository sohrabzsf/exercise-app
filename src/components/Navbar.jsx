import { Link } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="flex items-center gap-10 font-bold p-5 md:px-10 lg:px-16 2xl:px-24">
      <span>
        <GiWeightLiftingUp className="pulse text-4xl text-primary" />
      </span>
      <ul className="flex">
        <li>
          <Link
            to="/"
            className="hover:underline underline-offset-4 text-xl text-primary hover:text-secondary mr-6"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className="hover:underline underline-offset-4 text-xl text-primary hover:text-secondary"
          >
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
