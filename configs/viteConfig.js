import path from "path";
/**
 *
 * @param {*} sources -- Dont use {@,$} for alias
 * @returns
 */
export const alias = (
    sources = {
        "~~": "src",
        "##p": "src/components",
    }
) => {
    return {
        name: "alias",
        transform: (src) => {
            // Lấy đường dẫn tuyệt đối tới thư mục src và chuẩn hóa nó
            for (const [alias, source] of Object.entries(sources)) {
                const srcPath = path.resolve(process.cwd(), source).replace(/\\/g, '/');
                // Biểu thức chính quy để tìm các đường dẫn sau từ khóa import hoặc require
                const regex = new RegExp(`((import||export||require)\\s*(?:.*?from\\s*)?['"\`])${alias}([^'"\`]+['"\`])`, 'g');

                // Thay thế các ký tự đặc biệt bằng đường dẫn srcPath
                src = src.replace(regex, (match, p1, p2, p3) => {
                    return `${p1}${srcPath}${p3}`;
                });
            }
            return {
                code: src,
                map: null,
            };
        },
    };
};