import React from 'react';

const SocialShare = ({ url, title }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, 'newwindow', 'width=600,height=450');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, 'newwindow', 'width=600,height=450');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, 'newwindow', 'width=600,height=450');
  };

  return (
    <div className="social-share">
      <button onClick={shareOnFacebook}>Share on Facebook</button>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnLinkedIn}>Share on LinkedIn</button>
    </div>
  );
};

export default SocialShare;