import './Header.scss';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >

      </motion.div>
    </header>
  )
}

export default Header;