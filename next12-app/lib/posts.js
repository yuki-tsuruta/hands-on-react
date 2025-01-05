const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export async function getAllPostsData() {
    try {
        const res = await fetch(new URL(apiUrl));
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const posts = await res.json();
        return posts;
    } catch (error) {
        console.error('データの取得に失敗しました:', error);
        return [];
    }
}

export async function getAllPostIds() {
    try {
        const res = await fetch(new URL(apiUrl));
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const posts = await res.json();
        return posts.map((post) => {
            return {
                params: {
                    id: String(post.id),
                },
            };
        });
    } catch (error) {
        console.error('データの取得に失敗しました:', error);
        return [];
    }
}

export async function getPostData(id) {
    try {
        const res = await fetch(new URL(`${apiUrl}/${id}`));
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const post = await res.json();
        return {
            post,
        };
    } catch (error) {
        console.error('データの取得に失敗しました:', error);
        return null;
    }
}
