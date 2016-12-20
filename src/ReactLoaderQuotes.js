import React from 'react';

class ReactLoaderQuotes extends React.Component {

  static get propTypes() {
    return {
      quotes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      styles: {
        container: {
          position: 'fixed',
          left: 0,
          width: '100%',
          height: '100%',
        },
        background: {
          position: 'fixed',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 99999
        },
        quotes: {
          position: 'relative',
          top: '50%',
          width: 'auto',
          height: 50,
          maxWidth: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'black',
          transform: "translateY(-50%)",
          zIndex: 999999
        },
        title: {
          fontSize: 14,
          color: 'white'
        },
        loader: {
          position: 'absolute',
          width: '100%',
          height: 5,
          backgroundColor: 'yellow',
          bottom: 0
        }
      }
    };
  }

  render() {
    return (
      <div style={this.state.styles.container}>
        <div style={this.state.styles.background}>
        </div>
        <div style={this.state.styles.quotes}>
          <p style={this.state.styles.title}>Titel</p>
          <div style={this.state.styles.loader}></div>
        </div>
      </div>
    );
  }

}

export default ReactLoaderQuotes;
