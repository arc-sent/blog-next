// app/api/upload/route.js
import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: path.join(process.cwd(), 'public/image'), // Путь для сохранения загруженных файлов
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`; // Создаем уникальное имя файла
        cb(null, filename);
    },
});

const upload = multer({ storage });

export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const filename = `${Date.now()}${path.extname(file.name)}`;
    const uploadPath = path.join(process.cwd(), 'public/image', filename); // Сохраняем в public/image

    // Чтение файла в буфер
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Убедитесь, что папка существует
    const imageDir = path.join(process.cwd(), 'public/image');
    if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
    }

    // Запись файла на диск
    fs.writeFileSync(uploadPath, buffer);

    return NextResponse.json({ fileUrl: `/image/${filename}` });
}
