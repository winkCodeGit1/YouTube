import {
  Home,
  Compass,
  PlayCircle,
  Video,
  ThumbsUp,
  History,
  Clock,
  Download,
  Music,
  Gamepad,
  Newspaper,
  Trophy,
  Lightbulb,
} from "lucide-react";

export const mainMenus = [
  { name: "Home", icon: <Home size={20} />, path: "/" },
  { name: "Explore", icon: <Compass size={20} />, path: "/" },
  { name: "Shorts", icon: <PlayCircle size={20} />, path: "/" },
  { name: "Subscriptions", icon: <Video size={20} />, path: "/" },
];

export const libraryMenus = [
  { name: "Library", icon: <Video size={20} /> },
  { name: "History", icon: <History size={20} /> },
  { name: "Your Videos", icon: <Video size={20} /> },
  { name: "Watch Later", icon: <Clock size={20} /> },
  { name: "Liked Videos", icon: <ThumbsUp size={20} /> },
  { name: "Downloads", icon: <Download size={20} /> },
];

export const exploreMenus = [
  { name: "Music", icon: <Music size={20} /> },
  { name: "Gaming", icon: <Gamepad size={20} /> },
  { name: "News", icon: <Newspaper size={20} /> },
  { name: "Sports", icon: <Trophy size={20} /> },
  { name: "Learning", icon: <Lightbulb size={20} /> },
];

export const categoryFilters = {
  1: { key: "all", label: "All" },
  2: { key: "music", label: "Music" },
  3: { key: "live", label: "Live" },
  4: { key: "gaming", label: "Gaming" },
  5: { key: "mixes", label: "Mixes" },
  6: { key: "news", label: "News" },
  7: { key: "movies", label: "Movies" },
  8: { key: "learning", label: "Learning" },
  9: { key: "recentlyUploaded", label: "Recently Uploaded" },
  10: { key: "watched", label: "Watched" },
  11: { key: "newToYou", label: "New to you" },
  12: { key: "podcasts", label: "Podcasts" },
  13: { key: "trending", label: "Trending" },
  14: { key: "cricket", label: "Cricket" },
  15: { key: "comedy", label: "Comedy" },
  16: { key: "programming", label: "Programming" },
  17: { key: "trailers", label: "Trailers" },
  18: { key: "technology", label: "Technology" },
  19: { key: "actionAdventure", label: "Action & Adventure" },
  20: { key: "documentaries", label: "Documentaries" },
  21: { key: "fashionBeauty", label: "Fashion & Beauty" },
  22: { key: "scienceTech", label: "Science & Tech" },
  23: { key: "travel", label: "Travel" },
  24: { key: "food", label: "Food" },
  25: { key: "vlogs", label: "Vlogs" },
  26: { key: "fitness", label: "Fitness" },
  27: { key: "motivation", label: "Motivation" },
  28: { key: "shorts", label: "Shorts" },
};

const REACT_APP_YOUTUBE_KEY = "AIzaSyBsSugrmqOwOHz1kowLyUz3UqY3p4TD-jE";

export const Youtube_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  REACT_APP_YOUTUBE_KEY;
