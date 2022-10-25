import logo from "./logo.svg";
import "./App.css";
import { authentication } from "./firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

function App() {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        console.log(errorCode);
      });
  };

  const signOutFacebookSession = () => {
    signOut(authentication)
      .then(() => {
        console.log("Sign out successfull");
      })
      .catch((error) => {
        console.log("Failed sign out");
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    await signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOutGoogleSession = () => {
    signOut(authentication)
      .then(() => {
        console.log("Sign out successfull");
      })
      .catch((error) => {
        console.log("Failed sign out");
      });
  };

  const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);

        console.log(errorMessage);
      });
  };

  const signOutGitHubSession = () => {
    signOut(authentication)
      .then(() => {
        console.log("Sign out successfull");
      })
      .catch((error) => {
        console.log("Failed sign out");
      });
  };

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign in Google</button>
      <button onClick={signOutGoogleSession}>Sign out Google</button>

      <button onClick={signInWithFacebook}>Sign in Facebook</button>
      <button onClick={signOutFacebookSession}>Sign out Facebook</button>
      <button onClick={signInWithGitHub}>Sign in GitHub</button>
      <button onClick={signOutGitHubSession}>Sign out GitHub</button>
    </div>
  );
}

export default App;
