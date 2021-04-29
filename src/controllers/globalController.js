const homeController = (req, res) => {
  //디비에서 메모를 다져온다
  res.render("screens/home");
};
const detailController = (req, res) => {
  //사용자가 선택한 메모의  id값을 가져온 뒤,
  //디비에서 해당 아이디와 일치하는 데이터를 조회한다

  res.render("screens/detail");
};
const createController = (req, res) => {
  res.render("screens/create");
};

const globalControllers = {
  homeController,
  detailController,
  createController,
};

export default globalControllers;
