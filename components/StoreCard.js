import React, {useCallback} from "react";
import {Card} from "antd";
import {useRouter} from "next/router";

const StoreCard = ({ id, title, text}) => {
    const router = useRouter();
    const onClickDetail = useCallback(() => {
        console.log('Detail Store 이동중 .. ');
        router.push(`/stores/detail/${id}`);
    }, []);
    return(
        <Card
            onClick={onClickDetail}
            hoverable
            style={{
                width: 300,
                marginBottom: 30,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title={title} description={text} />
        </Card>
    )
}

export default StoreCard;
