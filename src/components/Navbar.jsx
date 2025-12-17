import { navIcons, navLinks } from "#constants";
import dayjs from "dayjs";

const Navbar = () => {
    return (
      <nav>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <p className="font-bold">Mon portfolio</p>

          <ul>
            {navLinks.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {navIcons.map(({id, img}) => (
              <li key={id} className="icon-hover">
                <img src={img} alt={`icon-${id}`} />
              </li>
            ))}
          </ul>

          <time>{dayjs().format("ddd MMM D h:mm")}</time>
        </div>
      </nav>
    );
};

export default Navbar;