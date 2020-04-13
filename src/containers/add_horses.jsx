import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AddHorse extends Component {
  render() {
    return(
      <div className="title_presentation">
        <h3>Bienvenue chez {this.props.stableName}</h3>
        <p>Vous pouvez suivre ici les chevaux de cette écurie.</p>
        <Link className="btn btn-primary btn-cta" to="/Mon-Ecurie/new">
          Ajouter un cheval
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stableName: state.stableName }
}

export default connect(mapStateToProps, null)(AddHorse);
