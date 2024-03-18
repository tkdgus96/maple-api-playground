import characterApi from "@apis/character";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85dvh;
  min-width: 90dvw;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Search = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleOk();
  };

  const handleOk = async () => {
    try {
      const res = await characterApi.getOcid(name);
      navigate({
        pathname: "character",
        search: createSearchParams({
          ocid: res.ocid,
        }).toString(),
      });
    } catch (error) {
      alert("존재하지 않는 캐릭터명입니다.");
    }
  };

  return (
    <SearchPageWrapper>
      <h2>메이플스토리 Open API 실험실</h2>
      <h3>캐릭터명을 입력하세요</h3>
      <Row>
        <Input
          value={name}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Button onClick={() => handleOk()}>입력</Button>
      </Row>
    </SearchPageWrapper>
  );
};

export default Search;
