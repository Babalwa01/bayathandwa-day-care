import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt='Bayathandwa Day Care' />
      </div>
      <ul></ul>
    </nav>
  )
}

export default Navbar;