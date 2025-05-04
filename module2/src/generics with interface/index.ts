{
  // interface - generics
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type CasioWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<CasioWatch> = {
    name: "suhag",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2016,
    },
    smartWatch: {
      brand: "Casio",
      model: "3kjd",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface PulsureBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, PulsureBike> = {
    name: "rich dev",
    computer: {
      brand: "App",
      model: "X-255dfU",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple",
      model: "3kjd",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "pulsure",
      engineCapacity: "150cc",
    },
  };
  //
}
