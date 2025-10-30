// src/pages/About.jsx
export default function About() {
  return (
    <div className="auth-card">
      <h2 className="auth-title">About this module</h2>
      <p>This is the User Management micro-frontend.</p>
      <p>It calls the User Management microservice at <code>http://localhost:8001/shecodes</code>.</p>
      <p>Use it to create users and log in.</p>
    </div>
  );
}
