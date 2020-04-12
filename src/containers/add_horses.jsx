import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddHorse extends Component {
  render() {
    return(
      <div className="title_presentation">
        <h3>Bienvenue chez {this.props.stableName}</h3>
        <p>Vous pouvez suivre ici les chevaux de cette écurie.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stableName: state.stableName
  }
}

export default connect(mapStateToProps, null)(AddHorse);
