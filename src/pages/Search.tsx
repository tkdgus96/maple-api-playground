import characterApi from "@apis/character";
import styled from "@emotion/styled";
import { Button, Checkbox, DatePicker, Input } from "antd";
import dayjs from "dayjs";
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
  const [date, setDate] = useState(dayjs(new Date()));
  const [live, setLive] = useState(true);
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
        search: createSearchParams(
          live
            ? { ocid: res.ocid }
            : {
                ocid: res.ocid,
                date: date.toISOString(),
              }
        ).toString(),
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
          style={{ width: "10rem" }}
        />
        <Button onClick={() => handleOk()}>입력</Button>
        <Checkbox checked={live} onChange={() => setLive(!live)} />
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          Live
        </span>
        <DatePicker
          placeholder="날짜"
          value={date}
          disabled={live}
          onChange={(v) => {
            if (v) setDate(v);
          }}
          style={{
            paddingLeft: ".5rem",
            paddingRight: ".5rem",
            width: "6.5rem",
          }}
          format={"YY/MM/DD"}
        />
      </Row>
    </SearchPageWrapper>
  );
};

export default Search;
