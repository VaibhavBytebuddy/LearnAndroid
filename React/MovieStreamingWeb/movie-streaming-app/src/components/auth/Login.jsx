import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthLayout from './AuthLayout';
import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await loginUser(values);
            navigate('/movies');
          } catch (error) {
            alert('Login failed: ' + error.message);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <Field type="text" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="text-danger" />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
}