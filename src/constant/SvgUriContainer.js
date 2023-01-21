import React from 'react';
import {SvgXml} from 'react-native-svg';

class SvgUriContainer extends React.Component {
  state = {
    xml: null,
    error: false,
  };

  static getDerivedStateFromError(error) {
    return {error: true, xml: null};
  }

  componentDidMount() {
    const {uri} = this.props;
    this.fetchSvg(uri);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.uri !== this.props.uri) {
      this.fetchSvg(this.props.uri);
    } else if (
      prevState.error !== this.state.error &&
      this.state.error &&
      this.props.default &&
      !this.state.xml
    ) {
      this.setState({xml: this.props.default, error: false});
    }
  }

  fetchSvg = uri => {
    fetch(uri)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        return Promise.reject(response);
      })
      .then(res => {
        this.setState({xml: res});
        return Promise.resolve();
      })
      .catch(err => {
        this.setState({xml: null, error: true});
      });
  };

  render() {
    const {error, xml} = this.state;
    return (
      <>{!error ? <SvgXml width="100%" height="100%" xml={xml} /> : null}</>
    );
  }
}

export default SvgUriContainer;
