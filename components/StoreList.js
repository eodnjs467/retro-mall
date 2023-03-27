import React, {useCallback} from "react";
import {Card, Col, Row} from "antd";
import StoreCard from "./StoreCard";

const StoreList = () => {

    const dummyStoreList = [
        {id: 1, title: '일로오슈-퍼마켙', text: '레트로컨셉 술집'},
        {id: 2, title: '더 레트로', text: '추억의 과자 & 최신 핫템 판매'},
        {id: 3, title: '일로오슈-퍼마켙', text: '레트로컨셉 술집'},
        {id: 4, title: '더 레트로', text: '추억의 과자 & 최신 핫템 판매'},
        {id: 5, title: '일로오슈-퍼마켙', text: '레트로컨셉 술집'},
        {id: 6, title: '더 레트로', text: '추억의 과자 & 최신 핫템 판매'},
    ];

    // const renderStore = useCallback(() => {
    //     return (
    //         dummyStoreList.map((store) => <Col key={store.id} span={6}><StoreCard title={store.title} text={store.text} /></Col> )
    //     )
    // }, [dummyStoreList]);

    return (
        <div className="site-card-wrapper">
            <Row gutter={18}>
                {dummyStoreList.map((store) => (
                    <Col key={store.id} span={6}>
                        <StoreCard id={store.id} title={store.title} text={store.text} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default StoreList;
