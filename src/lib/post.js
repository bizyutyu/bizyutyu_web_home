import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

// mdファイル中のデータを取得する
export function getPostsData(){
    // データベースやAPIを用いる場合用
    // const fetchData = await fetch("endpoint")

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ""); // ファイル名をidとして扱う

        // mdファイルを文字列として取得する
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // 取得した文字列を解析する
        const matterResult = matter(fileContents);

        // idとデータを返す
        return{
            id,
            ...matterResult.data, // スプレッド構文
        };
    });

    return allPostsData;
}