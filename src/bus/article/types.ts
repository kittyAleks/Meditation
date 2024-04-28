type Article = {
  id: number;
  description: string;
  title: string;
};

type ArticleResponse = {
  data: Article[];
};
type Audio = {
  id: number;
  name: string;
  title: string;
  icon: string;
  media: {
    url: string;
    mimetype: string;
    preview_img: string;
    duration: number;
  };
  paid: boolean;
};
type AudioResponse = {
  data: Audio[];
};
export type ApiResponse = {
  articles: ArticleResponse;
  audio: AudioResponse;
};
