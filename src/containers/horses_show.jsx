import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchHorse } from '../actions/index';

class HorsesShow extends Component {
  //To call the fetchPost
  componentDidMount() {
    // First check if post not already there
    if (!this.props.horse){
      this.props.fetchHorse(this.props.match.params.id);
    }
  }

  render() {
    const { horse } = this.props;

    if (!horse) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="first-row">
          <h3>Show</h3>
        </div>
        <div className="post-item">
          <h3>{horse.model}</h3>
          <p>{horse.owner}</p>
        </div>
        <Link to={`/${this.props.stableName}`}>
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const horse = state.horses.find(p => p.id === idFromUrl);
  return { horse, stableName: state.stableName };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHorse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HorsesShow);
