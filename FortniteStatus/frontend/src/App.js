import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3000/status');
        setStatus(response.data);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
    const intervalId = setInterval(fetchStatus, 60000); // 1分ごとにデータを更新

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>フォートナイトのステータス</h1>
      {status ? (
        <div>
          <h2>サーバー状態: {status.serverStatus}</h2>
          <p>プレイヤー数: {status.playerCount}</p>
        </div>
      ) : (
        <p>ステータスを取得中...</p>
      )}
    </div>
  );
}

export default App;
