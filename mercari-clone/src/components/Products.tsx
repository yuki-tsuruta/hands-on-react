import { ProductsMaster } from '../types';

type Props = {
  productsMaster: ProductsMaster;
};

export const Products = ({ productsMaster }: Props) => {
  return (
    <section className="space-y-6 border-t border-secondary-border py-6">
      {productsMaster.keyword}
      <ul className="grid grid-cols-[repeat(3,1fr)] gap-1 sm:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)] lg:gap-6">
        {productsMaster.products.map((product) => (
          <li
            key={product.code}
            className="hidden lg:[&:nth-child(-n+10)]:block [&:nth-child(-n+6)]:block sm:[&:nth-child(-n+8)]:block"
          >
            <img src={product.imageUrl} />
            {product.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
