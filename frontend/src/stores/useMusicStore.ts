import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { Album, Song } from "../types";

interface MusicStore {
  songs: Song[];
  albums: Album[];
  isLoading: boolean;
  error: string | null;
  currentAlbum: null;

  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (id: string) => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,

  fetchAlbums: async () => {
    // data fetch Logic
    set({ isLoading: true,error: null});

    try {
      const response = await axiosInstance.get("/albums");
      set({albums:response.data})
    } catch (error:any) {
      set({error: error.response.data.message});
    } finally {
      set({ isLoading:false })
    }
  },
  fetchAlbumById: async(id) => {
    set({ isLoading: true,error: null });
    try {
      const response = await axiosInstance.get(`/albums/${id}`);
      set({ currentAlbum: response.data });
    } catch (error:any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  }
}));