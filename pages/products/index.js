import SearchBar from "../../components/SearchBar";
import EnrollButton from "../../components/button/EnrollButton";
import CustomList from "../../components/List";
import React, {useCallback} from "react";
import {useRouter} from "next/router";

const Products = () => {
    const router = useRouter();
    const onClickEnroll = useCallback(() => {
        router.push("/products/enroll");
    }, []);
    return(
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <SearchBar />
                <EnrollButton style={{ marginLeft: 10 }} onClick={onClickEnroll} />
            </div>
            <div>상품 페이지</div>
            <CustomList />
        </div>
    )
}

export default Products;
