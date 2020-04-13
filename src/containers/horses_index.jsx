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
        <Link to={`/${this.props.stableName}/cars/${horse.id}`} key={horse.id}>
          <div className="card-horse">
            <img src="https://images.unsplash.com/uploads/14136148007774dc82563/ce92d553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80" alt="horse_card" height= "70px" />
            <div className="card-text">
              <h3>{horse.model}</h3>
              <p>{horse.owner}</p>
            </div>
          </div>
        </Link>
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
    horses: state.horses,
    stableName: state.stableName
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchHorses }, dispatch );
};


export default connect(mapStateToProps, mapDispatchToProps)(HorsesIndex);
