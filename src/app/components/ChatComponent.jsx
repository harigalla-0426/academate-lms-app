'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import {
  Avatar,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from '@chatscope/chat-ui-kit-react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { addChat } from '../actions/updateActions'
import { getUser } from '@/app/actions/getActions'
import { pusherClient } from '../config/pusher'

function ChatComponent({ courseName, messages, chatId }) {
  const { data: session } = useSession()

  const currentUserId = session?.user?.userId

  const [outMessage, setOutMessage] = useState('')
  const [messageList, setMessageList] = useState(messages)

  const addIncomingMessage = async (chatObj) => {
    const { firstName, userType } = await getUser(chatObj?.userId, true)

    setMessageList((prev) => [...prev, { ...chatObj, firstName, userType }])
  }

  useEffect(() => {
    const chat_channel = pusherClient.subscribe(chatId)

    chat_channel.bind('incoming-messages', (chatObj) => {
      addIncomingMessage(chatObj)
    })

    return () => {
      chat_channel.unbind_all()
      pusherClient.unsubscribe(chatId)
    }
  }, [chatId])

  const sendOutMessage = async () => {
    if (!outMessage.trim()) {
      return
    }

    const chatObj = { userId: currentUserId, message: outMessage }

    const { success, message } = await addChat(chatId, chatObj)

    // Make toast container global

    if (!success) {
      toast.error(message)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />

      <div className="my-6 flex items-center justify-center">{`${courseName} Chats`}</div>

      <div className="m-10" style={{ height: '90vh' }}>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="/course_chat.png" />
            <ConversationHeader.Content
              userName={courseName}
              info="Chat with your coursemates!"
            />
          </ConversationHeader>
          <MessageList>
            {messageList.map(
              ({ userId, message, firstName, userType }, index) => (
                <Message
                  key={`${userId}:${index}`}
                  model={{
                    message: message,
                    direction:
                      currentUserId === userId ? 'outgoing' : 'incoming',
                    sender: firstName,
                  }}
                >
                  <Avatar src={`/${userType}.png`} name={firstName} />
                  <Message.Header>{firstName}</Message.Header>
                </Message>
              ),
            )}
          </MessageList>
          <MessageInput
            attachButton={false}
            placeholder="Chat with your course buddies!"
            autoFocus
            onChange={(msg) => setOutMessage(msg)}
            onSend={() => sendOutMessage()}
          />
        </ChatContainer>
      </div>
    </>
  )
}

export default ChatComponent
