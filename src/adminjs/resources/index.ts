import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";
import { episodeResourcefeatures, episodeResourceOptions } from "./episode";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourcefeatures,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
];
