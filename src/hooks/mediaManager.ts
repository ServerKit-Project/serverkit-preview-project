const imageModules = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
    eager: true,
});
const videoModules = import.meta.glob("../assets/videos/*.{mp4,webm}", {
    eager: true,
});
const allModules = {
    ...imageModules,
    ...videoModules,
};
  
export function getMediaSrcFromManager(filename: string): string | null {
    const imagePath = `../assets/images/${filename}`;
    const videoPath = `../assets/videos/${filename}`;

    if (allModules[imagePath]) {
        return (allModules[imagePath] as any).default;
    } else if (allModules[videoPath]) {
        return (allModules[videoPath] as any).default;
    }

    return null;
}