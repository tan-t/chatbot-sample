import React from 'react';
import { MessageList, MessageGroup, Message, MessageText } from '@livechat/ui-kit'
import './Conversation.css';

const toHHMMSS = (d) => {
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
function Conversation(props) {
  return (
    <div style={{ height: 400 }}>
      <MessageList active>
        {props.conversations.map((c, inx) => {
          return (
            <MessageGroup key={String(inx)}>
              <Message date={toHHMMSS(c.request_timestamp)} isOwn={true} authorName="you">
                <MessageText>{c.user_input}</MessageText>
              </Message>
              <Message date={toHHMMSS(c.response_timestamp)} authorName="bot">
                <MessageText>{c.bot_response}</MessageText>
              </Message>
            </MessageGroup>
          );
        })}
      </MessageList>
    </div>
  );
}

export default Conversation;
