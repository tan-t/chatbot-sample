import React from 'react';
import { Message, MessageText } from '@livechat/ui-kit'
import './Conversation.css';

const toHHMMSS = (d) => {
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
function Conversation(props) {
  return (
      <Message date={toHHMMSS(props.conversation.isOwn ? props.conversation.request_timestamp : props.conversation.response_timestamp)} isOwn={props.conversation.isOwn} authorName={props.conversation.isOwn ? "you" : "bot"}>
        <MessageText>{props.conversation.isOwn ? props.conversation.user_input : props.conversation.bot_response}</MessageText>
      </Message>
  );
}

export default Conversation;
