import React from 'react';
import styles from './styles.module.css'
import { Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { ToolOutlined } from '@ant-design/icons';

function AppFooter() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <ToolOutlined className={styles.icon} />
        <Typography className={styles.title}>Feito por Vinícius Passos</Typography>
      </div>
    </Footer>
  );
}

export default AppFooter;