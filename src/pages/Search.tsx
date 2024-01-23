import characterApi from "@apis/character";
import styled from "@emotion/styled";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90dvh;
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

  const handleChange = (input: string) => {
    setName(input);
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
      <h1>메이플스토리 Open API 실험실</h1>
      <h2>캐릭터명을 입력하세요</h2>
      <Row>
        <input value={name} onChange={(e) => handleChange(e.target.value)} />
        <button type="button" onClick={() => handleOk()}>
          입력
        </button>
      </Row>
    </SearchPageWrapper>
  );
};

export default Search;
