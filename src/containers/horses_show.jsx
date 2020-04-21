import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchHorse, removeHorse } from '../actions/index';


class HorsesShow extends Component {
  handleClick = () => {
    this.props.removeHorse(this.props.horse, () => {
      this.props.history.push('/');
    });
  }

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
      <div className="container_new_horse">
        <div className="row">
          <div className="col-xs-4">
            <img src="https://images.unsplash.com/uploads/14136148007774dc82563/ce92d553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80" alt="horse_card" height= "150px" />
          </div>
          <div className="col-xs-8">
            <h3>{horse.model}</h3>
            <p>Propriétaire: {horse.owner}</p>
            <p>Race: {horse.brand}</p>
            <p>Age: {horse.plate} an(s)</p>
          </div>
        </div>
        <div style={{float: 'right'}}>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
          <Link to={"/"} style={{float: 'right'}}>
            Retour
          </Link>
        </div>
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
  return bindActionCreators({ fetchHorse, removeHorse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HorsesShow);
