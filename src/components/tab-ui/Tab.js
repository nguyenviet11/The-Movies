import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Tab = ({children }) => <div>{children || <Skeleton />}</div>;

export default Tab;
