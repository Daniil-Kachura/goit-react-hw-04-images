import s from './Loader.module.css';
import { ColorRing } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ color, size }) => {
  return (
    <div className={s.ldsEllipsis}>
      <ColorRing color={color} size={size} />
    </div>
  );
};
Loader.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};


export default Loader;
