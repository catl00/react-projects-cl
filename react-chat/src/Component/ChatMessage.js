import firebase from '../Firebase.js';

const auth = firebase.auth();

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.dicebear.com/10.x/sprouts/svg'} />
            <p className='bubble'>{text}</p>
        </div>
    )
}

export default ChatMessage;