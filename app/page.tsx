"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh; /* 화면 전체 높이 */
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 10px;
  box-shadow: 0px 1px 2px black;
`;

const Scroll = styled.div`
  width: 700px;
  height: 805px;
  overflow-y: auto;
  position: relative;
`;

const Btn = styled.button`
  width: 700px;
  position: relative;
  background-color: rgba(230, 230, 230, 1);
  height: 40px;

  &:hover {
    background-color: rgba(240, 240, 240, 1);
  }
`;

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onClose = (value: boolean) => {
    setIsVisible(false);
  };

  return (
    <Container>
      <Link href="http://www.trasys.net/aibus">
        <Image
          src="/image/poster.png"
          alt="경로를 찾을 수가 없습니다."
          width={600}
          height={600}
        />
      </Link>
      {isVisible && (
        <Wrapper>
          <Scroll>
            <Image
              src="/image/RecruitIMG.png"
              alt="이미지 경로를 찾을 수가 없습니다."
              width={700}
              height={700}
            />
          </Scroll>
          <Btn type="button" onClick={() => setIsVisible(false)}>
            닫기
          </Btn>
        </Wrapper>
      )}
    </Container>
  );
}
