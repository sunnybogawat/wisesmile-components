import React from 'react';

class Alert extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alert">
          <span style={{'color': 'red'}}>{this.props.errorMsg}</span>
      </div>
    );
  }

}
Alert.propTypes = { errorMsg: React.PropTypes.string};
export default Alert;
