import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

type Data = {
  name: string
}

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
