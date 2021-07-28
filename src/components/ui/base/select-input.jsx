import PropTypes from 'prop-types';
import Select from 'components/web-ui/select';
import styled from 'styled-components/macro';

const SelectInput = styled(Select)`
  padding-right: 0.5em;
  background-color: #fafafa;
  border-radius: 6px;
  line-height: 1.2;
  border: 1px solid #e6e6e6;

  & > svg {
    margin: 0;
    top: 50%;
    right: 0.75em;
    transform: translateY(-50%);
  }

  & > select {
    border-radius: 0;
  }

  & > select:focus {
    box-shadow: none;
  }
`;

SelectInput.propTypes = {
  onChange: PropTypes.func,
};

SelectInput.defaultProps = {
  onChange: (event) => console.debug(event),
};

export default SelectInput;
