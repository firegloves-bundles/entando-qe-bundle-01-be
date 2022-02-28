import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  room: PropTypes.number,
  name: PropTypes.string,
});

export const formValues = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  room: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  room: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
  name: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape()]),
});

export const formErrors = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  room: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
