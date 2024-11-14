
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = () => {

  const clientId = "432247889200-5tdpat8ukro4udos8rka03iuk7vcv0ds.apps.googleusercontent.com";

  const handleLogin = async (response) => {
    if (response.credential) {
      const token = response.credential;
      console.log(token)

    } else {
      console.error("Google login failed");
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleLogin}
        onError={(error) => console.error("Login failed:", error)}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
