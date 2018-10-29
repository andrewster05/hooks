import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function ReturnTwitter(id, currentId) {
  return (
    <div
      hidden={currentId !== id}
      key={id}>
      <TwitterTweetEmbed
        tweetId={id}
      />
    </div>
  );
}

function Example() {
  const [count, setCount] = useState(0);
  const ids = ['1055900106145189889', '1056939731362054144', '1055131465682321409', '1053011957291175936', '1050816767348502533'];
  const tweets = ids.map((item) => ReturnTwitter(item, ids[count]));
  return (
    <div style={{ display: 'flex', width: '100%' }}>
       <div className="flex-1">
        <button
          className="sideButton"
          onClick={() => setCount(count === 0 ? ids.length - 1 : count - 1)}>
          Prev One...
      </button>
      </div>
      <div className="flex-1">
        {tweets}
      </div>
      <div className="flex-1">
        <button
          className="sideButton"
          onClick={() => setCount(count >= ids.length - 1 ? 0 : count + 1)}>
          Next One...
      </button>
      </div>
    </div>
  );
}

export default Example;