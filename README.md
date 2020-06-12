# Slack Bot


## Prerequisites:
You will need the following things properly installed on your computer.
* node -v 12.16.2
* npm -v 6.14.4


## Installation:
* git clone <https://github.com/dev-reactjs/faq-slackbot.git>
* cd slack_bot
* npm install

## Create a New Bot Integration:
* To integrate your bot with Slack, you must have a existing slack workspace or create a new one.
* Go to "https://api.slack.com/apps?new_classic_app=1" to create a new Bot Integration.
* On the next screen note the Slack API token.

Running / Development:
* node index
* SLACK_BOT_TOKEN='Paste Your Token in .env file'


## Run Bot:
* Invite the bot to a channel, /invite @bot-name
* Ask questions 
* @bot-name hi or hi
* @bot-name tell me about the covid precautions or tell me about the covid precautions
* @bot-name thanks or thanks
