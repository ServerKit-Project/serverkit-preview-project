const imageModules = import.meta.glob("./images/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });
const videoModules = import.meta.glob("./videos/*.{mp4,webm}", { eager: true });

const allModules = {
    ...imageModules,
    ...videoModules,
};

export function getMediaSrcFromManager(filename: string): string | null {
    const imagePath = `./images/${filename}`;
    const videoPath = `./videos/${filename}`;

    if (allModules[imagePath]) {
        return (allModules[imagePath] as any).default;
    } else if (allModules[videoPath]) {
        return (allModules[videoPath] as any).default;
    }

    return null;
}
