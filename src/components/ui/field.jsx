import React from 'react';
import { omitProps } from 'lib/recompose';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Text from 'components/web-ui/text';
import Label from 'components/web-ui/label';
import Input from 'components/web-ui/input';


function selectAllOnFocusHandler(event) {
  if (event.target.type === 'email') return;

  // Handle if doesnt exist
  if (!event.target.setSelectionRange) return;

  event.persist();
  setTimeout(() => event.target.setSelectionRange(0, 9999), 0);
}


const FieldLayout = styled(Label)`
    position: relative;
    width: 100%;
    margin: 15px 0;
    flex-direction: column;
    align-items: stretch;
`;

const HelperText = styled(Text)`
    font-size: 14px;
    opacity: 0.7;
`;

const ErrorText = styled.span`
  color: ${(props) => (props.light ? '#FFCCCB' : props.theme.colors.redDarken1)};
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 7.5px;
`.withComponent(omitProps('light')(Text));


const Field = ({
  autoCapitalize,
  autoCorrect,
  autoFocus,
  checked,
  children,
  className,
  disabled,
  handleBlur,
  handleLabelClick,
  errors,
  hint,
  label,
  light,
  name,
  onChange,
  onKeyUp,
  onFocus,
  placeholder,
  selectAllOnFocus,
  styledField: FieldLayout,
  styledHint: Hint,
  styledInput: Input,
  styledLabel: Label,
  type,
  validationError,
  value,
}) => {
  return (
    <FieldLayout htmlFor={name}>
      {label ? (
        <Label>
          {label}
          {validationError}
        </Label>
      ) : (
        validationError && <ErrorText light={light}>{validationError}</ErrorText>
      )}
      <Input
        key={name}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        name={name}
        onBlur={(event) => {
          window.scrollTo(0, 0);
          handleBlur && handleBlur(event);
        }}
        onChange={(event) => {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          onChange(name, value);
        }}
        onKeyUp={onKeyUp}
        onFocus={selectAllOnFocus ? selectAllOnFocusHandler : onFocus}
        placeholder={placeholder}
        type={type}
        value={type === 'checkbox' ? undefined : value || ''}
        checked={type === 'checkbox' ? checked : undefined}
        errors={!!validationError}
        disabled={disabled}
      />
      {hint && <Hint children={hint} key={`hint_${name}`} />}
    </FieldLayout>
  );
};

Field.propTypes = {
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Field.defaultProps = {
  autoCapitalize: 'off',
  autoCorrect: 'off',
  disabled: false,
  placeholder: '',
  styledField: FieldLayout,
  styledHint: HelperText,
  styledInput: omitProps('errors')(Input),
  styledLabel: Text,
  type: 'text',
  value: '',
  onKeyUp: () => null,
};

export default Field;
