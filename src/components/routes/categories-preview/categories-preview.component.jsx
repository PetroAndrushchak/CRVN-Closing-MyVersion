import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectIsLoading } from '../../../store/categories/categories.selector';
import CategoryPreview from '../../category-preview/category-preview.component';

import Spinner from '../../spinner/spinner.component';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      <div>Categories Preview page</div>

      {isLoading ? <Spinner /> :

        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }

    </Fragment>
  );
};

export default CategoriesPreview;
