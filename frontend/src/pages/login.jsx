import Form from "../components/form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div>
      <Form route="api/token/" method="login" />
      <button onClick={handleRegisterRedirect}>Go to Register</button>
    </div>
  );
}
export default Login;
