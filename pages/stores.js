import React, {useCallback} from "react";
import AppLayout from "../components/AppLayout";
import {Card, Col, Row} from "antd";
import StoreList from "../components/StoreList";
import SearchBar from "../components/SearchBar";

const Stores = () => {

    const onClickDetail = useCallback(() => {
        console.log('Click Store');
    }, [])

    return(
        <>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
            <SearchBar />
            </div>
            <StoreList />
        </>
    )
}

export default Stores;
