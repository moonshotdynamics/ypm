'use client';
import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';

const videos = [
  {
    artist: 'Nike',
    brand: 'Niklas Chistl',
    url: 'https://www.youtube.com/watch?v=Rm_aiDpkGmQ&ab_channel=Nike',
  },
  {
    artist: 'Nike',
    brand: 'Nike',
    url: 'https://www.youtube.com/watch?v=C9I-W1eTCbk&ab_channel=Nike',
  },
  {
    artist: 'UpZone Studios Showreel',
    brand: '',
    url: 'https://www.youtube.com/watch?v=MIr6QtAvzZM&ab_channel=Nike',
  },
  {
    brand: '',
    artist: 'Emirates Airlines',
    url: 'https://www.youtube.com/watch?v=MzYYUGnmqLA&ab_channel=Nike',
  },
  {
    brand: 'Adidas',
    artist: 'KCM',
    url: 'https://www.youtube.com/watch?v=Rwk5PdpTxSU&ab_channel=adidas',
  },
];

function VideoGallery() {
  return (
    <div className="bg-gray-300 pt-28 pb-20 lg:pb-96  flex flex-col">
      <h2 className="text-blueberry text-2xl font-bold md:text-5xl text-center ">
        Our Productions
      </h2>
      <VideoPlayer library={videos} />
    </div>
  );
}

export default VideoGallery;
