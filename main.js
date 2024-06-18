import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7112978888:AAHM-yHYga48EeIJ4QucmhPYipO2O4mvLHY'
const webAppUrl = 'https://vk.com/wasket'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.launch()
