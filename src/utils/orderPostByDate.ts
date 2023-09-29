type Post = {
  meta: {
    createdAt: string;
    title: string;
    description: string;
  },
  folder: string;
}

function orderPostsByDate(posts: Post[]) {
  posts.sort((a, b) => {
    const dataA = new Date(a.meta.createdAt.split('/').reverse().join('-'));
    const dataB = new Date(b.meta.createdAt.split('/').reverse().join('-'));
    return Math.sign(dataB.getTime() - dataA.getTime());
  });
  return posts;
}

export default orderPostsByDate;