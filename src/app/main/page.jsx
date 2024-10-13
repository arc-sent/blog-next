import { Suspense } from 'react';
import MainPageComponent from '../ui/main_page/main_page';
import SkeletonPost from '../ui/sceletons/skeleton';

export default async function MainPage({ searchParams }) {

    return (
        <Suspense fallback={<SkeletonPost />}>
            <MainPageComponent searchParams={searchParams} />
        </Suspense>
    );
}
