# tg-demo-base

This repository contains a demonstration project for building a Telegram bot using the **grammY** framework. The code
here complements the article published on Medium, guiding you through the setup and customization of your own bot.

Read the full article on Medium: [Telegram Bots: The First Steps](https://flancer32.com/telegram-bots-the-first-steps-c1688e572abe)

## What's Included

- Basic bot setup using **grammY** and **Node.js**.
- Example commands: `/start`, `/help`, and `/settings`.
- Configuration for both long polling and webhook modes.

## How to Run This Bot

 ```bash
$ git clone https://github.com/flancer64/tg-demo-base.git
$ cd ./tg-demo-base
$ npm install
$ cat > ./cfg/local.json
{
  "@flancer32/teq-telegram-bot": {
    "apiKeyTelegram": "YOUR_BOT_API_TOKEN"
  }
}
^D
$ npm run start
```

Happy coding! 😊

---

For more details on my Telegram bot development services, visit my website: [wiredgeese.com](https://wiredgeese.com).

I offer custom Telegram bot development solutions tailored to your needs. Feel free to reach out for consultation and
development services.


