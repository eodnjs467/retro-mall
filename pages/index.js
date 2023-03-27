import AppLayout from "../components/AppLayout";
import Link from "next/link";
import {useMemo} from "react";
import LoginButton from "../components/button/LoginButton";

const Home = () => {
    const styled = useMemo(() => ({ marginLeft: 10, marginRight: 10, marginTop: 10, width: 150, height: 30 }), []);
    return (
        <>
            <div style={{display: "flex", justifyContent: 'center', height: 400, alignItems: 'center'}}>
                <Link href="/stores" style={{height: "100%" }}><div style={{ display: 'inline-block' ,background: "lightcoral", width: 400, height: "100%" }}>우리동네 매장찾기</div></Link>
                <Link href="/products" style={{height: "100%" }}><div style={{ display: 'inline-block', background: "lightblue", width: 400,  height: "100%", marginLeft: 30 }}>상품 보러가기.</div></Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <LoginButton name="카카오 로그인" className="kakao" style={styled} />
                <LoginButton name="네이버 로그인" className="naver" style={styled} />
                <LoginButton name="페이스북 로그인" className="facebook" style={styled} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <LoginButton name="이메일 로그인" className="email" style={styled}/>
            </div>
        </>
    );
};

export default Home;
