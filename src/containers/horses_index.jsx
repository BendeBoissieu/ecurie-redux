import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHorses } from '../actions';
import { bindActionCreators } from 'redux';

class HorsesIndex extends Component {
  componentWillMount(){
    this.props.fetchHorses();
  }
  renderHorses() {
    return this.props.horses.map((horse) => {
      return(
        <div key={horse.id}>
          <h3>{horse.model}</h3>
          <p>{horse.owner}</p>
        </div>
      )
    });
  }

  render() {
    return(
      <div className="horses_list">
        <h1>Liste des chevaux</h1>
        {this.renderHorses()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    horses: state.horses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchHorses }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(HorsesIndex);
