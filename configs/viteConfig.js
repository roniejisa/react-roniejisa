import path from "path";
/**
 *
 * @param {*} sources -- Dont use {@,$} for alias
 * @returns
 */
export const alias = (
	sources = {
		"~~": "src",
		"##": "utils",
		"--": "src/components",
	}
) => {
	return {
		name: "alias",
		transform: (src) => {
			// Lấy đường dẫn tuyệt đối tới thư mục src và chuẩn hóa nó
			for (const [alias, source] of Object.entries(sources)) {
				const srcPath = path
					// eslint-disable-next-line no-undef
					.resolve(process.cwd(), source)
					.replace(/\\/g, "/");

				// Thay thế character bằng đường dẫn tuyệt đối chuẩn hóa
				src = src.replace(new RegExp(alias, "g"), srcPath);
			}
			return {
				code: src,
				map: null,
			};
		},
	};
};
