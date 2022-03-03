import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <dev>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </dev>
  );
};
