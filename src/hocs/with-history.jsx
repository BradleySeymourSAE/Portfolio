import { withProps } from 'recompose';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen((location, action) => console.log(location.pathname));

export default withProps(({ uploadedImageUrl, defaultBackgroundImageUrl }) => {
  return { history };
});