import PropTypes from 'prop-types';
import s from './Section.module.scss';

const Section = ({ children }) => (
  <div className={s.section}>{children}</div>
);

Section.defaultProps = {
  children: [],
};

Section.protoTypes = {
  children: PropTypes.node,
};

export default Section;