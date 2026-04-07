import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export const Default = {
  render: () => (
    <Carousel autoPlay>
      <div style={{ height: 200, width: '100%', background: 'red' }}></div>
      <div style={{ height: 200, width: '100%', background: 'blue' }}></div>
      <div style={{ height: 200, width: '100%', background: 'green' }}></div>
    </Carousel>
  ),
};