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
