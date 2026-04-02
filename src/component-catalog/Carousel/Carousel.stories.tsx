import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export const Default = () => (
  <Carousel autoPlay>
    <div style={{ height: 200, width: '100%', background: 'red' }} />
    <div style={{ height: 200, width: '100%', background: 'blue' }} />
    <div style={{ height: 200, width: '100%', background: 'green' }} />
  </Carousel>
);
