import {
  Route,
  useParams,
  Link,
  Router,
  useRouteMatch,
} from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comment from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "choi", text: "Learning React is cool" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.path}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Coments
            </Link>
          </div>
        </Route>
      <Route path={`${match.path}/comments`}>
        <Comment />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
