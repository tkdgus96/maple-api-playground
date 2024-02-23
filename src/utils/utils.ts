export const toKoreanNumber = (str: string) => {
  const koreanUnits = ["조", "억", "만", ""];
  let input = str;
  let answer = "";

  while (true) {
    if (input.length < 5) {
      answer = input + koreanUnits.pop() + " " + answer;
      break;
    }
    let substring = input.substring(input.length - 4, input.length);
    input = input.substring(0, input.length - 4);
    answer = substring + koreanUnits.pop() + " " + answer;
  }
  return answer;
};
