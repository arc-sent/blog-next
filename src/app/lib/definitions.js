import { z } from 'zod';
import { GetUser } from '../actions/requests';

async function createSchema() {
    const user = await GetUser();

    return z.object({
        name: z
            .string()
            .min(3, { message: 'Ваше имя слишком короткое! Оно должно содержать минимум 3 символа.' })
            .trim()
            .refine((name) => {
                return !user.some((obj) => obj.name === name);
            }, {
                message: 'Такое имя уже существует! Выберите другое.',
            }),
        email: z
            .string()
            .email({ message: 'Пожалуйста, введите правильный адрес электронной почты.' })
            .trim()
            .refine((email) => {
                return !user.some((obj) => obj.email === email);
            }, {
                message: 'Такая почта уже зарегистрирована!',
            }),
        password: z
            .string()
            .min(5, { message: 'В пароле должно быть минимум 5 символов.' })
            .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну букву.' })
            .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру.' })
            .transform((val) => val.trim()),
    });
}

export const SignupFormSchema = createSchema();

export function СheckingPost() {
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    const checkFileType = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        return allowedTypes.includes(file.type);
    };
    return z.object({
        category: z
            .string()
            .trim(),
        subcategory: z
            .string()
            .trim(),
        title: z
            .string()
            .min(5, { message: 'Недостаточно символов для названния! Должно быть минимум 5' })
            .trim(),
        text: z
            .string()
            .min(15, { message: 'Слишком короткая статья! Должно быть минимум 15 символов.' })
            .trim(),
        image: z
            .custom((file) => {
                if (file.size > MAX_FILE_SIZE) {
                    return false;
                }
                if (!checkFileType(file)) {
                    return false;
                }
                return true;
            }, {
                message: 'Файл должен быть объектом File с допустимым форматом (.jpeg или .png) и не более 5MB.',
            }),
    })

}

export async function EntranceFormSchema() {
    const user = await GetUser();

    return z.object({
        email: z
            .string()
            .email({ message: 'Пожалуйста, введите правильный адрес электронной почты.' })
            .trim()
            .refine((email) => {
                return user.some((obj) => obj.email === email);
            }, {
                message: 'Такая почта не зарегистрирована!',
            }),
        password: z
            .string()
            .min(5, { message: 'В пароле должно быть минимум 5 символов.' })
            .regex(/[a-zA-Z]/, { message: 'Пароль должен содержать хотя бы одну букву.' })
            .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру.' })
            .transform((val) => val.trim()),
    }).refine(async (data) => {
        const email = data.email;
        const user2 = user.find((obj) => obj.email === email);
        return user2 && user2.password === data.password;
    }, {
        message: 'Неверный пароль!',
    });
}

