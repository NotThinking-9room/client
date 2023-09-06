import { motion } from 'framer-motion';

import Prograssbar from '../../components/Prograssbar';
import { defaultFadeInUpVariants } from '../../constants/motions';

function HomePage() {
  return (
    <div>
      HomePage
      <header className="App-header">
        <Prograssbar gauge={10} />
        <div>Hello Krampoline ! sumi</div>
        <motion.div
          variants={defaultFadeInUpVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button>ANIMATION TEST</button>
        </motion.div>
      </header>
    </div>
  );
}

export default HomePage;
