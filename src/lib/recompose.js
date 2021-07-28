import { mapProps } from 'recompose';
export * from 'recompose';

// filters out unwanted props
// use like:
// omitProps('prop1', 'prop2')(MyComponent)
export function omitProps() {
  return mapProps((props) => {
    const rest = Object.keys(props)
      .filter((key) => ![...arguments].includes(key))
      .reduce((acc, cur) => {
        acc[cur] = props[cur];
        return acc;
      }, {});

    return { ...rest };
  });
}

// keeps only specified props
// use like:
// pickProps('prop1', 'prop2')(MyComponent)
export function pickProps() {
  return mapProps((props) => {
    const rest = Object.keys(props)
      .filter((key) => [...arguments].includes(key))
      .reduce((acc, cur) => {
        acc[cur] = props[cur];
        return acc;
      }, {});

    return { ...rest };
  });
}
