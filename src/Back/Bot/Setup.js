/**
 * @implements {Telegram_Bot_Back_Api_Setup}
 */
export default class MyBot_Back_Bot_Setup {
    constructor() {

        // INSTANCE METHODS
        this.commands = function (bot) {
            bot.api.setMyCommands([
                {command: 'help', description: 'Display this text.'},
                {command: 'settings', description: 'Configure bot settings.'},
                {command: 'start', description: 'Start using the bot.'},
            ]);
            return bot;
        };

        this.handlers = function (bot) {
            bot.command('help', (ctx) => {
                const msg = `
Available commands:

<b>/help</b> - Display this text.
<b>/settings</b> - Configure bot settings.
<b>/start</b> - Start using the bot.
`;
                ctx.reply(msg, {
                    parse_mode: 'HTML',
                });
            });
            bot.command('settings', (ctx) => {
                ctx.reply('Configure bot settings.');
            });
            bot.command('start', (ctx) => {
                ctx.reply('Start using the bot.');
            });
            return bot;
        };
    }
}
