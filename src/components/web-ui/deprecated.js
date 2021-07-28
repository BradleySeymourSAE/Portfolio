import { PropTypes } from 'prop-types';

window.__deprecationWarnings = [];

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
      if (!window.__deprecationWarnings[message]) {
        console.warn(message);
        window.__deprecationWarnings[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}

const deprecatedRebassProps = {
  bold: deprecated(PropTypes.any, 'use styled-components directly instead'),
  caps: deprecated(PropTypes.any, 'use styled-components directly instead'),
  center: deprecated(PropTypes.any, 'use styled-components directly instead'),
  color: deprecated(PropTypes.any, 'use styled-components directly instead'),
  f: deprecated(PropTypes.any, 'use styled-components directly instead'),
  fontFamily: deprecated(PropTypes.any, 'use styled-components directly instead'),
  fontSize: deprecated(PropTypes.any, 'use styled-components directly instead'),
  fontWeight: deprecated(PropTypes.any, 'use styled-components directly instead'),
  justify: deprecated(PropTypes.any, 'use styled-components directly instead'),
  left: deprecated(PropTypes.any, 'use styled-components directly instead'),
  letterSpacing: deprecated(PropTypes.any, 'use styled-components directly instead'),
  lineHeight: deprecated(PropTypes.any, 'use styled-components directly instead'),
  m: deprecated(PropTypes.any, 'use styled-components directly instead'),
  mb: deprecated(PropTypes.any, 'use styled-components directly instead'),
  ml: deprecated(PropTypes.any, 'use styled-components directly instead'),
  mr: deprecated(PropTypes.any, 'use styled-components directly instead'),
  mt: deprecated(PropTypes.any, 'use styled-components directly instead'),
  mx: deprecated(PropTypes.any, 'use styled-components directly instead'),
  my: deprecated(PropTypes.any, 'use styled-components directly instead'),
  p: deprecated(PropTypes.any, 'use styled-components directly instead'),
  pb: deprecated(PropTypes.any, 'use styled-components directly instead'),
  pl: deprecated(PropTypes.any, 'use styled-components directly instead'),
  pr: deprecated(PropTypes.any, 'use styled-components directly instead'),
  pt: deprecated(PropTypes.any, 'use styled-components directly instead'),
  px: deprecated(PropTypes.any, 'use styled-components directly instead'),
  py: deprecated(PropTypes.any, 'use styled-components directly instead'),
  right: deprecated(PropTypes.any, 'use styled-components directly instead'),
  textAlign: deprecated(PropTypes.any, 'use styled-components directly instead'),
};

export { deprecated, deprecatedRebassProps };
export default deprecated;
