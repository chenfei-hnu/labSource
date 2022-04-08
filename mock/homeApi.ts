import mockJs from 'mockjs';

const getHomeData = {
  data: "mockData"
};

export default mockJs.mock('/api/get_homeData', 'get', getHomeData);
