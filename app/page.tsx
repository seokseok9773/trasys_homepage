'use client';

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh; /* 화면 전체 높이 */
  background-color: white;
`;

export default function Home() {
  return (
    <Container>
      <Link
        href="http://www.trasys.net/aibus"
      >
        <Image
          src="/image/poster.png"
          alt="경로를 찾을 수가 없습니다."
          width={600}
          height={600}
        />
      </Link>
    </Container>
  );
}
