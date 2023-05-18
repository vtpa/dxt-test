import React from 'react';
import styles from './styles.module.css'
import { Button, Card, Layout, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { formatMoneytoReal } from '../../utils/formatMoneytoReal';
import { api } from '../../services/api';
import { IProduct } from '../../domain/entities/products';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/cart/cartSlice';

function AppContent() {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState<IProduct[]>([])

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setLoading(true);

    (async () => {
      const products = await api.get("/products")
      setProducts(products.data.products)
      setLoading(false)
    })();
  }, []);

  return (
    <div className={styles.box}>
      <Layout className={styles.layout}>
        <Content className={styles.container}>
          {loading ?
            <Spin />
            :
            products.map(product => (
              <Card
                key={product.id}
                title={product.title}
                extra={
                  <Button
                    onClick={() => dispatch(addProduct(product))}
                  >
                    Comprar
                  </Button>}
              >
                <p>{product.description}</p>
                <span>Valor: {formatMoneytoReal(product.price)}</span>
              </Card>
            ))
          }
        </Content>
      </Layout>
    </div>
  )
}

export default AppContent;