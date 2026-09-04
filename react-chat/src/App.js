import '../src/Styles/Chat.css'
import SignIn from './Component/SignIn';
import ChatRoom from './Component/ChatRoom';

import firebase from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './Component/SignOut';

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Hi! Start chatting ♡</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;