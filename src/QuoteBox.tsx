import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@material-ui/core";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

type QuoteProps = {
  quote: string | null;
  author: string | null;
  color: string;
  setQuote: any;
};

const QuoteBox = ({
  quote,
  author,
  color,
  setQuote,
}: QuoteProps): JSX.Element => {
  const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${quote}%22%20${author}`;
  const tumblrURL = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  const width = (quote !== null ? quote.length : 1) * 5;
  const minWidth = width > 600 ? "600px" : width + "px";
  const height = (quote !== null ? quote.length : 1) * 2;
  const minHeight = height > 350 ? "350px" : height + "px";
  const ease = "all 1.5s ease";
  const transitions = {
    transition: ease,
    WebkitTransition: ease,
    MozTransition: ease,
  };

  return (
    <div
      id="quote-box"
      style={{
        minWidth: minWidth,
        maxWidth: "600px",
        minHeight: minHeight,
        maxHeight: "350px",
        transition: "all 1.5s linear",
        WebkitTransition: "all 1.5s linear",
        MozTransition: "all 1.5s linear",
      }}
    >
      <div id="text" style={{ color: color, ...transitions }}>
        <FontAwesomeIcon icon={faQuoteLeft} /> {quote}{" "}
      </div>
      <div id="author" style={{ color: color, ...transitions }}>
        -{author}
      </div>
      <div className="buttons">
        <div id="social-media">
          <Tooltip title="Tweet this quote!" aria-label="tweet this quote">
            <a
              id="tweet-quote"
              className="social-button"
              href={tweetURL}
              aria-label="tweet this quote"
              target="_top"
              style={{ backgroundColor: color, ...transitions }}
            >
              <FontAwesomeIcon
                className="icon"
                icon={faTwitter}
                aria-hidden="true"
              />
            </a>
          </Tooltip>
          <Tooltip title="Post on Tumblr!" aria-label="post on tumblr">
            <a
              id="tumblr"
              className="social-button"
              href={tumblrURL}
              aria-label="post on tumblr"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: color, ...transitions }}
            >
              <FontAwesomeIcon
                icon={faTumblr}
                className="icon"
                aria-hidden="true"
              />
            </a>
          </Tooltip>
        </div>
        <button
          id="new-quote"
          type="button"
          onClick={setQuote}
          style={{
            backgroundColor: color,
            color: "white",
            ...transitions,
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
