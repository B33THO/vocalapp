// src/assets/BodyParts/bodyParts.js
// Creates a list of body part images from this folder with a readable name and image URL
// Works with Vite: uses import.meta.glob to discover image files at build time

const modules = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const bodyParts = Object.entries(modules).map(([path, url]) => {
    const filename = path.split('/').pop().replace(/\.[^/.]+$/, '');
    const name = filename
        .replace(/[_-]+/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
    return { name, image: url };
});

export default bodyParts;