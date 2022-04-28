import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  background: #ffc400;
  border: 1px solid #ffffff;
  border-radius: 100px;
  color: #38383d;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  padding: 1px 6px;
`;

const NewTag = () => <Tag> New </Tag>;

export default NewTag;
