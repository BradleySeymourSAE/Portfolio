import { compose } from 'recompose';
import withUserGames from "hocs/with-user-games";


export default compose(
    withUserGames,
);
