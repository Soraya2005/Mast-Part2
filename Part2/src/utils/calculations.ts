import { MenuItem, PriceStatistics } from '../types/types';

export const calculateAveragePrices = (items: MenuItem[]): PriceStatistics => {
  const starters = items.filter(item => item.course === 'starter');
  const mains = items.filter(item => item.course === 'main');
  const desserts = items.filter(item => item.course === 'dessert');

  return {
    starter: starters.length ? starters.reduce((sum, item) => sum + item.price, 0) / starters.length : 0,
    main: mains.length ? mains.reduce((sum, item) => sum + item.price, 0) / mains.length : 0,
    dessert: desserts.length ? desserts.reduce((sum, item) => sum + item.price, 0) / desserts.length : 0,
    overall: items.length ? items.reduce((sum, item) => sum + item.price, 0) / items.length : 0
  };
};