import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AddHorse extends Component {
  render() {
    return(
      <div className="title_presentation">
        <img src="https://images.unsplash.com/photo-1517887121-557af22472e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="image_horse" width="100%" />
        <h3>Bienvenue chez {this.props.stableName}</h3>
        <p>Vous pouvez suivre ici les chevaux de cette écurie.</p>
        <Link className="btn btn-add-horse btn-cta" to="/new">
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
