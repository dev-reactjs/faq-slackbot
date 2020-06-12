const SlackBot = require('slackbots')
require('dotenv').config();

const faq = require('./faq')
const questions = faq.faqQuestions;

const bot = new SlackBot({
  token: process.env.SLACK_BOT_TOKEN,
  name: process.env.NAME
})

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ":smiley:"
  }
  bot.postMessageToChannel(
    "general",
    "Hi, how can I assist you",
    params
  );
})

// Handling Error
bot.on('error', error => {
  console.log(error)
})

// Message Handler
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return
  }
  handleMessage(data.text)
})

// Handle incomming message from Bot
function handleMessage(message) {
  const params = {
    icon_emoji: ":smiley:"
  }
  questions.forEach((data) => {
    if(data.question.includes(message)) {
      bot.postMessageToChannel(
        "general",
        data.answer,
        params
      );
    } else {
      return
    }
  })
  
}