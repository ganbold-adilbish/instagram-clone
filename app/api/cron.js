import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  return Response.json(posts);
}
