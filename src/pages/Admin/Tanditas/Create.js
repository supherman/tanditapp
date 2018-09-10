import React, { Component } from 'react';
import MainLayout from '../../../Layouts/Main';
import { Formik, Field } from 'formik';

const initialValues = {
  name: '',
  ammount: 0,
  status: 'unstarted',
  frequency: 'quincenal',
};

class Create extends Component {
  handleSubmit = () => {};

  render() {
    return (
      <MainLayout isLoggedIn={this.props.isLoggedIn}>
        <div className="container margin-auto small-padding">
          <h2>Crear TANDITA</h2>
          <hr />
          <div className="panel white-bg small-padding">
            <Formik
              initialValues={initialValues}
              onSubmit={this.handleSubmit}
              render={({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <div className="flex">
                    <div className="width-50 small-margin-right">
                      <label>Status:</label>
                      <Field
                        component="select"
                        name="status"
                        onChange={handleChange}
                      >
                        <option value="unstarted">Unstarted</option>
                        <option value="started">Started</option>
                        <option value="closed">Closed</option>
                      </Field>
                    </div>
                    <div className="width-50">
                      <label>Frecuencia:</label>
                      <Field
                        component="select"
                        name="frequency"
                        onChange={handleChange}
                      >
                        <option value="quincenal">Quincenal</option>
                        <option value="mensual">Mensual</option>
                      </Field>
                    </div>
                  </div>
                  <label>Cantidad:</label>
                  <input
                    type="number"
                    value={values.ammount}
                    onChange={handleChange}
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      className="button primary small-margin-top"
                    >
                      Crear TANDITA
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Create;
