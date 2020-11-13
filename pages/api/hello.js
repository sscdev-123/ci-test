// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const hoge = {
    message : process.env.NODE_ENV === 'production' ? '本番' : '開発'
  };
  
  res.statusCode = 200
  res.json({ message: hoge.message })
}
