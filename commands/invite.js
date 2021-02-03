module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    return message.member
      .send(
        `https://discord.com/oauth2/authorize?client_id=790356284092317766&scope=bot&permissions=8
    `
      )
      .catch(console.error);
  }
};
