import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title }) {
  const animationRef = useRef(null);

  useEffect(() => {
    anime({
      targets: animationRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className="auth-page min-vh-100 d-flex align-items-center">
      <div className="container">
        <div 
          ref={animationRef}
          className="card shadow-lg mx-auto p-4"
          style={{ maxWidth: '500px', opacity: 0 }}
        >
          <h2 className="text-center mb-4">{title}</h2>
          {children}
          <div className="text-center mt-3">
            {title === 'Login' ? (
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            ) : (
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}