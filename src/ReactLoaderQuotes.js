import React from 'react';

import {
  setContainer,
  setBackground,
  setQuotes,
  setTitle,
  setLoader
} from './style';

class ReactLoaderQuotes extends React.Component {
  static get propTypes() {
    return {
      loading: React.PropTypes.bool.isRequired,
      quotes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
      random: React.PropTypes.bool,
      speed: React.PropTypes.number,
      backgroundColorLoader: React.PropTypes.string,
      backgroundColorQuotes: React.PropTypes.string,
      backgroundColorBackground: React.PropTypes.string,
      opacityBackground: React.PropTypes.number,
      fontSizeTitle: React.PropTypes.string,
      colorTitle: React.PropTypes.string,
      fontFamilyTitle: React.PropTypes.string
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      currentQuotesIndex: 0
    };

    this._startQuotes();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading !== nextProps.loading &&
        !nextProps.loading) {
      clearInterval(this.quotesInterval);
    }
  }

  _getNextQuote(quotes) {
    // if at the end of our quotes, then go back to the first quote
    if (this.state.currentQuotesIndex === quotes.length - 1) {
      return 0;
    } else {
      return this.state.currentQuotesIndex + 1;
    }
  }

  _getRandomQuote(quotes) {
    return Math.floor(Math.random() * quotes.length);
  }

  _startQuotes() {
    const quotes = this.props.quotes;
    const speedInMilliseconds = this.props.speed * 1000;

    this.quotesInterval = setInterval(() => {
      this.setState({
        currentQuotesIndex: (this.props.random) ? this._getRandomQuote(quotes) : this._getNextQuote(quotes)
      });
    }, speedInMilliseconds);
  }

  render() {
    const Loader = setLoader(this.props);
    const Quotes = setQuotes(this.props);
    const Container = setContainer(this.props);
    const Background = setBackground(this.props);
    const Title = setTitle(this.props);

    return (
      <Container>
        <Background />
        <Quotes>
          <Title>{this.props.quotes[this.state.currentQuotesIndex]}</Title>
          <Loader></Loader>
        </Quotes>
      </Container>
    );
  }
}

ReactLoaderQuotes.defaultProps = {
  random: false,
  speed: 1.5,
  backgroundColorLoader: 'yellow',
  backgroundColorQuotes: 'black',
  backgroundColorBackground: 'black',
  opacityBackground: 0.5,
  fontSizeTitle: '18px',
  colorTitle: 'white',
  fontFamilyTitle: 'Arial'
};

export default ReactLoaderQuotes;
