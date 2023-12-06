import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { getChats, getUser, hasChatAccess } from '@/app/actions/getActions'
import ChatComponent from '../../../components/ChatComponent'
import { redirect } from 'next/navigation'

async function findMessages(chatId) {
  const chatResp = await getChats(chatId)

  if (chatResp?.success == false) {
    return null
  }

  const chats = await Promise.all(
    chatResp?.discussions.map(async (chat) => {
      const { firstName, userType } = await getUser(
        chat?.userId.toString(),
        true,
      )

      return {
        ...chat,
        firstName,
        userType,
      }
    }),
  )

  return { title: chatResp?.title, messages: chats }
}

async function Chat({ params }) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }
  const chatId = params?.chatId
  let msgResp = null

  const {
    user: { userId, userType },
  } = session

  const isAuthorized =
    userType === 'admin' || (await hasChatAccess(chatId, userId, userType))

  if (isAuthorized) {
    msgResp = await findMessages(chatId)
  }

  return (
    <main>
      {isAuthorized && msgResp ? (
        <ChatComponent
          chatId={chatId}
          courseName={msgResp.title}
          messages={msgResp.messages}
        />
      ) : (
        <p>
          No chats can be displayed! Please check if you have the authority to
          access this page.
        </p>
      )}
    </main>
  )
}

export default Chat
