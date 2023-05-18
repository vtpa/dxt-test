import React from 'react';
import styles from './styles.module.css'
import { Badge, Divider, Dropdown, Modal, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { DeleteOutlined, SendOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart, delProduct, selectCartLength, selectCartProducts } from '../../features/cart/cartSlice';
import { api } from '../../services/api';

function AppHeader() {
  const cartCount = useAppSelector(selectCartLength);
  const productsOnCart = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('Carregando...');

  async function handleSendOrder() {
    setIsModalOpen(true);

    const products = productsOnCart.map(item => item.id)
    const order = await api.post('/orders', { products })

    setModalContent(`Pedido criado com ID ${order.data.order.id}!`);

    dispatch(clearCart([]));
  }

  function onOkModal() {
    setModalContent('Carregando...');
    setIsModalOpen(false);
  }

  const items = productsOnCart.length > 0
    ? productsOnCart.map(product => ({
      key: product.id,
      label: (
        <div className={styles.cartRow}>
          <Typography className={styles.productTitle}>{product.title}</Typography>
          <DeleteOutlined onClick={() => dispatch(delProduct(product.id))} />
        </div>
      )
    })).concat({
      key: 'close',
      label: (
        <>
          <Divider style={{ margin: 6 }} />
          <div className={styles.cartRow} onClick={() => handleSendOrder()}>
            <Typography className={styles.productTitle}>
              Enviar Pedido
            </Typography>
            <SendOutlined />
          </div>
        </>
      )
    })
    : [{
      key: 'empty',
      label: (
        <Typography>
          Carrinho vazio!
        </Typography>
      )
    }]
  return (
    <Header className={styles.head}>
      <div className={styles.container}>
        <Typography className={styles.title}>Minha Loja</Typography>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Badge count={cartCount}>
            <ShoppingCartOutlined className={styles.cardIcon} />
          </Badge>
        </Dropdown>
      </div>
      <Modal
        cancelButtonProps={{ hidden: true }}
        title="Pedido"
        open={isModalOpen}
        onOk={onOkModal}
      >
        <p>{modalContent}</p>
      </Modal>
    </Header>
  );
}

export default AppHeader;