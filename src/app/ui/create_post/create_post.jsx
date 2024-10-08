'use client';
import './create_post.scss';
import { useState } from "react";
import { useFormState, useFormStatus } from 'react-dom'
import { CreatePost } from '@/app/actions/auth';
export default function CreateForm() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [image, setImage] = useState(null);
    const [subCategories, setSubCategories] = useState(["Rolls-Royce", "Bentley", "Ferrari", "Lamborghini", "Porsche", "Tesla"]);
    const [state, action] = useFormState(CreatePost, undefined);

    function handleFileChange(e) {
        const file = e.target.files[0];
        const render = new FileReader();
        render.readAsDataURL(file);

        render.onload = () => {
            setImage(render.result);
        }

        render.onerror = () => {
            console.log(render.error);
        }
    };

    function handleCategoryChange(e) {
        const category = e.target.value;
        setSelectedCategory(category);

        switch (category) {
            case 'Автомобили':
                setSubCategories(["Rolls-Royce", "Bentley", "Ferrari", "Lamborghini", "Porsche", "Tesla"]);
                break;
            case 'Игры':
                setSubCategories(['Dota 2', 'Counter-Strike: Global Offensive', 'Cyberpunk 2077', "The Witcher 3: Wild Hunt", "Stardew Valley", "Minecraft"]);
                break;
            case 'Еда':
                setSubCategories(["Italian", "Japanese", "Indian", "Chinese", "American"]);
                break;
            default:
                setSubCategories([]);
                break;
        }
    }

    return (
        <div className="wrapper-create-form">
            <h1>Создание статьи</h1>
            <form action={action}>
                <div>
                    <label htmlFor="category">Категория:</label>
                    <select value={selectedCategory} onChange={handleCategoryChange} name='category'>
                        <option value="Автомобили">Автомобили</option>
                        <option value="Игры">Игры</option>
                        <option value="Еда">Еда</option>
                    </select>
                </div>

                {state?.errors?.category && <p>{state.errors.category}</p>}

                <div>
                    <label htmlFor="subcategory">Темы:</label>
                    <select name='subcategory'>
                        {subCategories.map((sub, index) => (
                            <option key={index} value={sub}>{sub}</option>
                        ))}
                    </select>
                </div>

                {state?.errors?.subcategory && <p>{state.errors.subcategory}</p>}

                <div>
                    <label htmlFor="title">Заголовок статьи</label>
                    <input placeholder='Заголовок' name='title' />
                </div>

                {state?.errors?.title && <p>{state.errors.title}</p>}


                <div>
                    <label htmlFor="text">Текст статьи</label>
                    <textarea placeholder='Teкст' name='text' />
                </div>

                {state?.errors?.text && <p>{state.errors.text}</p>}

                <div>
                    <label htmlFor="image">Обложка</label>
                    <input type="file" name='image' accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                    <input defaultValue={image || ''} name='image2' />
                </div>

                {state?.errors?.image && <p>{state.errors.image}</p>}

                <button>Опубликовать статью</button>
            </form>
        </div>
    )
}

