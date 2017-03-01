import './init'

import * as TelegramBot from 'node-telegram-bot-api'

export function main() {
  const TOKEN = process.env.BOT_TOKEN || ''

  const bot = new TelegramBot(TOKEN, {
    polling: true,
  })

  bot.on('message', (msg: any) => {
    bot.sendMessage(msg.chat.id, 'pong')
  })
}

if (process.env.NODE_ENV !== 'test') {
  main()
}
