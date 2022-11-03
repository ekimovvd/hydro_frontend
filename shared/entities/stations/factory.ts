// Work Station
export interface WorkStationInterface {
  ID: number | null;
  Category: number | null;
  IsFavorite: boolean;
  Name: string;
  Comment: string | null;
  NearestMeteoID: number | null;
  AreaCenterMeteoID: number | null;
  JoinMeanHighWaterYears: boolean;
  IsReservoir: boolean;
  HydroStation: HydroStationInterface;
}

interface HydroStationInterface {
  ObjName: string;
  ID: number;
  BasinName: string;
  Name: string;
  Lat: number | null;
  Lng: number | null;
  HaveCoords: boolean;
}

export const WorkStationFactory = (
  params: Partial<WorkStationInterface> = {}
): WorkStationInterface => {
  return {
    ID: null,
    Category: null,
    IsFavorite: false,
    Name: "",
    Comment: null,
    NearestMeteoID: null,
    AreaCenterMeteoID: null,
    JoinMeanHighWaterYears: false,
    IsReservoir: false,
    HydroStation: {
      ObjName: "",
      ID: null,
      BasinName: "",
      Name: "",
      Lat: null,
      Lng: null,
      HaveCoords: false,
    },
    ...params,
  };
};

// NearestSynopStation
export interface NearestSynopStationInterface {
  ID: number;
  Name: string;
  HaveCoords: boolean;
  Lat: number;
  Lng: number;
}
