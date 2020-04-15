import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createHorse } from '../actions';

class HorsesNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  // the second argument (post) is a callback to feed the then
  onSubmit = (values) => {
    this.props.createHorse(values, () => {
      this.props.history.push('/Mon-Ecurie');
    });
  }

  // in this form we need to create function onSubmit that will call the action post
  render() {
    return (
      <div className="container_new_horse">
        <h2 style={{textAlign: 'center'}}>Ajouter un cheval dans la liste</h2>
        <div className="new_horse">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Name"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Breed"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Age"
              name="plate"
              type="text"
              component={this.renderField}
            />

            <button className="btn btn-add-horse" type="submit" disabled={this.props.pristine || this.props.submitting}>
              Ajouter le cheval
            </button>
            <Link to={`/${this.props.stableName}`} style={{float: 'right'}}>
              Retour
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stableName: state.stableName }
}

//with redux form newHorseForm is a specific id
//then in the render fonction we put the form
export default reduxForm({
  form: 'newHorseForm' // a unique identifier
})(
  connect(mapStateToProps, { createHorse })(HorsesNew)
);
