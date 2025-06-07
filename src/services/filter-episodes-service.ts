import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceFIlterEpisodes = async (
  podcastName: string | undefined
):Promise<PodcastTransferModel> => {

  // define interface to return
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // search for data
  //http://localhost:3333/api/episode?p=flow
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repoPodcast(queryString);

  // check it has content
  responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

  responseFormat.body.push(data);

  return responseFormat;
};
