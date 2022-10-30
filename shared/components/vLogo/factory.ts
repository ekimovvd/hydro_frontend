export interface VLogoParamsInterface {
  type: VLogoParamsTypeEnum;
}

export enum VLogoParamsTypeEnum {
  "img-text" = "img-text-component",
}

export const VLogoParamsFactory = (
  params: Partial<VLogoParamsInterface> = {}
): VLogoParamsInterface => {
  return {
    type: VLogoParamsTypeEnum["img-text"],
    ...params,
  };
};
