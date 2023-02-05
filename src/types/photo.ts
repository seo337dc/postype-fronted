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
