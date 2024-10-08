/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Включение режима строгой проверки React
    images: {
        domains: ['example.com', 'another-domain.com'], // Разрешённые домены для загрузки изображений
    },
    // Вы можете добавить другие настройки здесь...
};

export default nextConfig;
