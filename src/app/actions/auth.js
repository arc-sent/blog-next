'use server';
import { EntranceFormSchema, SignupFormSchema, СheckingPost } from "../lib/definitions";
import { createSession, getToken } from '@/app/lib/session';
import { randomBytes } from 'crypto';
import { redirect } from "next/navigation";
import { GetTopicCard, GetUser } from "./requests";

const generateRandomId = (length = 16) => {
    return randomBytes(length).toString('hex');
};

export async function signup(state, formData) {
    const FormSchema = await SignupFormSchema
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createRandomGradient() {
        const angle = Math.floor(Math.random() * 360);
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }


    const id = generateRandomId();
    const bg = createRandomGradient()
    const { name, email, password } = validatedFields.data;

    const UserInfo = {
        id: id,
        name: name,
        email: email,
        password: password,
        image: 'https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png',
        bg: bg,
        posts: [
            {
                id: "rr-1",
                title: "Ролс Ройс выпустил новую машину",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "https://i.pinimg.com/originals/ea/7e/79/ea7e796f7c3fcc33684d130cf7a607b6.jpg"
            },
            {
                id: "rr-2",
                title: "Ролс Ройс открывает эксклюзивный шоурум в Лондоне",
                text: "Ролс Ройс объявила об открытии своего нового эксклюзивного шоурума в сердце Лондона. Этот уникальный пространство было создано для предоставления клиентам индивидуального обслуживания и знакомства с последними моделями автомобилей марки. Средства и технологии, используемые в новых автомобилях, подчеркивают роскошь и инновации, характерные для Ролс Ройс.",
                image: "https://avatars.mds.yandex.net/i?id=659294e3d0ab1e325ff44ddf749b8039_l-4801058-images-thumbs&n=13"
            },
            {
                id: "rr-3",
                title: "Ролс Ройс выпустил ограниченную серию Cullinan",
                text: "Ролс Ройс представила ограниченную серию своего популярного внедорожника Cullinan. Каждый экземпляр получит уникальную отделку и множество персонализированных опций, чтобы соответствовать требованиям самых взыскательных клиентов. Эта модель сочетает в себе мощь, комфорт и уникальный стиль, который стал визитной карточкой марки.",
                image: "https://avatars.mds.yandex.net/get-vertis-journal/4465444/MANSORY-Rolls-Royce-Phantom-VIII-01.jpg_1666609503858/orig"
            }
        ]
    }

    try {
        const response = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UserInfo),
        });

        if (!response.ok) {
            throw new Error('Ошибка сервера');
        }

    } catch (e) {
        console.error('Ошибка:', e);
        return { error: 'Не удалось выполнить запрос' };
    }

    await createSession(UserInfo.id)
    redirect('/main');
}


export async function CreatePost(state, formData) {
    const id = generateRandomId();
    const AllCategoty = await GetTopicCard();
    const token = await getToken();
    const AllUser = await GetUser();
    const user = AllUser.find(user => user.id === token.userId);
    const FormSchema = await СheckingPost();
    const validatedFields = FormSchema.safeParse({
        category: formData.get('category'),
        subcategory: formData.get('subcategory'),
        title: formData.get('title'),
        text: formData.get('text'),
        image: formData.get('image'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { category, subcategory, title, text } = validatedFields.data;

    const imageFile = formData.get('image');

    let imageUrl = '';
    if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append('image', imageFile);

        const res = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: imageFormData,
        });

        if (res.ok) {
            const data = await res.json();
            imageUrl = data.fileUrl;
        } else {
            return { errors: { image: 'Ошибка загрузки изображения' } };
        }
    }


    const PostInfo = {
        id: id,
        title: title,
        text: text,
        image: imageUrl,
    };

    AllCategoty[category].forEach(category => {
        if (category.name === subcategory) {
            category.posts.push(PostInfo);
        }
    });

    user.posts.push(PostInfo);
    const userId = user.id;

    try {
        const res = await fetch(`http://localhost:4000/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        if (res.ok) {
            console.log('Success user')
        }
    } catch (e) {
        console.error('Error user:', e)
    }


    try {
        const res = await fetch("http://localhost:4000/categories", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(AllCategoty),
        })

        if (res.ok) {
            console.log('Success post')
        }
    } catch (e) {
        console.error('Error post:', e)
    }

    redirect('/profile');
}



export async function entrance(state, formData) {
    const FormSchema = await EntranceFormSchema();

    let validatedFields;
    try {
        validatedFields = await FormSchema.parseAsync({
            email: formData.get('email'),
            password: formData.get('password'),
        });
    } catch (error) {
        return {
            errors: error.errors
        }
    }
    console.log('после запроса')
    console.log(validatedFields)
    const { email } = validatedFields;
    console.log(email);

    const data = await GetUser();

    const user = data.find(item => item.email === email);
    console.log(user);
    if (!user) {
        return { error: 'Пользователь не найден' };
    }
    await createSession(user.id);
    redirect('/main');

}
