// src/pages/Home.js
import React from 'react';
import SearchBarComponent from '../../components/SearchBar/SearchBar';
import LocalRecommendation from '../../components/LocalRecommendation/LocalRecommendation';
import FilterBar from '../../components/FilterBar/FilterBar';
import WaterfallLayout from '../../components/WaterfallLayout/WaterfallLayout';

const Home = () => {
  const data = [
    { id: 1, title: 'Title 1', imageUrl: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', username: 'User1', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 10 },
    { id: 2, title: 'Title 2', imageUrl: 'https://img0.baidu.com/it/u=3009050874,651816433&fm=253&fmt=auto&app=120&f=JPEG?w=569&h=392', username: 'User2', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 20 },
    {id: 3, title: 'Title 3', imageUrl: 'https://img0.baidu.com/it/u=3009050874,651816433&fm=253&fmt=auto&app=120&f=JPEG?w=569&h=392', username: 'User2', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 20 },
    {id: 3, title: 'Title 3', imageUrl: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', username: 'User2', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 20 },
    {id: 3, title: 'Title 3', imageUrl: 'https://img2.baidu.com/it/u=1414537138,3276026308&fm=253&fmt=auto&app=120&f=JPEG?w=607&h=405', username: 'User2', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 20 },
    {id: 3, title: 'Title 3', imageUrl: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', username: 'User2', avatar: 'https://img1.baidu.com/it/u=3443199485,2034708398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888', likes: 20 },
    // 其他示例数据...
];
  return (
    <div>
      <SearchBarComponent />
      {/* 这里添加其他内容 */}
      {/* <LocalRecommendation/> */}
      <FilterBar />
      <WaterfallLayout data={data} />
    </div>
  );
};

export default Home;
