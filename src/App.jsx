import { Button, Typography } from 'antd';

const { Paragraph, Text } = Typography;

function App() {
  return (
    <div className="App">
      <Button type="primary" shape="round" size="large">
        Primary Button
      </Button>

      <Paragraph>
        {/* environment variables */}
        <Text code>{JSON.stringify(import.meta.env)}</Text>
      </Paragraph>
    </div>
  );
}

export default App;
