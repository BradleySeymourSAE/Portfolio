import { compose } from 'recompose';
import withFetchUserTweets from 'hocs/with-fetch-user-tweets';



export default compose(
    withFetchUserTweets,
);