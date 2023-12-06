import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherClient = new PusherClient('9ad65eeb8273ebfc3081', {
  cluster: 'us2',
  authEndpoint: '/api/pusher-auth',
  authTransport: 'ajax',
  auth: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
})

export const pusherServer = new PusherServer({
  appId: '1704219',
  key: '9ad65eeb8273ebfc3081',
  secret: '0984f047425986615236',
  cluster: 'us2',
  useTLS: true,
})
