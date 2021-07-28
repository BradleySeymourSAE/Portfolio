import React from 'react';
import styled from 'styled-components/macro';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.listBorder};
  border-left: 0;
  border-right: 0;
  margin-top: -1px;
`;

const withList = (options) => (Component) => ({ className, ...props }) => {
  const { iterator, propName, key } = options(props);

  return (
    <List>
      {iterator.map((item) => (
        <ListItem key={item[key]} className={className}>
          <Component {...{ [propName]: item, ...props }} />
        </ListItem>
      ))}
    </List>
  );
};

export default List;
export { withList, List };
