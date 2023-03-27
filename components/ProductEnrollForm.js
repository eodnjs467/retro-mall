import React, {useCallback, useState} from "react";
import {Button, Form, Input} from "antd";

const ProductEnrollForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [searchName, setSearchName] = useState('');

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }, [title]);

    const onchangeDescription = useCallback((e) => {
        setDescription(e.target.value);
        console.log(e.target.value);
    }, [description]);

    const onChangeCategory = useCallback((e) => {
        console.log(e.target.value);
    }, []);

    const onChangePrice = useCallback((e) => {
        setPrice(e.target.value);
        console.log(e.target.value);
    }, [price]);

    const onChangeSearchName = useCallback((e) => {
        setSearchName(e.target.value);
        console.log(e.target.value);
    }, [searchName]);

    const onClick = useCallback(() => {
        console.log('click Btn');
    }, []);

    return(
        <Form >
            {/*<Input addonBefore="상품명" value={title} name="title" onChange={onChangeTitle}/>*/}
            상품명
            <Input value={title} name="title" onChange={onChangeTitle} />
            카테고리
            <Input placeholder="카테고리 선택" value={null} name="category" onChange={onChangeCategory} />
            가격
            <Input value={price} name="price" onChange={onChangePrice} />
            관련 검색어
            <Input value={searchName} name="search" onChange={onChangeSearchName} />
            상품 설명
            <Input.TextArea value={description} onChange={onchangeDescription} autoSize={{minRows: 4, maxRows: 4}} />
            <Button onClick={onClick}> 등록하기 </Button>
        </Form>
    )
}

export default ProductEnrollForm;
