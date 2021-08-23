import { ProductType } from '@features/providers/product/model';
import axios from 'axios';
import { useCallback } from 'react';

const BASE_URL = 'https://fakestoreapi.com';

export default function useApi() {
  const loadProduct = useCallback(
    async (productId: string): Promise<ProductType> => {
      const response = await axios.get(`${BASE_URL}/products/${productId}`);
      return response.data;
    },
    []
  );

  const loadProducts = useCallback(async (): Promise<ProductType[]> => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  }, []);

  const loadCategories = useCallback(async (): Promise<string[]> => {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  }, []);

  return {
    loadProduct,
    loadProducts,
    loadCategories,
  };
}
