import React from "react";
import ProductEnrollForm from "../../components/ProductEnrollForm";
import UploadPhotos from "../../components/UploadPhotos";

const Enroll = () => {
    return(
        <>
            <div> 상품 등록 페이지</div>
            <UploadPhotos />
            <ProductEnrollForm />
        </>
    )
}

export default Enroll;
