import JWT from "jsonwebtoken";
const JWT_SECRET = "asjknalksn123,z";

export default function (req, res) {
  const { name, password } = req.body;

  if (!name || !password) return res.status(400).json("invalid request");

  const token = JWT.sign(
    {
      admin: name === "Gaith" ? true : false,
      name,
    },
    JWT_SECRET,
    {
      expiresIn: "1hr",
    }
  );

  res.status(200).json({ token });
}
