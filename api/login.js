module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email);
  console.log("Senha:", password);
  res.status(200).send("Dados recebidos com sucesso!");
};
