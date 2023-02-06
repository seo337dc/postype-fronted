export type TPhoto = {
  id: string;
  created_at: string; //'2016-05-03T11:00:28-04:00';
  updated_at: string; //'2016-07-10T11:00:01-05:00';
  width: number; //5245;
  height: number; //3497;
  color: string; //'#60544D';
  blur_hash: string;
  description: string;
  user: {
    id: string; //
    username: string;
    name: string;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };

    links: {
      html: string;
    };
  };
  urls: {
    raw: string; //'https://images.unsplash.com/face-springmorning.jpg';
    full: string; //'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg';
    regular: string; //'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max';
    small: string; //'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max';
    thumb: string; //'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max';
  };
  links: {
    self: string; //'https://api.unsplash.com/photos/LBI7cgq3pbM';
    html: string; //'https://unsplash.com/photos/LBI7cgq3pbM';
  };
};

export type TSearchPhoto = {
  total: number;
  total_pages: number;
  results: TPhoto[];
};

export type TPhotoDetail = {
  id: string; // 'Dwu85P9SOIk';
  created_at: string; //  '2016-05-03T11:00:28-04:00';
  updated_at: string; // '2016-07-10T11:00:01-05:00';
  width: number; //2448;
  height: number; // 3264;
  color: string; // '#6E633A';
  blur_hash: string; // 'LFC$yHwc8^$yIAS$%M%00KxukYIp';
  downloads: number; //1345;
  likes: number; //24;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string; // 'A man drinking a coffee.';
  exif: TExif;
  location: TLocation;
  tags: TTag[];
  current_user_collections: TCurrentUserCollections[];
  urls: TUrl;
  links: TLink;
  user: TUser;
  views: number;
  related_collections: TRelatedCollections;
};

type TTag = {
  title: string; // 'drinking'
};

type TExif = {
  make: string; //  'Canon';
  model: string; // 'Canon EOS 40D';
  name: string; // 'Canon, EOS 40D';
  exposure_time: string; // '0.011111111111111112';
  aperture: string; // '4.970854';
  focal_length: string; // '37';
  iso: number; // 100;
};

type TLocation = {
  city: string; // 'Montreal';
  country: string; // 'Canada';
  position: TPosition;
};

type TPosition = {
  latitude: number; // 45.473298;
  longitude: number; // -73.638488;
};

type TCurrentUserCollections = {
  id: number; // 206;
  title: string; //'Makers: Cat and Ben';
  published_at: string; //'2016-01-12T18:16:09-05:00';
  last_collected_at: string; //'2016-06-02T13:10:03-04:00';
  updated_at: string; //'2016-07-10T11:00:01-05:00';
  // cover_photo: null;
  // user: null;
};

type TUrl = {
  raw: string; //'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d';
  full: string; //'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg';
  regular: string; //'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max';
  small: string; //'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max';
  thumb: string; //'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max';
};

type TLink = {
  self: string; //'https://api.unsplash.com/photos/Dwu85P9SOIk';
  html: string; //'https://unsplash.com/photos/Dwu85P9SOIk';
  download: string; //'https://unsplash.com/photos/Dwu85P9SOIk/download';
  download_location: string; //'https://api.unsplash.com/photos/Dwu85P9SOIk/download';
};

type TUser = {
  id: string; //'QPxL2MGqfrw';
  updated_at: string; //'2016-07-10T11:00:01-05:00';
  username: string; // 'exampleuser';
  name: string; //'Joe Example';
  portfolio_url: string; //'https://example.com/';
  profile_image: TProfileImg;
  bio: string; //'Just an everyday Joe';
  location: string; //'Montreal';
  total_likes: number; // 5;
  total_photos: number; //10;
  total_collections: number; //13;
  links: TUserLink;
  accepted_tos: boolean;
};

type TUserLink = {
  self: string; //'https://api.unsplash.com/users/exampleuser';
  html: string; //'https://unsplash.com/exampleuser';
  photos: string; //'https://api.unsplash.com/users/exampleuser/photos';
  likes: string; //'https://api.unsplash.com/users/exampleuser/likes';
  portfolio: string; // 'https://api.unsplash.com/users/exampleuser/portfolio';
};

type TProfileImg = {
  large: string; // 'https://images.unsplash.com/profile-fb-1599490977-e82172320972.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128';
  medium: string; // 'https://images.unsplash.com/profile-fb-1599490977-e82172320972.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64';
  small: string; // 'https://images.unsplash.com/profile-';
};

type TRelatedCollections = {
  results: TResult[];
};

type TResult = {
  id: string;
  preview_photos: TPreviewPhoto[];
};

type TPreviewPhoto = {
  id: string;
  urls: TUrl;
};
