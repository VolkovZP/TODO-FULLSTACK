import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

const values = { body: '', deadline: '', isDone: false };

function TaskForm (props) {
  const onSubmit = (values, actions) => {
    props.createTaskAction(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createTaskAction: values => dispatch(ActionCreators.createTaskRequest(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
