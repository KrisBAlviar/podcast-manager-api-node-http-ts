import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (
  podcastName?: string
): Promise<PodcastModel> => {
  const encode = "utf-8"
  const rawData = fs.readFileSync(pathData, encode);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => {
      return podcast.podcastName === podcastName;
    });
  }

  return jsonFile;
};
