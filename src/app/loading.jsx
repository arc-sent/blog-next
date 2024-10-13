import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Loading() {
    return (
        <Spin
            indicator={
                <LoadingOutlined
                    style={{
                        fontSize: 56,
                    }}
                    spin
                />
            }
            fullscreen
            style = {{color: "rgb(32, 32, 34)"}}
        />
    )
}