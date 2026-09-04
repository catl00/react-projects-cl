import React from "react";
import ChatMessage from "./ChatMessage";
import firebase from '../Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firestore = firebase.firestore();
const auth = firebase.auth();

const BOT_API_URL = "https://chat-bot-api-lemon.vercel.app/api/chat";

function ChatRoom() {
  const dummy = React.useRef();

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;
    const userText = formValue;

    await messageRef.add({
      text: userText,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });

    // Get the bot's reply and add it as a new message
    try {
      const response = await fetch(BOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await response.json();

      if (data.reply) {
        await messageRef.add({
          text: data.reply,
          uid: "bot",
          photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=chatbot",
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Error getting bot reply:", error);
    }
  };

  return (
    <>
        <main>
            {messages && messages.map( msg => <ChatMessage key={msg.id} message={msg} />)}
            <div ref={dummy}></div>
        </main>

        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type here..."/>
            <button type ="submit">Send</button>
        </form>
    </>
  );
}

export default ChatRoom;