import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/post_data");

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

// getStaticPaths内のreturnで使うpathを取得する
export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

// idに基づいてブログ投稿用データを取得する
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);
    console.log(matterResult);
    const blogContent = await remark().use(html).process(matterResult.content); 

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}