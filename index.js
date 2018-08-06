const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '618647133:AAFN3ZFXUdc8i_JYojFELDDf_rWE6p7aBHs';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, function WhiteBarText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['☕️ Кофе','🥐Не кофе'],
        ['☕️ Кофе TO GO➡️','🥐Не кофе TO GO➡️']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Выберите товар из списка, пожалуйста', opts);
});
bot.onText(/\🔙 Назад/, function WhiteBarText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['☕️ Кофе','🥐Не кофе'],
        ['☕️ Кофе TO GO➡️','🥐Не кофе TO GO➡️']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Выберите товар из списка, пожалуйста', opts);
});
bot.onText(/\☕️ Кофе/, function WhiteBarCategory(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['☕️Веганська кава 💰55 грн'],
        ['☕️Капучино 💰35 грн'],
            ['🔙 Назад']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Выберите товар из списка, пожалуйста', opts);
});
bot.onText(/\🥐Не кофе/, function WhiteBarCategory(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['🥐🥤Какао 💰40 грн'],
        ['🥐🥤Лимонад 💰40 грн'],
            ['🔙 Назад']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Выберите товар из списка, пожалуйста', opts);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
console.log(msg);
  // send a message to the chat acknowledging receipt of their message
});
