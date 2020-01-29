import React, { useEffect, useState } from 'react';
import { shape, string, bool, func } from 'prop-types';
import { List, Avatar, Skeleton, Button } from 'antd';

import Api from '../../api';
import { Content } from '../../pages/styles';

const api = Api.Create()

const CustomerSidebar = ({ onClick }) => {
  const [data, setData] = useState([]);
  const [raw, setRaw] = useState({});

  const getCustomers = async () => {
    const { data } = await api.getCustomers();
    setRaw(data);
    console.log(data)
    const toUse = Object.keys(data).map(id => data[id])

    setData(toUse);
  }

  useEffect(() => {
    getCustomers()
  }, []);


  const handleLoadMore = () => {
    getCustomers()
  };

  const handleClick = (uuid) => {
    const cust = raw[uuid];

    onClick(cust);
  };

  return (
    <Content>
      <h2>Customers</h2>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        loadMore={handleLoadMore}
        dataSource={data}
        renderItem={({ f_name, l_name, uuid, expiry_date }) => (
          <List.Item key={uuid}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <a href=""
                  onClick={(e) => { e.preventDefault(); handleClick(uuid); }}>
                    {f_name} {l_name}
                </a>
              }
              description={expiry_date}
            />
            <div>Content</div>
          </List.Item>
        )}
      />
    </Content>
  );
};

CustomerSidebar.propTypes = {
  onClick: func.isRequired,
};

export default CustomerSidebar;
