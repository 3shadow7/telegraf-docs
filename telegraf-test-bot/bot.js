import 'dotenv/config'; // automatically loads .env
import { Telegraf } from "telegraf";
const token = process.env.BOT_TOKEN;
if (!token) {
    throw new Error("BOT_TOKEN is not defined in environment variables.");
}
const bot = new Telegraf(token);
bot.command('test', ctx => {
    return ctx.reply(`Hello ${ctx.update.message.from.first_name}!`);
});
bot.launch();
//# sourceMappingURL=bot.js.map