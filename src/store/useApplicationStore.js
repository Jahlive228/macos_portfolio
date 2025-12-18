import { create } from "zustand";

const useApplicationStore = create((set) => ({
  open: {
    folder: false,
    contact: false,
    resume: false,
    safari: false,
    gallery: false,
    terminal: false,
    txt: false,
    img: false
  },
  data: {
    folder: null,
    txt: null,
    img: null
  },
  zIndex: {
    folder: 1000,
    contact: 1000,
    resume: 1000,
    safari: 1000,
    gallery: 1000,
    terminal: 1000,
    txt: 1000,
    img: 1000
  },
  z: 1000,

  //finder

  openFinder: (payload) =>
    set((state) => ({
      open: { ...state.open, folder: true },
      zIndex: { ...state.zIndex, folder: state.z },
      z: state.z + 1,
      data: { ...state.data, folder: payload }
    })),

  closeFinder: () =>
    set((state) => ({
      open: { ...state.open, folder: false },
      zIndex: { ...state.zIndex, folder: 1000 },
      data: { ...state.data, folder: null }
    })),

  //contact

  openContact: (payload) =>
    set((state) => ({
      open: { ...state.open, contact: true },
      zIndex: { ...state.zIndex, contact: state.z },
      z: state.z + 1,
      data: { ...state.data, contact: payload }
    })),

  closeContact: () =>
    set((state) => ({
      open: { ...state.open, contact: false },
      zIndex: { ...state.zIndex, contact: 1000 },
    })),

  //resume

  openResume: (payload) =>
    set((state) => ({
      open: { ...state.open, resume: true },
      zIndex: { ...state.zIndex, resume: state.z },
      z: state.z + 1,
      data: { ...state.data, resume: payload }
    })),

  closeResume: () =>
    set((state) => ({
      open: { ...state.open, resume: false },
      zIndex: { ...state.zIndex, resume: 1000 },
    })),

  //safari

  openSafari: (payload) =>
    set((state) => ({
      open: { ...state.open, safari: true },
      zIndex: { ...state.zIndex, safari: state.z },
      z: state.z + 1,
      data: { ...state.data, safari: payload }
    })),

  closeSafari: () =>
    set((state) => ({
      open: { ...state.open, safari: false },
      zIndex: { ...state.zIndex, safari: 1000 },
    })),

  //gallery

  openGallery: (payload) =>
    set((state) => ({
      open: { ...state.open, gallery: true },
      zIndex: { ...state.zIndex, gallery: state.z },
      z: state.z + 1,
      data: { ...state.data, gallery: payload }
    })),

  closeGallery: () =>
    set((state) => ({
      open: { ...state.open, gallery: false },
      zIndex: { ...state.zIndex, gallery: 1000 },
    })),

  //terminal

  openTerminal: (payload) =>
    set((state) => ({
      open: { ...state.open, terminal: true },
      zIndex: { ...state.zIndex, terminal: state.z },
      z: state.z + 1,
      data: { ...state.data, terminal: payload }
    })),

  closeTerminal: () =>
    set((state) => ({
      open: { ...state.open, terminal: false },
      zIndex: { ...state.zIndex, terminal: 1000 },
    })),

  //txt

  openTxt: (payload) =>
    set((state) => ({
      open: { ...state.open, txt: true },
      zIndex: { ...state.zIndex, txt: state.z },
      z: state.z + 1,
      data: { ...state.data, txt: payload }
    })),

  closeTxt: () =>
    set((state) => ({
      open: { ...state.open, txt: false },
      zIndex: { ...state.zIndex, txt: 1000 },
    })),

  //img

  openImg: (payload) =>
    set((state) => ({
      open: { ...state.open, img: true },
      zIndex: { ...state.zIndex, img: state.z },
      z: state.z + 1,
      data: { ...state.data, img: payload }
    })),

  closeImg: () =>
    set((state) => ({
      open: { ...state.open, img: false },
      zIndex: { ...state.zIndex, img: 1000 },
    })),
}));

export default useApplicationStore;