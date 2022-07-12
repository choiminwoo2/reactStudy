import {
  Route,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comment from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api"; 
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun" },
//   { id: "q2", author: "choi", text: "Learning React is cool" },
// ];

const QuoteDetail = () => {
  const params = useParams();
  const {quoteId} = params;
  const match = useRouteMatch();
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote);

  useEffect(()=>{
    sendRequest(quoteId);
    },[sendRequest,quoteId]);

    if(status === 'pending'){
      return(
          <div className="centered">
              <LoadingSpinner />
          </div>
      )
  }

  if(error){
      return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
