module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "Oh, I get it now. Thank you!",
    createdAt: new Date(Date.UTC(2019, 0, 10, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  }
];
