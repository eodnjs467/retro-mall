import AppLayout from "../components/AppLayout";
import Link from "next/link";

const Home = () => {
    return (
        <>
                <div style={{display: "flex", justifyContent: 'center', height: 400, alignItems: 'center'}}>
                    <Link href="/stores" style={{height: "100%" }}><div style={{ display: 'inline-block' ,background: "lightcoral", width: 400, height: "100%" }}>우리동네 매장찾기</div></Link>
                    <Link href="/products" style={{height: "100%" }}><div style={{ display: 'inline-block', background: "lightblue", width: 400,  height: "100%", marginLeft: 30 }}>상품 보러가기.</div></Link>
                </div>

        </>
    );
};

export default Home;
