export type Post = {
    id: string,
    title: string,
    description: string
}

export const posts: Post[] = [
    {
        id: "how-to-create-a-nextjs-app",
        title: "Easy Way To Create A NextJS App",
        description: "npx create-next-app blog-app --experimental-app"
    },
    {
        id: "how-to-create-a-reactjs-app",
        title: "How to create a ReactJS Boilerplate?",
        description: "npx create-react-app blog-app"
    },
    {
        id: "how-to-create-a-nextjs-app",
        title: "Need a setup a CMS? Strapi is used by everyone",
        description: "npx create-strapi-app blog-app"
    }
];

export function getPostById(id: string) {
    const targetPost = posts.filter(post => post.id === id);
    return targetPost[0];
}