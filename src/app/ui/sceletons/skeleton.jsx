import './skeleton.scss'
import { Skeleton } from '@mui/material';
export default async function SkeletonPost() {
    return (
        <div className="wrapper_skeleton">
            <Skeleton variant="h1" sx={{ fontSize: '25px', margin: '15px 0px' ,  zIndex: '0' }} />
            <div className="grid_skeleton">
                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>
                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>
                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>

                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>
                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>
                <Skeleton variant="rectangular" width={440} height={240} sx={{marginTop: '20px' , borderRadius: '10px', zIndex: '0'}}/>
            </div>
        </div>
    );
}