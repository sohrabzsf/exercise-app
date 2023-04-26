import { GiWeightLiftingUp } from "react-icons/gi";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center font-bold p-5 md:px-10 lg:px-16 2xl:px-24 bg-tertiary">
      <ul>
        <li>
          <a className="text-primary hover:text-secondary" href="#">
            Website Terms
          </a>
        </li>
        <li>
          <a className="text-primary hover:text-secondary" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="text-primary hover:text-secondary" href="#">
            Contact Information
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-center">
        <span className="flex items-center text-xl text-center text-primary">
          <GiWeightLiftingUp className="text-4xl mr-1" />
          FitFlow
        </span>
        <p className="text-primary">Copyright &copy; {footerYear}</p>
        <p className="text-primary">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
