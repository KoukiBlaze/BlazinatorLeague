var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MjY2MzQ0ODAxNDg4NzMyMTYw.C08Ugw.ewDzxbzdnVdTV5Bxox3-Xl3Pmog'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!bltourney') {
    e.message.channel.sendMessage('The next BlazinatorLeague Tourney is http://www.blazinatorchallonge.com/BL2B2');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!blprize') {
    e.message.channel.sendMessage('The next BlazinatorLeague Tourney prizes are community colors and 15 league points.');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!bltopseed') {
    e.message.channel.sendMessage('Astronaut');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!bltv') {
    e.message.channel.sendMessage('https://www.twitch.tv/blazinatortv');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!bldonate') {
    e.message.channel.sendMessage('The Blazinator donation page. https://goo.gl/forms/H5eDFz6LimPEDVuu1');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!blclan') {
    e.message.channel.sendMessage('The Blazinator clan application page. https://goo.gl/forms/Xo0ZJJbF6MkqNXqF2');
  }
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == '!blrank') {
    e.message.channel.sendMessage('The Blazinator League Ranking page. https://docs.google.com/document/d/10XydP7kZrpf77c1OvqXXyp7FXw3tJ-18pqjqR0UPAwE/edit');
  }
});
