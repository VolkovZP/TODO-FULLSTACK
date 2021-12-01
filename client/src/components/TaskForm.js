import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as ActionCreators from '../actions';

const values = { body: '', deadline: '', isDone: false };

function TaskForm() {
  const dispatch = useDispatch()
  const onSubmit = (values, actions) => {
    dispatch(ActionCreators.createTaskRequest(values))
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


export default TaskForm