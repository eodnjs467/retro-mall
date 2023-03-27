import React from "react";
import {Input} from "antd";

const SearchBar = () => {

    const onSearch = (value) => console.log(value);
    return (
        <Input.Search style={{width: 500, marginBottom: 30}} placeholder="검색어 입력해라" onSearch={onSearch} enterButton />
    )
}

export default SearchBar;
